(function(){"use strict";var e={370:function(e,t,n){var l={};n.r(l),n.d(l,{LAside:function(){return me},LCol:function(){return ue},LDivider:function(){return he},LFooter:function(){return ge},LHeader:function(){return fe},LLayout:function(){return pe},LMain:function(){return ve},LRow:function(){return se},LSpace:function(){return de}});var a=n(963),r=n(252),i=n(577),o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==";const s=(0,r.HX)("data-v-555f7242");(0,r.dD)("data-v-555f7242");const u={class:"nav-logo"},c=(0,r.Uk)("Ladder UI"),d={class:"nav-menu"},p=(0,r.Wm)("span",null,[(0,r.Wm)("a",{target:"_blank",href:"https://github.com/Hgwxxdd/ladder-ui"},[(0,r.Wm)("img",{src:o,alt:"Github"})])],-1),m={class:"wrapper"},v={key:0},g={class:"group-title"};(0,r.Cn)();const f=s(((e,t,n,l,a,o)=>{const f=(0,r.up)("router-link"),h=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("header",null,[(0,r.Wm)("div",u,[(0,r.Wm)(f,{to:"/"},{default:s((()=>[c])),_:1})]),(0,r.Wm)("div",d,[(0,r.Wm)("nav",null,[(0,r.Wm)("ul",null,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.navList,((t,n)=>((0,r.wg)(),(0,r.j4)("li",{key:n,class:{"nav-active":e.routePath.includes(t.sign)}},[(0,r.Wm)(f,{to:t.link},{default:s((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to"])],2)))),128))])]),(0,r.Wm)("span",null,[(0,r.Wm)("button",{class:"language",onClick:t[1]||(t[1]=(...t)=>e.translate&&e.translate(...t))},"English")]),p])]),(0,r.Wm)("div",m,[e.isHomePage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)("aside",v,[(0,r.Wm)("ul",null,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.sidebarList,((t,n)=>((0,r.wg)(),(0,r.j4)("li",{key:n},[(0,r.Wm)("div",g,(0,i.zw)(t.groupName),1),(0,r.Wm)("ul",null,[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(t.groups,((t,n)=>((0,r.wg)(),(0,r.j4)("li",{key:n,class:{"sidebar-active":e.routePath===t.link}},[(0,r.Wm)(f,{to:t.link},{default:s((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to"])],2)))),128))])])))),128))])])),(0,r.Wm)("section",null,[(0,r.Wm)(h)])])],64)}));var h=n(262),W=n(119);const y=[{groupName:"布局组件",groups:[{name:"分割线",link:"/component/divider"},{name:"栅格",link:"/component/grid"},{name:"布局",link:"/component/layout"},{name:"间距",link:"/component/space"}]}],A=[{groupName:"介绍",groups:[{name:"Ladder UI",link:"/docs/introduction"}]},{groupName:"快速上手",groups:[{name:"安装",link:"/docs/install"}]}];var b=(0,r.aZ)({setup(){const e=(0,W.yj)(),t=(0,h.iH)([{name:"文档",link:"/docs/introduction",sign:"docs"},{name:"组件",link:"/component/divider",sign:"component"}]),n=(0,r.Fl)((()=>e.path.includes("component")?y:e.path.includes("docs")?A:[])),l=(0,r.Fl)((()=>"homepage"===e.name)),a=(0,r.Fl)((()=>e.path)),i=()=>{alert("完善中✍️")};return{navList:t,isHomePage:l,routePath:a,sidebarList:n,componentList:y,docList:A,translate:i}}});b.render=f,b.__scopeId="data-v-555f7242";var w=b;const j=(0,r.HX)("data-v-f3670852");(0,r.dD)("data-v-f3670852");const Z={class:"container"},L=(0,r.Wm)("section",null,[(0,r.Wm)("div",{class:"ladder"},[(0,r.Wm)("div",{class:"ladder-content"},[(0,r.Wm)("p",null," "),(0,r.Wm)("p",null,"LADDER UI")]),(0,r.Wm)("div",{class:"ladder-content"},[(0,r.Wm)("p",null,"LADDER UI"),(0,r.Wm)("p",null,"A Vue3 Library")]),(0,r.Wm)("div",{class:"ladder-content"},[(0,r.Wm)("p",null,"A Vue3 Library"),(0,r.Wm)("p",null,"have fun !")])])],-1),k=(0,r.Wm)("footer",null,null,-1);(0,r.Cn)();const I=j(((e,t,n,l,a,i)=>((0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("div",Z,[L,(0,r.Wm)("section",null,[(0,r.Wm)("button",{onClick:t[1]||(t[1]=(...t)=>e.toDocument&&e.toDocument(...t))},"get started >")])]),k],64))));var M=(0,r.aZ)({methods:{toDocument(){this.$router.push({name:"introduction"})}}});M.render=I,M.__scopeId="data-v-f3670852";var R=M;const E=(0,r.HX)("data-v-0058c328");(0,r.dD)("data-v-0058c328");const D={class:"public-section"},B=(0,r.Wm)("footer",null,null,-1);(0,r.Cn)();const N=E(((e,t,n,l,a,i)=>{const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)("div",D,[(0,r.Wm)("main",null,[(0,r.Wm)(o)]),B])}));var S=(0,r.aZ)({});S.render=N,S.__scopeId="data-v-0058c328";var T=S;function x(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h1",null,"完善中 ✍️")}var F=(0,r.aZ)({});F.render=x;var J=F;function Y(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h1",null,"完善中 ✍️")}var U=(0,r.aZ)({});U.render=Y;var H=U;function O(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h1",null,"完善中 ✍️")}var G=(0,r.aZ)({});G.render=O;var P=G;function z(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h1",null,"完善中 ✍️")}var X=(0,r.aZ)({});X.render=z;var Q=X;function _(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h1",null,"完善中 ✍️")}var C=(0,r.aZ)({});C.render=_;var V=C;function K(e,t,n,l,a,i){return(0,r.wg)(),(0,r.j4)("h2",null,"完善中 ✍️")}var q=(0,r.aZ)({});q.render=K;var $=q;const ee=[{path:"/",name:"homepage",component:R},{path:"/docs",component:T,children:[{path:"introduction",name:"introduction",component:$},{path:"install",name:"install",component:J}]},{path:"/component",component:T,children:[{path:"divider",name:"divider",component:Q},{path:"grid",name:"grid",component:H},{path:"layout",name:"layout",component:P},{path:"space",name:"space",component:V}]}],te=(0,W.p7)({history:(0,W.PO)("/"),routes:ee});var ne=te;const le=Array.isArray,ae=e=>"string"===typeof e,re=e=>"number"===typeof e,ie=e=>null!==e&&"object"===typeof e;function oe(...e){const t=[];for(let n=0;n<e.length;n++){const l=e[n];if(l)if(ae(l))t.push(l);else if(le(l))for(let e=0;e<l.length;e++){const n=oe(l[e]);n&&t.push(n)}else if(ie(l))for(const e in l)l[e]&&t.push(l[e])}return t.join(" ")}var se=(0,r.aZ)({name:"LRow",props:{gutter:{type:Number,default:0},justify:{type:String,default:"flex-start"},align:{type:String,default:"flex-start"}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>re(e.gutter)?[e.gutter,0]:le(e.gutter)?e.gutter:[0,0]));(0,r.JJ)("gutter",n);const l=(0,r.Fl)((()=>oe("l-row",e.justify?`is-justify-${e.justify}`:"",e.align?`is-align-${e.align}`:"")));return()=>(0,r.Wm)("div",{class:l.value},[t.default?.()])}}),ue=(0,r.aZ)({name:"LCol",props:{span:{type:Number,default:24},offset:{type:Number,default:0}},setup(e,{slots:t}){const n=(0,r.f3)("gutter",{value:[0,0]}),l=(0,r.Fl)((()=>{const e={};if(n.value[0]){const t=n.value[0]/2+"px";e.paddingLeft=t,e.paddingRight=t}if(n.value[1]){const t=n.value[1]/2+"px";e.paddingTop=t,e.paddingBottom=t}return e})),a=(0,r.Fl)((()=>oe("l-col",`l-col-${e.span}`,`l-col-offset-${e.offset}`)));return()=>(0,r.Wm)("div",{class:a.value,style:l.value},[t.default?.()])}});const ce=new Map([["mini",4],["small",8],["medium",12],["large",16]]);var de=(0,r.aZ)({props:{align:{type:String,default:"center"},split:{type:[Number,String],default:""},size:{type:[Number,String],default:"small"},justify:{type:String,default:"flex-start"}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{let t;return ae(e.size)?t=ce.get(e.size)?ce.get(e.size):0:re(e.size)&&(t=e.size),t/2})),l=(0,r.Fl)((()=>oe("l-space",`is-justify-${e.justify}`)));return()=>{const a=(0,r.Fl)((()=>{if(!t||!t.default)return null;const l=t.default(),a=l.length;return a<2?(0,r.Wm)("div",{class:"l-space-item"},[(0,r.Wm)("div",{class:"l-space-item__content"},[l])]):l.map(((t,l)=>{const i={};return 0===l?(i.marginRight=`${n.value}px`,(0,r.Wm)("div",{class:"l-space-item"},[(0,r.Wm)("div",{class:"l-space-item__content",style:i},[t]),(0,r.Wm)("div",{class:"l-space-item__split"},[e.split])])):l===a-1?(i.marginLeft=`${n.value}px`,(0,r.Wm)("div",{class:"l-space-item"},[(0,r.Wm)("div",{class:"l-space-item__content",style:i},[t])])):(i.marginLeft=`${n.value}px`,i.marginRight=`${n.value}px`,(0,r.Wm)("div",{class:"l-space-item"},[(0,r.Wm)("div",{class:"l-space-item__content",style:i},[t]),(0,r.Wm)("div",{class:"l-space-item__split"},[e.split])]))}))}));return(0,r.Wm)("div",{class:l.value},[a.value])}}}),pe=(0,r.aZ)({name:"LLayout",setup(e,{slots:t}){const n=(0,r.Fl)((()=>{if(t&&t.default){const e=t.default();return e.some((e=>{const t=e.type.name;return"LHeader"===t||"LFooter"===t}))}return!1})),l=(0,r.Fl)((()=>oe("l-layout",n.value?"is-vertical":"")));return()=>(0,r.Wm)("section",{class:l.value},[t.default?.()])}}),me=(0,r.aZ)({name:"LAside",props:{width:{type:Number,default:300}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{const t={};return e.width&&(t.width=`${e.width}px`),t}));return()=>(0,r.Wm)("aside",{class:"l-aside",style:n.value},[t.default?.()])}}),ve=(0,r.aZ)({name:"LMain",setup(e,{slots:t}){return()=>(0,r.Wm)("main",{class:"l-main"},[t.default?.()])}}),ge=(0,r.aZ)({name:"LFooter",props:{height:{type:Number,default:0}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{const t={};return e.height&&(t.height=`${e.height}px`),t}));return()=>(0,r.Wm)("footer",{class:"l-footer",style:n.value},[t.default?.()])}}),fe=(0,r.aZ)({name:"LHeader",props:{height:{type:Number,default:0}},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{const t={};return e.height&&(t.height=`${e.height}px`),t}));return()=>(0,r.Wm)("header",{class:"l-header",style:n.value},[t.default?.()])}}),he=(0,r.aZ)({props:{dashed:{type:Boolean,default:!1},textAlign:{type:String,default:"center"}},setup(e,{slots:t}){return()=>{const n=(0,r.Fl)((()=>oe("l-divider",e.dashed?"l-divider--dashed":"",t.default?.()?`l-divider__text--${e.textAlign}`:"l-divider__line-no-text")));return t&&t.default?(0,r.Wm)("div",{class:n.value},[(0,r.Wm)("div",{class:"l-divider__line--left"},null),(0,r.Wm)("div",{class:"l-divider__text"},[t.default()]),(0,r.Wm)("div",{class:"l-divider__line--right"},null)]):(0,r.Wm)("div",{class:n.value},null)}}});function We(e){const t=l;Object.keys(t).forEach((n=>{e.component(n,t[n])}))}const ye=(0,a.ri)(w);ye.use(We),ye.use(ne),ye.mount("#app")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,r){if(!l){var i=1/0;for(u=0;u<e.length;u++){l=e[u][0],a=e[u][1],r=e[u][2];for(var o=!0,s=0;s<l.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(o=!1,r<i&&(i=r));o&&(e.splice(u--,1),t=a())}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,a,r]}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,r,i=l[0],o=l[1],s=l[2],u=0;for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(s)var c=s(n);for(t&&t(l);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[i[u]]=0;return n.O(c)},l=self["webpackChunkladder_ui"]=self["webpackChunkladder_ui"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(370)}));l=n.O(l)})();
//# sourceMappingURL=main.82b7cccc.js.map