import test from 'node:test'
import assert from 'node:assert/strict'
import { parseDelivery } from '../docs/.vitepress/theme/delivery.mjs'
const tail='账号：demo-user\n密码：test-!@#42\n到期：2026-12-31'
test('normal delivery splits server from renewal and preserves credentials',()=>{
 const r=parseDelivery('观影地址：https://media.example.com:443\n续费地址：https://billing.example.com/\n'+tail)
 assert.equal(r.ok,true);assert.equal(r.server.base,'https://media.example.com');assert.equal(r.server.port,'443');assert.equal(r.renewal.host,'billing.example.com');assert.equal(r.password,'test-!@#42')
})
test('pasted Markdown escapes and inline labels',()=>{
 const r=parseDelivery('观影地址：https\\://media.example.com:443 续费地址：https\\://billing.example.com/\\\n'+tail)
 assert.equal(r.ok,true);assert.equal(r.server.https,true);assert.equal(r.renewal.url,'https://billing.example.com/')
})
test('HTTP and custom port are not silently changed',()=>{
 const r=parseDelivery('服务器地址：http://media.example.com:8096\n'+tail);assert.equal(r.ok,true);assert.equal(r.server.port,'8096');assert.equal(r.server.https,false)
})
test('incomplete delivery never reuses prior credentials',()=>{
 const r=parseDelivery('观影地址：https://media.example.com');assert.equal(r.ok,false);assert.equal(r.password,'');assert.equal(r.username,'')
})
test('unsafe links, malformed dates and path prefixes need correction',()=>{
 for(const raw of ['观影地址：javascript:alert(1)\n'+tail,'观影地址：https://user:secret@media.example.com\n'+tail,'观影地址：https://media.example.com/emby\n'+tail,'观影地址：https://media.example.com\n账号：demo\n密码：test\n到期：2026-02-30','观影地址：https://media.example.com\n'+tail+'\n续费地址：javascript:alert(1)'])assert.equal(parseDelivery(raw).ok,false)
})
test('duplicate accounts rejected instead of mixing subscriptions',()=>{assert.equal(parseDelivery('观影地址：https://media.example.com\n'+tail+'\n账号：another').ok,false)})
