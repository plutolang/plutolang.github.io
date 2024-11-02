"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5494],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:0},i="What is Pluto?",s={unversionedId:"Introduction",id:"Introduction",title:"What is Pluto?",description:"Pluto is a superset of Lua 5.4 with a focus on general-purpose programming. While being remarkably compatible with Lua 5.4 source-code & bytecode, it enhances the standard library & adds more than a dozen highly-desired syntaxes such as switch statements, compound operators, classes, class inheritance, string interpolation, type hinting, enums, and so on.",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/docs/Introduction",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/Getting Started"}},l={},c=[{value:"What does Pluto aspire to be?",id:"what-does-pluto-aspire-to-be",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"what-is-pluto"},"What is Pluto?"),(0,o.yg)("p",null,"Pluto is a superset of Lua 5.4 with a focus on general-purpose programming. While being remarkably compatible with Lua 5.4 source-code & bytecode, it enhances the standard library & adds more than a dozen highly-desired syntaxes such as switch statements, compound operators, classes, class inheritance, string interpolation, type hinting, enums, and so on."),(0,o.yg)("h2",{id:"what-does-pluto-aspire-to-be"},"What does Pluto aspire to be?"),(0,o.yg)("p",null,"Pluto aspires to be a version of Lua with a larger feature-set, that is all. Pluto is not a Lua-killer, an attempted successor, or any of that. Many people (rightly so) love Lua precisely because of the design philosophy. And fundamentally, Pluto is a major deviation from Lua's design philosophy. Some may prefer this, some may not."))}d.isMDXComponent=!0}}]);