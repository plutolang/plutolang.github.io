"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},l=void 0,i={unversionedId:"New Features/Explicit Globals",id:"New Features/Explicit Globals",title:"Explicit Globals",description:"The optional global keyword can be used to explicitly declare global variables.",source:"@site/docs/New Features/Explicit Globals.md",sourceDirName:"New Features",slug:"/New Features/Explicit Globals",permalink:"/docs/New Features/Explicit Globals",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Enumerations",permalink:"/docs/New Features/Enumerations"},next:{title:"Export Modifier",permalink:"/docs/New Features/Export Modifier"}},s={},p=[{value:"Compiler Warnings",id:"compiler-warnings",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The optional ",(0,n.kt)("inlineCode",{parentName:"p"},"global")," keyword can be used to explicitly declare global variables."),(0,n.kt)("p",null,"To enable it, simply do:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"pluto_use"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"global"))))),(0,n.kt)("p",null,"Then it can be used like this:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"global"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," a "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"))))),(0,n.kt)("p",null,"Being identical to the following code:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"a "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"))))),(0,n.kt)("h2",{id:"compiler-warnings"},"Compiler Warnings"),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"global")," keyword is enabled, an 'implicit-global' warning is raised for any globals declared without it:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"pluto_use"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"global")),(0,n.kt)("div",{parentName:"code",className:"line"}),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"a "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"))))),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"undefined"}},"file.pluto:3: warning: implicit global creation [implicit-global]")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"undefined"}},"    3 | a = 1")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"undefined"}},"      | ^^^^^ here: prefix this with 'global' if creating a global was intended"))))))}m.isMDXComponent=!0}}]);