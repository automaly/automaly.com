"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9849],{93929:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>A,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>o});var r=i(85893),s=i(11151);const c={title:"Architecture overview Microsoft Dynamics AX 2012",description:"Architecture overview Microsoft Dynamics AX 2012",date:new Date("2013-01-01T00:00:00.000Z"),categories:["AX2012"],tags:["architectural","axbuild","xpp"],lightgallery:!0},A=void 0,n={id:"ax2012-archive/ax2012-architecture/2013-01-01-microsoft-dynamics-ax-2012-architecture-overview/index",title:"Architecture overview Microsoft Dynamics AX 2012",description:"Architecture overview Microsoft Dynamics AX 2012",source:"@site/docs/07-ax2012-archive/01-ax2012-architecture/2013-01-01-microsoft-dynamics-ax-2012-architecture-overview/index.md",sourceDirName:"07-ax2012-archive/01-ax2012-architecture/2013-01-01-microsoft-dynamics-ax-2012-architecture-overview",slug:"/ax2012-archive/ax2012-architecture/2013-01-01-microsoft-dynamics-ax-2012-architecture-overview/",permalink:"/ax2012-archive/ax2012-architecture/2013-01-01-microsoft-dynamics-ax-2012-architecture-overview/",draft:!1,unlisted:!1,tags:[{label:"architectural",permalink:"/tags/architectural"},{label:"axbuild",permalink:"/tags/axbuild"},{label:"xpp",permalink:"/tags/xpp"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Architecture overview Microsoft Dynamics AX 2012",description:"Architecture overview Microsoft Dynamics AX 2012",date:"2013-01-01T00:00:00.000Z",categories:["AX2012"],tags:["architectural","axbuild","xpp"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Dynamics AX 2012 architecture",permalink:"/ax2012-archive/ax2012-architecture/"},next:{title:"Understand model store architectural in AX 2012",permalink:"/ax2012-archive/ax2012-architecture/2014-10-10-understand-model-store-architectural/"}},a={},o=[{value:"System architecture",id:"system-architecture",level:2},{value:"1. Application Object Server (AOS) architecture",id:"1-application-object-server-aos-architecture",level:3},{value:"2. Business Connector architecture",id:"2-business-connector-architecture",level:3},{value:"3. Application file server architecture",id:"3-application-file-server-architecture",level:3},{value:"Model store architecture",id:"model-store-architecture",level:2},{value:"Client architecture",id:"client-architecture",level:2},{value:"Client/server communication",id:"clientserver-communication",level:2},{value:"Services and AIF architecture",id:"services-and-aif-architecture",level:2},{value:"Enterprise Portal architecture",id:"enterprise-portal-architecture",level:2},{value:"Security architecture",id:"security-architecture",level:2},{value:"Workflow system architecture",id:"workflow-system-architecture",level:2},{value:"Analytic architecture",id:"analytic-architecture",level:2},{value:"Reporting architecture",id:"reporting-architecture",level:2}];function l(e){const t={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Understanding the internal architecture of Microsoft Dynamics AX 2012 can help you make decision when planning and developing a Microsoft Dynamics AX 2012 system. Here are some pointers on DAX 2012 architecture primarily for DAX 2012 architects & solution developers. This topic provides a high-level overview of the system architecture of Microsoft Dynamics AX."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"system-architecture",children:"System architecture"}),"\n",(0,r.jsx)(t.p,{children:"This diagram provides a high-level over of a Microsoft Dynamics AX 2012 system with all components installed, and describes how communications flow between the components."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AXSystemArchitechture",src:i(93940).Z+"",title:"AXSystemArchitechture",width:"1174",height:"968"})}),"\n",(0,r.jsx)(t.h3,{id:"1-application-object-server-aos-architecture",children:"1. Application Object Server (AOS) architecture"}),"\n",(0,r.jsx)(t.p,{children:"This diagram describes the functionality within the AOS Windows service, and describes how communications flow within it."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AOSWindowsService",src:i(22971).Z+"",title:"AOSWindowsService",width:"632",height:"648"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": Clients communicate with an AOS by using remote procedure calls (RPCs), Windows Communication Foundation (WCF), or AOS services. In previous releases, other components and third-party programs could communicate with an AOS by using either .NET Business Connector or Application Integration Framework (AIF). For this release, we recommend that third-party programs use AOS services to communicate with AOS."]}),"\n",(0,r.jsx)(t.h3,{id:"2-business-connector-architecture",children:"2. Business Connector architecture"}),"\n",(0,r.jsx)(t.p,{children:"The differences between the client kernel as it runs on a standard client and a Business Connector client are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The Session Manager in the client kernel manages only a single instance\u2013in the Business Connector kernel, it manages multiple instances."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"he client kernel includes forms security, while the Business Connector kernel does not."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This diagram describes the architecture of the Business Connector version of the client kernel, and describes how communications flow within it."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Business_Connector_Client&quot;",src:i(13152).Z+"",title:"Business_Connector_Client",width:"575",height:"411"})}),"\n",(0,r.jsx)(t.h3,{id:"3-application-file-server-architecture",children:"3. Application file server architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;App_file_server_architechture&quot;",src:i(5617).Z+"",title:"App_file_server_architechture",width:"331",height:"211"})}),"\n",(0,r.jsx)(t.h2,{id:"model-store-architecture",children:"Model store architecture"}),"\n",(0,r.jsx)(t.p,{children:"Microsoft Dynamics AX contains sixteen layers. Each layer consists of one or more logical parts called models. A model is generated for each layer. For example, VAR Model is the model that the system generates for the VAR layer. The system generated models let you install and work with the base Microsoft Dynamics AX system."}),"\n",(0,r.jsx)(t.p,{children:"When you customize the Microsoft Dynamics AX program, you can take advantage of the capabilities of models."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Model_store_architecture&quot;",src:i(25828).Z+"",title:"Model_store_architecture",width:"720",height:"776"})}),"\n",(0,r.jsx)(t.p,{children:"The following table describes the application object layers in Microsoft Dynamics AX 2012:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Layer&quot;",src:i(52312).Z+"",title:"Layer",width:"499",height:"389"})}),"\n",(0,r.jsx)(t.h2,{id:"client-architecture",children:"Client architecture"}),"\n",(0,r.jsx)(t.p,{children:"This diagram describes the functionality within the client, and describes how communications flow within it."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Client_architecture&quot;",src:i(49258).Z+"",title:"Client_architecture",width:"933",height:"798"})}),"\n",(0,r.jsx)(t.h2,{id:"clientserver-communication",children:"Client/server communication"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;ClientServer_communication&quot;",src:i(41033).Z+"",title:"ClientServer_communication",width:"1061",height:"757"})}),"\n",(0,r.jsx)(t.p,{children:"The client communicates with various Microsoft Dynamics AX components in the following ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The client uses the remote procedure call (RPC) protocol to communicate with Application Object Server (AOS). The client never accesses the database or metadata directly. AOS sends the application objects and data to the client."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The data layer that the client uses is based on data sources that are specified in metadata for forms and queries. In addition, any X++ code that is required to retrieve data can use the built-in language support to query and adjust data."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The client uses a report Web Part to interact with the report server. By calling the web services that are exposed by the report server, the report control in the Web Part displays information that is contained in Reporting Services reports. These reports can include either transnational data from the Microsoft Dynamics AX application or OLAP cubes from Microsoft SQL Server Analysis Services. Cubes provide business analytic and key performance indicators (KPIs)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The client provides workflow forms, alerts, and controls so that users can participate in the business process by using the Workflow system. The Workflow system is a Microsoft Dynamics AX component that enables workflow processes by using Windows Communication Foundation classes."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The client provides a Help viewer, which is an application that displays context-sensitive Help topics. The Help topics are retrieved from a Help server that is located on-premises."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The client also provides Role Centers, or role-based home pages, for users. Role Centers provide role-specific tasks, activities, alerts, reports, and business intelligence that help users increase their productivity. To interact with the Role Centers that are provided by Enterprise Portal and hosted on Internet Information Services (IIS), the client uses a browser control."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"services-and-aif-architecture",children:"Services and AIF architecture"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"AX 2012 exposes its functionality through services that are based on Windows Communication Foundation (WCF) and hosted on Application Object Server (AOS). External applications and client applications on the local area network consume AX services by accessing them directly from AOS."}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"These clients and applications include AX components such as the AX client, Office Add-, and Enterprise Portal."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Internet-based external applications and clients access the AX services through Internet Information Services (IIS). IIS routes the incoming requests for AX services to AOS. All services requests, regardless of their origin, are handled by the WCF runtime that is hosted on AOS."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The AIF request preprocessor, if it is configured, can intercept the inbound request messages for custom preprocessing, such as message transforms or value substitutions. The AX service invokes the necessary business logic to process the inbound request message."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Similarly, the AIF response postprocessor, if it is configured, can intercept the outbound response messages for custom post-processing, such as message transforms or value substitutions. The AIF response postprocessor then returns the response to the client."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;WCF_architecture&quot;",src:i(77316).Z+"",title:"WCF_architecture",width:"578",height:"640"})}),"\n",(0,r.jsx)(t.h2,{id:"enterprise-portal-architecture",children:"Enterprise Portal architecture"}),"\n",(0,r.jsx)(t.p,{children:"This diagram provides a logical overview of a Microsoft Dynamics AX 2012 system with an Enterprise Portal server, and also describes the various components of the Enterprise Portal architecture."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;EP_Architecture&quot;",src:i(77714).Z+"",title:"EP_Architecture",width:"1020",height:"836"})}),"\n",(0,r.jsx)(t.h2,{id:"security-architecture",children:"Security architecture"}),"\n",(0,r.jsx)(t.p,{children:"This following diagram provides a high-level overview of the security architecture of Microsoft Dynamics AX 2012."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Security_architecture&quot;",src:i(43197).Z+"",title:"Security_architecture",width:"722",height:"756"})}),"\n",(0,r.jsx)(t.h2,{id:"workflow-system-architecture",children:"Workflow system architecture"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"This following diagram provides a high-level architecture of the workflow infrastructure."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The workflow infrastructure consists of two components that are hosted on Application Object Server (AOS): the X++ workflow run-time and the managed workflow run-time."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Workflow_system_arcitechture",src:i(17161).Z+"",title:"Workflow_system_arcitechture",width:"721",height:"666"})}),"\n",(0,r.jsx)(t.h2,{id:"analytic-architecture",children:"Analytic architecture"}),"\n",(0,r.jsx)(t.p,{children:"The following diagram shows the Microsoft SQL Server Analysis Services cubes that are included with Microsoft Dynamics AX, and the components that are used to access them."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;Analytic_architecture&quot;",src:i(50210).Z+"",title:"Analytic_architecture",width:"817",height:"769"})}),"\n",(0,r.jsx)(t.h2,{id:"reporting-architecture",children:"Reporting architecture"}),"\n",(0,r.jsx)(t.p,{children:"The following diagram illustrates the architecture of the reporting functionality in Microsoft Dynamics AX."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"&quot;reporting_architecture&quot;",src:i(7419).Z+"",title:"reporting_architecture",width:"647",height:"183"})}),"\n",(0,r.jsx)(t.p,{children:"Thank you for reading."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},22971:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/AOSWindowsService-69a8e7ad0ed75dd5eb736e88b73485c7.gif"},93940:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/AXSystemArchitechture-f89de63802417b431e0be44733d9bfd6.gif"},50210:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Analytic_architecture-8b25e449e306e5d3b5ea65dc1f576d41.gif"},5617:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/gif;base64,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"},13152:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Business_Connector_Client-77e8699d74c00b5f104efcd10833aa7f.gif"},41033:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/ClientServer_communication-0696b4b8faa4fde3e77ee3e5adbb8167.gif"},49258:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Client_architecture-da70ec4d95035c3265ec10fca278dba3.gif"},77714:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/EP_Architecture-45a9358bc1130fa435d0c30333c3c84e.gif"},52312:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Layer-404ce73ead3547fdd5591cab42c9bb65.png"},25828:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Model_store_architecture-dd6b6a9d87f9f363993e39bdacd6c12a.gif"},43197:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Security_architecture-6a09468d63ad22e81ae66317523e3362.gif"},77316:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/WCF_architecture-7634b03f5a1c331343dd14d98fe05ecd.png"},17161:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Workflow_system_arcitechture-d9587171f726317d9cf82f4d53bef1f1.png"},7419:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/reporting_architecture-d1462d5c1f78af94d4250a9fa8844ed7.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>n,a:()=>A});var r=i(67294);const s={},c=r.createContext(s);function A(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:A(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);