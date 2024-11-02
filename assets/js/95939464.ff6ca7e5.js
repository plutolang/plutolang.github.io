"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9424],{5680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>m});var l=n(6540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=l.createContext({}),y=function(e){var a=l.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=y(e.components);return l.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},F=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=y(n),F=t,m=d["".concat(p,".").concat(F)]||d[F]||c[F]||r;return n?l.createElement(m,o(o({ref:a},i),{},{components:n})):l.createElement(m,o({ref:a},i))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=F;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:t,o[1]=s;for(var y=2;y<r;y++)o[y]=n[y];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}F.displayName="MDXCreateElement"},5124:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>y});var l=n(8168),t=(n(6540),n(5680));const r={sidebar_position:3},o=void 0,s={unversionedId:"Runtime Environment/JSON",id:"Runtime Environment/JSON",title:"JSON",description:"Must be included via require.",source:"@site/docs/Runtime Environment/JSON.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/JSON",permalink:"/docs/Runtime Environment/JSON",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/docs/Runtime Environment/HTTP"},next:{title:"Regex",permalink:"/docs/Runtime Environment/Regex"}},p={},y=[{value:"<code>json.encode</code>",id:"jsonencode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>json.decode</code>",id:"jsondecode",level:3},{value:"Parameters",id:"parameters-1",level:4}],i={toc:y},d="wrapper";function c(e){let{components:a,...n}=e;return(0,t.yg)(d,(0,l.A)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Must be included via ",(0,t.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"jsonencode"},(0,t.yg)("inlineCode",{parentName:"h3"},"json.encode")),(0,t.yg)("p",null,"Returns a string of JSON."),(0,t.yg)("h4",{id:"parameters"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A boolean, number, string, or table to encode as JSON."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"pretty")," \u2014 Whether to return a human-readable string of JSON. Defaults to ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e "Hello, World!"')),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    nested "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        nested_key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    }")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     "key": "Hello, World!",')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     "nested": {')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e         "nested_key": 1337')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     }")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))),(0,t.yg)("p",null,"Because Lua tables do not have order guarantees, you can add an ",(0,t.yg)("inlineCode",{parentName:"p"},"__order")," field to fix the order:"),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    __order "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"a"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"b"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"c"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    a "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    b "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    c "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(t)) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},'-- {"a":1,"b":2,"c":3}'))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"json.null")," value \u2014 assuming you did ",(0,t.yg)("inlineCode",{parentName:"p"},'local json = require("json")')," \u2014 can be used to encode JSON null values."),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.null"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e null"))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"jsondecode"},(0,t.yg)("inlineCode",{parentName:"h3"},"json.decode")),(0,t.yg)("p",null,"Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table."),(0,t.yg)("h4",{id:"parameters-1"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 The JSON data to decode."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"flags")," \u2014 Options to augment the return value. Multiple options can be combined with bitwise OR (",(0,t.yg)("inlineCode",{parentName:"li"},"|"),"). Defaults to ",(0,t.yg)("inlineCode",{parentName:"li"},"0"),".",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"json.withnull")," \u2014 decodes JSON null values as ",(0,t.yg)("inlineCode",{parentName:"li"},"json.null")," instead of ",(0,t.yg)("inlineCode",{parentName:"li"},"nil"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"json.withorder")," \u2014 adds an ",(0,t.yg)("inlineCode",{parentName:"li"},"__order")," field to tables of decoded JSON objects. ",(0,t.yg)("inlineCode",{parentName:"li"},"json.encode")," respects this, so this is perfect for modifying data while preserving order.")))),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," encoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," decoded")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Basic Type")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded)")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data)")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"type"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded) "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"string"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Complex Type")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    nested "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        nested_key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    }")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded)")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"type"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded) "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"table"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"nested"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"nested_key "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Flags")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[{")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'    "null": null,')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'    "string": "Hello"')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"}]]")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.withnull"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"|"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.withorder"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"__order["),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"] "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"null"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"null "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.null"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," encoded)"))))))}c.isMDXComponent=!0}}]);