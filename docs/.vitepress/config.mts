import { defineConfig } from 'vitepress'
export default defineConfig({
 lang:'zh-CN', title:'Emby 使用指南', description:'什么是 Emby、下载哪个客户端，以及如何按交付信息连接服务器。一页完成配置。',
 cleanUrls:true,
 head:[['link',{rel:'icon',href:'/favicon.svg'}],['meta',{name:'theme-color',content:'#ffffff'}]],
 sitemap:{hostname:'https://embywiki.gary4j.top'},
 transformHead:({pageData})=>pageData.isNotFound?[]:[['link',{rel:'canonical',href:'https://embywiki.gary4j.top/'}]]
})
