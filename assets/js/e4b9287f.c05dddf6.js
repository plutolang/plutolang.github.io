"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Getting Started",a={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"This document will explain how to get started with writing Pluto in no time.",source:"@site/docs/Getting Started.md",sourceDirName:".",slug:"/Getting Started",permalink:"/docs/Getting Started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is Pluto?",permalink:"/docs/Introduction"},next:{title:"Tooling",permalink:"/docs/Tooling"}},u={},p=[{value:"Write Pluto Online",id:"write-pluto-online",level:2},{value:"Prebuilt Binaries",id:"prebuilt-binaries",level:2},{value:"Chocolatey",id:"chocolatey",level:3},{value:"Compile Pluto Yourself",id:"compile-pluto-yourself",level:2},{value:"Note for Windows",id:"note-for-windows",level:4}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This document will explain how to get started with writing Pluto in no time."),(0,r.kt)("h2",{id:"write-pluto-online"},"Write Pluto Online"),(0,r.kt)("p",null,"The easiest way to get started writing Pluto is to use ",(0,r.kt)("a",{parentName:"p",href:"https://pluto-lang.org/web/"},"Write Pluto Online"),", which runs Pluto code directly in your browser using WASM."),(0,r.kt)("h2",{id:"prebuilt-binaries"},"Prebuilt Binaries"),(0,r.kt)("p",null,"You can find pre-built binaries of Pluto for Windows, Linux, & Mac OS over on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/Pluto/releases"},"Pluto's Github Releases page"),"."),(0,r.kt)("h3",{id:"chocolatey"},"Chocolatey"),(0,r.kt)("p",null,"You can easily install pluto & plutoc via Chocolatey as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'choco source add -n "Calamity, Inc." -s https://choco.calamity.gg/index.json\nchoco install plutolang\n')),(0,r.kt)("p",null,"Note that Chocolatey 2.0.0 or above is needed."),(0,r.kt)("h2",{id:"compile-pluto-yourself"},"Compile Pluto Yourself"),(0,r.kt)("p",null,"Pluto can compile on virtually any platform, as long as there's a C++ 17 compiler for it, which includes, but is not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BSD"),(0,r.kt)("li",{parentName:"ul"},"FreeBSD"),(0,r.kt)("li",{parentName:"ul"},"Linux"),(0,r.kt)("li",{parentName:"ul"},"MacOS"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Solaris")),(0,r.kt)("p",null,"To compile Pluto yourself, you first need to clone the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/PlutoLang/Pluto.git\ncd Pluto\n")),(0,r.kt)("p",null,"And then it's as simple as running the make command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make PLAT={yourplatform}\n")),(0,r.kt)("p",null,"The platform list can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/Pluto/blob/main/src/Makefile#L38"},"here"),"."),(0,r.kt)("p",null,"After you compile Pluto, all the binaries will be within the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," directory."),(0,r.kt)("h4",{id:"note-for-windows"},"Note for Windows"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," command isn't installed by default, so you should install ",(0,r.kt)("a",{parentName:"p",href:"https://www.msys2.org/"},"MSYS"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On Windows, you can install Visual Studio 2022 and simply use the vendored Visual Studio files from the Pluto repository.")))}d.isMDXComponent=!0}}]);