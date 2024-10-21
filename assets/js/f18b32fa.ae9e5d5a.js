"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>F});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,F=d["".concat(i,".").concat(m)]||d[m]||k[m]||o;return a?n.createElement(F,r(r({ref:t},c),{},{components:a})):n.createElement(F,r({ref:t},c))}));function F(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_position:3},r=void 0,s={unversionedId:"Runtime Environment/Socket",id:"Runtime Environment/Socket",title:"Socket",description:"Must be included via require. This library is not available in WASM builds of Pluto.",source:"@site/docs/Runtime Environment/Socket.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Socket",permalink:"/docs/Runtime Environment/Socket",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/Runtime Environment/Scheduler"},next:{title:"URL",permalink:"/docs/Runtime Environment/URL"}},i={},p=[{value:"<code>socket.connect</code>",id:"socketconnect",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Multitasking",id:"multitasking",level:4},{value:"<code>socket.listen</code>",id:"socketlisten",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>socket.bind</code>",id:"socketbind",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Socket Class",id:"socket-class",level:2},{value:"<code>socket.send</code>",id:"socketsend",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>socket.recv</code>",id:"socketrecv",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Multitasking",id:"multitasking-1",level:4},{value:"<code>socket.unrecv</code>",id:"socketunrecv",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>socket.starttls</code>",id:"socketstarttls",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Multitasking",id:"multitasking-2",level:4},{value:"<code>socket.close</code>",id:"socketclose",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Listener Class",id:"listener-class",level:2},{value:"<code>accept</code>",id:"accept",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Multitasking",id:"multitasking-3",level:4},{value:"<code>hasconnection</code>",id:"hasconnection",level:3}],c={toc:p},d="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Must be included via ",(0,l.kt)("inlineCode",{parentName:"p"},"require"),". This library is not available in WASM builds of Pluto."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"socketconnect"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.connect")),(0,l.kt)("p",null,"Establishes a TCP connection."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The host to connect to. Either an IPv4 or IPv6 address, or a domain name resolving to one."),(0,l.kt)("li",{parentName:"ol"},"The port to contact the host on.")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,"A socket instance on success. Nil on failure."),(0,l.kt)("h4",{id:"multitasking"},"Multitasking"),(0,l.kt)("p",null,"If called inside of a coroutine, this function yields. Otherwise, it blocks."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"socketlisten"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.listen")),(0,l.kt)("p",null,"Creates a new listener for the given port."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The port to listen on.")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"A listener instance on success. Nil on failure."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"socketbind"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.bind")),(0,l.kt)("p",null,"A convenience function that wraps ",(0,l.kt)("inlineCode",{parentName:"p"},"socket.listen"),", automatically accepting new clients and spinning up a coroutine for them."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A ",(0,l.kt)("a",{parentName:"li",href:"Scheduler"},"scheduler")," instance."),(0,l.kt)("li",{parentName:"ol"},"The port to listen on."),(0,l.kt)("li",{parentName:"ol"},"The callback function that will be called in a new coroutine for each client socket.")),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { scheduler"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket } "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"*"')),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," sched "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"scheduler"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"socket"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"bind"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(sched"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"80"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," |"),(0,l.kt)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"s"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"| "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"->"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," content "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, world!"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"send"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"HTTP/1.1 200 OK'),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"Connection: Close"),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'Content-Length: "'),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"..#"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"content"),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},".."),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},".."),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"content)")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sched"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"run"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"socket-class"},"Socket Class"),(0,l.kt)("p",null,"Socket instances are obtained by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"socket.connect")," (client), or from a listener (server)."),(0,l.kt)("h3",{id:"socketsend"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.send")),(0,l.kt)("p",null,"Sends data on a socket."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The socket instance."),(0,l.kt)("li",{parentName:"ol"},"The data to send.")),(0,l.kt)("h3",{id:"socketrecv"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.recv")),(0,l.kt)("p",null,"Receive data from a socket."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The socket instance.")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the socket is open: The oldest chunk of data received on the transport layer (TCP packet) or crypto layer (TLS record) as a string."),(0,l.kt)("li",{parentName:"ul"},"If the socket is closed: Nil.")),(0,l.kt)("h4",{id:"multitasking-1"},"Multitasking"),(0,l.kt)("p",null,"If a message is buffered, the function can return immediately. If not, it will yield if inside a coroutine, and block otherwise."),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:socket"')),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," s "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"connect"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"google.com"'),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"80"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"send"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"GET / HTTP/1.1'),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"Host: google.com"),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"recv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"())"))))),(0,l.kt)("h3",{id:"socketunrecv"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.unrecv")),(0,l.kt)("p",null,"Pushes a chunk of data to the front of the receive buffer, making it oldest for the purposes of ",(0,l.kt)("inlineCode",{parentName:"p"},"socket.recv"),"."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The socket instance."),(0,l.kt)("li",{parentName:"ol"},"The data to push.")),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:socket"')),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," sock "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"connect"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"google.com"'),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"80"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sock"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"unrecv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"World"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"sock"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"unrecv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(sock"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"recv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()) "),(0,l.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e Hello")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(sock"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"recv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()) "),(0,l.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e World"))))),(0,l.kt)("h3",{id:"socketstarttls"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.starttls")),(0,l.kt)("p",null,"Attempts to add the TLS crypto layer to the socket, making the transport layer a sole carrier for TLS traffic."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The socket instance."),(0,l.kt)("li",{parentName:"ol"},"The host name of the intended remote. This may be the same as what was passed to ",(0,l.kt)("inlineCode",{parentName:"li"},"socket.connect"),". This name must be on the certificate that the remote will send.")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"True on success. On failure, returns false and the socket is closed. If the socket is already using TLS, returns nil."),(0,l.kt)("h4",{id:"multitasking-2"},"Multitasking"),(0,l.kt)("p",null,"If called inside of a coroutine, this function yields. Otherwise, it blocks."),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:socket"')),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," s "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"connect"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto-lang.org"'),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"443"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"starttls"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto-lang.org"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Failed to establish secure connection."'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"send"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"GET / HTTP/1.1'),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"Host: pluto-lang.org"),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"Connection: close"),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"\\r\\n\\r\\n"),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"while"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},":="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," s"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"recv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"() "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data)")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,l.kt)("h3",{id:"socketclose"},(0,l.kt)("inlineCode",{parentName:"h3"},"socket.close")),(0,l.kt)("p",null,"Closes a socket."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The socket instance.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"listener-class"},"Listener Class"),(0,l.kt)("p",null,"Listener instances are obtained by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"socket.listen"),"."),(0,l.kt)("h3",{id:"accept"},(0,l.kt)("inlineCode",{parentName:"h3"},"accept")),(0,l.kt)("p",null,"Accepts an incoming client connection, waiting until there is one."),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"A new socket instance. The socket can be used as per usual, with the exception of the starttls function being unavailable."),(0,l.kt)("h4",{id:"multitasking-3"},"Multitasking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If there is an incoming client connection, this function returns immediately."),(0,l.kt)("li",{parentName:"ul"},"If there is not, it waits for one. Waiting means yielding if called inside a coroutine, and blocking otherwise.")),(0,l.kt)("h3",{id:"hasconnection"},(0,l.kt)("inlineCode",{parentName:"h3"},"hasconnection")),(0,l.kt)("p",null,"Checks if there is an incoming client connection. If this function returns true, the next call to ",(0,l.kt)("inlineCode",{parentName:"p"},"accept")," is guaranteed not to block or yield."),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:socket"')),(0,l.kt)("div",{parentName:"code",className:"line"}),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," l "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," socket"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"listen"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"80"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"or"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"error"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Failed to bind TCP/80"'),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"while"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"not"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," l"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"hasconnection"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"() "),(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"do"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#88846F"}},"-- Visit http://localhost to break this loop")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"os"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(l"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"accept"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()"),(0,l.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"recv"),(0,l.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"())"))))))}k.isMDXComponent=!0}}]);