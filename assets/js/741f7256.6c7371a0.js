"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[4921],{48669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(74848),s=n(28453);const i={date:"2024-05-02",title:"Self-Update to latest quality update",categories:["Update"],tags:["Self-Update"],authors:"max"},o=void 0,r={permalink:"/2024/05/02/Self-Update-to-latest-quality-update",source:"@site/blog/2024-05-02-Self-Update-to-latest-quality-update/index.md",title:"Self-Update to latest quality update",description:"1. Login to LCS \u2013 and select the F&O environment that is enabled for Synapse Link",date:"2024-05-02T00:00:00.000Z",tags:[{inline:!0,label:"Self-Update",permalink:"/tags/self-update"}],readingTime:1.05,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max",page:null}],frontMatter:{date:"2024-05-02",title:"Self-Update to latest quality update",categories:["Update"],tags:["Self-Update"],authors:"max"},unlisted:!1,lastUpdatedBy:"Dynamics365",prevItem:{title:"SqlPackage - The Element or Annotation class SqlStatistic does not contain the Property class AutoDrop",permalink:"/2024/05/05/Import-a-bacpac-file-into-a-Tier1-environment"},nextItem:{title:"Throw behaviour in X++",permalink:"/2024/01/07/ThrowBehaviour"}},l={authorsImageUrls:[void 0]},d=[];function c(e){const t={a:"a",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Login to LCS \u2013 and select the F&O environment that is enabled for Synapse Link"}),"\n",(0,a.jsx)(t.li,{children:"Validate the platform version of the environment under Environment version information as shown bellow."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Platform version",src:n(52523).A+"",width:"1190",height:"506"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"If the platform version of your environment is lower than corresponding rows bellow \u2013 for example above environment platform version is 7.0.7036.113 and required version is 7.0.7036.133 or Higher. The above environment must be updated to the latest quality update."}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Application   (Platform)"}),(0,a.jsx)(t.th,{children:"Required platform version"}),(0,a.jsx)(t.th,{children:"PQU schedule"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"10.0.36 (PU 60)"}),(0,a.jsx)(t.td,{children:"7.0.7036.133 or Higher"}),(0,a.jsx)(t.td,{children:"10.0.36 PQU-3     (January 22, 2023 to February 25, 2024)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"10.0.37 (PU 61)"}),(0,a.jsx)(t.td,{children:"7.0.7068.109   or Higher"}),(0,a.jsx)(t.td,{children:"10.0.37 PQU-2     January 8, 2024 to February 11, 2024"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"10.0.38 (PU 62)"}),(0,a.jsx)(t.td,{children:"7.0.7120.59 or   Higher"}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"There are two ways to update the F&O environment with quality update. Self-update using the latest quality update and second wait for the PQU (Proactive quality update) to be pushed to your environment by Microsoft"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Above table list out the PQU schedule when your environment will receive the PQU, based on the PQU schedule ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/get-started/quality-updates-schedule?context=%2Fdynamics365%2Fcontext%2Fcommerce#high-level-pqu-train-schedule",children:"Release schedule for PQU"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Customer can also self-update the environment by self-applying the latest quality update instead of waiting for PQU, follow the steps bellow to self-update to latest quality update ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/migration-upgrade/download-hotfix-lcs#finance-and-operations-apps",children:"Reference documentation"})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["In the LCS environment page, go to Available updates section and click on view update.\r\n",(0,a.jsx)(t.img,{alt:"alt text",src:n(56989).A+"",width:"1260",height:"395"})]}),"\n",(0,a.jsxs)(t.li,{children:["Click on save package.\r\n",(0,a.jsx)(t.img,{alt:"alt text",src:n(97369).A+"",width:"1186",height:"223"})]}),"\n",(0,a.jsxs)(t.li,{children:["Click on Save package, on the Save package to asset library dialog opens, give a name and click on Save package. This action will save the latest cumulative version to your LCS project Asset library.\r\n",(0,a.jsx)(t.img,{alt:"alt text",src:n(66961).A+"",width:"1134",height:"465"})]}),"\n",(0,a.jsxs)(t.li,{children:["Follow the steps to apply update to cloud environment ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/deployment/apply-deployable-package-system?context=%2Fdynamics365%2Fcontext%2Fcommerce#apply-a-package-to-a-non-production-environment-by-using-lcs",children:"Apply updates to cloud environments - Finance & Operations | Dynamics 365 | Microsoft Learn"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},52523:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024-05-04_16h10_59-2534f767816b06001d4eeddf05cecbe0.png"},56989:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024-05-04_16h20_36-8da1da793b29434d9264dbb028f2bb51.png"},97369:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2024-05-04_16h21_13-659a06dcb33be52268c54568e5febfa6.png"},66961:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/image-a94f70f4e09075ee2b880b695fadaa95.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);