"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[2377],{47730:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(74848),o=a(28453);const i={sidebar_position:2},s="OData - Data Entity",r={id:"integration/odata/index",title:"OData - Data Entity",description:"Odata is an open source protocol to serve and consume interoperable data using common query operations with RESTful APIs. D365FO exposes all its public data entities as OData endpoints which can then be accessed using following URI format :",source:"@site/docs/02-integration/02-odata/index.md",sourceDirName:"02-integration/02-odata",slug:"/integration/odata/",permalink:"/docs/integration/odata/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Dynamics365",lastUpdatedAt:1707438458e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integration Overview",permalink:"/docs/integration/D365-and-Dataverse-Integration-Overview"},next:{title:"Insert multiple records in a single transaction using Odata from Postman",permalink:"/docs/integration/odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman/"}},d={},c=[];function l(t){const e={a:"a",code:"code",h1:"h1",header:"header",p:"p",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"odata---data-entity",children:"OData - Data Entity"})}),"\n",(0,n.jsx)(e.p,{children:"Odata is an open source protocol to serve and consume interoperable data using common query operations with RESTful APIs. D365FO exposes all its public data entities as OData endpoints which can then be accessed using following URI format :"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"https://<d365fourl>/data/<dataentity>"})}),"\n",(0,n.jsx)(e.p,{children:"OData provides a quick, codeless data integration method with many data query options and CRUD operations. You can use its open standard query string language to query your data and do data manipulations using standard Odata CRUD commands, all using just simple and open standard REST calls. If you would like to call a custom method within your data entity, this is also supported by exposing custom actions with your OData entities, so the commands are also extendable to a certain point."}),"\n",(0,n.jsx)(e.p,{children:"You can definitely use OData for your own integration projects, but there are also many OData-Ready software available today, and these can directly be connected to D365FO Odata endpoints. Microsoft Power BI also supports OData connection and you can connect Power BI using OData if you feel lazy with setting up faster data integration possibilities methods, like Entity Store and Data Lake integrations."}),"\n",(0,n.jsx)(e.p,{children:"Although it looks like the optimum way of data integration with D365FO, there are some drawbacks involved. OData queries and data operations are executed really slow and data reading may take ages if you try to retrieve a large entity. OData is mainly designed for simple CRUD operations and simpler queries. If you need to execute complex queries, like complex joins and lookups for example, you may start to hit its limits.. Although you can add some custom actions to extend available OData commands with your own ones, complex operations and business logic unfortunately do not go very well with it. It may be required to place this complex logic on consumer application if you decided to integrate it using OData."}),"\n",(0,n.jsx)(e.p,{children:"There is also a rather new feature of D365FO to throttle calls to OData endpoints by giving priorities to them, to avoid system lockdowns that might be caused by frequent OData calls. You can read more about it from the link below :"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/priority-based-throttling",children:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/priority-based-throttling"})}),"\n",(0,n.jsx)(e.p,{children:"Remember you can also use OData endpoints in Azure API manager, just like custom services which I will mention soon."}),"\n",(0,n.jsxs)(e.p,{children:["ADVANTAGES\r\nOpen and standard data integration protocol with many data inquiry and CRUD commands out of the box\r\nSupport for extending with custom data actions\r\nOData-ready software can directly be integrated using existing endpoints\r\nDISADVANTAGES\r\nSlow\u2026\r\nNot suitable to be used with complex business logic and queries\r\nMore info: ",(0,n.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/odata",children:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/odata"})]})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},28453:(t,e,a)=>{a.d(e,{R:()=>s,x:()=>r});var n=a(96540);const o={},i=n.createContext(o);function s(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);