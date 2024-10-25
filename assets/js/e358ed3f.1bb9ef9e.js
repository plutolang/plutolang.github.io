"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o=void 0,s={unversionedId:"New Features/String Indexing",id:"New Features/String Indexing",title:"String Indexing",description:"You can index strings for their characters now, which is cleaner & 3x faster than using string.sub. String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end.",source:"@site/docs/New Features/String Indexing.md",sourceDirName:"New Features",slug:"/New Features/String Indexing",permalink:"/docs/New Features/String Indexing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Numeral Parsing",permalink:"/docs/New Features/Numeral Parsing"},next:{title:"String Interpolation",permalink:"/docs/New Features/String Interpolation"}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can index strings for their characters now, which is cleaner & ",(0,a.kt)("strong",{parentName:"p"},"3x")," faster than using ",(0,a.kt)("inlineCode",{parentName:"p"},"string.sub"),". String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end."),(0,a.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example Code"},(0,a.kt)("div",{parentName:"pre",className:"code-title"},"Example Code"),(0,a.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,a.kt)("div",{parentName:"pre",className:"code-container"},(0,a.kt)("code",{parentName:"div"},(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," str "),(0,a.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello world"')),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(str["),(0,a.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"]) "),(0,a.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "o"')),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(str["),(0,a.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"200"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"]) "),(0,a.kt)("span",{parentName:"div",style:{color:"#88846F"}},"-- nil")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(str["),(0,a.kt)("span",{parentName:"div",style:{color:"#F92672"}},"-"),(0,a.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,a.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"]) "),(0,a.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "d"'))))),(0,a.kt)("p",null,"Any character-intensive task \u2014 for example, a hash algorithm \u2014 will greatly benefit from this."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The bytecode of this feature is not backwards-compatible with Lua.")))}m.isMDXComponent=!0}}]);