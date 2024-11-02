"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9058],{5680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var r=n(6540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),i=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},y=function(e){var a=i(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},F=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=i(n),F=t,m=c["".concat(p,".").concat(F)]||c[F]||d[F]||o;return n?r.createElement(m,l(l({ref:a},y),{},{components:n})):r.createElement(m,l({ref:a},y))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=F;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}F.displayName="MDXCreateElement"},5889:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(8168),t=(n(6540),n(5680));const o={sidebar_position:3},l=void 0,s={unversionedId:"Runtime Environment/Scheduler",id:"Runtime Environment/Scheduler",title:"Scheduler",description:"The scheduler class \u2014 available via require \u2014 can be used to easily set up coroutine-based cooperative multitasking.",source:"@site/docs/Runtime Environment/Scheduler.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Scheduler",permalink:"/docs/Runtime Environment/Scheduler",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Regex",permalink:"/docs/Runtime Environment/Regex"},next:{title:"Socket",permalink:"/docs/Runtime Environment/Socket"}},p={},i=[{value:"<code>__construct</code>",id:"__construct",level:3},{value:"<code>add</code>",id:"add",level:3},{value:"<code>addloop</code>",id:"addloop",level:3},{value:"<code>run</code>",id:"run",level:3},{value:"<code>yieldfunc</code>",id:"yieldfunc",level:3},{value:"<code>errorfunc</code>",id:"errorfunc",level:3}],y={toc:i},c="wrapper";function d(e){let{components:a,...n}=e;return(0,t.yg)(c,(0,r.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The scheduler class \u2014 available via ",(0,t.yg)("inlineCode",{parentName:"p"},"require")," \u2014 can be used to easily set up coroutine-based cooperative multitasking."),(0,t.yg)("h3",{id:"__construct"},(0,t.yg)("inlineCode",{parentName:"h3"},"__construct")),(0,t.yg)("p",null,"The constructor takes no arguments."),(0,t.yg)("h3",{id:"add"},(0,t.yg)("inlineCode",{parentName:"h3"},"add")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"add")," method can be used to turn a function into a coroutine. The coroutine is resumed once and then added to the scheduler."),(0,t.yg)("h3",{id:"addloop"},(0,t.yg)("inlineCode",{parentName:"h3"},"addloop")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"addloop")," method is a wrapper for the ",(0,t.yg)("inlineCode",{parentName:"p"},"add")," method that keeps invoking the given function until it returns false."),(0,t.yg)("h3",{id:"run"},(0,t.yg)("inlineCode",{parentName:"h3"},"run")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"run")," method activates the scheduler. The scheduler resumes all coroutines and then calls its yieldfunc until either all coroutines are finished, or coroutine throws an error \u2014 in which case it is rethrown."),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," scheduler "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," ("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:scheduler"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") ()")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," loops "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"addloop"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"++"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"loops")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(loops)")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"return"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," loops "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"!="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"run"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 4")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 5")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"add"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"3..."'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"coroutine"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"2..."'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"coroutine"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"1..."'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"coroutine"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Boom!"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"run"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3...")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2...")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1...")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e Boom!"))))),(0,t.yg)("h3",{id:"yieldfunc"},(0,t.yg)("inlineCode",{parentName:"h3"},"yieldfunc")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"yieldfunc")," is a property on the scheduler that can be used to customize how the scheduler itself yields. By default, this is a function calling ",(0,t.yg)("inlineCode",{parentName:"p"},"os.sleep(1)"),"."),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," scheduler "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," ("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:scheduler"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") ()")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Yield to OS every second instead of every millisecond.")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"yieldfunc "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," || "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"->"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"os"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," loops "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"addloop"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"++"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"loops")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(loops)")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"return"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," loops "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"!="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"run"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 4")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 5"))))),(0,t.yg)("h3",{id:"errorfunc"},(0,t.yg)("inlineCode",{parentName:"h3"},"errorfunc")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"errorfunc")," is a property on the scheduler that can optionally be set to customize how the scheduler reports errors in its coroutines. By default, this is ",(0,t.yg)("inlineCode",{parentName:"p"},"nil"),", in which case any coroutine errors are rethrown (via ",(0,t.yg)("inlineCode",{parentName:"p"},"coroutine.xresume"),")."),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { scheduler } "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"*"')),(0,t.yg)("div",{parentName:"code",className:"line"}),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," sched "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"scheduler"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"errorfunc "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," |"),(0,t.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"err"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"| "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"->"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"debug"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"traceback"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(err)) "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"add"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"error"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"this is urgent: fatal error"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"))))))}d.isMDXComponent=!0}}]);