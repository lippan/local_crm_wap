(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1449a24a"],{"0b22":function(e,t,n){"use strict";n.r(t);var r,o,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e.isSucess?n("div",{staticStyle:{"font-size":"20px",color:"red","text-align":"center","margin-top":"10px"}},[e._v("绑定成功!")]):n("van-form",{staticStyle:{padding:"0 30px"},on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"手机号码",label:"手机号码",placeholder:"输入手机号码",rules:[{required:!0,message:"请填写手机号码"}]},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),n("div",{staticStyle:{"margin-top":"46px",padding:"10px 30px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("绑定")])],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logintitle"},[r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:n("f51f"),alt:""}})])}],c=(n("e7e5"),n("d399")),u=n("ade3"),s=(n("66b9"),n("b650")),l=(n("be7f"),n("565f")),f=(n("c3a6"),n("ad06")),d=(n("38d5"),n("772a")),p=(n("c975"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("841c"),n("bc3a")),g=n.n(p),v=n("4328"),x=n.n(v),h={getQueryString:R,initwxLogin:E,baseUrl:y,setCookie:w,getCookie:I,delCookie:k,clearAllCookie:O,postRequest:m,imgPath:S,initLoginJumpWx:_};function b(){var e=I("token");return r&&(e="yBSTf2f/INKgIqoLY4KoWgMjQ44rc49EGd+MWOm7xGyf+dOiBsle4uaUZyZB+C6/eYA6bQOIq1jtcckdxIciJQ=="),console.log("环境切换"),console.log("production"),e}function m(e,t,n,r){var o=b();o?(console.log("有token"),t.token=o,g.a.post(e,x.a.stringify(t)).then((function(e){console.log("=============成功==================");var t=e.data;"100068"==t.code||"100067"==t.code?k("token"):n(t)})).catch((function(e){console.log("=============失败=================="),console.log(e),r(e)}))):console.log("ddd")}function E(e){var t=b();if(console.log("tokenStr=="+t),t)console.log("登录==2222==="+t),e(t);else{console.log("登录==="+t);var n=R("code");if(console.log("loginCode",n),n){var r=y()+"/fans/user/fansLogin";g.a.post(r,x.a.stringify({code:n})).then((function(t){console.log(t);t=t.data;200==t.code?t.data.token?(w("token",t.data.token),e(t.data.token)):e(!1):_()})).catch((function(e){console.log(e),_()}))}else _()}}function S(){return"https://msmk-web-res.oss-cn-shenzhen.aliyuncs.com/exam/"}function y(){var e;return e="http://tf-answer-api.tengface.com",e}function R(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function w(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+r.toGMTString()+";path=/"}function I(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function k(e){w(e,0,-1),console.log("delCookie")}function O(){console.log("clearAllCookie");var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()}function _(){var e=window.location.href;e=e.replace(/[&\?]code=.*#/,"#"),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4efd2a9dbeda83ad&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_userinfo&state=STATE"}r=!1;var A={components:(o={},Object(u["a"])(o,d["a"].name,d["a"]),Object(u["a"])(o,f["a"].name,f["a"]),Object(u["a"])(o,l["a"].name,l["a"]),Object(u["a"])(o,s["a"].name,s["a"]),o),data:function(){return{mobile:"",code:"",isSucess:!1}},created:function(){sessionStorage.getItem("mobile")?this.isSucess=!0:(this.code=h.getQueryString("code"),this.code||h.initLoginJumpWx())},methods:{onSubmit:function(e){var t=this;console.log("submit"),g.a.post("http://crm-api.volitation.wang/wechat/login/auth",x.a.stringify({code:this.code,mobile:this.mobile})).then((function(e){console.log(e.data),2e3===e.data.code?(Object(c["a"])("绑定成功!"),t.isSucess=!0,sessionStorage.setItem("mobile",t.mobile)):(h.initLoginJumpWx(),Object(c["a"])(e.data.msg))})).catch((function(e){Object(c["a"])("绑定失败")}))}}},C=A,T=(n("d223"),n("2877")),$=Object(T["a"])(C,a,i,!1,null,null,null);t["default"]=$.exports},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),i=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in u)?i.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),i=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"466d":function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),a=n("50c4"),i=n("1d80"),c=n("8aa5"),u=n("14c3");r("match",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=o(e),s=String(this);if(!i.global)return u(i,s);var l=i.unicode;i.lastIndex=0;var f,d=[],p=0;while(null!==(f=u(i,s))){var g=String(f[0]);d[p]=g,""===g&&(i.lastIndex=c(s,a(i.lastIndex),l)),p++}return 0===p?null:d}]}))},"4d63":function(e,t,n){var r=n("83ab"),o=n("da84"),a=n("94ca"),i=n("7156"),c=n("9bf2").f,u=n("241c").f,s=n("44e7"),l=n("ad6d"),f=n("9f7f"),d=n("6eeb"),p=n("d039"),g=n("69f3").set,v=n("2626"),x=n("b622"),h=x("match"),b=o.RegExp,m=b.prototype,E=/a/g,S=/a/g,y=new b(E)!==E,R=f.UNSUPPORTED_Y,w=r&&a("RegExp",!y||R||p((function(){return S[h]=!1,b(E)!=E||b(S)==S||"/a/i"!=b(E,"i")})));if(w){var I=function(e,t){var n,r=this instanceof I,o=s(e),a=void 0===t;if(!r&&o&&e.constructor===I&&a)return e;y?o&&!a&&(e=e.source):e instanceof I&&(a&&(t=l.call(e)),e=e.source),R&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var c=i(y?new b(e,t):b(e,t),r?this:m,I);return R&&n&&g(c,{sticky:n}),c},k=function(e){e in I||c(I,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},O=u(b),_=0;while(O.length>_)k(O[_++]);m.constructor=I,I.prototype=m,d(o,"RegExp",I)}v("RegExp")},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),a=n("7b0b"),i=n("50c4"),c=n("a691"),u=n("1d80"),s=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,x=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,m=h?"$":"$0";return[function(n,r){var o=u(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!h&&b||"string"===typeof r&&-1===r.indexOf(m)){var a=n(t,e,this,r);if(a.done)return a.value}var u=o(e),p=String(this),g="function"===typeof r;g||(r=String(r));var v=u.global;if(v){var S=u.unicode;u.lastIndex=0}var y=[];while(1){var R=l(u,p);if(null===R)break;if(y.push(R),!v)break;var w=String(R[0]);""===w&&(u.lastIndex=s(p,i(u.lastIndex),S))}for(var I="",k=0,O=0;O<y.length;O++){R=y[O];for(var _=String(R[0]),A=f(d(c(R.index),p.length),0),C=[],T=1;T<R.length;T++)C.push(x(R[T]));var $=R.groups;if(g){var U=[_].concat(C,A,p);void 0!==$&&U.push($);var P=String(r.apply(void 0,U))}else P=E(_,p,A,C,$,r);A>=k&&(I+=p.slice(k,A)+P,k=A+_.length)}return I+p.slice(k)}];function E(e,n,r,o,i,c){var u=r+e.length,s=o.length,l=v;return void 0!==i&&(i=a(i),l=g),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>s){var f=p(l/10);return 0===f?t:f<=s?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):t}c=o[l-1]}return void 0===c?"":c}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),a=function(e){return function(t,n){var a,i,c=String(o(t)),u=r(n),s=c.length;return u<0||u>=s?e?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?e?c.charAt(u):a:e?c.slice(u,u+2):i-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(e,i),e}},"841c":function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),a=n("1d80"),i=n("129f"),c=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),u=String(this),s=a.lastIndex;i(s,0)||(a.lastIndex=0);var l=c(a,u);return i(a.lastIndex,s)||(a.lastIndex=s),null===l?-1:l.index}]}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(e){var t,n,o,c,f=this,d=s&&f.sticky,p=r.call(f),g=f.source,v=0,x=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(g="(?: "+g+")",x=" "+x,v++),n=new RegExp("^(?:"+g+")",p)),l&&(n=new RegExp("^"+g+"$(?!\\s)",p)),u&&(t=f.lastIndex),o=a.call(d?n:f,x),d?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&i.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c20d:function(e,t,n){var r=n("da84"),o=n("58a8").trim,a=n("5899"),i=r.parseInt,c=/^[+-]?0[Xx]/,u=8!==i(a+"08")||22!==i(a+"0x16");e.exports=u?function(e,t){var n=o(String(e));return i(n,t>>>0||(c.test(n)?16:10))}:i},c975:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,a=n("a640"),i=n("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(e){return u?c.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},d223:function(e,t,n){"use strict";var r=n("f9a3"),o=n.n(r);o.a},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),a=n("b622"),i=n("9263"),c=n("9112"),u=a("species"),s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var g=a(e),v=!o((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),x=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!v||!x||"replace"===e&&(!s||!l||d)||"split"===e&&!p){var h=/./[g],b=n(g,""[e],(function(e,t,n,r,o){return t.exec===i?v&&!o?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=b[0],E=b[1];r(String.prototype,e,m),r(RegExp.prototype,g,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&c(RegExp.prototype[g],"sham",!0)}},e25e:function(e,t,n){var r=n("23e7"),o=n("c20d");r({global:!0,forced:parseInt!=o},{parseInt:o})},f9a3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1449a24a.c3d87665.js.map