"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[5289],{60929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var s=n(74848),r=n(28453);const d={date:"2024-01-07",title:"Throw behaviour in X++",categories:["X++"],tags:["throw","error"],authors:"kome"},o=void 0,i={permalink:"/2024/01/07/ThrowBehaviour",source:"@site/blog/2024-01-07-ThrowBehaviour/index.md",title:"Throw behaviour in X++",description:"References",date:"2024-01-07T00:00:00.000Z",tags:[{inline:!0,label:"throw",permalink:"/tags/throw"},{inline:!0,label:"error",permalink:"/tags/error"}],readingTime:2.3866666666666667,hasTruncateMarker:!0,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://github.com/khahgm7.png",key:"kome",page:null}],frontMatter:{date:"2024-01-07",title:"Throw behaviour in X++",categories:["X++"],tags:["throw","error"],authors:"kome"},unlisted:!1,lastUpdatedBy:"Dynamics365",prevItem:{title:"Self-Update to latest quality update",permalink:"/2024/05/02/Self-Update-to-latest-quality-update"},nextItem:{title:"Using XppPrePostArgs to pass parameters through a method",permalink:"/2024/01/02/TrickXppPrePostArg"}},l={authorsImageUrls:[void 0]},c=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Let&#39;s do it",id:"lets-do-it",level:3},{value:"When we don&#39;t use <code>throw</code>",id:"when-we-dont-use-throw",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-ref/xpp-exceptions",children:"X++ exception handling"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsxs)(t.p,{children:["For the purpose of testing, I had this data set of CustGroup. This can also be found on Legal Entity ",(0,s.jsx)(t.code,{children:"USRT"})," of demo data comes with a new environment of Dynamics 365 Finance."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Customer group"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"Wholesale customers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"Major customers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"Retail customers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"40"}),(0,s.jsx)(t.td,{children:"Internet customers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"50"}),(0,s.jsx)(t.td,{children:"Employees"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"80"}),(0,s.jsx)(t.td,{children:"Wholesale customers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"90"}),(0,s.jsx)(t.td,{children:"Wholesale customers"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["I added two new buttons on ",(0,s.jsx)(t.code,{children:"CustGroup"})," form:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Bulk update Desc"}),": This button will loop through each and all records in the above table and update the Description to Description + ",(0,s.jsx)(t.code,{children:"+ Updated"}),' except one containing "Employee". They will become like below.']}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Customer group"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"Wholesale customers + Updated"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"Major customers + Updated"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"Retail customers + Updated"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"40"}),(0,s.jsx)(t.td,{children:"Internet customers + Updated"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"50"}),(0,s.jsx)(t.td,{children:"Employees"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"80"}),(0,s.jsx)(t.td,{children:"Wholesale customers + Updated"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"90"}),(0,s.jsx)(t.td,{children:"Wholesale customers + Updated"})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Reverse Bulk update Desc"}),": This button will update all Description back to its original by removing the word ",(0,s.jsx)(t.code,{children:"+ Updated"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"lets-do-it",children:"Let's do it"}),"\n",(0,s.jsxs)(t.h3,{id:"when-we-dont-use-throw",children:["When we don't use ",(0,s.jsx)(t.code,{children:"throw"})]}),"\n",(0,s.jsxs)(t.p,{children:["In the extension class named ",(0,s.jsx)(t.code,{children:"CustGroup_ButtonHandlers"}),", I put these codes which will handle the event of clicking those two buttons."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This type of ",(0,s.jsx)(t.code,{children:"FormControlEventHandler"})," will only be needed when you are extending a standard form. For a totally custom form, you can add a ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/dynamics.ax.application.formbuttoncontrol.clicked",children:"Clicked() method"})," method for any buttons on the form."]})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},d=s.createContext(r);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);