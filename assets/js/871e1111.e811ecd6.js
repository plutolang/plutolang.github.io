"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[346],{5680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(6540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},y=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),g=p(n),c=i,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||o;return n?t.createElement(m,r(r({ref:a},y),{},{components:n})):t.createElement(m,r({ref:a},y))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8085:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(8168),i=(n(6540),n(5680));const o={sidebar_position:3},r=void 0,l={unversionedId:"Runtime Environment/Bigint",id:"Runtime Environment/Bigint",title:"Bigint",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Bigint.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Bigint",permalink:"/docs/Runtime Environment/Bigint",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Base64",permalink:"/docs/Runtime Environment/Base64"},next:{title:"CaT",permalink:"/docs/Runtime Environment/CaT"}},s={},p=[{value:"<code>bigint.new</code>",id:"bigintnew",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>bigint.tostring</code>, <code>__tostring</code>",id:"biginttostring-__tostring",level:3},{value:"<code>bigint.hex</code>",id:"biginthex",level:3},{value:"<code>bigint.binary</code>",id:"bigintbinary",level:3},{value:"<code>bigint.add</code>, <code>__add</code>",id:"bigintadd-__add",level:3},{value:"<code>bigint.sub</code>, <code>__sub</code>",id:"bigintsub-__sub",level:3},{value:"<code>bigint.mul</code>, <code>__mul</code>",id:"bigintmul-__mul",level:3},{value:"<code>bigint.div</code>",id:"bigintdiv",level:3},{value:"<code>__div</code>",id:"__div",level:3},{value:"<code>bigint.mod</code>, <code>__mod</code>",id:"bigintmod-__mod",level:3},{value:"<code>bigint.pow</code>, <code>__pow</code>",id:"bigintpow-__pow",level:3},{value:"<code>bigint.bitlength</code>",id:"bigintbitlength",level:3}],y={toc:p},g="wrapper";function d(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Must be included via ",(0,i.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"bigintnew"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.new")),(0,i.yg)("p",null,"To instantiate a bigint, you can call the ",(0,i.yg)("inlineCode",{parentName:"p"},"bigint.new")," function, or use the ",(0,i.yg)("inlineCode",{parentName:"p"},"new")," operator."),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The decimal value of the bigint.")),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"123"'),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 123"))))),(0,i.yg)("h3",{id:"biginttostring-__tostring"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.tostring"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__tostring")),(0,i.yg)("p",null,"As seen above, the ",(0,i.yg)("inlineCode",{parentName:"p"},"__tostring")," metamethod provides a string representation of the Bigint in decimal."),(0,i.yg)("h3",{id:"biginthex"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.hex")),(0,i.yg)("p",null,"Provides a hexadecimal representation of the Bigint."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"420"'),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,i.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"hex"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1A4"))))),(0,i.yg)("h3",{id:"bigintbinary"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.binary")),(0,i.yg)("p",null,"Provides a binary representation of the Bigint."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"420"'),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,i.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"binary"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 110100100"))))),(0,i.yg)("h3",{id:"bigintadd-__add"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.add"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__add")),(0,i.yg)("p",null,"Adds two bigints together. Returns a new bigint."),(0,i.yg)("h3",{id:"bigintsub-__sub"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.sub"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__sub")),(0,i.yg)("p",null,"Performs subtraction on two bigints. Returns a new bigint."),(0,i.yg)("h3",{id:"bigintmul-__mul"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.mul"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__mul")),(0,i.yg)("p",null,"Performs multiplication on two bigints. Returns a new bigint."),(0,i.yg)("h3",{id:"bigintdiv"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.div")),(0,i.yg)("p",null,"Performs division on two bigints. Returns two new bigints: quotient and remainder."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,i.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"div"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3    1"))))),(0,i.yg)("h3",{id:"__div"},(0,i.yg)("inlineCode",{parentName:"h3"},"__div")),(0,i.yg)("p",null,"Performs division on two bigints. Returns a new bigint with the quotient."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"/"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3"))))),(0,i.yg)("h3",{id:"bigintmod-__mod"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.mod"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__mod")),(0,i.yg)("p",null,"Performs divison on two bigints. Returns a new bigint with the remainder."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"%"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1"))))),(0,i.yg)("h3",{id:"bigintpow-__pow"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.pow"),", ",(0,i.yg)("inlineCode",{parentName:"h3"},"__pow")),(0,i.yg)("p",null,"Performs expontentiation on two bigints. Returns a new bigint."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"^"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1024"))))),(0,i.yg)("h3",{id:"bigintbitlength"},(0,i.yg)("inlineCode",{parentName:"h3"},"bigint.bitlength")),(0,i.yg)("p",null,"Returns the position of the most significant set bit as a plain integer."),(0,i.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,i.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,i.yg)("div",{parentName:"pre",className:"code-container"},(0,i.yg)("code",{parentName:"div"},(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bigint "),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:bigint"')),(0,i.yg)("div",{parentName:"code",className:"line"},(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"bigint"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,i.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"420"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,i.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,i.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"bitlength"),(0,i.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()) "),(0,i.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 9"))))))}d.isMDXComponent=!0}}]);