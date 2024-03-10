"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6996],{4904:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var l=r(4848),t=r(8453);const a={sidebar_position:3},s=void 0,i={id:"Beginner's Guide",title:"Beginner's Guide",description:"This article is for people completely unfamiliar with Lua who want to jump right into Pluto.",source:"@site/docs/Beginner's Guide.md",sourceDirName:".",slug:"/Beginner's Guide",permalink:"/docs/Beginner's Guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Editor Integration",permalink:"/docs/Editor Integration"},next:{title:"New Operators",permalink:"/docs/New Operators"}},o={},d=[{value:"Your first program",id:"your-first-program",level:2},{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Simple arithmetic",id:"simple-arithmetic",level:2},{value:"Try It Yourself",id:"try-it-yourself-1",level:4},{value:"Variables",id:"variables",level:2},{value:"Try It Yourself",id:"try-it-yourself-2",level:4},{value:"Conditionals",id:"conditionals",level:2},{value:"Try It Yourself",id:"try-it-yourself-3",level:4},{value:"Loops",id:"loops",level:2},{value:"Try It Yourself",id:"try-it-yourself-4",level:4},{value:"Try It Yourself",id:"try-it-yourself-5",level:4},{value:"Tables",id:"tables",level:2},{value:"Try It Yourself",id:"try-it-yourself-6",level:4},{value:"Try It Yourself",id:"try-it-yourself-7",level:4},{value:"Calculating K/D ratios",id:"calculating-kd-ratios",level:2},{value:"Try It Yourself",id:"try-it-yourself-8",level:4},{value:"Encapsulation in functions",id:"encapsulation-in-functions",level:2},{value:"Try It Yourself",id:"try-it-yourself-9",level:4},{value:"Local variables",id:"local-variables",level:2},{value:"Try It Yourself",id:"try-it-yourself-10",level:4},{value:"Nil values",id:"nil-values",level:2},{value:"Try It Yourself",id:"try-it-yourself-11",level:4},{value:"Where to go from here",id:"where-to-go-from-here",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"This article is for people completely unfamiliar with Lua who want to jump right into Pluto."}),"\n",(0,l.jsx)(n.p,{children:"For people already familiar with Lua, the rest of this documentation should be a good introduction to Pluto."}),"\n",(0,l.jsx)(n.h2,{id:"your-first-program",children:"Your first program"}),"\n",(0,l.jsx)(n.p,{children:"Let's start simple by saying hello to the world."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'print("Hello, world!")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=print(%22Hello%2C%20world!%22)",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.p,{children:'Participation using the "try it yourself" links is recommended \u2014 not just running the code, but also modifying it.'}),"\n",(0,l.jsxs)(n.p,{children:['As you can see, this program prints "Hello, world!", and it does so by calling the builtin ',(0,l.jsx)(n.code,{children:"print"})," function from Lua."]}),"\n",(0,l.jsx)(n.h2,{id:"simple-arithmetic",children:"Simple arithmetic"}),"\n",(0,l.jsx)(n.p,{children:"Of course, we want more than a glorified text file, so let's get a bit more programmatic with some arithmetics."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'print($"2 + 2 is {2 + 2}")\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Notice the ",(0,l.jsx)(n.code,{children:"$"})," before the string; this allows us to use curly brackets to embed expressions directly into the string. In this case, we embed the expression ",(0,l.jsx)(n.code,{children:"2 + 2"}),", which evaluates to 4."]}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-1",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=print(%24%222%20%2B%202%20is%20%7B2%20%2B%202%7D%22)",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,l.jsx)(n.p,{children:"Variables in Lua/Pluto are global by default and are assigned trivially:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'a = 2\r\nprint($"a is {a}")\r\na += 2\r\nprint($"I added 2 and now it\'s {a}")\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Notice how we still have a ",(0,l.jsx)(n.code,{children:"$"})," before the strings but this time we're embedding the expression ",(0,l.jsx)(n.code,{children:"a"})," which simply evaluates to the value of ",(0,l.jsx)(n.code,{children:"a"})," at that particular moment."]}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-2",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=a%20%3D%202%0D%0Aprint(%24%22a%20is%20%7Ba%7D%22)%0D%0Aa%20%2B%3D%202%0D%0Aprint(%24%22I%20added%202%20and%20now%20it's%20%7Ba%7D%22)",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,l.jsx)(n.p,{children:"Programming isn't just about arithmetics, tho, so let's get into the flow \u2014 or the \"control flow\", as computer scientists would call it."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'a = 1\r\nb = 2\r\n\r\nif a + b == 4 then\r\n    print("The sum is 4!")\r\nelse\r\n    print("The sum is not 4. Could you change a or b to fix it?")\r\nend\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-3",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=a%20%3D%201%0D%0Ab%20%3D%202%0D%0A%0D%0Aif%20a%20%2B%20b%20%3D%3D%204%20then%0D%0A%20%20%20%20print(%22The%20sum%20is%204!%22)%0D%0Aelse%0D%0A%20%20%20%20print(%22The%20sum%20is%20not%204.%20Could%20you%20change%20a%20or%20b%20to%20fix%20it%3F%22)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsxs)(n.p,{children:["As you see, the message being printed changes based on whether the expression ",(0,l.jsx)(n.code,{children:"a + b == 4"})," is ",(0,l.jsx)(n.em,{children:"true"})," or ",(0,l.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,l.jsxs)(n.p,{children:["We can't just change ",(0,l.jsx)(n.em,{children:"if"})," code will run, but also how often. For example, we could make a script that counts from 1 to 10:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"for i=1, 10 do\r\n    print(i)\r\nend\n"})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-4",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=for%20i%3D1%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.p,{children:"We can also change the interval. For example, count from 0 to 100 in intervals of 10:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"for i=0, 100, 10 do\r\n    print(i)\r\nend\n"})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-5",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=for%20i%3D0%2C%20100%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.h2,{id:"tables",children:"Tables"}),"\n",(0,l.jsx)(n.p,{children:"Alright, you know the basic control flow, and data types (numbers and string), so let's look at a more interesting data type: tables. These can store organised data, for example, scores for each player in a game:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'players = {\r\n    ["John"] = 15,\r\n    ["Jane"] = 10,\r\n    ["Bob"] = 12,\r\n}\r\nfor name, score in players do\r\n    print($"{name} has a score of {score}.")\r\nend\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-6",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%2012%2C%0D%0A%7D%0D%0Afor%20name%2C%20score%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20score%20of%20%7Bscore%7D.%22)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsxs)(n.p,{children:["Notice how we're still using a for-loop, but this time we're ",(0,l.jsx)(n.em,{children:"iterating"})," over the our players table instead of a range of numbers."]}),"\n",(0,l.jsx)(n.p,{children:"We can also store tables within tables, so we could have more data than just a single number for each player:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'players = {\r\n    ["John"] = {\r\n        ["kills"] = 15,\r\n        ["deaths"] = 5,\r\n    },\r\n    ["Jane"] = {\r\n        ["kills"] = 10,\r\n        ["deaths"] = 8,\r\n    },\r\n    ["Bob"] = {\r\n        ["kills"] = 12,\r\n        ["deaths"] = 8,\r\n    },\r\n}\r\nfor name, data in players do\r\n    print($"{name} has {data.kills} kills and {data.deaths} deaths.")\r\nend\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-7",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20%7Bdata.kills%7D%20kills%20and%20%7Bdata.deaths%7D%20deaths.%22)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.h2,{id:"calculating-kd-ratios",children:"Calculating K/D ratios"}),"\n",(0,l.jsx)(n.p,{children:"Let's put all of what we've learned so far to the test and make a program that actually does some work for us instead of the other way around."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'players = {\r\n    ["John"] = {\r\n        ["kills"] = 15,\r\n        ["deaths"] = 5,\r\n    },\r\n    ["Jane"] = {\r\n        ["kills"] = 10,\r\n        ["deaths"] = 8,\r\n    },\r\n    ["Bob"] = {\r\n        ["kills"] = 12,\r\n        ["deaths"] = 8,\r\n    },\r\n}\r\n-- Add "kd" field to each player\r\nfor players as player do\r\n    player.kd = player.kills / player.deaths\r\nend\r\n-- Print\r\nfor name, data in players do\r\n    print($"{name} has a K/D of {data.kd}.")\r\nend\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-8",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0A--%20Add%20%22kd%22%20field%20to%20each%20player%0D%0Afor%20players%20as%20player%20do%0D%0A%20%20%20%20player.kd%20%3D%20player.kills%20%2F%20player.deaths%0D%0Aend%0D%0A--%20Print%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.p,{children:"Notice another variant of the for-loop: The for-as loop. This is handy for calculating the K/D since we don't care about the name."}),"\n",(0,l.jsx)(n.h2,{id:"encapsulation-in-functions",children:"Encapsulation in functions"}),"\n",(0,l.jsxs)(n.p,{children:["We've been using functions quite a bit \u2014 or at least, the ",(0,l.jsx)(n.code,{children:"print"})," function \u2014 so it's about time we make our own function."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:'function calculate_kd(plys: table)\r\n    for plys as ply do\r\n        ply.kd = ply.kills / ply.deaths\r\n    end\r\nend\r\nplayers = {\r\n    ["John"] = {\r\n        ["kills"] = 15,\r\n        ["deaths"] = 5,\r\n    },\r\n    ["Jane"] = {\r\n        ["kills"] = 10,\r\n        ["deaths"] = 8,\r\n    },\r\n    ["Bob"] = {\r\n        ["kills"] = 12,\r\n        ["deaths"] = 8,\r\n    },\r\n}\r\ncalculate_kd(players)\r\nfor name, data in players do\r\n    print($"{name} has a K/D of {data.kd}.")\r\nend\n'})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-9",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=function%20calculate_kd(plys%3A%20table)%0D%0A%20%20%20%20for%20plys%20as%20ply%20do%0D%0A%20%20%20%20%20%20%20%20ply.kd%20%3D%20ply.kills%20%2F%20ply.deaths%0D%0A%20%20%20%20end%0D%0Aend%0D%0Aplayers%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Acalculate_kd(players)%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.p,{children:"And as you can see, the code behaves exactly the same as before! Perhaps not very interesting, but better than the alternative."}),"\n",(0,l.jsx)(n.p,{children:"Let's break down what exactly is happening:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["On the first line, we declare a function with the name ",(0,l.jsx)(n.code,{children:"calculate_kd"})," and a parameter ",(0,l.jsx)(n.code,{children:"plys"})," of type ",(0,l.jsx)(n.code,{children:"table"}),". Note that the ",(0,l.jsx)(n.code,{children:": table"})," part is optional, but it's always good to be explicit about assumptions! (Didn't think you'd find relationship advice here, did you?)"]}),"\n",(0,l.jsxs)(n.li,{children:["Then near the end of the script, we call ",(0,l.jsx)(n.code,{children:"calculate_kd"})," with our ",(0,l.jsx)(n.code,{children:"players"})," table as an argument."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"local-variables",children:"Local variables"}),"\n",(0,l.jsxs)(n.p,{children:["Next, I'd like to introduce local variables, but you've actually already seen them! In the example above, the ",(0,l.jsx)(n.code,{children:"calculate_kd"})," function's ",(0,l.jsx)(n.code,{children:"plys"})," argument is a local variable, because it is only available within that function's body."]}),"\n",(0,l.jsxs)(n.p,{children:["However, other than having a local variable by virtue of it being a function parameter, we can also manually define one just like we've already defined variables except we put ",(0,l.jsx)(n.code,{children:"local"})," before it:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"local a = 1\r\nprint(a)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-10",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20a%20%3D%201%0D%0Aprint(a)",children:"Try It Yourself"})}),"\n",(0,l.jsx)(n.h2,{id:"nil-values",children:"Nil values"}),"\n",(0,l.jsx)(n.p,{children:"However, what happens when we use a variable we didn't define, or we don't give it a value?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"local no_value_given\r\nprint(no_value_given)\r\nprint(never_defined)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"try-it-yourself-11",children:(0,l.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20no_value_given%0D%0Aprint(no_value_given)%0D%0Aprint(never_defined)%0D%0A",children:"Try It Yourself"})}),"\n",(0,l.jsxs)(n.p,{children:['As you can see, this prints "nil" two times, so that\'s the answer \u2014 we get ',(0,l.jsx)(n.code,{children:"nil"})," in both cases. ",(0,l.jsx)(n.code,{children:"nil"})," is a special type that is used as the result of valueless expressions."]}),"\n",(0,l.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where to go from here"}),"\n",(0,l.jsx)(n.p,{children:"You should now have an understanding of the fundemantals of Pluto. If you want to learn more, the rest of this documentation is certainly a good place to learn more about Pluto."}),"\n",(0,l.jsx)(n.p,{children:"You could start with some of the Pluto features we already made use of in this guide:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/New%20Features/String%20Interpolation",children:"String Interpolation"})," (",(0,l.jsx)(n.code,{children:"$"}),"-strings)"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/New%20Features/For-As%20Loop",children:"For-As Loop"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/New%20Features/Type%20Hinting",children:"Type Hinting"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If you want to understand the underpinnings of Pluto a bit better, ",(0,l.jsx)(n.a,{href:"https://www.lua.org/manual/5.4/",children:"the Lua manual"})," would be a good place to look."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var l=r(6540);const t={},a=l.createContext(t);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);