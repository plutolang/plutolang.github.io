"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},a=void 0,l={unversionedId:"New Features/Continue Statement",id:"New Features/Continue Statement",title:"Continue Statement",description:"Continue statements, like break, are meant to be used in loops. They skip the current iteration of the loop.",source:"@site/docs/New Features/Continue Statement.md",sourceDirName:"New Features",slug:"/New Features/Continue Statement",permalink:"/docs/New Features/Continue Statement",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Break Statement",permalink:"/docs/New Features/Break Statement"},next:{title:"Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions"}},u={},s=[{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Continue&#39;s Only Argument",id:"continues-only-argument",level:2},{value:"Using Compatibility Mode?",id:"using-compatibility-mode",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Continue statements, like ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),", are meant to be used in loops. They skip the current iteration of the loop."),(0,r.kt)("p",null,"They introduce a new keyword, ",(0,r.kt)("inlineCode",{parentName:"p"},"continue"),". These cannot be used inside switch statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"-- Print every number besides five.\nfor i = 1, 10 do\n    if i == 5 then\n        continue\n    end\n    print(i)\n    -- continue jumps here.\nend\n")),(0,r.kt)("h4",{id:"try-it-yourself"},(0,r.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=--%20Print%20every%20number%20besides%20five.%0D%0Afor%20i%20%3D%201%2C%2010%20do%0D%0A%20%20%20%20if%20i%20%3D%3D%205%20then%0D%0A%20%20%20%20%20%20%20%20continue%0D%0A%20%20%20%20end%0D%0A%20%20%20%20print(i)%0D%0A%20%20%20%20--%20continue%20jumps%20here.%0D%0Aend"},"Try It Yourself")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note, ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," will skip code. If any code within your loop will determine if the loop continues, make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," doesn't jump over it.")),(0,r.kt)("h2",{id:"continues-only-argument"},"Continue's Only Argument"),(0,r.kt)("p",null,"This keyword accepts an optional integral argument which tells it how many levels of enclosing loops it should skip to the end of. The default value is 1, thus skipping to the end of the current loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example 1"',showLineNumbers:!0,title:'"Example','1"':!0},"for i = 1, 10 do -- Loop 1.\n    continue 1 --\x3e This is identical to `continue` without any arguments.\nend\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example 2"',showLineNumbers:!0,title:'"Example','2"':!0},"for i = 1, 10 do -- Loop 1.\n    for ii = 1, 5 do -- Loop 2.\n        continue 1 --\x3e This will continue from Loop 2.\n        continue 2 --\x3e This will continue from Loop 1.\n    end\nend\n")),(0,r.kt)("h2",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,r.kt)("p",null,"You may need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"pluto_continue")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"continue"),"."))}m.isMDXComponent=!0}}]);