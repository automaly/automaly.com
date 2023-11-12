"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[4528],{21975:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(85893),o=a(11151);const i={date:new Date("2020-05-10T00:00:00.000Z"),title:"Database Sync after data type on field has been changed",tags:["DB sync","Dynamics 365 finance and operations","InvalidOperationException"],categories:["FinOps","Troubleshooting","Database"],lightgallery:!0},r=void 0,s={id:"operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/index",title:"Database Sync after data type on field has been changed",description:"You will got an error like this when doing Database Synchronization after changing the data type of the field on the table:",source:"@site/docs/05-operation/03-troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/index.md",sourceDirName:"05-operation/03-troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed",slug:"/operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/",permalink:"/operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/",draft:!1,unlisted:!1,tags:[{label:"DB sync",permalink:"/tags/db-sync"},{label:"Dynamics 365 finance and operations",permalink:"/tags/dynamics-365-finance-and-operations"},{label:"InvalidOperationException",permalink:"/tags/invalid-operation-exception"}],version:"current",frontMatter:{date:"2020-05-10T00:00:00.000Z",title:"Database Sync after data type on field has been changed",tags:["DB sync","Dynamics 365 finance and operations","InvalidOperationException"],categories:["FinOps","Troubleshooting","Database"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Azure Storage Emulator 'Port conflict with existing application', Dynamics 365 finance and operations",permalink:"/operation/troubleshooting/2020-04-05-azure-storage-emulator-port-conflict-with-existing-application/"},next:{title:"A good example of Trace Parser, Visual Studio and Excel",permalink:"/operation/troubleshooting/2020-06-30-A-good-example-of-Trace-Parser,-Visual-Studio-and-Excel/"}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You will got an error like this when doing Database Synchronization after changing the data type of the field on the table:"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"InvalidOperationException: Table ... : Converting Field '..' of Type '..' to '..' is not support. Please drop the original field, sync the table and add new field with same name if needed."})}),"\n",(0,t.jsx)(n.p,{children:"Solution:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Drop the table and delete references from SQLDictionary"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE AXDB.dbo.NAMEOFTABLE\r\n\r\nDELETE\r\nFROM AXDB.dbo.SQLDICTIONARY\r\nWHERE TABLEID IN (\r\n SELECT TABLEID\r\n FROM SQLDICTIONARY\r\n WHERE NAME = 'NAMEOFTABLE'\r\n  AND FIELDID = 0\r\n)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Restart IIS"}),"\n",(0,t.jsx)(n.li,{children:"In VS 2015, run DB sync again."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Thank you for reading."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var t=a(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);