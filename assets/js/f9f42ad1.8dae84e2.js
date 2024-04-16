"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9318],{73338:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(85893),t=o(11151);const r={date:new Date("2019-12-17T00:00:00.000Z"),title:"Enable Power BI Embedded in cloud hosted Dynamics 365 finance and operations 8.0 +",tags:["Power BI Embedded","Reports","cloud hosted","integration","Workspaces collections","AXDW","Entity Store","Azure SQL Database"],categories:["FinOps","Power BI"]},s=void 0,i={id:"power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+/index",title:"Enable Power BI Embedded in cloud hosted Dynamics 365 finance and operations 8.0 +",description:"In this article, we will go through how to enable Power BI embedded in Dynamics 365 finance and operations version 10 in a cloud-hosted environment (customer managed). From the previous version of FinOps, Power BI embedded uses workspace collections at Azure to display the report, since the workspace collections have been deprecated, Microsoft also disables power BI embedded in cloud-hosted environments. You can only enable Power BI embedded in multiple boxes environments like UAT and production.",source:"@site/docs/04-power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+/index.md",sourceDirName:"04-power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+",slug:"/power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+/",permalink:"/power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+/",draft:!1,unlisted:!1,tags:[{label:"Power BI Embedded",permalink:"/tags/power-bi-embedded"},{label:"Reports",permalink:"/tags/reports"},{label:"cloud hosted",permalink:"/tags/cloud-hosted"},{label:"integration",permalink:"/tags/integration"},{label:"Workspaces collections",permalink:"/tags/workspaces-collections"},{label:"AXDW",permalink:"/tags/axdw"},{label:"Entity Store",permalink:"/tags/entity-store"},{label:"Azure SQL Database",permalink:"/tags/azure-sql-database"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2019-12-17T00:00:00.000Z",title:"Enable Power BI Embedded in cloud hosted Dynamics 365 finance and operations 8.0 +",tags:["Power BI Embedded","Reports","cloud hosted","integration","Workspaces collections","AXDW","Entity Store","Azure SQL Database"],categories:["FinOps","Power BI"]},sidebar:"tutorialSidebar",previous:{title:"Power Platform Integration",permalink:"/category/power-platform-integration"},next:{title:"Dynamics 365 FinOps Data Integration using Microsoft Forms (Part 1)",permalink:"/power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1/"}},d={},c=[{value:"1. Create workspace collections",id:"1-create-workspace-collections",level:2},{value:"2. Create AxWD Azure SQL Database",id:"2-create-axwd-azure-sql-database",level:2},{value:"3. Configuring to enable Analytical Workspaces and Reports",id:"3-configuring-to-enable-analytical-workspaces-and-reports",level:2},{value:"4. Refresh data entity store to AxDW",id:"4-refresh-data-entity-store-to-axdw",level:2},{value:"5. PowerBI configuration (this is optional)",id:"5-powerbi-configuration-this-is-optional",level:2},{value:"Check the result",id:"check-the-result",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this article, we will go through how to enable Power BI embedded in Dynamics 365 finance and operations version 10 in a cloud-hosted environment (customer managed). From the previous version of FinOps, Power BI embedded uses workspace collections at Azure to display the report, since the workspace collections have been deprecated, Microsoft also disables power BI embedded in cloud-hosted environments. You can only enable Power BI embedded in multiple boxes environments like UAT and production."}),"\n",(0,a.jsx)(n.h2,{id:"1-create-workspace-collections",children:"1. Create workspace collections"}),"\n",(0,a.jsx)(n.p,{children:"Although the workspace collections have been deprecated, it does not show in the Azure portal and you could not create it by using the Azure portal, but you can create and manage by using Azure CLI."}),"\n",(0,a.jsx)(n.p,{children:"Open PowerShell and run following"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",children:'// Allow policy\r\nset-executionpolicy remotesigned\r\n\r\n//Install AzureRM\r\nInstall-Module -Name AzureRM -AllowClobber\r\n\r\n// Login to Azure using credentials\r\nLogin-AzureRmAccount\r\n\r\n// select the subscription ID\r\nSelect-AzureRmSubscription -SubscriptionId $subscriptionId\r\n\r\n$ResourceGroupName = \u201cMaxWorkspaceCollections\u201d\r\n$Location = "Southeast Asia"\r\n\r\n// Create workspace collections\r\nNew-AzPowerBIWorkspaceCollection -ResourceGroupName $ResourceGroupName -WorkspaceCollectionName $WorkSpaceCollectionName -Location $Location\r\n\r\n// Obtain the access keys\r\nGet-AzPowerBIWorkspaceCollection -ResourceGroupName $ResourceGroupName -name "<yourWorkspacename>"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"2-create-axwd-azure-sql-database",children:"2. Create AxWD Azure SQL Database"}),"\n",(0,a.jsxs)(n.p,{children:["We must use the Azure SQL Database for the AxDW in Dynamics 365 finance and operations cloud-hosted environment.\r\nPlease follow ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/sql-database/sql-database-single-database-get-started?tabs=azure-portal",children:"this document to create Azure SQL DB"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["We need at least ",(0,a.jsx)(n.strong,{children:"5 GB storage for Database"}),", for Pricing tier, I will recommend using from S1, and name the database AxDB"]}),"\n",(0,a.jsx)(n.p,{children:"This is my DB property"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(29699).Z+"",title:"Enable-Power-BI-Embedded-in-cloud-hosted",width:"1125",height:"317"})}),"\n",(0,a.jsxs)(n.p,{children:["I\u2019m using Premium tier because I want to use ",(0,a.jsx)(n.strong,{children:"the Columnstore Clustered indexes"})," in Database; it helps performance a little bit faster.\r\nOnce you have the Azure SQL Database, we can use SSMS to connect to the database and create a user for that DB. You need to get ",(0,a.jsx)(n.strong,{children:"the user and password information in LCS"}),", where the cloud-hosted provisioned."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(36682).Z+"",title:"Enable-Power-BI-Embedded-in-cloud-hosted",width:"1125",height:"829"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"Use Master\r\nCREATE LOGIN axdwadmin WITH PASSWORD = ''; \r\nCREATE LOGIN axdwruntimeuser WITH PASSWORD = '';\r\nUse AxDw\r\nCREATE USER axdwadmin FROM LOGIN axdwadmin; \r\nCREATE USER axdwruntimeuser FROM LOGIN axdwruntimeuser;\r\nALTER ROLE db_owner ADD MEMBER axdwadmin; \r\nALTER ROLE db_datareader ADD MEMBER axdwruntimeuser;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"3-configuring-to-enable-analytical-workspaces-and-reports",children:"3. Configuring to enable Analytical Workspaces and Reports"}),"\n",(0,a.jsx)(n.p,{children:"What you are having now"}),"\n",(0,a.jsx)(n.p,{children:"Power BI Embedded Service details from step 1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Workspace Collection Name: The name of the Workspace Collection created when deploying the Power BI Embedded Service\r\nAccess Key1:  The secret key #1 used to access the Power BI Embedded service\r\nAccess Key2:  The secret key #2 used to access the Power BI Embedded service\n"})}),"\n",(0,a.jsx)(n.p,{children:"Entity Store Database Service details from step 2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Database name:  AxDW\r\nServer name:  Azure SQL Server name (*.database.windows.net)\r\nServer admin login:  Username supplied in the SQL Server settings\r\nPassword:  Account password supplied when configuring SQL Server\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Run Notepad in ",(0,a.jsx)(n.strong,{children:"administrator"})," mode, open web.config from ",(0,a.jsx)(n.em,{children:"K:\\AOSService\\webroot"})," in Dynamics 365 for finance and operations environment."]}),"\n",(0,a.jsx)(n.p,{children:"Update the configuration settings:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'<add key="BiReporting.DW" value="[Database name]" />\r\n<add key="BiReporting.DWServer" value="[Server name]" />\r\n<add key="BiReporting.DWRuntimeUser" value="[Server Admin login]" />\r\n<add key="BiReporting.DWRuntimePwd" value="[Password]" />\n'})}),"\n",(0,a.jsx)(n.p,{children:"Update the Power BI Embedded Service configuration settings:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'<add key="PowerBIEmbedded.AccessKey" value="[Access Key1]" />\r\n<add key="PowerBIEmbedded.AccessKey2" value="[Access Key2]" />\r\n<add key="PowerBIEmbedded.ApiUrl" value="https://api.powerbi.com" />\r\n<add key="PowerBIEmbedded.IsPowerBIEmbeddedEnabled" value="true" />\r\n<add key="PowerBIEmbedded.WorkspaceCollectionName" value="[Workspace Collection Name]" />\n'})}),"\n",(0,a.jsx)(n.p,{children:"After that, you need to restart IIS and Dynamics 365 for finance and operations batch service"}),"\n",(0,a.jsx)(n.h2,{id:"4-refresh-data-entity-store-to-axdw",children:"4. Refresh data entity store to AxDW"}),"\n",(0,a.jsxs)(n.p,{children:["In Dynamics 365 for finance and operations, navigate to ",(0,a.jsx)(n.em,{children:"System administration > Setup > Entity Store"}),", select all the ",(0,a.jsx)(n.strong,{children:"entity store"}),", and click refresh."]}),"\n",(0,a.jsx)(n.p,{children:"Allow this process to complete in the background (~5 - 10mins).  You can monitor the status of the background process using the Batch jobs."}),"\n",(0,a.jsx)(n.p,{children:"Once the Progress is made, you can check the event message in the same form to make sure the refreshing working properly"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(97236).Z+"",title:"Enable-Power-BI-Embedded-in-cloud-hosted",width:"1446",height:"778"})}),"\n",(0,a.jsx)(n.h2,{id:"5-powerbi-configuration-this-is-optional",children:"5. PowerBI configuration (this is optional)"}),"\n",(0,a.jsxs)(n.p,{children:["Configuring power BI for the workspace; please follow the document ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/analytics/configure-power-bi-integration",children:"here"})]}),"\n",(0,a.jsx)(n.p,{children:"This is what you should have after the setup"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(92240).Z+"",title:"Enable-Power-BI-Embedded-in-cloud-hosted",width:"1154",height:"771"})}),"\n",(0,a.jsx)(n.h2,{id:"check-the-result",children:"Check the result"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to check the result, go to ",(0,a.jsx)(n.em,{children:"Workspaces > Customer credit and collections > Analytics all companies"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:o(21370).Z+"",title:"Enable-Power-BI-Embedded-in-cloud-hosted",width:"2081",height:"1170"})}),"\n",(0,a.jsx)(n.p,{children:"Thank you for reading."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},29699:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/Enable-Power-BI-Embedded-in-cloud-hosted_1-cc73c9be4b5661b098cea44542586747.png"},36682:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/Enable-Power-BI-Embedded-in-cloud-hosted_2-1a8d917556f848f00654b29df86670f8.png"},97236:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/Enable-Power-BI-Embedded-in-cloud-hosted_3-1df30d460b85ba0ecc4be65a01efa548.png"},92240:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/Enable-Power-BI-Embedded-in-cloud-hosted_4-900d96108c7b4fd9b3a9ebce7ad8c32a.png"},21370:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/Enable-Power-BI-Embedded-in-cloud-hosted_5-d76e48061dee9efc353c651caf53fb2e.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var a=o(67294);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);