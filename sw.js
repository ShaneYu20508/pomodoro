if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const o=s=>i(s,a),c={module:{uri:a},exports:l,require:o};e[a]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"85f855e911d11f7094fb8bc001c69061"},{url:"android-chrome-512x512.png",revision:"5268cc0d60b0d50caf4f0e42f5800866"},{url:"apple-touch-icon.png",revision:"cd07495c30d2996ece7a4fb72db10aac"},{url:"assets/animal-90f8d61c.jpg",revision:null},{url:"assets/bar-bg-74bbc974.jpg",revision:null},{url:"assets/eyes-63b2672d.jpg",revision:null},{url:"assets/HomeView-3fb2d672.css",revision:null},{url:"assets/HomeView-6d4890ec.js",revision:null},{url:"assets/index-2bc62442.js",revision:null},{url:"assets/index-76e7b915.css",revision:null},{url:"assets/list-bec24f07.js",revision:null},{url:"assets/ListView-0ab8233b.css",revision:null},{url:"assets/ListView-796cce86.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-41d6bc6c.js",revision:null},{url:"assets/SettingsView-56d58840.css",revision:null},{url:"assets/SettingsView-f2ad87b5.js",revision:null},{url:"assets/tomato-fe6b03eb.png",revision:null},{url:"assets/VInput-f8ecabae.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-f0c9af65.js",revision:null},{url:"favicon-16x16.png",revision:"50c2aaaf536040634e7dea24394f901d"},{url:"favicon-32x32.png",revision:"fca2946e3862989e3827e7fd8ddb0f02"},{url:"favicon.ico",revision:"a0db394a7a6abf19629dfff2fc3cfb30"},{url:"index.html",revision:"95a2d4add0cf18eb8a7e72a4b786bdb5"},{url:"mstile-150x150.png",revision:"45f9ffa4474fa98f57e3c2752636941d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"c0cfdfbccd25234f7e09b7dec1042b65"},{url:"splashscreens/ipad_splash.png",revision:"1a5fd4a0d9063af66a978f46edb885e8"},{url:"splashscreens/ipadpro1_splash.png",revision:"b05c527e11fed153163e204e419904a8"},{url:"splashscreens/ipadpro2_splash.png",revision:"63611e8bb7120a01f472547179e8e6dd"},{url:"splashscreens/ipadpro3_splash.png",revision:"5a99f37ae157d0ae73651dd76df34752"},{url:"splashscreens/iphone5_splash.png",revision:"2f3fea0b0e4d4788e6a1178699ca8e94"},{url:"splashscreens/iphone6_splash.png",revision:"106c3a3237e946f583e967a6758dfe4d"},{url:"splashscreens/iphoneplus_splash.png",revision:"9ca93e7cb99d47a6b3284bd2e8607ff9"},{url:"splashscreens/iphonex_splash.png",revision:"b96ebe2ae46f6df9dd7d8c6c5b47e521"},{url:"splashscreens/iphonexr_splash.png",revision:"863053c7370dd853330a78c9438a380e"},{url:"splashscreens/iphonexsmax_splash.png",revision:"a9042aff4c2ba3d2b704c8632c0d454f"},{url:"./android-chrome-192x192.png",revision:"85f855e911d11f7094fb8bc001c69061"},{url:"./android-chrome-512x512.png",revision:"5268cc0d60b0d50caf4f0e42f5800866"},{url:"manifest.webmanifest",revision:"20d3fedf5d424126bcf77a45e95cf2a8"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));