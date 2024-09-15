"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[1433],{42283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453);const a={title:"Overview delete action in Dyanmics AX 2012",description:"Overview delete action in Dyanmics AX 2012",categories:["AX2012"],date:new Date("2017-01-19T00:00:00.000Z"),tags:["delete acitons"]},o=void 0,c={id:"development/xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/index",title:"Overview delete action in Dyanmics AX 2012",description:"Overview delete action in Dyanmics AX 2012",source:"@site/docs/03-development/01-xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/index.md",sourceDirName:"03-development/01-xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012",slug:"/development/xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/",permalink:"/docs/development/xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"delete acitons",permalink:"/docs/tags/delete-acitons"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Overview delete action in Dyanmics AX 2012",description:"Overview delete action in Dyanmics AX 2012",categories:["AX2012"],date:"2017-01-19T00:00:00.000Z",tags:["delete acitons"]},sidebar:"tutorialSidebar",previous:{title:"How to block vendor and send email for notification.",permalink:"/docs/development/xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX/"},next:{title:"How to create main menu in Dynamics AX 2012",permalink:"/docs/development/xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/"}},r={},d=[{value:"1. None:",id:"1-none",level:4},{value:"2. Restricted:",id:"2-restricted",level:4},{value:"3. Cascade:",id:"3-cascade",level:4},{value:"4. Cascade + Restricted",id:"4-cascade--restricted",level:4}];function l(e){const t={a:"a",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"We normally create action delete in foreign table to make sure referential integrity in Logic and validation."}),"\n",(0,i.jsxs)(t.p,{children:["The delete action has the following options: ",(0,i.jsx)(t.strong,{children:"None, Restricted, Cascade, Cascade + Restricted"})]}),"\n",(0,i.jsx)(t.h4,{id:"1-none",children:"1. None:"}),"\n",(0,i.jsxs)(t.p,{children:["This has no effect, and effectively disables the delete action. This is useful if you want to specifically state ",(0,i.jsx)(t.em,{children:"do nothing"})," so that someone else doesn't try to correct what seems to be an omission."]}),"\n",(0,i.jsx)(t.h4,{id:"2-restricted",children:"2. Restricted:"}),"\n",(0,i.jsxs)(t.p,{children:["This will prevent the record from being deleted if there are records in the related table that match the selected relation. This occurs within the ",(0,i.jsx)(t.code,{children:"validateDelete"})," table event, which is called by the delete table event."]}),"\n",(0,i.jsx)(t.h4,{id:"3-cascade",children:"3. Cascade:"}),"\n",(0,i.jsx)(t.p,{children:"This will delete the record in the related table, based on the relation. Ex: A sales order line is of no use without a sales order. This is an extension of the delete table event."}),"\n",(0,i.jsx)(t.h4,{id:"4-cascade--restricted",children:"4. Cascade + Restricted"}),"\n",(0,i.jsxs)(t.p,{children:["This is a little special. In a two-table scenario, it is the same as ",(0,i.jsx)(t.em,{children:"Restricted"}),". It will stop the record from being deleted if a related record exists. But if the record is being deleted as part of a cascade from a table related to it, the records will be deleted."]}),"\n",(0,i.jsxs)(t.p,{children:["for more infomation about how to create ",(0,i.jsx)(t.code,{children:"DeleteActions"})," at ",(0,i.jsx)(t.a,{href:"http://msdn.microsoft.com/enus/library/bb315018.aspx",children:"MSDN"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);