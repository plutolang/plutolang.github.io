"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2963],{5680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>N});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,N=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?t.createElement(N,o(o({ref:a},y),{},{components:n})):t.createElement(N,o({ref:a},y))}));function N(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9105:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const l={sidebar_position:3},o=void 0,s={unversionedId:"Runtime Environment/XML",id:"Runtime Environment/XML",title:"XML",description:"Must be included via require.",source:"@site/docs/Runtime Environment/XML.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/XML",permalink:"/docs/Runtime Environment/XML",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vector3",permalink:"/docs/Runtime Environment/Vector3"},next:{title:"FFI",permalink:"/docs/Runtime Environment/FFI"}},i={},p=[{value:"<code>xml.encode</code>",id:"xmlencode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>xml.decode</code>",id:"xmldecode",level:3},{value:"Parameters",id:"parameters-1",level:4}],y={toc:p},m="wrapper";function c(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Must be included via ",(0,r.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"xmlencode"},(0,r.yg)("inlineCode",{parentName:"h3"},"xml.encode")),(0,r.yg)("p",null,"Returns a string of XML."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A table or string to encode as XML."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"pretty")," \u2014 Whether to return a human-readable string of XML. Defaults to ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," xml "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:xml"')),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(xml"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"({")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    tag "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"root"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    children "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            tag "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"entry"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            attributes "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"                ["),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"type"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"] "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"primary"')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            }"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            children "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"                "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Text node"')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            }")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        }"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"            tag "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"entry"')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        }")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    }")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e <root>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     <entry type="primary">')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         Text node")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     </entry>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     <entry></entry>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e </root>"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"xmldecode"},(0,r.yg)("inlineCode",{parentName:"h3"},"xml.decode")),(0,r.yg)("p",null,"Returns a table representing the XML data."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"data")," \u2014 The XML data to decode."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"parser"),' \u2014 Which parser to use against the data. Can be "html", "xml" (default), or "lax" (XML but accepts attributes without ',(0,r.yg)("inlineCode",{parentName:"li"},"="),").")),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," xml "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:xml"')),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," root "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," xml"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"    <entries>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'        <entry type="primary">')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"            <name>primary</name>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"        </entry>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"    </entries>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"]]"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(root))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["tag"] = string(7) "entries",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["children"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         [1] = {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e             ["tag"] = string(5) "entry",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e             ["attributes"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e                 ["type"] = string(7) "primary",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e             },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e             ["children"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e                 [1] = {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e                     ["tag"] = string(4) "name",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e                     ["children"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e                         [1] = string(7) "primary",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e                     },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e                 },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e             },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))),(0,r.yg)("p",null,"For ease of use, the returned tables have an ",(0,r.yg)("inlineCode",{parentName:"p"},"__index")," metamethod:"),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- root is <entries>, so its first child is <entry>.")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- we make use of the metamethod to get to <name>:")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(root"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"children["),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"]"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"name))")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["tag"] = string(4) "name",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["children"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e         [1] = string(7) "primary",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))),(0,r.yg)("p",null,'If there is no single root element, a "body" element is implied as the root:'),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," xml "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:xml"')),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(xml"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"    <entry/>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"    <entry/>")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"]]"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["tag"] = string(4) "body",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["children"] = {')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         [1] = {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e             ["tag"] = string(5) "entry",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         [2] = {")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e             ["tag"] = string(5) "entry",')),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e         },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     },")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))))}c.isMDXComponent=!0}}]);