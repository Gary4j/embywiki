<script setup>
const paths = [
 {n:'01',tag:'QUICK START',title:'第一次使用 Emby',desc:'准备连接信息，添加服务器，开始播放第一部影片。',href:'/guide/start',meta:'约 5 分钟 · 新手必读'},
 {n:'02',tag:'YOUR DEVICES',title:'选一个顺手的客户端',desc:'手机、电脑还是电视？按设备找到适合自己的选择。',href:'/clients/choose',meta:'平台对照 · 官方下载'},
 {n:'03',tag:'BETTER PLAYBACK',title:'让播放更顺畅',desc:'读懂直放与转码，调好字幕、音轨和网络线路。',href:'/playback/methods',meta:'播放原理 · 实用设置'}
]
</script>
<template>
<div class="wiki-home">
 <section class="hero">
  <div class="hero-copy"><div class="eyebrow"><span></span> THE EMBY FIELD GUIDE / 中文指南</div><h1>少一点折腾，<br>多一点<span class="accent">好好看。</span></h1><p class="hero-description">从第一次连接，到每一次顺畅播放。<br>把 Emby 的账号、客户端和播放问题，一次讲清楚。</p><div class="hero-actions"><a class="primary" href="/guide/start">开始使用 <span>↗</span></a><a class="secondary" href="/help/troubleshooting">遇到问题？从这里排查 →</a></div><div class="hero-note">无需从头读完。找到你现在需要的那一页。</div></div>
  <div class="field-card" aria-label="连接、浏览、播放三个步骤"><div class="card-top"><span>PLAYBACK NOTES</span><span>VOL. 01</span></div><div class="orbital"><span class="orbit o1"></span><span class="orbit o2"></span><span class="orbit o3"></span><div class="play-symbol">▶</div><span class="orbit-dot"></span></div><div class="card-caption">你的媒体。你的节奏。</div><div class="signal"><span>01 连接</span><i></i><span>02 浏览</span><i></i><span>03 播放</span></div><div class="card-bottom"><span>SERVER → CLIENT → SCREEN</span><span class="signal-light">● READY</span></div></div>
 </section>
 <section class="paths"><div class="section-heading"><h2>从你所在的这一步开始</h2><span>三条阅读路径 / GET STARTED</span></div><div class="path-grid"><a v-for="item in paths" :key="item.n" :href="item.href" class="path"><div class="path-top"><span>{{item.n}}</span><small>{{item.tag}}</small><span>↗</span></div><h3>{{item.title}}</h3><p>{{item.desc}}</p><div class="path-meta">{{item.meta}}</div></a></div></section>
 <section class="quick-help"><div><div class="eyebrow">TROUBLESHOOTING</div><h2>问题有很多，<br>排查可以很简单。</h2><p>从看到的现象出发，每次只改一个变量。</p></div><div class="help-links"><a href="/help/troubleshooting#无法连接服务器"><span><b>01</b> 无法连接服务器</span><span>→</span></a><a href="/help/troubleshooting#能看到海报但无法播放"><span><b>02</b> 能看海报，却播不了视频</span><span>→</span></a><a href="/help/troubleshooting#播放卡顿或频繁缓冲"><span><b>03</b> 播放卡顿、反复缓冲</span><span>→</span></a><a href="/help/troubleshooting#没有字幕或没有声音"><span><b>04</b> 字幕和声音不对劲</span><span>→</span></a></div></section>
 <section class="editor-note"><span class="note-label">编者的话</span><p>Emby 是媒体管理与播放工具。一个客户端、一组有效的服务器连接信息，就是起点。这本指南整理使用方法，也解释背后的原因，让下一次遇到问题时，你能自己找到答案。</p><a href="/about">了解资料来源与维护原则 ↗</a></section>
</div>
</template>
