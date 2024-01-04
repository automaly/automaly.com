"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[5405],{52196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(85893),s=t(11151);const i={date:new Date("2020-08-17T00:00:00.000Z"),title:"Testing Dynamics 365 Finance Database Movement API with Postman",tags:["Database Movement API","Dynamics 365 Finance","Dynamics 365 Supply Chain Management","Dynamics 365 Commerce","Postman"],lightgallery:!0,categories:["Integration","FinOps"]},o=void 0,r={id:"integration/odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman/index",title:"Testing Dynamics 365 Finance Database Movement API with Postman",description:"Microsoft provides a versioned set of capabilities that you can currently use to copy databases between environments, and to list and download database backups.",source:"@site/docs/02-integration/01-odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman/index.md",sourceDirName:"02-integration/01-odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman",slug:"/integration/odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman/",permalink:"/integration/odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman/",draft:!1,unlisted:!1,tags:[{label:"Database Movement API",permalink:"/tags/database-movement-api"},{label:"Dynamics 365 Finance",permalink:"/tags/dynamics-365-finance"},{label:"Dynamics 365 Supply Chain Management",permalink:"/tags/dynamics-365-supply-chain-management"},{label:"Dynamics 365 Commerce",permalink:"/tags/dynamics-365-commerce"},{label:"Postman",permalink:"/tags/postman"}],version:"current",frontMatter:{date:"2020-08-17T00:00:00.000Z",title:"Testing Dynamics 365 Finance Database Movement API with Postman",tags:["Database Movement API","Dynamics 365 Finance","Dynamics 365 Supply Chain Management","Dynamics 365 Commerce","Postman"],lightgallery:!0,categories:["Integration","FinOps"]},sidebar:"tutorialSidebar",previous:{title:"Dynamics 365 finance and operations ODATA consuming - Length cannot be less than zero",permalink:"/integration/odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero/"},next:{title:"All about Odata actions in Dynamics 365 Finance And Operations",permalink:"/integration/odata/2021-05-25-All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/"}},c={},d=[{value:"1. Postman environment setup",id:"1-postman-environment-setup",level:2},{value:"2. Authentication with Postman",id:"2-authentication-with-postman",level:2},{value:"3. Cosnume the APIs with Postman",id:"3-cosnume-the-apis-with-postman",level:2},{value:"3.1. List database backups",id:"31-list-database-backups",level:3},{value:"3.2. Create database refresh",id:"32-create-database-refresh",level:3},{value:"3.3. Create a database export",id:"33-create-a-database-export",level:3},{value:"3.4. Get operation activity status",id:"34-get-operation-activity-status",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Microsoft provides a versioned set of capabilities that you can currently use to copy databases between environments, and to list and download database backups."}),"\n",(0,a.jsx)(n.p,{children:"what you can do with Database movement API so far:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"List database backups"}),"\n",(0,a.jsx)(n.li,{children:"Create database refresh"}),"\n",(0,a.jsx)(n.li,{children:"Create a database export"}),"\n",(0,a.jsx)(n.li,{children:"Get operation activity status"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"More supported actions will be added in later releases."}),"\n",(0,a.jsxs)(n.p,{children:["The endpoint uses ",(0,a.jsx)(n.strong,{children:"impersonation authentication"})," base, please follow to ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/database/api/dbmovement-api-authentication##register-a-new-application-by-using-the-azure-portal",children:"register a new application by using the Azure portal"})]}),"\n",(0,a.jsx)(n.h2,{id:"1-postman-environment-setup",children:"1. Postman environment setup"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Open Postman -> manage environments -> Add"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tenant_id: {tenant_id get from AAD}\r\nclient_id: {get from the application that you have created before}\r\nclient_secret: {get from the application that you have created before}\r\nusername: {LCS user name with owner permission}\r\npassword: {LCS user password}\r\ngrant_type: password\r\nresource: https://lcsapi.lcs.dynamics.com\r\nprojectId: {Your LCS Project ID}\r\nbearerToken: {this will be populated when authentication}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Postman environment setup",src:t(69243).Z+"",title:"Postman environment setup",width:"706",height:"280"})}),"\n",(0,a.jsx)(n.h2,{id:"2-authentication-with-postman",children:"2. Authentication with Postman"}),"\n",(0,a.jsxs)(n.p,{children:["You get the authentication bearer with ",(0,a.jsx)(n.strong,{children:"POST"})," method and ",(0,a.jsx)(n.a,{href:"https://login.microsoftonline.com/%7B%7Btenant_id%7D%7D/oauth2/token",children:"https://login.microsoftonline.com/{{tenant_id}}/oauth2/token"})," endpoint."]}),"\n",(0,a.jsx)(n.p,{children:"In the request Body, please do following:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Authentication with Postman",src:t(81859).Z+"",title:"Authentication with Postman",width:"1005",height:"534"})}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.strong,{children:"Send"}),", and you will have access token to start using the API."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"token",src:t(6857).Z+"",title:"token",width:"1585",height:"628"})}),"\n",(0,a.jsx)(n.h2,{id:"3-cosnume-the-apis-with-postman",children:"3. Cosnume the APIs with Postman"}),"\n",(0,a.jsx)(n.p,{children:"To call the Database Movement API, you attach the access token as a bearer token to the authorization header in your HTTP request. So in Postman, modify the headers tab like bellow"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-api",children:"Authorization:Bearer {{bearerToken}}\r\nx-ms-version:'2017-09-15'\r\nContent-Type:application/json\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Cosnume",src:t(58627).Z+"",title:"Cosnume",width:"1323",height:"427"})}),"\n",(0,a.jsx)(n.h3,{id:"31-list-database-backups",children:"3.1. List database backups"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-uri",children:"GET https://lcsapi.lcs.dynamics.com/databasemovement/v1/databases/project/{{projectId}}\n"})}),"\n",(0,a.jsx)(n.p,{children:"And we\u2019ll get a JSON with a list of the DB backups on our LCS Asset Library:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"{1,4-6,11} showLineNumbers",children:'{\r\n    "DatabaseAssets": [\r\n        {\r\n            "Id": "12314234-862e-4a6a-800d-0c64e982284a",\r\n            "ProjectId": 123123,\r\n            "OrganizationId": 123124,\r\n            "Name": "backup",\r\n            "FileName": "ATbackup.bacpac",\r\n            "FileDescription": "",\r\n            "FileLocation": "https://uswedpl1catalog.blob.core.windows.net/product-ax7productname/******",\r\n            "ModifiedDateTime": "2020-08-17T09:52:50.077",\r\n            "CreatedDateTime": "2020-08-17T09:52:45.297",\r\n            "CreatedByName": null,\r\n            "ModifiedByName": null\r\n        }\r\n    ],\r\n    "IsSuccess": true,\r\n    "OperationActivityId": "5053e0dd-66e3-4832-a9f8-1e2d621562e1",\r\n    "ErrorMessage": null,\r\n    "VersionEOL": "9999-12-31T23:59:59.9999999"\r\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"32-create-database-refresh",children:"3.2. Create database refresh"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"POST https://lcsapi.lcs.dynamics.com/databasemovement/v1/refresh/project/{projectId}/source/{sourceEnvironmentId}/target/{targetEnvironmentId}"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n    "IsSuccess": true,\r\n    "OperationActivityId": "55eb4327-9346-4c7b-82bd-fe8ef15112c6",\r\n    "ErrorMessage": null,\r\n    "VersionEOL": "9999-12-31T23:59:59.9999999"\r\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"33-create-a-database-export",children:"3.3. Create a database export"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"POST https://lcsapi.lcs.dynamics.com/databasemovement/v1/export/project/{projectId}/environment/{environmentId}/backupName/{backupName}"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n    "IsSuccess": true,\r\n    "OperationActivityId": "55eb4327-9346-4c7b-82bd-fe8ef15112c6",\r\n    "ErrorMessage": null,\r\n    "VersionEOL": "9999-12-31T23:59:59.9999999"\r\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"34-get-operation-activity-status",children:"3.4. Get operation activity status"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET https://lcsapi.lcs.dynamics.com/databasemovement/v1/fetchstatus/project/{projectId}/environment/{environmentId}/operationactivity/{operationactivityId}"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n    "IsSuccess": true,\r\n    "OperationActivityId": "6a90b45f-1764-4077-b924-3f4671540237",\r\n    "ErrorMessage": null,\r\n    "VersionEOL": "9999-12-31T23:59:59.9999999",\r\n    "ProjectId": "12345",\r\n    "EnvironmentId": "5362377c-bc37-4f92-b30e-fe0c1e664cc0",\r\n    "ActivityId": "55eb4327-9346-4c7b-82bd-fe8ef15112c6",\r\n    "CompletionDate": null,\r\n    "OperationStatus": "InProgress"\r\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},69243:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/testing-dynamics-365-finance-database-movement-api-with-postman_1-a23bce4a47ee5484460d6e2c1265e124.png"},81859:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/testing-dynamics-365-finance-database-movement-api-with-postman_2-0843aebb383fcd5e3b766e632ba1a6c6.png"},6857:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/testing-dynamics-365-finance-database-movement-api-with-postman_3-972e41cfafc98e4f7241d0f7f06d8890.png"},58627:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/testing-dynamics-365-finance-database-movement-api-with-postman_4-242d7b2e0a8201e57652934a256eb188.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);