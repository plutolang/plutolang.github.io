"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,u=d["".concat(i,".").concat(k)]||d[k]||m[k]||r;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},l=void 0,s={unversionedId:"Runtime Environment/HTTP",id:"Runtime Environment/HTTP",title:"HTTP",description:"Must be included via require.",source:"@site/docs/Runtime Environment/HTTP.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/HTTP",permalink:"/docs/Runtime Environment/HTTP",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Exception",permalink:"/docs/Runtime Environment/Exception"},next:{title:"JSON",permalink:"/docs/Runtime Environment/JSON"}},i={},p=[{value:"<code>http.request</code>",id:"httprequest",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Options",id:"options",level:4},{value:"Returns",id:"returns",level:4},{value:"Multitasking",id:"multitasking",level:4},{value:"<code>http.hasconnection</code>",id:"httphasconnection",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Multitasking",id:"multitasking-1",level:4},{value:"<code>http.closeconnections</code>",id:"httpcloseconnections",level:3},{value:"Multitasking",id:"multitasking-2",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Must be included via ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"httprequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"http.request")),(0,o.kt)("p",null,"Performs an HTTP request."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The URL to send a request to as a string. This parameter is optional in the sense that the options table (parameter 2) can be parameter 1 instead, but must have the "url" option then.'),(0,o.kt)("li",{parentName:"ol"},"The table of options. This parameter is optional if a URL was given.")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"method:")," The HTTP request method to use. Defaults to GET."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"headers:")," A table of headers, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'{ ["Content-Type"] = "application/json" }'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"body:")," An optional request payload. If provided, the ",(0,o.kt)("inlineCode",{parentName:"li"},"Content-Length")," header is set appropriately, and the method is set to POST unless otherwise specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"prefer_ipv6:"),' (Does nothing in WASM builds of Pluto.) When establishing a new connection, we attempt to lookup and connect via IPv4, retrying with IPv6 if needed. If this is set to true, we instead start with IPv6. This may be useful for "LAN" services that identify the LAN via IPv6 instead of IPv4.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dont_reuse:")," (Does nothing in WASM builds of Pluto.) Force the implementation not to reuse an existing socket, which may involve waiting. Instead a new connection is opened. This may be useful when many requests are headed to the same remote and you consider the time taken by a fresh handshake to be less than the time taken to wait to reuse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dont_make_reusable:")," (Does nothing in WASM builds of Pluto.) If a new connection to the remote was opened to carry out the request, close it again after the request. This is useful to avoid burdening the remote for one-off requests.")),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,"On success:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The response body as a string."),(0,o.kt)("li",{parentName:"ol"},"The status code as an integer."),(0,o.kt)("li",{parentName:"ol"},"A table of response headers. Empty in WASM builds of Pluto."),(0,o.kt)("li",{parentName:"ol"},"The status text as a string.")),(0,o.kt)("p",null,"On failure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Nil."),(0,o.kt)("li",{parentName:"ol"},"An approximate failure reason as an English string. Not available in WASM builds of Pluto.")),(0,o.kt)("h4",{id:"multitasking"},"Multitasking"),(0,o.kt)("p",null,"If called inside of a coroutine, this function yields. Otherwise, it blocks. In WASM builds of Pluto, it must be called inside of a coroutine that yields to the environment as otherwise the request cannot be dispatched."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The first request to a remote may take a while \u2014 especially with HTTPS \u2014 due to the TCP and TLS handshakes. We use keep-alive to keep the connection open, so subsequent requests to the same remote will be significantly faster.")),(0,o.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," http "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:http"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," body"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," status_code"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," headers"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," status_text "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," http"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"request"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"https://httpbin.org/anything"'),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(status_code"),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},".."),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'" "'),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},".."),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"status_text)")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"if"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"os.platform"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"!="),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"wasm"'),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"then")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(headers))")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(body)"))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"httphasconnection"},(0,o.kt)("inlineCode",{parentName:"h3"},"http.hasconnection")),(0,o.kt)("p",null,"Queries if a keep-alive connection is available for a remote. This function is not available in WASM builds of Pluto."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A partial URL identifying the remote. Partial because only the protocol, host, and port are used; additional components such as path are ignored.")),(0,o.kt)("h4",{id:"multitasking-1"},"Multitasking"),(0,o.kt)("p",null,"If called inside of a coroutine, this function may yield. Otherwise, it may block."),(0,o.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { http"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," scheduler } "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"*"')),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," sched "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"scheduler"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"addloop"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(http"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"hasconnection"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"https://httpbin.org"'),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"add"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"((http"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"request"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"https://httpbin.org/anything"'),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,o.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"run"),(0,o.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()"))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"httpcloseconnections"},(0,o.kt)("inlineCode",{parentName:"h3"},"http.closeconnections")),(0,o.kt)("p",null,"Closes all keep-alive connections like when closing the Lua state but in a non-blocking way. This function does nothing in WASM builds of Pluto."),(0,o.kt)("h4",{id:"multitasking-2"},"Multitasking"),(0,o.kt)("p",null,"This function must be called inside of a coroutine, as it will yield."))}m.isMDXComponent=!0}}]);