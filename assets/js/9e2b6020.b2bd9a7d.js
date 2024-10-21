"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>F});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,F=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(F,s(s({ref:t},c),{},{components:a})):r.createElement(F,s({ref:t},c))}));function F(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},s=void 0,l={unversionedId:"New Features/In Expressions",id:"New Features/In Expressions",title:"In Expressions",description:"The in operator has been extended to support string searches and table searches. For these purposes, it's the fastest possible solution.",source:"@site/docs/New Features/In Expressions.md",sourceDirName:"New Features",slug:"/New Features/In Expressions",permalink:"/docs/New Features/In Expressions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Export Modifier",permalink:"/docs/New Features/Export Modifier"},next:{title:"Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions"}},i={},p=[{value:"Rules",id:"rules",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"in")," operator has been extended to support string searches and table searches. For these purposes, it's the fastest possible solution."),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Searching for a substring."},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Searching for a substring."),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"world"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello world"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"))))),(0,n.kt)("p",null,"When used on tables, the ",(0,n.kt)("inlineCode",{parentName:"p"},"in")," operator searches for ",(0,n.kt)("em",{parentName:"p"},"values"),". It'll search for array ",(0,n.kt)("em",{parentName:"p"},"elements")," and it'll search keys for ",(0,n.kt)("em",{parentName:"p"},"their values"),"."),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Searching a table for a value."},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Searching a table for a value."),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"a"'),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"b"'),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," key "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"value"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }")),(0,n.kt)("div",{parentName:"code",className:"line"}),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"a"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t) "),(0,n.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "a" is an element inside of t.')),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"b"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t) "),(0,n.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "b" is an element inside of t.')),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"value"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t) "),(0,n.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "value" is the value of a key inside of t.')),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"not"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"random"'),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t) "),(0,n.kt)("span",{parentName:"div",style:{color:"#88846F"}},'-- "random" is not an element OR the value of a key inside of t.'))))),(0,n.kt)("h2",{id:"rules"},"Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The right-hand operand must always be a table or a string."),(0,n.kt)("li",{parentName:"ul"},"The left-hand operand must be a string if the right-hand operand is a string."),(0,n.kt)("li",{parentName:"ul"},"The left-hand operand can be anything if the right-hand operand is a table.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The bytecode of this feature is not backwards-compatible with Lua.")))}m.isMDXComponent=!0}}]);