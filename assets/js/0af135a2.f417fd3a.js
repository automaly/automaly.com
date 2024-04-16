"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[7311],{85085:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(85893),t=r(11151);const i={title:"Naming Conventions - Common Prefixes Dyanmics AX",description:"Naming Conventions - Common Prefixes Dyanmics AX",date:"2021-10-20",categories:["AX 2012","D365"],tags:["prefix"]},s=void 0,a={id:"operation/functional/2021-10-20-common-prefixes-dyanmics-ax/index",title:"Naming Conventions - Common Prefixes Dyanmics AX",description:"Naming Conventions - Common Prefixes Dyanmics AX",source:"@site/docs/05-operation/02-functional/2021-10-20-common-prefixes-dyanmics-ax/index.md",sourceDirName:"05-operation/02-functional/2021-10-20-common-prefixes-dyanmics-ax",slug:"/operation/functional/2021-10-20-common-prefixes-dyanmics-ax/",permalink:"/operation/functional/2021-10-20-common-prefixes-dyanmics-ax/",draft:!1,unlisted:!1,tags:[{label:"prefix",permalink:"/tags/prefix"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Naming Conventions - Common Prefixes Dyanmics AX",description:"Naming Conventions - Common Prefixes Dyanmics AX",date:"2021-10-20",categories:["AX 2012","D365"],tags:["prefix"]},sidebar:"tutorialSidebar",previous:{title:"Functional Tips",permalink:"/category/functional-tips"},next:{title:"Remove a person from an user Dynamics 365 Finance Operations",permalink:"/operation/functional/2022-09-28-remove-person-from-users/"}},c={},l=[{value:"Subject Area Object Prefix",id:"subject-area-object-prefix",level:2},{value:"Application Area Object Prefix",id:"application-area-object-prefix",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"subject-area-object-prefix",children:"Subject Area Object Prefix"}),"\n",(0,o.jsxs)(n.p,{children:["A subject area specific application object is prefixed with the name of the subject area the object belongs to, for example ",(0,o.jsx)(n.code,{children:"Cust*, Invent*, Ledger*, Proj*, Vend*"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Example",type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"WMSOrderSplit"}),"\r\n",(0,o.jsx)(n.code,{children:"CustBankAccount"}),"\r\n",(0,o.jsx)(n.code,{children:"CustBalanceCurrency"}),"\r\n",(0,o.jsx)(n.code,{children:"InventAccountType"})]})}),"\n",(0,o.jsx)(n.h2,{id:"application-area-object-prefix",children:"Application Area Object Prefix"}),"\n",(0,o.jsx)(n.p,{children:"An application area object is prefixed with the name of the application area the object belongs to."}),"\n",(0,o.jsx)(n.admonition,{title:"Example",type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Aif*"}),"\r\n",(0,o.jsx)(n.code,{children:"Sys*"})]})}),"\n",(0,o.jsx)(n.p,{children:"When creating new elements, ensure that you follow the recommended naming conventions. Any future development and maintenance will be much easier."}),"\n",(0,o.jsxs)(n.p,{children:["| ",(0,o.jsx)(n.strong,{children:"Ax"}),"      | Microsoft Dynamics AX typed data source      |\r\n| ",(0,o.jsx)(n.strong,{children:"Axd"}),"     | Microsoft Dynamics AX business document      |\r\n| ",(0,o.jsx)(n.strong,{children:"Asset"}),"   | Asset management                             |\r\n| ",(0,o.jsx)(n.strong,{children:"BOM"}),"     | Bill of material                             |\r\n| ",(0,o.jsx)(n.strong,{children:"COS"}),"     | Cost accounting                              |\r\n| ",(0,o.jsx)(n.strong,{children:"Cust"}),"    | Customer                                     |\r\n| ",(0,o.jsx)(n.strong,{children:"Dir"}),"     | Directory  global address book               |\r\n| ",(0,o.jsx)(n.strong,{children:"EcoRes"}),"  | Economic resources                           |\r\n| ",(0,o.jsx)(n.strong,{children:"HRM/HCM"})," | Human resources                              |\r\n| ",(0,o.jsx)(n.strong,{children:"Invent"}),"  | Inventory management                         |\r\n| ",(0,o.jsx)(n.strong,{children:"JMG"}),"     | Shop flor control                            |\r\n| ",(0,o.jsx)(n.strong,{children:"KM"}),"      | Knowledge management                         |\r\n| ",(0,o.jsx)(n.strong,{children:"Ledger"}),"  | General ledger                               |\r\n| ",(0,o.jsx)(n.strong,{children:"PBA"}),"     | Product builder                              |\r\n| ",(0,o.jsx)(n.strong,{children:"Prod"}),"    | Production                                   |\r\n| ",(0,o.jsx)(n.strong,{children:"Proj"}),"    | Project                                      |\r\n| ",(0,o.jsx)(n.strong,{children:"Purch"}),"   | Purchase                                     |\r\n| ",(0,o.jsx)(n.strong,{children:"Req"}),"     | Requirements                                 |\r\n| ",(0,o.jsx)(n.strong,{children:"Sales"}),"   | Sales                                        |\r\n| ",(0,o.jsx)(n.strong,{children:"SMA"}),"     | Service management                           |\r\n| ",(0,o.jsx)(n.strong,{children:"SMM"}),"     | Sales and marketing management               |\r\n| ",(0,o.jsx)(n.strong,{children:"Sys"}),"     | Application frameworks and development tools |\r\n| ",(0,o.jsx)(n.strong,{children:"Tax"}),"     | Tax engine                                   |\r\n| ",(0,o.jsx)(n.strong,{children:"Vend"}),"    | Vendor                                       |\r\n| ",(0,o.jsx)(n.strong,{children:"Web"}),"     | Web framework                                |\r\n| ",(0,o.jsx)(n.strong,{children:"WMS"}),"     | Warehouse management                         |\r\n| ",(0,o.jsx)(n.strong,{children:"PSA"}),"     | Professional Services Automation             |"]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var o=r(67294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);