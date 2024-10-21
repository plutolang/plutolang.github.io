"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},l=void 0,i={unversionedId:"Runtime Environment/Math",id:"Runtime Environment/Math",title:"Math",description:"This page documents the changes & additions to the math library in Pluto, which is built on top of Lua 5.4's.",source:"@site/docs/Runtime Environment/Math.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Math",permalink:"/docs/Runtime Environment/Math",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IO",permalink:"/docs/Runtime Environment/IO"},next:{title:"OS",permalink:"/docs/Runtime Environment/OS"}},s={},p=[{value:"<code>math.isnan</code>",id:"mathisnan",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>math.round</code>",id:"mathround",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>math.atan2</code>",id:"mathatan2",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page documents the changes & additions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," library in Pluto, which is built on top of Lua 5.4's."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mathisnan"},(0,r.kt)("inlineCode",{parentName:"h3"},"math.isnan")),(0,r.kt)("p",null,"Checks if a number is NaN."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number to check.")),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"/"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"0")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(x "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"~="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," x) "),(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"-- Lua way: Prove the variable is NaN because it is not equal to itself. Works, but unintuitive.")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"isnan"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(x))"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mathround"},(0,r.kt)("inlineCode",{parentName:"h3"},"math.round")),(0,r.kt)("p",null,"Rounds a number to the nearest integer."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number to round.")),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"round"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"2.4"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"round"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"2.5"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mathatan2"},(0,r.kt)("inlineCode",{parentName:"h3"},"math.atan2")),(0,r.kt)("p",null,"An alias of ",(0,r.kt)("inlineCode",{parentName:"p"},"math.atan"),"."))}d.isMDXComponent=!0}}]);