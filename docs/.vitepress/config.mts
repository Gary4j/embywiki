import { defineConfig } from 'vitepress'
export default defineConfig({
 lang: 'zh-CN', title: 'Emby Wiki', description: '从第一次连接，到顺畅播放。面向中文用户的 Emby 客户端、播放设置与故障排查指南。',
 cleanUrls: true, lastUpdated: true,
 head: [['link',{rel:'icon',href:'/favicon.svg'}],['meta',{name:'theme-color',content:'#f8f7f3'}]],
 sitemap: { hostname: 'https://embywiki.gary4j.top' },
 transformHead: ({pageData}) => [['link',{rel:'canonical',href:`https://embywiki.gary4j.top/${pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')}`}]],
 themeConfig: {
  logo:'/favicon.svg', siteTitle:'Emby Wiki',
  nav:[{text:'使用指南',link:'/guide/start'},{text:'选择客户端',link:'/clients/choose'},{text:'故障排查',link:'/help/troubleshooting'},{text:'关于本站',link:'/about'}],
  sidebar:[
   {text:'从这里开始',items:[{text:'认识 Emby',link:'/guide/intro'},{text:'五分钟开始播放',link:'/guide/start'},{text:'账号与 Emby Connect',link:'/guide/account'},{text:'费用与授权',link:'/guide/costs'}]},
   {text:'找到你的客户端',items:[{text:'客户端选择指南',link:'/clients/choose'},{text:'Emby 官方客户端',link:'/clients/emby'},{text:'Infuse 连接指南',link:'/clients/infuse'},{text:'电视与大屏',link:'/clients/tv'}]},
   {text:'把播放调舒服',items:[{text:'直放、直串与转码',link:'/playback/methods'},{text:'字幕、音轨与 HDR',link:'/playback/subtitles'},{text:'网络与线路',link:'/playback/network'}]},
   {text:'遇到问题',items:[{text:'按症状排查',link:'/help/troubleshooting'},{text:'常见问题',link:'/help/faq'},{text:'术语速查',link:'/help/glossary'}]},
   {text:'关于这本指南',items:[{text:'资料来源与维护',link:'/about'},{text:'更新记录',link:'/changelog'}]}
  ],
  socialLinks:[{icon:'github',link:'https://github.com/Gary4j/embywiki'}],
  search:{provider:'local',options:{locales:{root:{translations:{button:{buttonText:'搜索指南',buttonAriaLabel:'搜索指南'},modal:{noResultsText:'没有找到相关内容',resetButtonTitle:'清除搜索',footer:{selectText:'选择',navigateText:'切换',closeText:'关闭'}}}}}}},
  outline:{label:'本页目录',level:[2,3]}, docFooter:{prev:'上一篇',next:'下一篇'},
  editLink:{pattern:'https://github.com/Gary4j/embywiki/edit/main/docs/:path',text:'在 GitHub 编辑本页'},
  lastUpdated:{text:'最后更新',formatOptions:{dateStyle:'medium'}},
  darkModeSwitchLabel:'外观',sidebarMenuLabel:'文档目录',returnToTopLabel:'返回顶部',
  footer:{message:'独立中文使用指南 · 与 Emby 官方无隶属关系',copyright:'由 Gary4j 维护 · 原创内容 CC BY 4.0'}
 }
})
