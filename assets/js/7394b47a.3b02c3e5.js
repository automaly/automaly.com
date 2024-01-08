"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[5874],{43209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(85893),n=r(11151);const o={date:"2024-01-02",title:"Using XppPrePostArgs to pass parameters through a method",categories:["X++"],tags:["XppPrePostArgs"],authors:"kome"},a=void 0,i={permalink:"/blog/2024/01/02/TrickXppPrePostArg",source:"@site/blog/2024-01-02-TrickXppPrePostArg/index.md",title:"Using XppPrePostArgs to pass parameters through a method",description:"References",date:"2024-01-02T00:00:00.000Z",formattedDate:"January 2, 2024",tags:[{label:"XppPrePostArgs",permalink:"/blog/tags/xpp-pre-post-args"}],readingTime:1.6133333333333333,hasTruncateMarker:!1,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://media.licdn.com/dms/image/C4D03AQGuOEU77XCmdQ/profile-displayphoto-shrink_100_100/0/1655606217720?e=1705536000&v=beta&t=Gy-ufD6rZD24efoO8WIcAxA4KARuXj036gZ1tdeOW24",key:"kome"}],frontMatter:{date:"2024-01-02",title:"Using XppPrePostArgs to pass parameters through a method",categories:["X++"],tags:["XppPrePostArgs"],authors:"kome"},unlisted:!1,prevItem:{title:"Throw behaviour in X++",permalink:"/blog/2024/01/07/ThrowBehaviour"},nextItem:{title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",permalink:"/blog/2024/01/04/NoDataInTmpTableForPreProcessReport"}},c={authorsImageUrls:[void 0]},d=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.dynamics.ax.xpp.xppprepostargs",children:"XppPrePostArgs Class (Microsoft.Dynamics.Ax.Xpp)"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,s.jsxs)(t.p,{children:["Take a very safe table to play around: ",(0,s.jsx)(t.code,{children:"CustGroup"})," (Customer Group), we will see how we can utilise ",(0,s.jsx)(t.code,{children:"XppPrePostArgs"})," here to save a parameter before the update is commited to the database and then take it out for us to execute futher logic."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["The tricky part is that such table does not even have an ",(0,s.jsx)(t.code,{children:"update"})," method."]})}),"\n",(0,s.jsxs)(t.p,{children:["Normally saying, if a method is available on the common, we can navigate to the design of it and copy the ",(0,s.jsx)(t.code,{children:"Pre-"})," and ",(0,s.jsx)(t.code,{children:"Post-Event Handler"})," from here."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:r(75609).Z+"",width:"1324",height:"721"})}),"\n",(0,s.jsxs)(t.p,{children:["Yet, in our example here, such method - ",(0,s.jsx)(t.code,{children:"update"})," - is not available. So, we can simply make a ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/extensibility/method-wrapping-coc",children:"Class extension"})," to wrap the ",(0,s.jsx)(t.code,{children:"common.update()"})," method. The code can be as simple as below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:"[ExtensionOf(tableStr(CustGroup))]\r\nfinal class CustGroup_Extension\r\n{\r\n    public void update()\r\n    {\r\n        next update();\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We will then take the original value of ",(0,s.jsx)(t.code,{children:"CustGroup.Name"})," and save it to the instance of ",(0,s.jsx)(t.code,{children:"XppPrePostArgs"}),". This part will be under the ",(0,s.jsx)(t.code,{children:"Pre-Event"})," method. The code is as below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'const static str OrigNameFld = "OrigName";\r\n\r\n[PreHandlerFor(classStr(CustGroup_Extension), methodStr(CustGroup_Extension, update))]\r\npublic static void CustGroup_Extension_Pre_update(XppPrePostArgs args)\r\n{\r\n    // Get custGroup buffer\r\n    // No super() has been called, so the changes have not been committed\r\n    CustGroup custGroup = args.getThis();\r\n\r\n    // Get original value of field Name\r\n    Description origName = custGroup.orig().Name;\r\n\r\n    // Save the value to args\r\n    args.setArg(\r\n        OrigNameFld\r\n        , origName\r\n    );\r\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After the changes are commited to the database, we will take the saved parm out and execute our logic. In this case, I will assess if the new ",(0,s.jsx)(t.code,{children:"CustGroup.Name"})," contains ",(0,s.jsx)(t.code,{children:'"Kome"'}),", if it does, revert it back to its original value and throw message. This part will be under ",(0,s.jsx)(t.code,{children:"Post-Event"})," method. The code is as below (I will show the whole class so we can see how the parm is passed by using ",(0,s.jsx)(t.code,{children:"setArg"})," and ",(0,s.jsx)(t.code,{children:"getArg"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'internal final class CustGroup_EventHandlers\r\n{\r\n    const static str OrigNameFld = "OrigName";\r\n\r\n    [PreHandlerFor(classStr(CustGroup_Extension), methodStr(CustGroup_Extension, update))]\r\n    public static void CustGroup_Extension_Pre_update(XppPrePostArgs args)\r\n    {\r\n        // Get custGroup buffer\r\n        // No super() has been called, so the changes have not been committed\r\n        CustGroup custGroup = args.getThis();\r\n\r\n        // Get original value of field Name\r\n        Description origName = custGroup.orig().Name;\r\n\r\n        // Save the value to args\r\n        args.setArg(\r\n            OrigNameFld\r\n            , origName\r\n        );\r\n    }\r\n\r\n    [PostHandlerFor(classStr(CustGroup_Extension), methodStr(CustGroup_Extension, update))]\r\n    public static void CustGroup_Extension_Post_update(XppPrePostArgs args)\r\n    {\r\n        // Get custGroup buffer and its column Name after updated\r\n        CustGroup newCustGroup = args.getThis();\r\n        Description newName = newCustGroup.Name;\r\n\r\n        // Assess and revert\r\n        if(Global::strContains(newName, "Kome"))\r\n        {\r\n            ttsbegin;\r\n            {\r\n                // Get the saved parm here and set it to the field value\r\n                newCustGroup.Name = args.getArg(OrigNameFld); \r\n                newCustGroup.doUpdate();\r\n            }\r\n            ttscommit;\r\n\r\n            Global::info(strFmt("New description - \\"%1\\" - contains \\"Kome\\". Reverted to its original.", newName));\r\n        }\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["And, so, we can test it out by setting a new ",(0,s.jsx)(t.code,{children:"Description"})," for a ",(0,s.jsx)(t.code,{children:"Customer group"}),"..."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:r(95460).Z+"",width:"696",height:"365"})}),"\n",(0,s.jsxs)(t.p,{children:["...upon clicking on button ",(0,s.jsx)(t.code,{children:"Save"}),", the original value will be updated and a message will be thrown."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Alt text",src:r(29e3).Z+"",width:"673",height:"372"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},95460:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/image-1-f8ac2eb0903aef13b35084402fdd836f.png"},29e3:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/image-2-8fab8a3dbf53969cdaf8cea7caed87de.png"},75609:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/image-9ac49196845ea45d8044d5affb926a03.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var s=r(67294);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);