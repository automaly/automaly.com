"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[5488],{95469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(85893),i=n(11151);const s={date:"2020-01-01",lastmod:"2020-01-01",title:"Microsoft Dynamics AX 2012 Update Process",categories:["AX2012","Upgrade"],tags:["AX2012","Upgrade"],lightgallery:!0},r=void 0,o={id:"ax2012-archive/miscellaneous/2020-01-01-microsoft-dynamics-ax-2012-update-process/index",title:"Microsoft Dynamics AX 2012 Update Process",description:"What is an Update?",source:"@site/docs/07-ax2012-archive/02-miscellaneous/2020-01-01-microsoft-dynamics-ax-2012-update-process/index.md",sourceDirName:"07-ax2012-archive/02-miscellaneous/2020-01-01-microsoft-dynamics-ax-2012-update-process",slug:"/ax2012-archive/miscellaneous/2020-01-01-microsoft-dynamics-ax-2012-update-process/",permalink:"/ax2012-archive/miscellaneous/2020-01-01-microsoft-dynamics-ax-2012-update-process/",draft:!1,unlisted:!1,tags:[{label:"AX2012",permalink:"/tags/ax-2012"},{label:"Upgrade",permalink:"/tags/upgrade"}],version:"current",frontMatter:{date:"2020-01-01",lastmod:"2020-01-01",title:"Microsoft Dynamics AX 2012 Update Process",categories:["AX2012","Upgrade"],tags:["AX2012","Upgrade"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Dynamics 365 Finance Operations upgrade questionaire",permalink:"/ax2012-archive/miscellaneous/2020-01-01-ax-upgrade-assessment-clarification-questions/"}},l={},d=[{value:"What is an Update?",id:"what-is-an-update",level:2},{value:"1. Types of Hotfixes",id:"1-types-of-hotfixes",level:3},{value:"2. How can I tell if a binary update requires a schema update, and model store reinitialization?",id:"2-how-can-i-tell-if-a-binary-update-requires-a-schema-update-and-model-store-reinitialization",level:3},{value:"3. How can I tell if an application update contains a report or web part?",id:"3-how-can-i-tell-if-an-application-update-contains-a-report-or-web-part",level:3},{value:"Installation Order",id:"installation-order",level:2},{value:"Detailed Update Process",id:"detailed-update-process",level:2},{value:"Update Tips and Tricks",id:"update-tips-and-tricks",level:2}];function c(e){const t={em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-an-update",children:"What is an Update?"}),"\n",(0,a.jsx)(t.p,{children:"Updates include hotfixes, cumulative updates, and feature packs."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Hotfix"}),": A fix or set of fixes that address a specific issue, problem, or customer scenario."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Cumulative update"}),": An update that contains all previous hotfixes to date."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Feature pack"}),": A group of updates that relate to a feature area or group of functionality. Contains design changes."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1-types-of-hotfixes",children:"1. Types of Hotfixes"}),"\n",(0,a.jsx)(t.p,{children:"To determine which type of update is in a package, download the package, and then extract contents and review\r\nthem to determine which type of update it is."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Image",src:n(84834).Z+"",title:"Types of Hotfixes",width:"1024",height:"351"})}),"\n",(0,a.jsx)(t.h3,{id:"2-how-can-i-tell-if-a-binary-update-requires-a-schema-update-and-model-store-reinitialization",children:"2. How can I tell if a binary update requires a schema update, and model store reinitialization?"}),"\n",(0,a.jsx)(t.p,{children:"The KB article will indicate  that a hotfix requires a schema update, and that you should reinitialize the model store.\r\nYou should assume that all cumulative updates require a schema update, and reinitialize the model store."}),"\n",(0,a.jsx)(t.h3,{id:"3-how-can-i-tell-if-an-application-update-contains-a-report-or-web-part",children:"3. How can I tell if an application update contains a report or web part?"}),"\n",(0,a.jsx)(t.p,{children:"There is currently no simple way to tell if a hotfix contains a report or web part. We recommend that you assume that all cumulative updates, service packs, and feature packs contain reports and web parts, and re-deploy reports and Enterprise Portal."}),"\n",(0,a.jsx)(t.p,{children:"If you encounter an error after installing a hotfix, try deploying reports and web parts."}),"\n",(0,a.jsx)(t.h2,{id:"installation-order",children:"Installation Order"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the order in which updates are applied in a test environment, and then applied in a production environment."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Apply updates to the database."}),"\n",(0,a.jsx)(t.li,{children:"Apply updates to a single local AOS instance."}),"\n",(0,a.jsx)(t.li,{children:"Apply updates to a single local client. (Compile, Synchronize, and get the environment running)"}),"\n",(0,a.jsx)(t.li,{children:"Deploy reports to the report server."}),"\n",(0,a.jsx)(t.li,{children:"Deploy web parts to the Enterprise Portal server."}),"\n",(0,a.jsx)(t.li,{children:"Deploy updates to any retail components."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The differences in a production environment are:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Import the model store from the test environment to apply updates to the database."}),"\n",(0,a.jsx)(t.li,{children:"Mass deploy client updates (optional)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Image",src:n(75191).Z+"",title:"Installation-Order",width:"772",height:"668"})}),"\n",(0,a.jsx)(t.h2,{id:"detailed-update-process",children:"Detailed Update Process"}),"\n",(0,a.jsx)(t.p,{children:"This diagram describes the update process in detail, in both the test and production environments."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Image",src:n(60550).Z+"",title:"Detailed Update Process",width:"914",height:"874"})}),"\n",(0,a.jsx)(t.h2,{id:"update-tips-and-tricks",children:"Update Tips and Tricks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Always update in a test environment first and run the Impact Wizard for application updates"}),"\r\nYou can reduce the downtime of your production environment by fixing all code conflicts in a test environment, and identifying them early."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Make sure that you have the correct product version"}),"\r\nMost updates apply only to released versions of a product.\r\n",(0,a.jsx)(t.em,{children:"Note: Many demonstration virtual machines run pre-release versions of Microsoft Dynamics AX, and cannot run updates."})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Install binary updates first, and if needed, reinitialize the model store before installing application updates"}),"\r\nIf you do not reinitialize the model store, you will encounter many more errors in the Data Upgrade Cockpit."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Do not skip the Software Update Checklist"}),"\r\nAfter you install an update, on the Model store has been modified form, select Start the software update checklist."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"If you must generate CIL, restart all AOS instances"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Install updates on all appropriate components (reports andweb parts)"}),"\r\nIt is difficult to tell whether an update contains modified or new reports, or web parts\u2014we recommend that redeploy reports and web parts with all CUs."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Check to see whether all of your current hotfixes are contained in the most recent cumulative update or feature pack\u2014if not, reinstall it"}),"\r\nIf you have a recent hotfix that is not included in the cumulative update or feature pack that you are installing, it will be removed. Reinstall the hotfix after you have applied update."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Consider slipstreaming updates if you are doing a fresh install"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"If you are installing industry solutions, install them before installing updates"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"To minimize downtime, consider importing the model store into a non-default schema in the production environment, and then switching it to be the default schema"}),"\r\nFor information about using non-default schemas, read How to: Create, Drop, or Reinitialize a Model Store."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},60550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Detailed-Update-Process-008c497528f8fa40a9b627d319d1b120.png"},75191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Installation-Order-05801185957903c0800b6e66b1c4134a.png"},84834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Types-of-Hotfixes-871aef2c1585c36ce573e9b74cb46d95.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);