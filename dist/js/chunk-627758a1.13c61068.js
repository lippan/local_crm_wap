(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-627758a1"],{"02de":function(t,e,n){"use strict";function i(t){var e=window.getComputedStyle(t),n="none"===e.display,i=null===t.offsetParent&&"fixed"!==e.position;return n||i}n.d(e,"a",(function(){return i}))},"09d3":function(t,e,n){"use strict";n("68ef"),n("aec8")},1175:function(t,e,n){},"1a04":function(t,e,n){},2241:function(t,e,n){"use strict";var i,o=n("c31d"),r=n("2b0e"),a=n("2638"),s=n.n(a),c=n("d282"),l=n("ea8e"),u=n("b1d2"),d=n("6605"),h=n("b650"),f=n("9884"),p=Object(c["a"])("goods-action"),v=p[0],b=p[1],m=v({mixins:[Object(f["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:b({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),g=n("48f4"),O=Object(c["a"])("goods-action-button"),y=O[0],x=O[1],C=y({mixins:[Object(f["a"])("vanGoodsAction")],props:Object(o["a"])({},g["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(g["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(h["a"],{class:x([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),B=Object(c["a"])("dialog"),w=B[0],k=B[1],S=B[2],j=w({mixins:[Object(d["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genRoundButtons:function(){var t=this,e=this.$createElement;return e(m,{class:k("footer")},[this.showCancelButton&&e(C,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||S("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:k("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(C,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||S("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:k("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[u["d"],k("footer")]},[this.showCancelButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||S("cancel")},class:k("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(h["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||S("confirm")},class:[k("confirm"),(t={},t[u["b"]]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:k("content")},[e]);var i=this.message,o=this.messageAlign;if(i){var r,a,c={class:k("message",(r={"has-title":t},r[o]=o,r)),domProps:(a={},a[this.allowHtml?"innerHTML":"textContent"]=i,a)};return n("div",{class:k("content")},[n("div",s()([{},c]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),i=this.slots("title")||this.title,o=i&&t("div",{class:k("header",{isolated:!e&&!n})},[i]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e},class:[k([this.theme]),this.className],style:{width:Object(l["a"])(this.width)}},[o,this.genContent(i,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}}),$=n("a142");function T(t){return document.body.contains(t)}function I(){i&&i.$destroy(),i=new(r["a"].extend(j))({el:document.createElement("div"),propsData:{lazyRender:!1}}),i.$on("input",(function(t){i.value=t}))}function P(t){return $["g"]?Promise.resolve():new Promise((function(e,n){i&&T(i.$el)||I(),Object(o["a"])(i,P.currentOptions,t,{resolve:e,reject:n})}))}P.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){i["confirm"===t?"resolve":"reject"](t)}},P.alert=P,P.confirm=function(t){return P(Object(o["a"])({showCancelButton:!0},t))},P.close=function(){i&&(i.value=!1)},P.setDefaultOptions=function(t){Object(o["a"])(P.currentOptions,t)},P.resetDefaultOptions=function(){P.currentOptions=Object(o["a"])({},P.defaultOptions)},P.resetDefaultOptions(),P.install=function(){r["a"].use(j)},P.Component=j,r["a"].prototype.$dialog=P;e["a"]=P},2994:function(t,e,n){"use strict";n("68ef"),n("e3b3"),n("c0c2")},"2bdd":function(t,e,n){"use strict";var i=n("d282"),o=n("02de"),r=n("a8c1"),a=n("5fbe"),s=n("543e"),c=Object(i["a"])("list"),l=c[0],u=c[1],d=c[2];e["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(r["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,n=t.$el,i=t.scroller,r=t.offset,a=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var s=e.bottom-e.top;if(!s||Object(o["a"])(n))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?e.top-l.top<=r:l.bottom-e.bottom<=r,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:u("loading"),key:"loading"},[this.slots("loading")||t(s["a"],{attrs:{size:"16"}},[this.loadingText||d("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:u("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:u("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:u("placeholder")});return t("div",{class:u(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"2d6d":function(t,e,n){"use strict";var i=n("d282"),o=n("a142"),r=n("a8c1"),a=n("9884"),s=n("1325"),c=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var e=this,n=function(n){e.closeOnClickOutside&&!e.$el.contains(n.target)&&e[t.method]()};return{clickOutsideHandler:n}},mounted:function(){Object(s["b"])(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(s["a"])(document,t.event,this.clickOutsideHandler)}}},l=Object(i["a"])("dropdown-menu"),u=l[0],d=l[1];e["a"]=u({mixins:[Object(a["b"])("vanDropdownMenu"),c({event:"click",method:"onClickOutside"})],props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{offset:0}},computed:{scroller:function(){return Object(r["d"])(this.$el)},opened:function(){return this.children.some((function(t){return t.showWrapper}))},barStyle:function(){if(this.opened&&Object(o["c"])(this.zIndex))return{zIndex:1+this.zIndex}}},methods:{updateOffset:function(){if(this.$refs.bar){var t=this.$refs.bar.getBoundingClientRect();"down"===this.direction?this.offset=t.bottom:this.offset=window.innerHeight-t.top}},toggleItem:function(t){this.children.forEach((function(e,n){n===t?e.toggle():e.showPopup&&e.toggle(!1,{immediate:!0})}))},onClickOutside:function(){this.children.forEach((function(t){t.toggle(!1)}))}},render:function(){var t=this,e=arguments[0],n=this.children.map((function(n,i){return e("div",{attrs:{role:"button",tabindex:n.disabled?-1:0},class:d("item",{disabled:n.disabled}),on:{click:function(){n.disabled||t.toggleItem(i)}}},[e("span",{class:[d("title",{active:n.showPopup,down:n.showPopup===("down"===t.direction)}),n.titleClass],style:{color:n.showPopup?t.activeColor:""}},[e("div",{class:"van-ellipsis"},[n.slots("title")||n.displayTitle])])])}));return e("div",{class:d()},[e("div",{ref:"bar",style:this.barStyle,class:d("bar",{opened:this.opened})},[n]),this.slots("default")])}})},"2ed4":function(t,e,n){"use strict";var i=n("c31d"),o=n("d282"),r=n("a142"),a=n("48f4"),s=n("9884"),c=n("ad06"),l=n("6f2f"),u=Object(o["a"])("tabbar-item"),d=u[0],h=u[1];e["a"]=d({mixins:[Object(s["a"])("vanTabbar")],props:Object(i["a"])({},a["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String],badge:[Number,String],iconPrefix:String}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,e=this.$route;if(t&&e){var n=Object(r["e"])(t)?t:{path:t},i=n.path===e.path,o=Object(r["c"])(n.name)&&n.name===e.name;return i||o}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(a["b"])(this.$router,this)},genIcon:function(t){var e=this.$createElement,n=this.slots("icon",{active:t});return n||(this.icon?e(c["a"],{attrs:{name:this.icon,classPrefix:this.iconPrefix}}):void 0)}},render:function(){var t=arguments[0],e=this.parent.route?this.routeActive:this.active,n=this.parent[e?"activeColor":"inactiveColor"];return t("div",{class:h({active:e}),style:{color:n},on:{click:this.onClick}},[t("div",{class:h("icon")},[this.genIcon(e),t(l["a"],{attrs:{dot:this.dot,info:Object(r["c"])(this.badge)?this.badge:this.info}})]),t("div",{class:h("text")},[this.slots("default",{active:e})])])}})},"2fcb":function(t,e,n){},"4cf9":function(t,e,n){},"537a":function(t,e,n){"use strict";n("68ef"),n("9312")},"61ae":function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("1a04"),n("4d75"),n("b2cc")},7744:function(t,e,n){"use strict";var i=n("c31d"),o=n("2638"),r=n.n(o),a=n("d282"),s=n("a142"),c=n("ba31"),l=n("48f4"),u=n("dfaf"),d=n("ad06"),h=Object(a["a"])("cell"),f=h[0],p=h[1];function v(t,e,n,i){var o=e.icon,a=e.size,u=e.title,h=e.label,f=e.value,v=e.isLink,b=n.title||Object(s["c"])(u);function m(){var i=n.label||Object(s["c"])(h);if(i)return t("div",{class:[p("label"),e.labelClass]},[n.label?n.label():h])}function g(){if(b)return t("div",{class:[p("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[u]),m()])}function O(){var i=n.default||Object(s["c"])(f);if(i)return t("div",{class:[p("value",{alone:!b}),e.valueClass]},[n.default?n.default():t("span",[f])])}function y(){return n.icon?n.icon():o?t(d["a"],{class:p("left-icon"),attrs:{name:o,classPrefix:e.iconPrefix}}):void 0}function x(){var i=n["right-icon"];if(i)return i();if(v){var o=e.arrowDirection;return t(d["a"],{class:p("right-icon"),attrs:{name:o?"arrow-"+o:"arrow"}})}}function C(t){Object(c["a"])(i,"click",t),Object(l["a"])(i)}var B=v||e.clickable,w={clickable:B,center:e.center,required:e.required,borderless:!e.border};return a&&(w[a]=a),t("div",r()([{class:p(w),attrs:{role:B?"button":null,tabindex:B?0:null},on:{click:C}},Object(c["b"])(i)]),[y(),g(),O(),x(),null==n.extra?void 0:n.extra()])}v.props=Object(i["a"])({},u["a"],l["c"]),e["a"]=f(v)},8418:function(t,e,n){"use strict";var i=n("c04e"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?o.f(t,a,r(0,n)):t[a]=n}},9312:function(t,e,n){},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var i=n("db85");function o(t,e){var n,o;void 0===e&&(e={});var r=e.indexKey||"index";return{inject:(n={},n[t]={default:null},n),computed:(o={parent:function(){return this.disableBindRelation?null:this[t]}},o[r]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},o),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(i["a"])(t,this.parent),this.parent.children=t}}}}}function r(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"99af":function(t,e,n){"use strict";var i=n("23e7"),o=n("d039"),r=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),h=n("b622"),f=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",m=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),O=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},y=!m||!g;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,i,o,r,a=s(this),d=u(a,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?a:arguments[e],O(r)){if(o=c(r.length),h+o>v)throw TypeError(b);for(n=0;n<o;n++,h++)n in r&&l(d,h,r[n])}else{if(h>=v)throw TypeError(b);l(d,h++,r)}return d.length=h,d}})},a52c:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("ae73")},ac28:function(t,e,n){"use strict";var i=n("d282"),o=n("9884"),r=n("b1d2"),a=Object(i["a"])("tabbar"),s=a[0],c=a[1];e["a"]=s({mixins:[Object(o["b"])("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],placeholder:Boolean,activeColor:String,inactiveColor:String,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:null}},data:function(){return{height:null}},computed:{fit:function(){return null!==this.safeAreaInsetBottom?this.safeAreaInsetBottom:this.fixed}},watch:{value:"setActiveItem",children:"setActiveItem"},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.tabbar.getBoundingClientRect().height)},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,n){e.active=(e.name||n)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))},genTabbar:function(){var t,e=this.$createElement;return e("div",{ref:"tabbar",style:{zIndex:this.zIndex},class:[(t={},t[r["e"]]=this.border,t),c({unfit:!this.fit,fixed:this.fixed})]},[this.slots()])}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:c("placeholder"),style:{height:this.height+"px"}},[this.genTabbar()]):this.genTabbar()}})},ae73:function(t,e,n){},aec8:function(t,e,n){},b2cc:function(t,e,n){},c0c2:function(t,e,n){},d314:function(t,e,n){"use strict";var i=n("d282"),o=n("1325"),r=n("1421"),a=n("9884"),s=n("7744"),c=n("ad06"),l=n("e41f"),u=Object(i["a"])("dropdown-item"),d=u[0],h=u[1];e["a"]=d({mixins:[Object(r["a"])({ref:"wrapper"}),Object(a["a"])("vanDropdownMenu")],props:{value:null,title:String,disabled:Boolean,titleClass:String,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},data:function(){return{transition:!0,showPopup:!1,showWrapper:!1}},computed:{displayTitle:function(){var t=this;if(this.title)return this.title;var e=this.options.filter((function(e){return e.value===t.value}));return e.length?e[0].text:""}},watch:{showPopup:function(t){this.bindScroll(t)}},beforeCreate:function(){var t=this,e=function(e){return function(){return t.$emit(e)}};this.onOpen=e("open"),this.onClose=e("close"),this.onOpened=e("opened")},methods:{toggle:function(t,e){void 0===t&&(t=!this.showPopup),void 0===e&&(e={}),t!==this.showPopup&&(this.transition=!e.immediate,this.showPopup=t,t&&(this.parent.updateOffset(),this.showWrapper=!0))},bindScroll:function(t){var e=this.parent.scroller,n=t?o["b"]:o["a"];n(e,"scroll",this.onScroll,!0)},onScroll:function(){this.parent.updateOffset()},onClickWrapper:function(t){this.getContainer&&t.stopPropagation()}},render:function(){var t=this,e=arguments[0],n=this.parent,i=n.zIndex,o=n.offset,r=n.overlay,a=n.duration,u=n.direction,d=n.activeColor,f=n.closeOnClickOverlay,p=this.options.map((function(n){var i=n.value===t.value;return e(s["a"],{attrs:{clickable:!0,icon:n.icon,title:n.text},key:n.value,class:h("option",{active:i}),style:{color:i?d:""},on:{click:function(){t.showPopup=!1,n.value!==t.value&&(t.$emit("input",n.value),t.$emit("change",n.value))}}},[i&&e(c["a"],{class:h("icon"),attrs:{color:d,name:"success"}})])})),v={zIndex:i};return"down"===u?v.top=o+"px":v.bottom=o+"px",e("div",[e("div",{directives:[{name:"show",value:this.showWrapper}],ref:"wrapper",style:v,class:h([u]),on:{click:this.onClickWrapper}},[e(l["a"],{attrs:{overlay:r,position:"down"===u?"top":"bottom",duration:this.transition?a:0,lazyRender:this.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:f},class:h("content"),on:{open:this.onOpen,close:this.onClose,opened:this.onOpened,closed:function(){t.showWrapper=!1,t.$emit("closed")}},model:{value:t.showPopup,callback:function(e){t.showPopup=e}}},[p,this.slots("default")])])])}})},d81d:function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").map,r=n("1dde"),a=n("ae40"),s=r("map"),c=a("map");i({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},db85:function(t,e,n){"use strict";function i(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function o(t,e){var n=e.$vnode.componentOptions;if(n&&n.children){var o=i(n.children);t.sort((function(t,e){return o.indexOf(t.$vnode)-o.indexOf(e.$vnode)}))}}n.d(e,"a",(function(){return o}))},dfaf:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("1175"),n("4cf9"),n("2fcb")},e41f:function(t,e,n){"use strict";var i=n("d282"),o=n("a142"),r=n("6605"),a=n("ad06"),s=Object(i["a"])("popup"),c=s[0],l=s[1];e["a"]=c({mixins:[Object(r["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,r=this.duration,s="center"===i,c=this.transition||(s?"van-fade":"van-popup-slide-"+i),u={};if(Object(o["c"])(r)){var d=s?"animationDuration":"transitionDuration";u[d]=r+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:l((t={round:n},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(a["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);
//# sourceMappingURL=chunk-627758a1.13c61068.js.map