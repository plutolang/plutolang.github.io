"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7234],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||c[d]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5630:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={},l=void 0,s={unversionedId:"New Features/In Expressions",id:"New Features/In Expressions",title:"In Expressions",description:"Searching a string for a substring, or searching an array for an element is a very simple operation now. The in operator has been extended to support these operations.",source:"@site/docs/New Features/In Expressions.md",sourceDirName:"New Features",slug:"/New Features/In Expressions",permalink:"/docs/New Features/In Expressions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Arguments",permalink:"/docs/New Features/Default Arguments"},next:{title:"Numeral Parsing",permalink:"/docs/New Features/Numeral Parsing"}},i={},u=[{value:"Rules",id:"rules",level:2}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Searching a string for a substring, or searching an array for an element is a very simple operation now. The ",(0,a.kt)("inlineCode",{parentName:"p"},"in")," operator has been extended to support these operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Searching for a substring."',showLineNumbers:!0,title:'"Searching',for:!0,a:!0,'substring."':!0},'local a = "hello"\nlocal b = "hello world"\n\nlocal r1 = a in b\nlocal r2 = "hello" in b\nlocal r3 = a in "hello world"\nlocal r4 = "hello" in "hello world"\nlocal r5 = "goodbye" in "hello world"\n\nassert(r1 and r2 and r3 and r4) -- They\'ll all return true.\nassert(r5 == false) -- Except this one.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Searching a table for keys and elements."',showLineNumbers:!0,title:'"Searching',a:!0,table:!0,for:!0,keys:!0,and:!0,'elements."':!0},'local t = { [5] = "five", [6] = "six", [7] = "seven", key = "value" }\n\nassert(("key" in t) == true) -- Found a key with the value of \'key\'.\nassert((5 in t) == true) -- Found a key with the value of \'5\'.\nassert((3 in t) == false) -- No key with the value of \'3\'.\n')),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The right-hand operand must always be a table or a string."),(0,a.kt)("li",{parentName:"ul"},"The left-hand operand must be a string if the right-hand operand is a string."),(0,a.kt)("li",{parentName:"ul"},"The left-hand operand can be anything if the right-hand operand is a table.")))}c.isMDXComponent=!0}}]);