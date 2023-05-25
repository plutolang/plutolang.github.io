"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6579],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return i?r.createElement(h,a(a({ref:t},c),{},{components:i})):r.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<n;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(7462),o=(i(7294),i(3905));const n={},a=void 0,l={unversionedId:"For Integrators/Compatibility",id:"For Integrators/Compatibility",title:"Compatibility",description:"How compatible with Lua is Pluto?",source:"@site/docs/For Integrators/Compatibility.md",sourceDirName:"For Integrators",slug:"/For Integrators/Compatibility",permalink:"/docs/For Integrators/Compatibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"For Integrators",permalink:"/docs/category/for-integrators"},next:{title:"Content Moderation",permalink:"/docs/For Integrators/Content Moderation"}},p={},s=[{value:"How compatible with Lua is Pluto?",id:"how-compatible-with-lua-is-pluto",level:2},{value:"Where are the incompatibilities?",id:"where-are-the-incompatibilities",level:3},{value:"What is compatibility mode?",id:"what-is-compatibility-mode",level:3},{value:"How to use compatibility mode?",id:"how-to-use-compatibility-mode",level:4}],c={toc:s},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-compatible-with-lua-is-pluto"},"How compatible with Lua is Pluto?"),(0,o.kt)("p",null,"Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros."),(0,o.kt)("h3",{id:"where-are-the-incompatibilities"},"Where are the incompatibilities?"),(0,o.kt)("p",null,"Pluto's adds the following reserved tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"continue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"export"))),(0,o.kt)("p",null,"Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto ",(0,o.kt)("a",{parentName:"p",href:"../QoL%20Improvements/Reserved%20Identifiers"},"removes the restriction from them"),"."),(0,o.kt)("h3",{id:"what-is-compatibility-mode"},"What is compatibility mode?"),(0,o.kt)("p",null,"Compatibility mode is a compilation flag that'll prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_")," before any of the new keywords. This can be individually toggled for all of the new keywords. Furthermore, when you decide to disable compatibility mode, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_")," syntax is still valid. This project has high regard for smooth migration paths."),(0,o.kt)("h4",{id:"how-to-use-compatibility-mode"},"How to use compatibility mode?"),(0,o.kt)("p",null,"The macros for this are well-documented, and found inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"luaconf.h")," file."))}m.isMDXComponent=!0}}]);