"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[837],{68863:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(74848),n=t(28453);const i={title:"SSRS Report Server Settings Validation Error- AX 2012 R3 CU9",date:new Date("2016-01-15T09:22:50.000Z"),categories:["AX 2012"],tags:["error"]},s=void 0,a={id:"operation/troubleshooting/2016-01-15-ssrs-report-server-settings-validation-error-ax-2012-r3-cu9/index",title:"SSRS Report Server Settings Validation Error- AX 2012 R3 CU9",description:"Recently I updated my dynamics Ax development Environment by restoring Database from Production Dynamics AX DB and I got this problem",source:"@site/docs/05-operation/03-troubleshooting/2016-01-15-ssrs-report-server-settings-validation-error-ax-2012-r3-cu9/index.md",sourceDirName:"05-operation/03-troubleshooting/2016-01-15-ssrs-report-server-settings-validation-error-ax-2012-r3-cu9",slug:"/operation/troubleshooting/2016-01-15-ssrs-report-server-settings-validation-error-ax-2012-r3-cu9/",permalink:"/operation/troubleshooting/2016-01-15-ssrs-report-server-settings-validation-error-ax-2012-r3-cu9/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"error",permalink:"/tags/error"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"SSRS Report Server Settings Validation Error- AX 2012 R3 CU9",date:"2016-01-15T09:22:50.000Z",categories:["AX 2012"],tags:["error"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshotting & Common Error",permalink:"/category/troubleshotting--common-error"},next:{title:"AX1004 error in Dynamics AX",permalink:"/operation/troubleshooting/2017-01-02-AX1004-error/"}},d={},c=[];function l(e){const r={code:"code",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Recently I updated my dynamics Ax development Environment by restoring Database from Production Dynamics AX DB and I got this problem"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Make sure that SQL Server Reporting Services is configured correctly. Verify the Web Service URL and Report Manager URL configuration in the SQL Reporting Services Configuration Manager."})}),"\n",(0,o.jsxs)(r.p,{children:["The reporting Services are still working fine and I have already granted the AX Admin as System Administrator under site settings, Home folder settings and DynamicsAX folder with ",(0,o.jsx)(r.code,{children:"Browser, Content Manager, DynamicsAXBrowser, My Reports, Publisher, Report Builder"})," roles."]}),"\n",(0,o.jsxs)(r.p,{children:["Solution is we need disable UAC (I'm using Windows Server 2012 R2) by ",(0,o.jsx)(r.code,{children:"Regedit"})]}),"\n",(0,o.jsxs)(r.p,{children:["Go to Regedit: ",(0,o.jsx)(r.code,{children:"HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionpoliciessystem"})," and changing the DWORD ",(0,o.jsx)(r.code,{children:"EnableLUA"})," from 1 to 0."]}),"\n",(0,o.jsx)(r.p,{children:"After the reboot, UAC is disabled."})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);