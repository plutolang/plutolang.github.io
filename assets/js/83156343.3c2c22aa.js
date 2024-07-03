"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1652],{9448:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var t=r(4848),o=r(8453);const c={sidebar_position:3},i=void 0,d={id:"Runtime Environment/Vector3",title:"Vector3",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Vector3.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Vector3",permalink:"/docs/Runtime Environment/Vector3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"URL",permalink:"/docs/Runtime Environment/URL"},next:{title:"XML",permalink:"/docs/Runtime Environment/XML"}},l={},s=[{value:"<code>__construct</code>",id:"__construct",level:3},{value:"<code>__tostring</code>",id:"__tostring",level:3},{value:"<code>__add</code>, <code>__sub</code>, <code>__mul</code>, <code>__div</code>",id:"__add-__sub-__mul-__div",level:3},{value:"<code>__eq</code>",id:"__eq",level:3},{value:"<code>__len</code>, <code>magnitude</code>",id:"__len-magnitude",level:3},{value:"<code>sum</code>",id:"sum",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>dot</code>",id:"dot",level:3},{value:"<code>abs</code>",id:"abs",level:3},{value:"<code>normalized</code>, <code>normalised</code>",id:"normalized-normalised",level:3},{value:"<code>torot</code>",id:"torot",level:3},{value:"<code>lookat</code>",id:"lookat",level:3},{value:"<code>todir</code>",id:"todir",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Must be included via ",(0,t.jsx)(n.code,{children:"require"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__construct",children:(0,t.jsx)(n.code,{children:"__construct"})}),"\n",(0,t.jsx)(n.p,{children:"The constructor takes up to 3 arguments:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3())        --\x3e vector3(0, 0, 0)\r\nprint(new vector3(1))       --\x3e vector3(1, 1, 1)\r\nprint(new vector3(1, 2))    --\x3e vector3(1, 2, 0)\r\nprint(new vector3(1, 2, 3)) --\x3e vector3(1, 2, 3)\n'})}),"\n",(0,t.jsx)(n.p,{children:"There is also a shorthand for this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(vector3(1, 2, 3)) --\x3e vector3(1, 2, 3)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"__tostring",children:(0,t.jsx)(n.code,{children:"__tostring"})}),"\n",(0,t.jsxs)(n.p,{children:["As seen above, the ",(0,t.jsx)(n.code,{children:"__tostring"})," metamethod provides a string representation of the class."]}),"\n",(0,t.jsxs)(n.h3,{id:"__add-__sub-__mul-__div",children:[(0,t.jsx)(n.code,{children:"__add"}),", ",(0,t.jsx)(n.code,{children:"__sub"}),", ",(0,t.jsx)(n.code,{children:"__mul"}),", ",(0,t.jsx)(n.code,{children:"__div"})]}),"\n",(0,t.jsx)(n.p,{children:"Vector3 instances support arithmetic operations. The right-hand side can either be a Vector3 instance or a number. They create a new instance for the result."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(1) + new vector3(2)) --\x3e vector3(3, 3, 3)\r\nprint(new vector3(0, 0.6, 0.4) * 3)    --\x3e vector3(0, 1.8, 1.2)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"__eq",children:(0,t.jsx)(n.code,{children:"__eq"})}),"\n",(0,t.jsx)(n.p,{children:"Vector3 instances can effortlessly be compared to each other."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(2, 2, 2) == new vector3(2)) --\x3e true\r\nprint(new vector3(1, 2, 3) == new vector3(2)) --\x3e false\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"__len-magnitude",children:[(0,t.jsx)(n.code,{children:"__len"}),", ",(0,t.jsx)(n.code,{children:"magnitude"})]}),"\n",(0,t.jsxs)(n.p,{children:["To get the magnitude of a vector, you can either use the unary length operator (",(0,t.jsx)(n.code,{children:"#"}),") or call the ",(0,t.jsx)(n.code,{children:"magnitude"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vec = new (require"pluto:vector3") (1, 2, 3)\r\nprint(#vec)            --\x3e 3.7416573867739\r\nprint(vec:magnitude()) --\x3e 3.7416573867739\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sum",children:(0,t.jsx)(n.code,{children:"sum"})}),"\n",(0,t.jsxs)(n.p,{children:["Computes the sum of the ",(0,t.jsx)(n.code,{children:"x"}),", ",(0,t.jsx)(n.code,{children:"y"})," and ",(0,t.jsx)(n.code,{children:"z"})," fields."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vec = new (require"pluto:vector3") (1, 2, 3)\r\nprint(vec:sum()) --\x3e 6\n'})}),"\n",(0,t.jsx)(n.h3,{id:"min",children:(0,t.jsx)(n.code,{children:"min"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the value of axis with the lowest value."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vec = new (require"pluto:vector3") (1, 2, 3)\r\nprint(vec:min()) --\x3e 1\n'})}),"\n",(0,t.jsx)(n.h3,{id:"max",children:(0,t.jsx)(n.code,{children:"max"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the value of axis with the highest value."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vec = new (require"pluto:vector3") (1, 2, 3)\r\nprint(vec:max()) --\x3e 3\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dot",children:(0,t.jsx)(n.code,{children:"dot"})}),"\n",(0,t.jsxs)(n.p,{children:["Computes the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dot_product",children:"dot product"})," with the Vector3 given as an argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(1):dot(new vector3(2))) --\x3e 6\n'})}),"\n",(0,t.jsx)(n.h3,{id:"abs",children:(0,t.jsx)(n.code,{children:"abs"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a new Vector3 instance with each axis being an absolute value."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(-1, -2, 3):abs()) --\x3e vector3(1, 2, 3)\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"normalized-normalised",children:[(0,t.jsx)(n.code,{children:"normalized"}),", ",(0,t.jsx)(n.code,{children:"normalised"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns a new Vector3 instance that is a unit vector equivalent."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(0, 3, 0):normalized()) --\x3e vector3(0.0, 1.0, 0.0)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"torot",children:(0,t.jsx)(n.code,{children:"torot"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a rotation vector based on the direction given by the current vector."}),"\n",(0,t.jsx)(n.p,{children:"You can specify the up-axis and handedness of the coordinate system. By default, a left-handed Y-up system is used."}),"\n",(0,t.jsx)(n.p,{children:"The up-axis also determines which axis contains which value:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Y-Up: Pitch, Yaw, Roll"}),"\n",(0,t.jsx)(n.li,{children:"Z-Up: Pitch, Roll, Yaw"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(0, 1, 0):torot("y")) -- Y up. Pointing up -> vector3(90.0, 0.0, 0)\r\nprint(new vector3(0, 0, -1):torot("z")) -- Z up. Pointing down -> vector3(-90.0, 0, -0.0)\r\nprint(new vector3(1, 0, 0):torot("yr")) -- Y up, right-handed. Pointing right -> vector3(0.0, -90.0, 0)\r\nprint(new vector3(1, 0, 0):torot("yl")) -- Y up, left-handed. Pointing right -> vector3(0.0, 90.0, 0)\r\nprint(new vector3(1, 0, 0):torot("zr")) -- Z up, right-handed. Pointing right -> vector3(0.0, 0, 90.0)\r\nprint(new vector3(0, 0, 1):torot("y")) -- Y up. Pointing forward -> vector3(0.0, 0.0, 0)\r\nprint(new vector3(0, 0, -1):torot("y")) -- Y up. Pointing backward -> vector3(0.0, 180.0, 0)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"lookat",children:(0,t.jsx)(n.code,{children:"lookat"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a rotation vector based on the position given by the current vector and argument."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local v3 = require "pluto:vector3"\r\nprint(new v3(0):lookat(new v3(0, 1, 0), "y")) -- Y up. From origin to a point above -> vector3(90.0, 0.0, 0)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"todir",children:(0,t.jsx)(n.code,{children:"todir"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a direction vector based on the rotation given by the current vector."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local vector3 = require "pluto:vector3"\r\nprint(new vector3(90, 0, 0):todir("y")) -- Y up. Pointing up -> vector3(0.0, 1.0, 6.1232339957368e-17)\r\nprint(new vector3(0, 90, 0):todir("yl")) -- Y up, left-handed. Pointing right -> vector3(1.0, 0.0, 6.1232339957368e-17)\r\nprint(new vector3(0, 90, 0):todir("yr")) -- Y up, right-handed. Pointing right -> vector3(-1.0, 0.0, 6.1232339957368e-17)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(6540);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);