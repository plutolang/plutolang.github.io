"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5181],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},F=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),F=n,k=d["".concat(i,".").concat(F)]||d[F]||m[F]||l;return t?r.createElement(k,o(o({ref:a},c),{},{components:t})):r.createElement(k,o({ref:a},c))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=F;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}F.displayName="MDXCreateElement"},3999:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const l={sidebar_position:2},o=void 0,s={unversionedId:"New Features/Destructuring",id:"New Features/Destructuring",title:"Destructuring",description:"Destructuring is a better way to assign local variables from expressions that return a table.",source:"@site/docs/New Features/Destructuring.md",sourceDirName:"New Features",slug:"/New Features/Destructuring",permalink:"/docs/New Features/Destructuring",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Compile-Time Evaluation",permalink:"/docs/New Features/Compile-Time Evaluation"},next:{title:"Enumerations",permalink:"/docs/New Features/Enumerations"}},i={},p=[{value:"Array destructuring",id:"array-destructuring",level:2},{value:"Table destructuring",id:"table-destructuring",level:2},{value:"Different variable name",id:"different-variable-name",level:3},{value:"Standard Library",id:"standard-library",level:3}],c={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Destructuring is a better way to assign local variables from expressions that return a table."),(0,n.kt)("h2",{id:"array-destructuring"},"Array destructuring"),(0,n.kt)("p",null,"Assuming we have this table:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"6"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"9"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }"))))),(0,n.kt)("p",null,"This is how we would assign each value to variables called ",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"c")," using the Lua and Pluto ways:"),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Lua way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Lua way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," a"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," b"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," c "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"table"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"unpack"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(t)"))))),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Pluto way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Pluto way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," [a"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," b"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," c] "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"))))),(0,n.kt)("h2",{id:"table-destructuring"},"Table destructuring"),(0,n.kt)("p",null,"Assuming we have this table:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    name "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"John"'),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    age "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"42")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}"))))),(0,n.kt)("p",null,"This is how we would assign each field to a variable of the same name using the Lua and Pluto ways:"),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Lua way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Lua way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," name "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"name")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," age "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"age"))))),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Pluto way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Pluto way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { name"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," age } "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"))))),(0,n.kt)("h3",{id:"different-variable-name"},"Different variable name"),(0,n.kt)("p",null,"Assuming we have the same table as above, this is how we'd assign the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"age")," fields to ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," variables, respectively, using the Lua and Pluto ways:"),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Lua way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Lua way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," n "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"name")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," a "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"age"))))),(0,n.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},title:"Pluto way"},(0,n.kt)("div",{parentName:"pre",className:"code-title"},"Pluto way"),(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { n "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," name"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," a "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," age } "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"))))),(0,n.kt)("h3",{id:"standard-library"},"Standard Library"),(0,n.kt)("p",null,"Table destructuring can be used to require multiple standard library modules at once using the '","*","' module:"),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { base64"),(0,n.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json } "),(0,n.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,n.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"*"'))))))}m.isMDXComponent=!0}}]);