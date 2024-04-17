"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[346],{1425:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(4848),d=n(8453);const o={sidebar_position:3},r=void 0,s={id:"Runtime Environment/Bigint",title:"Bigint",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Bigint.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Bigint",permalink:"/docs/Runtime Environment/Bigint",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Base64",permalink:"/docs/Runtime Environment/Base64"},next:{title:"CaT",permalink:"/docs/Runtime Environment/CaT"}},l={},c=[{value:"<code>bigint.new</code>",id:"bigintnew",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>bigint.tostring</code>, <code>__tostring</code>",id:"biginttostring-__tostring",level:3},{value:"<code>bigint.hex</code>",id:"biginthex",level:3},{value:"<code>bigint.binary</code>",id:"bigintbinary",level:3},{value:"<code>bigint.add</code>, <code>__add</code>",id:"bigintadd-__add",level:3},{value:"<code>bigint.sub</code>, <code>__sub</code>",id:"bigintsub-__sub",level:3},{value:"<code>bigint.mul</code>, <code>__mul</code>",id:"bigintmul-__mul",level:3},{value:"<code>bigint.div</code>",id:"bigintdiv",level:3},{value:"<code>__div</code>",id:"__div",level:3},{value:"<code>bigint.mod</code>, <code>__mod</code>",id:"bigintmod-__mod",level:3},{value:"<code>bigint.pow</code>, <code>__pow</code>",id:"bigintpow-__pow",level:3},{value:"<code>bigint.bitlength</code>",id:"bigintbitlength",level:3}];function a(i){const e={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Must be included via ",(0,t.jsx)(e.code,{children:"require"}),"."]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"bigintnew",children:(0,t.jsx)(e.code,{children:"bigint.new"})}),"\n",(0,t.jsxs)(e.p,{children:["To instantiate a bigint, you can call the ",(0,t.jsx)(e.code,{children:"bigint.new"})," function, or use the ",(0,t.jsx)(e.code,{children:"new"})," operator."]}),"\n",(0,t.jsx)(e.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"The decimal value of the bigint."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint("123")) --\x3e 123\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"biginttostring-__tostring",children:[(0,t.jsx)(e.code,{children:"bigint.tostring"}),", ",(0,t.jsx)(e.code,{children:"__tostring"})]}),"\n",(0,t.jsxs)(e.p,{children:["As seen above, the ",(0,t.jsx)(e.code,{children:"__tostring"})," metamethod provides a string representation of the Bigint in decimal."]}),"\n",(0,t.jsx)(e.h3,{id:"biginthex",children:(0,t.jsx)(e.code,{children:"bigint.hex"})}),"\n",(0,t.jsx)(e.p,{children:"Provides a hexadecimal representation of the Bigint."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint("420"):hex()) --\x3e 1A4\n'})}),"\n",(0,t.jsx)(e.h3,{id:"bigintbinary",children:(0,t.jsx)(e.code,{children:"bigint.binary"})}),"\n",(0,t.jsx)(e.p,{children:"Provides a binary representation of the Bigint."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint("420"):binary()) --\x3e 110100100\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"bigintadd-__add",children:[(0,t.jsx)(e.code,{children:"bigint.add"}),", ",(0,t.jsx)(e.code,{children:"__add"})]}),"\n",(0,t.jsx)(e.p,{children:"Adds two bigints together. Returns a new bigint."}),"\n",(0,t.jsxs)(e.h3,{id:"bigintsub-__sub",children:[(0,t.jsx)(e.code,{children:"bigint.sub"}),", ",(0,t.jsx)(e.code,{children:"__sub"})]}),"\n",(0,t.jsx)(e.p,{children:"Performs subtraction on two bigints. Returns a new bigint."}),"\n",(0,t.jsxs)(e.h3,{id:"bigintmul-__mul",children:[(0,t.jsx)(e.code,{children:"bigint.mul"}),", ",(0,t.jsx)(e.code,{children:"__mul"})]}),"\n",(0,t.jsx)(e.p,{children:"Performs multiplication on two bigints. Returns a new bigint."}),"\n",(0,t.jsx)(e.h3,{id:"bigintdiv",children:(0,t.jsx)(e.code,{children:"bigint.div"})}),"\n",(0,t.jsx)(e.p,{children:"Performs division on two bigints. Returns two new bigints: quotient and remainder."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint(10):div(new bigint(3))) --\x3e 3    1\n'})}),"\n",(0,t.jsx)(e.h3,{id:"__div",children:(0,t.jsx)(e.code,{children:"__div"})}),"\n",(0,t.jsx)(e.p,{children:"Performs division on two bigints. Returns a new bigint with the quotient."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint(10) / new bigint(3)) --\x3e 3\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"bigintmod-__mod",children:[(0,t.jsx)(e.code,{children:"bigint.mod"}),", ",(0,t.jsx)(e.code,{children:"__mod"})]}),"\n",(0,t.jsx)(e.p,{children:"Performs divison on two bigints. Returns a new bigint with the remainder."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint(10) % new bigint(3)) --\x3e 1\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"bigintpow-__pow",children:[(0,t.jsx)(e.code,{children:"bigint.pow"}),", ",(0,t.jsx)(e.code,{children:"__pow"})]}),"\n",(0,t.jsx)(e.p,{children:"Performs expontentiation on two bigints. Returns a new bigint."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint(2) ^ new bigint(10)) --\x3e 1024\n'})}),"\n",(0,t.jsx)(e.h3,{id:"bigintbitlength",children:(0,t.jsx)(e.code,{children:"bigint.bitlength"})}),"\n",(0,t.jsx)(e.p,{children:"Returns the position of the most significant set bit as a plain integer."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-pluto",children:'local bigint = require "pluto:bigint"\r\nprint(new bigint(420):bitlength()) --\x3e 9\n'})})]})}function g(i={}){const{wrapper:e}={...(0,d.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(a,{...i})}):a(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>r,x:()=>s});var t=n(6540);const d={},o=t.createContext(d);function r(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(d):i.components||d:r(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);