"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4565],{7156:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const a={sidebar_position:13},i=void 0,o={id:"New Features/In Expressions",title:"In Expressions",description:"The in operator has been extended to support string searches and table searches. For these purposes, it's the fastest possible solution.",source:"@site/docs/New Features/In Expressions.md",sourceDirName:"New Features",slug:"/New Features/In Expressions",permalink:"/docs/New Features/In Expressions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Type Hinting",permalink:"/docs/New Features/Type Hinting"},next:{title:"Named Varargs",permalink:"/docs/New Features/Named Varargs"}},l={},d=[{value:"Rules",id:"rules",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"in"})," operator has been extended to support string searches and table searches. For these purposes, it's the fastest possible solution."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Searching for a substring."',children:'assert("world" in "hello world")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When used on tables, the ",(0,t.jsx)(n.code,{children:"in"})," operator searches for ",(0,t.jsx)(n.em,{children:"values"}),". It'll search for array ",(0,t.jsx)(n.em,{children:"elements"})," and it'll search keys for ",(0,t.jsx)(n.em,{children:"their values"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Searching a table for a value."',children:'local t = { "a", "b", key = "value" }\n\nassert("a" in t) -- "a" is an element inside of t.\nassert("b" in t) -- "b" is an element inside of t.\nassert("value" in t) -- "value" is the value of a key inside of t.\nassert(not "random" in t) -- "random" is not an element OR the value of a key inside of t.\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The right-hand operand must always be a table or a string."}),"\n",(0,t.jsx)(n.li,{children:"The left-hand operand must be a string if the right-hand operand is a string."}),"\n",(0,t.jsx)(n.li,{children:"The left-hand operand can be anything if the right-hand operand is a table."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The bytecode of this feature is not backwards-compatible with Lua."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);