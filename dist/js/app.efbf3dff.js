(function(e){function n(n){for(var c,a,o=n[0],h=n[1],i=n[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);d&&d(n);while(l.length)l.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(c=!1)}c&&(r.splice(n--,1),e=h(h.s=t[0]))}return e}var c={},a={app:0},u={app:0},r=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-8c5a2b64":"95cced36","chunk-265d69b3":"94a587c4","chunk-31662d70":"68e98025","chunk-899c7c08":"e87c1653","chunk-4aac8a02":"35a3601d","chunk-7cfb4388":"62c57efa","chunk-94fafb06":"940feb2d","chunk-f89f1192":"8eb1ffdf","chunk-a20b8294":"a53bd9e2","chunk-be7a0f14":"e1fdf35a","chunk-076191ca":"b39eae67","chunk-177ebe1a":"a1de758a","chunk-1a1799c6":"48bd1fc7","chunk-28d5f442":"9d4119e9","chunk-67984036":"5daef0e9","chunk-37baec98":"a7a6a7f3","chunk-597ddd1a":"742d1a4e","chunk-71dfb276":"9d438021","chunk-e5c7119a":"b1691ef8","chunk-fc4ef74a":"f261cad5"}[e]+".js"}function h(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-8c5a2b64":1,"chunk-265d69b3":1,"chunk-31662d70":1,"chunk-899c7c08":1,"chunk-4aac8a02":1,"chunk-7cfb4388":1,"chunk-94fafb06":1,"chunk-f89f1192":1,"chunk-a20b8294":1,"chunk-be7a0f14":1,"chunk-076191ca":1,"chunk-177ebe1a":1,"chunk-1a1799c6":1,"chunk-28d5f442":1,"chunk-67984036":1,"chunk-37baec98":1,"chunk-597ddd1a":1,"chunk-71dfb276":1,"chunk-e5c7119a":1,"chunk-fc4ef74a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-8c5a2b64":"512e2615","chunk-265d69b3":"faa75d95","chunk-31662d70":"da5d7333","chunk-899c7c08":"40e27f42","chunk-4aac8a02":"faa75d95","chunk-7cfb4388":"f9bf4deb","chunk-94fafb06":"bf306fe6","chunk-f89f1192":"603c81af","chunk-a20b8294":"bc3e95bf","chunk-be7a0f14":"00004f29","chunk-076191ca":"b9a24651","chunk-177ebe1a":"c39225ae","chunk-1a1799c6":"6ebd7c43","chunk-28d5f442":"15d9a020","chunk-67984036":"75d72f50","chunk-37baec98":"fe229f15","chunk-597ddd1a":"bd4f2705","chunk-71dfb276":"df5aea5d","chunk-e5c7119a":"4ab46d12","chunk-fc4ef74a":"7a268919"}[e]+".css",u=h.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===u))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],f=i.getAttribute("data-href");if(f===c||f===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],d.parentNode.removeChild(d),t(r)},d.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=r);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,h.nc&&f.setAttribute("nonce",h.nc),f.src=o(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}u[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},h.m=e,h.c=c,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)h.d(t,c,function(n){return e[n]}.bind(null,c));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var d=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("85ec"),a=t.n(c);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],r=(t("034f"),t("2877")),o={},h=Object(r["a"])(o,a,u,!1,null,null,null),i=h.exports,f=(t("4160"),t("d3b7"),t("159b"),t("8c4f"));c["a"].use(f["a"]);var l=[{path:"/login",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-265d69b3")]).then(t.bind(null,"9fd4"))},meta:{title:"登录界面"}},{path:"/bind",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-4aac8a02")]).then(t.bind(null,"0b22"))},meta:{title:"绑定界面"}},{path:"/",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-31662d70"),t.e("chunk-67984036")]).then(t.bind(null,"041e"))},meta:{title:"商机管理"}},{path:"/marketDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-076191ca")]).then(t.bind(null,"627a"))},meta:{title:"商机详情"}},{path:"/genjiDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-1a1799c6")]).then(t.bind(null,"ff3d"))},meta:{title:"跟进记录"}},{path:"/addGenJi",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-94fafb06"),t.e("chunk-37baec98"),t.e("chunk-71dfb276")]).then(t.bind(null,"d460"))},meta:{title:"继续跟进"}},{path:"/staff",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-7cfb4388")]).then(t.bind(null,"8fe4"))},meta:{title:"员工管理"}},{path:"/user",name:"user",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-a20b8294")]).then(t.bind(null,"718b"))},meta:{title:"会员中心"}},{path:"/customer",name:"customer",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-177ebe1a")]).then(t.bind(null,"558a"))},meta:{title:"客户管理"}},{path:"/customerDetail",name:"customerDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-e5c7119a")]).then(t.bind(null,"97f1"))},meta:{title:"客户管理"}},{path:"/customerEdit",name:"customerEdit",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-94fafb06"),t.e("chunk-f89f1192")]).then(t.bind(null,"6c6d"))},meta:{title:"修改信息"}},{path:"/genjiLog",name:"genjiLog",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-fc4ef74a")]).then(t.bind(null,"1331"))},meta:{title:"跟进记录"}},{path:"/todayTask",name:"todayTask",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-31662d70"),t.e("chunk-899c7c08")]).then(t.bind(null,"ec0b"))},meta:{title:"今日任务"}},{path:"/commonSea",name:"commonSea",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-31662d70"),t.e("chunk-28d5f442")]).then(t.bind(null,"6b89"))},meta:{title:"公海"}},{path:"/addMarket",name:"addMarket",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-be7a0f14"),t.e("chunk-94fafb06"),t.e("chunk-37baec98"),t.e("chunk-597ddd1a")]).then(t.bind(null,"21df"))},meta:{title:"添加商机"}}];l.forEach((function(e){e.path=e.path||"/"+(e.name||"")}));var d=new f["a"]({routes:l});d.beforeEach((function(e,n,t){var c=e.meta&&e.meta.title;c&&(document.title=c),t()}));var b=t("bc3a"),k=t.n(b),s=t("4328"),m=t.n(s),p=k.a.create({baseURL:"http://api.kjics.com",timeout:5e3});p.interceptors.request.use((function(e){"post"==e.method&&(e.headers["content-type"]="application/x-www-form-urlencoded");var n=window.localStorage.getItem("token");return n&&(e.data.token=n),e.data=m.a.stringify(e.data),e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return 4001==e.data.code&&(location.href=location.origin+"/#/login"),e}),(function(e){return Promise.reject(e)}));var v=p;c["a"].prototype.$http=v,new c["a"]({router:d,el:"#app",render:function(e){return e(i)}})},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.efbf3dff.js.map