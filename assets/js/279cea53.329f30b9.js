"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[1290],{46748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(85893),t=r(11151);const i={title:"Response in AIF custom service class",description:"Response in AIF custom service class",date:new Date("2017-01-12T00:00:00.000Z"),categories:["AX2012"],tags:["xpp","aif"]},c=void 0,o={id:"integration/aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class/index",title:"Response in AIF custom service class",description:"Response in AIF custom service class",source:"@site/docs/02-integration/04-aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class/index.md",sourceDirName:"02-integration/04-aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class",slug:"/integration/aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class/",permalink:"/integration/aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class/",draft:!1,unlisted:!1,tags:[{label:"xpp",permalink:"/tags/xpp"},{label:"aif",permalink:"/tags/aif"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Response in AIF custom service class",description:"Response in AIF custom service class",date:"2017-01-12T00:00:00.000Z",categories:["AX2012"],tags:["xpp","aif"]},sidebar:"tutorialSidebar",previous:{title:"How to create HTTP adapter port",permalink:"/integration/aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port/"},next:{title:"index",permalink:"/integration/dualwrite/"}},a={},l=[{value:"1. Scenario",id:"1-scenario",level:3},{value:"2. Solution",id:"2-solution",level:3},{value:"3. Walkthrough",id:"3-walkthrough",level:3},{value:"3.1. Response class",id:"31-response-class",level:4},{value:"3.2. Service class",id:"32-service-class",level:4},{value:"3.3. Create service",id:"33-create-service",level:4},{value:"3.4. Consume service",id:"34-consume-service",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["At the previous ",(0,s.jsx)(n.a,{href:"/2017-01-11-aif-custom-response-value-in-dynamics-ax-2012-r3/",children:"post"})," I already show how to customize Response Value list in AIF Document standard service, today we will talk about response in Custom AIF service class."]}),"\n",(0,s.jsxs)(n.p,{children:["We already know for Custom AIF service we actually need 2 classes, one is ",(0,s.jsx)(n.code,{children:"contract"})," for data input and one is ",(0,s.jsx)(n.code,{children:"service"})," to process a logic. With ",(0,s.jsx)(n.code,{children:"Response"})," class, it's literally same with ",(0,s.jsx)(n.code,{children:"contract"})," class. They both hold parm value."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"contract"})," class"]})," gets parametters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"Response"})," class"]})," sets return values."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-scenario",children:"1. Scenario"}),"\n",(0,s.jsxs)(n.p,{children:["I want to get ",(0,s.jsx)(n.code,{children:"HcmPersonnelNumberId"})," and ",(0,s.jsx)(n.code,{children:"HcmWorkerName"})," of current userID on C#.NET application."]}),"\n",(0,s.jsx)(n.h3,{id:"2-solution",children:"2. Solution"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Write Custom AIF service to get Worker information, and then public this service."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Write C#.NET console to consume that service."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-walkthrough",children:"3. Walkthrough"}),"\n",(0,s.jsx)(n.h4,{id:"31-response-class",children:"3.1. Response class"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:"[DataContractAttribute]\r\nclass MaxWorkerResponse\r\n{\r\n    str     gId;\r\n    str     gName;\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["two value that I want to return is ",(0,s.jsx)(n.code,{children:"HcmPersonnelNumberId"})," and ",(0,s.jsx)(n.code,{children:"HcmWorkerName"}),", I will store it in 2 parms method"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:"[DataMemberAttribute('HcmWorkerName')]\r\npublic HcmWorkerName parmName(HcmWorkerName _name = gName)\r\n{\r\n    gName = _name;\r\n\r\n    return gName;\r\n}\r\n\r\n[DataMemberAttribute('HcmPersonnelNumberId')]\r\npublic HcmPersonnelNumberId parmId(HcmPersonnelNumberId _id = gId)\r\n{\r\n    gId = _id;\r\n\r\n    return gId;\r\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"32-service-class",children:"3.2. Service class"}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"MaxPRService"})," Class, This class consume through service that need to be extend ",(0,s.jsx)(n.code,{children:"SysOperationServiceBase"})," class"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:"class MaxPRService extends SysOperationServiceBase\r\n{\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Main logic"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:"[SysEntryPointAttribute(true),\r\nAifCollectionTypeAttribute('return', Types::String)]\r\npublic MaxWorkerResponse getEmployee()\r\n{\r\n    HcmWorkerRecId          workerRecId;\r\n    HcmPersonnelNumberId    personnelNumber;\r\n    HcmWorkerName           name;\r\n    MaxWorkerResponse       response;\r\n\r\n    workerRecId = DirPersonUser::currentWorker();\r\n    personnelNumber = HcmWorker::find(workerRecId).PersonnelNumber;\r\n    name = HcmWorker::find(workerRecId).name();\r\n    \r\n    response = new MaxWorkerResponse();\r\n    \r\n    response.parmId(personnelNumber);\r\n    response.parmName(name);\r\n    \r\n    return response;\r\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"33-create-service",children:"3.3. Create service"}),"\n",(0,s.jsxs)(n.p,{children:["In AOT create new service and add recent created class to that Service, in operations node add ",(0,s.jsx)(n.code,{children:"getEmployee"})," method, you will get something likes"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Respone-in-AIF-custom-service-class",src:r(30292).Z+"",width:"257",height:"205"})}),"\n",(0,s.jsx)(n.p,{children:"Then right click service > Add-ins > Register Service."}),"\n",(0,s.jsxs)(n.p,{children:["go to AIF inbound form to create new service and add ",(0,s.jsx)(n.code,{children:"getEmployee"})," operation to that service then Active."]}),"\n",(0,s.jsx)(n.h4,{id:"34-consume-service",children:"3.4. Consume service"}),"\n",(0,s.jsxs)(n.p,{children:["Add recent WSDL URI ",(0,s.jsx)(n.code,{children:"http://WINSERVER:8104/DynamicsAx/Services/MaxPurchReqGeneral"})," into Service reference in C# Console project"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-C#",children:'static void Main(string[] args)\r\n{\r\n\tCallContext context = new CallContext()\r\n\t{\r\n\t\tCompany = "USMF",\r\n\t\tLanguage = "EN-US",\r\n\t};\r\n\t\r\n\tMaxPRServiceClient client = new MaxPRServiceClient();\r\n\tMaxWorkerResponse response = client.getEmployee(context);\r\n\t\r\n\tConsole.WriteLine(response.HcmWorkerName + ", " + response.HcmPersonnelNumberId);\r\n\tConsole.ReadLine();\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Thank you for reading."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},30292:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Respone-in-AIF-custom-service-class-1-6c1ab9ba88577d5c3b8b9ce3755d712d.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);