"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[7714],{14378:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=o(85893),s=o(11151);const t={date:new Date("2019-08-05T00:00:00.000Z"),lastmod:new Date("2023-05-05T00:00:00.000Z"),title:"Dynamics 365 for finance and operations database synchronization using command line",tags:["database synchronization","Power shell"],categories:["FinOps","Database"]},r=void 0,i={id:"operation/tools/2019-08-05-database-sync-d365fo/index",title:"Dynamics 365 for finance and operations database synchronization using command line",description:"You can either execute the script for cloud-hosted, onebox VHD, or UAT environment. This is not applied with one-box Microsoft hosted environment.",source:"@site/docs/05-operation/01-tools/2019-08-05-database-sync-d365fo/index.md",sourceDirName:"05-operation/01-tools/2019-08-05-database-sync-d365fo",slug:"/operation/tools/2019-08-05-database-sync-d365fo/",permalink:"/automaly.com/operation/tools/2019-08-05-database-sync-d365fo/",draft:!1,unlisted:!1,tags:[{label:"database synchronization",permalink:"/automaly.com/tags/database-synchronization"},{label:"Power shell",permalink:"/automaly.com/tags/power-shell"}],version:"current",frontMatter:{date:"2019-08-05T00:00:00.000Z",lastmod:"2023-05-05T00:00:00.000Z",title:"Dynamics 365 for finance and operations database synchronization using command line",tags:["database synchronization","Power shell"],categories:["FinOps","Database"]},sidebar:"tutorialSidebar",previous:{title:"Number sequence farmework overview in Dynamics AX 2012",permalink:"/automaly.com/operation/tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012/"},next:{title:"Technical reference - Data entity - Dynamics 365 finance and operations",permalink:"/automaly.com/operation/tools/2019-09-28-technical-referece-report-data-entites-d365/"}},c={},l=[];function d(e){const n={a:"a",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You can either execute the script for ",(0,a.jsx)(n.em,{children:"cloud-hosted"}),", ",(0,a.jsx)(n.em,{children:"onebox VHD"}),", or ",(0,a.jsx)(n.em,{children:"UAT"})," environment. This is not applied with ",(0,a.jsx)(n.strong,{children:"one-box Microsoft hosted"})," environment."]}),"\n",(0,a.jsx)(n.p,{children:"Open PowerShell, run following script"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'K:\\AOSService\\webroot\\bin\\Microsoft.Dynamics.AX.Deployment.Setup.exe \r\n-bindir "K:\\AosService\\PackagesLocalDirectory" \r\nmetadatadir "K:\\AosService\\PackagesLocalDirectory" \r\n-sqluser "axdbadmin" -sqlserver "." -sqldatabase "AxDB" \r\n-setupmode "sync" -syncmode "fullall" \r\n-isazuresql "false" -sqlpwd "************" \r\n-logfilename "C:\\Temp\\dbsync.log"\n'})}),"\n",(0,a.jsx)(n.p,{children:"For example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'K:\\AOSService\\webroot\\bin\\Microsoft.Dynamics.AX.Deployment.Setup.exe \r\n-bindir "K:\\AosService\\PackagesLocalDirectory" \r\nmetadatadir "K:\\AosService\\PackagesLocalDirectory" \r\n-sqluser "axdbadmin" -sqlserver "." -sqldatabase "AxDB" \r\n-setupmode "sync" -syncmode "fullall" \r\n-isazuresql "false" -sqlpwd "AOSWebSite@123" \r\n-logfilename "C:\\Temp\\dbsync.log"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["AX DB user you can get from LCS, if you want to sync Azure DB please change ",(0,a.jsx)(n.code,{children:"-isazuresql"})," to ",(0,a.jsx)(n.em,{children:"True"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.a,{href:"https://github.com/d365collaborative/d365fo.tools/blob/development/docs/Invoke-D365DBSync.md",children:"d365fo.tools"})," to trigger the DB sync."]}),"\n",(0,a.jsx)(n.p,{children:"Tier 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ps",children:"Invoke-D365DBSync -Verbose\n"})}),"\n",(0,a.jsx)(n.p,{children:"Tier 2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'Invoke-D365DbSync -DatabaseServer .database.windows.net  -DatabaseName db_d365opsprod -SqlUser JIT-6h8cg -SqlPwd NjT -LogPath "C:\\Temp\\d365fo.tools\\dbsync.log"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>r});var a=o(67294);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);