"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},s=void 0,l={unversionedId:"New Features/Ternary Expressions",id:"New Features/Ternary Expressions",title:"Ternary Expressions",description:"Ternary expressions behave identical as to how they would in C. They introduce no new keywords.",source:"@site/docs/New Features/Ternary Expressions.md",sourceDirName:"New Features",slug:"/New Features/Ternary Expressions",permalink:"/docs/New Features/Ternary Expressions",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"String Interpolation",permalink:"/docs/New Features/String Interpolation"},next:{title:"Enumerations",permalink:"/docs/New Features/Enumerations"}},i={},u=[{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"If Expressions",id:"if-expressions",level:2},{value:"Doesn&#39;t Lua already have ternaries?",id:"doesnt-lua-already-have-ternaries",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ternary expressions behave identical as to how they would in C. They introduce no new keywords."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Old Code"',showLineNumbers:!0,title:'"Old','Code"':!0},"local max\nif a > b then\n  max = a\nelse\n  max = b\nend\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="New Code"',showLineNumbers:!0,title:'"New','Code"':!0},"local max = a > b ? a : b\n")),(0,a.kt)("h4",{id:"try-it-yourself"},(0,a.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20a%20%3E%20b%20%3F%20a%20%3A%20b%0A%0Aprint(max)"},"Try It Yourself")),(0,a.kt)("h2",{id:"if-expressions"},"If Expressions"),(0,a.kt)("p",null,"They also support an alternative syntax, for compatibility with older versions of Pluto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},"local max = if a > b then a else b\n")),(0,a.kt)("h2",{id:"doesnt-lua-already-have-ternaries"},"Doesn't Lua already have ternaries?"),(0,a.kt)("p",null,"While it is true that you can do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto"},"local max = a > b and a or b\n")),(0,a.kt)("p",null,"Keep in mind that this falls apart when the true-expression has a falsy value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto"},"local x = -1\nx = (x == -1 and nil or x)\n")),(0,a.kt)("p",null,"In this case, x will be -1 despite the intention being to set it to nil. There are no such issues using Pluto's ternary expressions."))}d.isMDXComponent=!0}}]);