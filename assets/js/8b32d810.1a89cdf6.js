"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6773],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(n),d=r,g=y["".concat(i,".").concat(d)]||y[d]||m[d]||o;return n?t.createElement(g,l(l({ref:a},c),{},{components:n})):t.createElement(g,l({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[y]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8295:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const o={sidebar_position:3},l=void 0,s={unversionedId:"Runtime Environment/Regex",id:"Runtime Environment/Regex",title:"Regex",description:'The Regex module is available via require "pluto:regex" and provides Soup\'s flavor of the popular string matching language.',source:"@site/docs/Runtime Environment/Regex.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Regex",permalink:"/docs/Runtime Environment/Regex",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/docs/Runtime Environment/JSON"},next:{title:"Scheduler",permalink:"/docs/Runtime Environment/Scheduler"}},i={},p=[{value:"<code>regex.new</code>",id:"regexnew",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>regex.match</code>",id:"regexmatch",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],c={toc:p},y="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(y,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Regex module is available via ",(0,r.yg)("inlineCode",{parentName:"p"},'require "pluto:regex"')," and provides ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/calamity-inc/Soup/blob/senpai/docs/user/regex.md"},"Soup's flavor")," of the popular string matching language."),(0,r.yg)("h3",{id:"regexnew"},(0,r.yg)("inlineCode",{parentName:"h3"},"regex.new")),(0,r.yg)("p",null,"Parses a pattern and creates an instance for it."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The regex to be ",(0,r.yg)("em",{parentName:"li"},"compiled"),". Note that this must be a full pattern with a start and end delimiter (commonly ",(0,r.yg)("inlineCode",{parentName:"li"},"/"),"). Flags may optionally be present after the end delimiter.")),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,"A pattern instance."),(0,r.yg)("h3",{id:"regexmatch"},(0,r.yg)("inlineCode",{parentName:"h3"},"regex.match")),(0,r.yg)("p",null,"Attempt to match a pattern instance."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The pattern instance.")),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,"A table with an index/key for each matching group or nil if no matches."),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," regex "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:regex"')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," pattern "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"regex"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[/^the (?:(.+) )?one$/]]")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the one"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(7) "the one",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the chosen one"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [1] = string(6) "chosen",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(14) "the chosen one",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"not the one"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e nil"))))),(0,r.yg)("p",null,"The overall pattern match is in index 0, and in this case there is only the 1 capturing group, that being ",(0,r.yg)("inlineCode",{parentName:"p"},"(.+)"),"."),(0,r.yg)("p",null,"Capture group names will be used if available:"),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," regex "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:regex"')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," pattern "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"regex"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[/^the (?:(?'what'.+) )?one$/]]")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the chosen one"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(14) "the chosen one",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["what"] = string(6) "chosen",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))))}m.isMDXComponent=!0}}]);