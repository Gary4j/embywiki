/** Parse customer delivery text locally. Never perform network or storage operations. */
export function parseDelivery(raw) {
 const data = {}, issues = []
 const aliases = {观影地址:'server',服务器地址:'server',续费地址:'renewal',账号:'username',帐号:'username',用户名:'username',密码:'password',到期:'expiry',到期时间:'expiry'}
 const text = raw.replace(/\\\r?\n/g,'\n').replace(/\u00a0/g,' ')
 const matches = [...text.matchAll(/(观影地址|服务器地址|续费地址|账号|帐号|用户名|密码|到期时间|到期)\s*[:：]/g)]
 for(let i=0;i<matches.length;i++) {
  const m=matches[i], key=aliases[m[1]]
  if(key in data) { issues.push('检测到重复字段，请只粘贴一份账号信息。'); continue }
  data[key]=text.slice(m.index+m[0].length,matches[i+1]?.index??text.length).trim()
 }
 function parseAddress(value, label) {
  if(!value)return null
  const cleaned=value.replace(/\\(?=[:/])/g,'').replace(/\\$/,'').trim()
  try {
   if(!/^https?:\/\//i.test(cleaned))throw new Error()
   const u=new URL(cleaned)
   if(!u.hostname||u.username||u.password||/\s/.test(cleaned))throw new Error()
   if(u.search||u.hash)throw new Error()
   return {url:cleaned,host:u.hostname,port:u.port||(u.protocol==='https:'?'443':'80'),https:u.protocol==='https:',base:`${u.protocol}//${u.hostname}`,path:u.pathname==='/'?'':u.pathname}
  } catch {issues.push(`${label}格式不正确，请使用不带账号、查询参数或锚点的完整 http:// 或 https:// 地址。`);return null}
 }
 const server=parseAddress(data.server,'观影地址'), renewal=parseAddress(data.renewal,'续费地址')
 if(!data.server)issues.push('没有找到观影地址，请保留“观影地址：”字段。')
 if(!data.username)issues.push('没有找到账号，请补充“账号：”字段。')
 if(!data.password)issues.push('没有找到密码，请补充“密码：”字段。')
 if(data.expiry) {
  const d=/^(\d{4})-(\d{2})-(\d{2})$/.exec(data.expiry)
  if(!d) issues.push('到期日期请使用 YYYY-MM-DD 格式。')
  else {
   const date=new Date(`${data.expiry}T00:00:00Z`)
   if(Number.isNaN(date.getTime())||date.toISOString().slice(0,10)!==data.expiry)issues.push('到期日期不是有效日期。')
  }
 }
 if(server?.path)issues.push('观影地址含有路径前缀，不能直接按主机和端口拆分；请向服务方确认客户端填写方式。')
 return {server,renewal,username:data.username||'',password:data.password||'',expiry:data.expiry||'',issues:[...new Set(issues)],ok:issues.length===0}
}
