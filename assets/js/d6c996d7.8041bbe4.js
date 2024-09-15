"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[4143],{11260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(74848),s=r(28453);const o={date:"2024-01-07",title:"Throw behaviour in X++",categories:["X++"],tags:["throw","error"],authors:"kome"},i=void 0,d={permalink:"/2024/01/07/ThrowBehaviour",source:"@site/blog/2024-01-07-ThrowBehaviour/index.md",title:"Throw behaviour in X++",description:"References",date:"2024-01-07T00:00:00.000Z",tags:[{inline:!0,label:"throw",permalink:"/tags/throw"},{inline:!0,label:"error",permalink:"/tags/error"}],readingTime:2.3866666666666667,hasTruncateMarker:!0,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://github.com/khahgm7.png",key:"kome",page:null}],frontMatter:{date:"2024-01-07",title:"Throw behaviour in X++",categories:["X++"],tags:["throw","error"],authors:"kome"},unlisted:!1,lastUpdatedBy:"Dynamics365",prevItem:{title:"Self-Update to latest quality update",permalink:"/2024/05/02/Self-Update-to-latest-quality-update"},nextItem:{title:"Using XppPrePostArgs to pass parameters through a method",permalink:"/2024/01/02/TrickXppPrePostArg"}},c={authorsImageUrls:[void 0]},l=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Let&#39;s do it",id:"lets-do-it",level:3},{value:"When we don&#39;t use <code>throw</code>",id:"when-we-dont-use-throw",level:3},{value:"When we use <code>throw</code>",id:"when-we-use-throw",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-ref/xpp-exceptions",children:"X++ exception handling"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,n.jsx)(t.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,n.jsxs)(t.p,{children:["For the purpose of testing, I had this data set of CustGroup. This can also be found on Legal Entity ",(0,n.jsx)(t.code,{children:"USRT"})," of demo data comes with a new environment of Dynamics 365 Finance."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Customer group"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"Wholesale customers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"Major customers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"30"}),(0,n.jsx)(t.td,{children:"Retail customers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"40"}),(0,n.jsx)(t.td,{children:"Internet customers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"50"}),(0,n.jsx)(t.td,{children:"Employees"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"80"}),(0,n.jsx)(t.td,{children:"Wholesale customers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"Wholesale customers"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["I added two new buttons on ",(0,n.jsx)(t.code,{children:"CustGroup"})," form:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Bulk update Desc"}),": This button will loop through each and all records in the above table and update the Description to Description + ",(0,n.jsx)(t.code,{children:"+ Updated"}),' except one containing "Employee". They will become like below.']}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Customer group"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"Wholesale customers + Updated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"Major customers + Updated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"30"}),(0,n.jsx)(t.td,{children:"Retail customers + Updated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"40"}),(0,n.jsx)(t.td,{children:"Internet customers + Updated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"50"}),(0,n.jsx)(t.td,{children:"Employees"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"80"}),(0,n.jsx)(t.td,{children:"Wholesale customers + Updated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"Wholesale customers + Updated"})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Reverse Bulk update Desc"}),": This button will update all Description back to its original by removing the word ",(0,n.jsx)(t.code,{children:"+ Updated"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"lets-do-it",children:"Let's do it"}),"\n",(0,n.jsxs)(t.h3,{id:"when-we-dont-use-throw",children:["When we don't use ",(0,n.jsx)(t.code,{children:"throw"})]}),"\n",(0,n.jsxs)(t.p,{children:["In the extension class named ",(0,n.jsx)(t.code,{children:"CustGroup_ButtonHandlers"}),", I put these codes which will handle the event of clicking those two buttons."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This type of ",(0,n.jsx)(t.code,{children:"FormControlEventHandler"})," will only be needed when you are extending a standard form. For a totally custom form, you can add a ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/dynamics.ax.application.formbuttoncontrol.clicked",children:"Clicked() method"})," method for any buttons on the form."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:'internal final class CustGroup_ButtonHandlers\r\n{\r\n    [FormControlEventHandler(formControlStr(CustGroup, BulkUpdateDesc), FormControlEventType::Clicked)]\r\n    public static void BulkUpdateDesc_OnClicked(FormControl sender, FormControlEventArgs e)\r\n    {\r\n        FormDataSource custGroupDS = sender.formRun().dataSource(formDataSourceStr(CustGroup, CustGroup));\r\n        \r\n        ttsbegin;\r\n\r\n        for(\r\n            CustGroup custGroup =\r\n                custGroupDS.getFirst() ?\r\n                custGroupDS.getFirst() :\r\n                custGroupDS.cursor()\r\n            ; custGroup\r\n            ; custGroup = custGroupDS.getNext()\r\n        )\r\n        {\r\n            if(strContains(custGroup.Name, "Employees"))\r\n            {\r\n                // Show an error here but do not stop the loop\r\n                error("This group\'s name contains \\"Employees\\". Operation skipped but continue until the end of loop.");\r\n\r\n                // Continue the loop by (1) skipping below code and (2) getting the next record from the DS\r\n                continue;\r\n            }\r\n\r\n            custGroup.Name = custGroup.Name + " + Updated";\r\n            custGroup.doUpdate();\r\n        }\r\n\r\n        ttscommit;\r\n\r\n        custGroupDS.research(true);\r\n    }\r\n    \r\n    [FormControlEventHandler(formControlStr(CustGroup, BulkRevUpdateDesc), FormControlEventType::Clicked)]\r\n    public static void BulkRevUpdateDesc_OnClicked(FormControl sender, FormControlEventArgs e)\r\n    {\r\n        FormDataSource custGroupDS = sender.formRun().dataSource(formDataSourceStr(CustGroup, CustGroup));\r\n\r\n        ttsbegin;\r\n\r\n        for(\r\n            CustGroup custGroup =\r\n                custGroupDS.getFirst() ?\r\n                custGroupDS.getFirst() :\r\n                custGroupDS.cursor()\r\n            ; custGroup\r\n            ; custGroup = custGroupDS.getNext()\r\n        )\r\n        {\r\n            custGroup.Name = strReplace(custGroup.Name, " + Updated", "");\r\n            custGroup.doUpdate();\r\n        }\r\n\r\n        ttscommit;\r\n\r\n        custGroupDS.research(true);\r\n    }\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Notice the part"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:'if(strContains(custGroup.Name, "Employees"))\r\n{\r\n    // Show an error here but do not stop the loop\r\n    error("This group\'s name contains \\"Employees\\". Operation skipped but continue until the end of loop.");\r\n\r\n    // Continue the loop by (1) skipping below code and (2) getting the next record from the DS\r\n    continue;\r\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This part will do the job of updating the Description of the CustGroup record. Yet, I am calling ",(0,n.jsx)(t.code,{children:"error"}),' to display a message (which is speicifed as an "error") to users.']}),"\n",(0,n.jsxs)(t.p,{children:["Now, let's click the ",(0,n.jsx)(t.code,{children:"Bulk update Desc"})," button. You will see the error message and the updated description. We can tell that the loop was not stopped."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:r(87307).A+"",width:"686",height:"369"})}),"\n",(0,n.jsxs)(t.h3,{id:"when-we-use-throw",children:["When we use ",(0,n.jsx)(t.code,{children:"throw"})]}),"\n",(0,n.jsxs)(t.p,{children:["Let's change the part mentioned above to this one. Notice that we now will use ",(0,n.jsx)(t.code,{children:"throw"})," before ",(0,n.jsx)(t.code,{children:"error"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:'if(strContains(custGroup.Name, "Employees"))\r\n{\r\n    // Show an error here and break the loop\r\n    throw error("This group\'s name contains \\"Employees\\". Operation broken.");\r\n\r\n    // Below code line is actually never called because the throw will stop the code execution immediately\r\n    continue;\r\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Clicking ",(0,n.jsx)(t.code,{children:"Bulk update Desc"})," will result in this."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:r(42717).A+"",width:"799",height:"379"})}),"\n",(0,n.jsxs)(t.p,{children:["Yet, upon refreshing the form, we will see that no transaction within the same ",(0,n.jsx)(t.code,{children:"tts"})," level was actually committed."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:r(58950).A+"",width:"802",height:"380"})}),"\n",(0,n.jsxs)(t.p,{children:["Now if we bring the ",(0,n.jsx)(t.code,{children:"tts"})," inside the loop."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:'{\r\n    if(strContains(custGroup.Name, "Employees"))\r\n    {\r\n        // Show an error here and break the loop\r\n        throw error("This group\'s name contains \\"Employees\\". Operation broken.");\r\n\r\n        // Below code line is actually never called because the throw will stop the code execution immediately\r\n        continue;\r\n    }\r\n\r\n    ttsbegin;\r\n\r\n    custGroup.Name = custGroup.Name + " + Updated";\r\n    custGroup.doUpdate();\r\n\r\n    ttscommit;\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Upop refreshing the form, we will see what transaction were commited and what part of the loop was broken."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:r(44047).A+"",width:"793",height:"371"})}),"\n",(0,n.jsxs)(t.p,{children:["So, that's how ",(0,n.jsx)(t.code,{children:"throw"})," works in X++."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},42717:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/image-1-209c0bb4db028b19e6b9d77a0e477efe.png"},58950:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/image-2-9b99948692ef5fe69b8ef8707b68ac34.png"},44047:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/image-3-ce59dc84f39ef376679d2cfcd822eaad.png"},87307:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/image-a63ff1cd1928ab2665c5316fb58c5a99.png"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);