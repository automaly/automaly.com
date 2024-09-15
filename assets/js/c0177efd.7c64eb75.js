"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[3400],{67512:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(74848),a=o(28453);const r={date:"2024-05-05",title:"SqlPackage - The Element or Annotation class SqlStatistic does not contain the Property class AutoDrop",categories:["d365fo.tools"],tags:["SqlPackage","troubleshoot"],authors:"max"},s=void 0,i={permalink:"/2024/05/05/Import-a-bacpac-file-into-a-Tier1-environment",source:"@site/blog/2024-05-05-Import-a-bacpac-file-into-a-Tier1-environment/index.md",title:"SqlPackage - The Element or Annotation class SqlStatistic does not contain the Property class AutoDrop",description:"If you are using d365fo.tools to Import a bacpac file into a Tier1 environment and you got an error",date:"2024-05-05T00:00:00.000Z",tags:[{inline:!0,label:"SqlPackage",permalink:"/tags/sql-package"},{inline:!0,label:"troubleshoot",permalink:"/tags/troubleshoot"}],readingTime:.3433333333333333,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max",page:null}],frontMatter:{date:"2024-05-05",title:"SqlPackage - The Element or Annotation class SqlStatistic does not contain the Property class AutoDrop",categories:["d365fo.tools"],tags:["SqlPackage","troubleshoot"],authors:"max"},unlisted:!1,lastUpdatedBy:"Dynamics365",prevItem:{title:"SQL cheatsheet",permalink:"/2024/05/12/sql-cheat-sheet"},nextItem:{title:"Self-Update to latest quality update",permalink:"/2024/05/02/Self-Update-to-latest-quality-update"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["If you are using ",(0,n.jsx)(t.a,{href:"https://github.com/d365collaborative/d365fo.tools",children:"d365fo.tools"})," to ",(0,n.jsx)(t.a,{href:"https://github.com/d365collaborative/d365fo.tools/wiki/How-To-Import-Bacpac-Into-Tier1",children:"Import a bacpac file into a Tier1 environment"})," and you got an error"]}),"\n",(0,n.jsx)(t.admonition,{title:"Error output was",type:"danger",children:(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["Error importing database",":An"," error occurred during deployment plan generation. Deployment cannot continue. The Element or Annotation class SqlStatistic does not contain the Property class AutoDrop."]})})}),"\n",(0,n.jsxs)(t.p,{children:["The d365fo.tools use ",(0,n.jsx)(t.code,{children:"Invoke-D365InstallSqlPackage"})," to install SqlPackage, but its version is not up to date, compare to the bacpac files generated from LCS database export.\r\nTo solve the issue, we need to downlaod ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/sql/tools/sqlpackage/sqlpackage-download?view=sql-server-ver16#installation-file-download-alternative",children:"the latest version as a zip file"}),", unblock, unzip and replace files in the SqlPackage folder ",(0,n.jsx)(t.code,{children:"C:\\Temp\\d365fo.tools\\SqlPackage"})," with the new version."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(96540);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);