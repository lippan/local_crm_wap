(function(e){function n(n){for(var c,a,o=n[0],i=n[1],h=n[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(l.length)l.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-8c5a2b64":"95cced36","chunk-212624a9":"83c32b14","chunk-265d69b3":"edd1c2ef","chunk-46c1b038":"9719887f","chunk-4aac8a02":"3b7567c1","chunk-65cd07af":"5df5ae69","chunk-2f73e8b1":"5b460011","chunk-56118d58":"17de83fe","chunk-627758a1":"13c61068","chunk-57cec9b8":"7ea6a590","chunk-e63b25e0":"e7de7be4","chunk-e7bb1ff6":"5dac5813","chunk-94fafb06":"940feb2d","chunk-4017c22e":"d301cfc1","chunk-e768fdb2":"2d73ded6","chunk-7cfb4388":"32b68b8a","chunk-7323f5da":"3060a12a","chunk-a20b8294":"8e1b33eb"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-8c5a2b64":1,"chunk-212624a9":1,"chunk-265d69b3":1,"chunk-46c1b038":1,"chunk-4aac8a02":1,"chunk-65cd07af":1,"chunk-2f73e8b1":1,"chunk-56118d58":1,"chunk-627758a1":1,"chunk-57cec9b8":1,"chunk-e63b25e0":1,"chunk-e7bb1ff6":1,"chunk-94fafb06":1,"chunk-4017c22e":1,"chunk-e768fdb2":1,"chunk-7cfb4388":1,"chunk-7323f5da":1,"chunk-a20b8294":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-8c5a2b64":"512e2615","chunk-212624a9":"122692ce","chunk-265d69b3":"706f3320","chunk-46c1b038":"bc5a763d","chunk-4aac8a02":"706f3320","chunk-65cd07af":"00004f29","chunk-2f73e8b1":"b9a24651","chunk-56118d58":"be57ef14","chunk-627758a1":"da5d7333","chunk-57cec9b8":"18f50587","chunk-e63b25e0":"18f50587","chunk-e7bb1ff6":"18f50587","chunk-94fafb06":"bf306fe6","chunk-4017c22e":"90ddb10e","chunk-e768fdb2":"6ebd7c43","chunk-7cfb4388":"f9bf4deb","chunk-7323f5da":"8eecca3f","chunk-a20b8294":"bc3e95bf"}[e]+".css",u=i.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===u))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){h=l[o],f=h.getAttribute("data-href");if(f===c||f===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],d.parentNode.removeChild(d),t(r)},d.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=r);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var l=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}u[e]=void 0}};var d=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var l=0;l<h.length;l++)n(h[l]);var d=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("85ec"),a=t.n(c);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],r=(t("034f"),t("2877")),o={},i=Object(r["a"])(o,a,u,!1,null,null,null),h=i.exports,f=(t("4160"),t("d3b7"),t("159b"),t("8c4f"));c["a"].use(f["a"]);var l=[{path:"/login",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-265d69b3")]).then(t.bind(null,"9fd4"))},meta:{title:"登录界面"}},{path:"/bind",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-4aac8a02")]).then(t.bind(null,"0b22"))},meta:{title:"绑定界面"}},{path:"/",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-627758a1"),t.e("chunk-e7bb1ff6")]).then(t.bind(null,"041e"))},meta:{title:"商机管理"}},{path:"/marketDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-2f73e8b1")]).then(t.bind(null,"627a"))},meta:{title:"商机详情"}},{path:"/genjiDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-e768fdb2")]).then(t.bind(null,"ff3d"))},meta:{title:"跟进记录"}},{path:"/addGenJi",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-94fafb06"),t.e("chunk-4017c22e")]).then(t.bind(null,"d460"))},meta:{title:"继续跟进"}},{path:"/staff",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-7cfb4388")]).then(t.bind(null,"8fe4"))},meta:{title:"员工管理"}},{path:"/user",name:"user",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-a20b8294")]).then(t.bind(null,"718b"))},meta:{title:"会员中心"}},{path:"/customer",name:"customer",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-56118d58")]).then(t.bind(null,"558a"))},meta:{title:"客户管理"}},{path:"/customerDetail",name:"customerDetail",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-212624a9")]).then(t.bind(null,"97f1"))},meta:{title:"客户管理"}},{path:"/customerEdit",name:"customerEdit",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-94fafb06"),t.e("chunk-7323f5da")]).then(t.bind(null,"6c6d"))},meta:{title:"修改信息"}},{path:"/genjiLog",name:"genjiLog",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-46c1b038")]).then(t.bind(null,"1331"))},meta:{title:"跟进记录"}},{path:"/todayTask",name:"todayTask",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-627758a1"),t.e("chunk-e63b25e0")]).then(t.bind(null,"ec0b"))},meta:{title:"今日任务"}},{path:"/commonSea",name:"commonSea",component:function(){return Promise.all([t.e("chunk-8c5a2b64"),t.e("chunk-65cd07af"),t.e("chunk-627758a1"),t.e("chunk-57cec9b8")]).then(t.bind(null,"6b89"))},meta:{title:"公海"}}];l.forEach((function(e){e.path=e.path||"/"+(e.name||"")}));var d=new f["a"]({routes:l});d.beforeEach((function(e,n,t){var c=e.meta&&e.meta.title;c&&(document.title=c),t()}));var b=t("bc3a"),s=t.n(b),k=t("4328"),m=t.n(k),p=s.a.create({baseURL:"http://api.kjics.com",timeout:5e3});p.interceptors.request.use((function(e){"post"==e.method&&(e.headers["content-type"]="application/x-www-form-urlencoded");var n=window.localStorage.getItem("token");return n&&(e.data.token=n),e.data=m.a.stringify(e.data),e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return 4001==e.data.code&&(location.href=location.origin+"/#/login"),e}),(function(e){return Promise.reject(e)}));var v=p;c["a"].prototype.$http=v,new c["a"]({router:d,el:"#app",render:function(e){return e(h)}})},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.e84e7151.js.map