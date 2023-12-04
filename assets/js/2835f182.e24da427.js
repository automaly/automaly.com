"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[6968],{62202:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=i(85893),t=i(11151);const r={date:"2022-09-18",lastmod:"2022-10-18",title:"Admin provisioning tools in Dynamics 365 Finance Operations",categories:["Tools"],tags:["Admin provisioning tools","VHD","onebox","Development"],lightgallery:!0},s=void 0,a={id:"operation/tools/2022-09-18-admin-provisioning-tools/index",title:"Admin provisioning tools in Dynamics 365 Finance Operations",description:"After restoring database backup, you want to be able to login to Dynamics 365 Finance Operations with different ternant, you need to use the admin provisioning tool to assign a new tenant.",source:"@site/docs/05-operation/01-tools/2022-09-18-admin-provisioning-tools/index.md",sourceDirName:"05-operation/01-tools/2022-09-18-admin-provisioning-tools",slug:"/operation/tools/2022-09-18-admin-provisioning-tools/",permalink:"/operation/tools/2022-09-18-admin-provisioning-tools/",draft:!1,unlisted:!1,tags:[{label:"Admin provisioning tools",permalink:"/tags/admin-provisioning-tools"},{label:"VHD",permalink:"/tags/vhd"},{label:"onebox",permalink:"/tags/onebox"},{label:"Development",permalink:"/tags/development"}],version:"current",frontMatter:{date:"2022-09-18",lastmod:"2022-10-18",title:"Admin provisioning tools in Dynamics 365 Finance Operations",categories:["Tools"],tags:["Admin provisioning tools","VHD","onebox","Development"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Unable to start trace, the required event providers were not found. Contact your system administrator",permalink:"/operation/tools/2022-06-20-unable-to-trace-error/"},next:{title:"Filtering options Dynamics 365 Finance Operations",permalink:"/operation/tools/2023-01-01-filtering/"}},c={},l=[{value:"Before 10.0.23 verison",id:"before-10023-verison",level:3},{value:"From 10.0.23",id:"from-10023",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"After restoring database backup, you want to be able to login to Dynamics 365 Finance Operations with different ternant, you need to use the admin provisioning tool to assign a new tenant."}),"\n",(0,o.jsx)(n.h3,{id:"before-10023-verison",children:"Before 10.0.23 verison"}),"\n",(0,o.jsx)(n.p,{children:"The admin provisioning tool can be found at"}),"\n",(0,o.jsxs)(n.p,{children:["VHD: ",(0,o.jsx)(n.code,{children:"C:\\AOSService\\PackagesLocalDirectory\\bin\\AdminUserProvisioning.exe"})]}),"\n",(0,o.jsxs)(n.p,{children:["Cloud- hosted: ",(0,o.jsx)(n.code,{children:"K:\\AOSService\\PackagesLocalDirectory\\bin\\AdminUserProvisioning.exe"})]}),"\n",(0,o.jsxs)(n.p,{children:["After running ",(0,o.jsx)(n.code,{children:"Provisioning.exe"})," wtih admin right, you will see the update for the admin user in SQL."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(79200).Z+"",title:"userinfo",width:"935",height:"133"})}),"\n",(0,o.jsx)(n.p,{children:"Some errors you might face:"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Can not stop the DynamicsAXBatch service on computer"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Execution Timeout Expired. The timeout period elapsed prior to completion of the operation or the server is not responding."})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"The remote server returned an error: (500) Internal Server Error."})}),"\n",(0,o.jsx)(n.p,{children:"Resolution, you can simply stop and start the services manually:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"World Wide Web Publishing Service"}),"\n",(0,o.jsx)(n.li,{children:"Microsoft Dynamics 365 Unified Operations: Batch Management Service"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Or you can restart VM using LCS or Azure portal."}),"\n",(0,o.jsxs)(n.p,{children:["If the issue ",(0,o.jsx)(n.strong,{children:"Can not stop the DynamicsAXBatch service on computer"})," still persist"]}),"\n",(0,o.jsx)(n.p,{children:"You can kill the batch service using cmd:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open CMD"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"sc queryex DynamicsAxBatch"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"taskkill /f /pid 8064"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(4860).Z+"",title:"queryex",width:"679",height:"374"})}),"\n",(0,o.jsx)(n.p,{children:"There is another error about Database"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Cannot open database \"AxDB\" requested by the login. The login failed.\r\nLogin failed for user 'axdbadmin'."})}),"\n",(0,o.jsxs)(n.p,{children:["Please this post for getting ",(0,o.jsx)(n.a,{href:"/2020-04-06-getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine/#2-rename-vm",children:"VHD Database password"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"from-10023",children:"From 10.0.23"}),"\n",(0,o.jsxs)(n.p,{children:["From 10.0.23, the Admin user provisioning tool is removed due to security reasons, the reply URL setup for AAD was changed.\r\nIt is typically used to change the tenant of the environment. You can update the sign in information in the database for the Admin user or any other user. You only need the ",(0,o.jsx)(n.code,{children:"SID"})," and ",(0,o.jsx)(n.code,{children:"network alias"})," (email address) from a user that can access the environment or another environment on the same tenant."]}),"\n",(0,o.jsx)(n.p,{children:"To get the SID:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:"wmic useraccount get name,sid\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(49682).Z+"",title:"get-sid-cmd",width:"665",height:"475"})}),"\n",(0,o.jsx)(n.p,{children:"Once you have admin SID, you can update the tenant in SQL by using."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select ID, SID, NETWORKALIAS from USERINFO where ID = 'Admin'\r\n\r\nupdate USERINFO set SID = 'new_SID', NETWORKALIAS = 'new_NetworkAlias' where ID = 'Admin'\n"})}),"\n",(0,o.jsx)(n.p,{children:"You might also got error"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application: '00000015-0000-0000-c000-000000000000'"})}),"\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.code,{children:"C:\\AOSService\\webroot\\web.config"}),", get ",(0,o.jsx)(n.code,{children:"Aad.Realm"}),", ",(0,o.jsx)(n.code,{children:"Aad.TenantDomainGUID"}),", ",(0,o.jsx)(n.code,{children:"Infrastructure.HostUrl"})]}),"\n",(0,o.jsx)(n.p,{children:"Run below script to add Dynamics 365  URL to ERP service principle application"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Image",src:i(37475).Z+"",title:"00000015-0000-0000-c000-000000000000",width:"1801",height:"136"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:'$AADTenant = "xxxxxx-843a-434c-ae23-f8614106ac37"\r\n$EnvironmentUrl = "https://xxxxxxxx.axcloud.dynamics.com"\r\n$AADRealm = "00000015-0000-0000-c000-000000000000"\r\n\r\nConnect-AzureAD\r\n\r\n# Get Service Principal details\r\n$SP = Get-AzureADServicePrincipal -Filter "AppId eq \'$AADRealm\'"\r\n\r\n#Add Reply URLs\r\n$SP.ReplyUrls.Add("$EnvironmentUrl")\r\n$SP.ReplyUrls.Add("$EnvironmentUrl/oauth")\r\n\r\n#Set/Update Reply URL\r\nSet-AzureADServicePrincipal -ObjectId $SP.ObjectId -ReplyUrls $SP.ReplyUrls\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you are running VHD for the first time, please do this ",(0,o.jsx)(n.a,{href:"/2020-04-06-getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine/#61-register-a-new-application-in-azure-active-directory",children:"task"})]}),"\n",(0,o.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/troubleshoot/azure/active-directory/error-code-aadsts50011-reply-url-mismatch",children:"https://learn.microsoft.com/en-us/troubleshoot/azure/active-directory/error-code-aadsts50011-reply-url-mismatch"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/access-instances#i-have-run-the-admin-user-provisioning-tool-on-my-development-environment-and-now-i-receive-the-following-sign-in-error-error-aadsts50011-the-reply-url-specified-in-the-request-does-not-match-the-reply-urls-configured-for-the-application",children:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/access-instances#i-have-run-the-admin-user-provisioning-tool-on-my-development-environment-and-now-i-receive-the-following-sign-in-error-error-aadsts50011-the-reply-url-specified-in-the-request-does-not-match-the-reply-urls-configured-for-the-application"})}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},37475:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/00000015-0000-0000-c000-000000000000-f6d0568f8296b9ade63b5684cc79f4c6.png"},49682:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/get-sid-cmd-ddbc3c92286608c0d065c7c466650f83.png"},4860:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/queryex-785aab69dc3719493dcbe084927c2a78.png"},79200:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/userinfo-b01d885f0fed8ef926b7d109782b926a.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var o=i(67294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);