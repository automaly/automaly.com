"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9951],{65812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(85893),s=n(11151);const a={date:"2022-09-23",lastmod:"2022-09-23",title:"Add new fields to data entity or composite entity Dynamics 365",categories:["Integration"],tags:["composite entity","custom fields","data entity"],lightgallery:!0},o=void 0,d={id:"integration/odata/2022-09-23-add-custom-fields-to-composite-entity/index",title:"Add new fields to data entity or composite entity Dynamics 365",description:"Let's take a composite entity SalesOrderV3Entity as an example.",source:"@site/docs/02-integration/01-odata/2022-09-23-add-custom-fields-to-composite-entity/index.md",sourceDirName:"02-integration/01-odata/2022-09-23-add-custom-fields-to-composite-entity",slug:"/integration/odata/2022-09-23-add-custom-fields-to-composite-entity/",permalink:"/docs/integration/odata/2022-09-23-add-custom-fields-to-composite-entity/",draft:!1,unlisted:!1,tags:[{label:"composite entity",permalink:"/docs/tags/composite-entity"},{label:"custom fields",permalink:"/docs/tags/custom-fields"},{label:"data entity",permalink:"/docs/tags/data-entity"}],version:"current",frontMatter:{date:"2022-09-23",lastmod:"2022-09-23",title:"Add new fields to data entity or composite entity Dynamics 365",categories:["Integration"],tags:["composite entity","custom fields","data entity"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"All about Odata actions in Dynamics 365 Finance And Operations",permalink:"/docs/integration/odata/2021-05-25-All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/"},next:{title:"Business event Overview",permalink:"/docs/integration/business-event/"}},r={},l=[{value:"Scenario",id:"scenario",level:3},{value:"The Steps",id:"the-steps",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Let's take a composite entity ",(0,i.jsx)(t.code,{children:"SalesOrderV3Entity"})," as an example."]}),"\n",(0,i.jsx)(t.h3,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsxs)(t.p,{children:["I will need to add new fields to Sales order header that can be used in the composite entity ",(0,i.jsx)(t.code,{children:"SalesOrderV3Entity"}),".\r\nthe composite entity ",(0,i.jsx)(t.code,{children:"SalesOrderV3Entity"})," uses a standard data entity ",(0,i.jsx)(t.code,{children:"SalesOrderHeaderV2Entity"})," for sales order header; so, we need to extend ",(0,i.jsx)(t.code,{children:"SalesOrderHeaderV2Entity"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"the-steps",children:"The Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add new fields to Main table ",(0,i.jsx)(t.code,{children:"SalesTable"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add new fields to the entity ",(0,i.jsx)(t.code,{children:"SalesOrderHeaderV2Entity"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add new fields to the staging table ",(0,i.jsx)(t.code,{children:"SalesOrderHeaderV2Staging"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Build and sync."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Go to Workspaces -> Data Management -> Framework parameters -> Advanced entity configuration settings -> Refresh entity list."}),"\n",(0,i.jsxs)(t.p,{children:["You can automate the ",(0,i.jsx)(t.code,{children:"Refresh entity list"})," task ",(0,i.jsx)(t.a,{href:"https://d365fostuff.wordpress.com/2021/03/31/d365fo-integrations-auto-refresh-your-data-entity-list/",children:"here"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to Workspaces -> Data Management -> Data Entities, find ",(0,i.jsx)(t.strong,{children:"SALES ORDER HEADERS V2"})," and ",(0,i.jsx)(t.em,{children:"Generate mapping"})," for it.\r\nThe new custom fields will be generated for the entity mapping."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);