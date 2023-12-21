"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[4819],{6559:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var r=i(85893),s=i(11151);const t={title:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",description:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",date:new Date("2016-12-29T00:00:00.000Z"),tags:["AX2012","Integration"],categories:["AX2012","Integration","AIF"],lightgallery:!0,toc:{auto:!0}},c=void 0,o={id:"integration/aif-integration-ax12/2016-12-29-CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3/index",title:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",description:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",source:"@site/docs/02-integration/04-aif-integration-ax12/2016-12-29-CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3/index.md",sourceDirName:"02-integration/04-aif-integration-ax12/2016-12-29-CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",slug:"/integration/aif-integration-ax12/2016-12-29-CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3/",permalink:"/docs/integration/aif-integration-ax12/2016-12-29-CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3/",draft:!1,unlisted:!1,tags:[{label:"AX2012",permalink:"/docs/tags/ax-2012"},{label:"Integration",permalink:"/docs/tags/integration"}],version:"current",frontMatter:{title:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",description:"CRUD Purchase Requisition using AIF in Dynamics AX 2012 R3",date:"2016-12-29T00:00:00.000Z",tags:["AX2012","Integration"],categories:["AX2012","Integration","AIF"],lightgallery:!0,toc:{auto:!0}},sidebar:"tutorialSidebar",previous:{title:"Insert, update, Delete order line through AIF In AX 2012 R3",permalink:"/docs/integration/aif-integration-ax12/2016-12-28-Insert,-update,-Delete-order-line-through-AIF-In-AX-2012-R3/"},next:{title:"AIF Custom response value in Dynamics AX 2012 R3",permalink:"/docs/integration/aif-integration-ax12/2017-01-11-aif-custom-response-value-in-dynamics-ax-2012-r3/"}},a={},u=[{value:"How to do",id:"how-to-do",level:3},{value:"Consume Pruchase requisition service",id:"consume-pruchase-requisition-service",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The workflow process moves purchase requisitions through the review process, from an initial status of ",(0,r.jsx)(n.strong,{children:"Draft"})," to a final status of ",(0,r.jsx)(n.strong,{children:"Approved"}),". When a purchase requisition is submitted for review, the workflow process is started. After a purchase requisition is approved, a purchase order can be generated for the purchase requisition lines and submitted to the vendor for order fulfillment."]}),"\n",(0,r.jsxs)(n.p,{children:["We will use AIF standard service for import PR from outside, service name ",(0,r.jsx)(n.code,{children:"PurchReqImportService"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["in ",(0,r.jsx)(n.code,{children:"AxPurchReqTable"})," class and ",(0,r.jsx)(n.code,{children:"setPurchReqId()"})," method"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C#",children:"protected void setPurchReqId()\r\n{\r\n    NumberSequenceReference numberSequenceReference;\r\n\r\n    if (this.isMethodExecuted(funcName()))\r\n    {\r\n        return;\r\n    }\r\n\r\n    if (this.isFieldSetExternally(fieldNum(PurchReqTable, PurchReqId)))\r\n    {\r\n        if (this.isSetMethodsCalledFromSave())\r\n        {\r\n            if (!this.purchReqTable())\r\n            {\r\n                numberSequenceReference = PurchReqTable::numRefPurchReqId();\r\n                this.checkNumber(numberSequenceReference.numberSequenceTable(),fieldNum(PurchReqTable,PurchReqId),this.parmPurchReqId());\r\n                if (numberSequenceReference.NumberSequenceId && numberSequenceReference.numberSequenceTable().Continuous)\r\n                {\r\n                    NumberSeq::newReserveNum(numberSequenceReference).reserve(this.parmPurchReqId());\r\n                }\r\n            }\r\n        }\r\n    }\r\n    else\r\n    {\r\n        if (this.isFieldSet(fieldNum(PurchReqTable, PurchReqId)))\r\n        {\r\n            return;\r\n        }\r\n\r\n        if (!this.parmPurchReqId())\r\n        {\r\n            if (this.isSetMethodsCalledFromSave())\r\n            {\r\n                //this.parmPurchReqId(NumberSeq::newGetNum(PurchParameters::numRefPurchReqId()).num());\r\n                numberSequenceReference = PurchReqTable::numRefPurchReqId();\r\n                if(numberSequenceReference)\r\n                {\r\n                    this.setField(fieldNum(PurchReqTable, PurchReqId), NumberSeq::newGetNum(PurchParameters::numRefPurchReqId()).num());\r\n                }\r\n                else\r\n                {\r\n                    this.setField(fieldNum(PurchReqTable, PurchReqId), this.parmExternalSourceID());\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Base on this method, you could know how System get ",(0,r.jsx)(n.code,{children:"PurchReqId"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-do",children:"How to do"}),"\n",(0,r.jsxs)(n.p,{children:["Go to Inbound ports form to create new service with ",(0,r.jsx)(n.code,{children:"NETTCP"})," adapter, choose service operations likes below:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(25066).Z+"",width:"533",height:"355"})}),"\n",(0,r.jsxs)(n.p,{children:["Then ",(0,r.jsx)(n.code,{children:"active"})," AIF inbound service"]}),"\n",(0,r.jsx)(n.h3,{id:"consume-pruchase-requisition-service",children:"Consume Pruchase requisition service"}),"\n",(0,r.jsx)(n.p,{children:"Open visual studio and create new console project."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(95646).Z+"",width:"957",height:"659"})}),"\n",(0,r.jsx)(n.p,{children:"Add service reference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"http://DEV-ERP:8101/DynamicsAx/Services/MavPurchaseRequisition"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(69384).Z+"",width:"443",height:"240"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(55544).Z+"",width:"631",height:"511"})}),"\n",(0,r.jsx)(n.p,{children:"This one just for demo, so I just create code base on required fields of AIF."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(86516).Z+"",width:"1110",height:"402"})}),"\n",(0,r.jsxs)(n.p,{children:["Here is the code in ",(0,r.jsx)(n.code,{children:"main"})," method"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'PurchReqImportServiceClient client = new PurchReqImportServiceClient();\r\nCallContext context = new CallContext()\r\n{\r\n\tCompany = "BGR",\r\n\tLanguage = "En-us"\r\n};\r\n\r\nAxdEntity_PurchReqLine purchReqLine = new AxdEntity_PurchReqLine()\r\n{\r\n\tRequisitioner = "000007",\r\n\tBuyingLegalEntity = "BGR",\r\n\tItemId = "110329",\r\n\tPurchUnitOfMeasure = "Box",\r\n\tCurrencyCode = "KRW",\r\n\tPurchQty = 100,\r\n\tPurchQtySpecified = true,\r\n\tPriceUnit = 1,\r\n\tPriceUnitSpecified = true,\r\n};\r\n\r\n// Create an instance of the document class.\r\nAxdEntity_PurchReqTable purchReqTable = new AxdEntity_PurchReqTable()\r\n{\r\n\tPurchReqId = "",\r\n\tPurchReqName = "Purch Req by Max",\r\n\tExternalSourceID = "PR002",\r\n\tExternalSourceName = "PR002",\r\n\tAutoSubmitToWorkflowRequired = AxdEnum_NoYes.No,\r\n\tStatusToBeSaved = AxdEnum_PurchReqCreationStatus.Draft,\r\n\tRequisitionStatus = AxdEnum_PurchReqRequisitionStatus.Draft,\r\n\tRequisitionStatusSpecified = true,\r\n\tRequiredDate = new DateTime(2016, 12, 30),\r\n\tRequiredDateSpecified = true,\r\n\tTransDate = new DateTime(2016, 12, 30),\r\n\tTransDateSpecified = true,\r\n\tPurchReqLine = new AxdEntity_PurchReqLine[1] { purchReqLine }\r\n};\r\n\r\n\r\n// Create instances of the entities that are used in the service and\r\n// set the needed fields on those entities.\r\nAxdPurchReqImport purchReq = new AxdPurchReqImport()\r\n{\r\n\tPurchReqTable = new AxdEntity_PurchReqTable[1] { purchReqTable }\r\n};\r\n\r\ntry\r\n{\r\n\tclient.create(context, purchReq);\r\n}\r\ncatch (Exception e)\r\n{\r\n\tConsole.WriteLine(e.ToString());\r\n\tConsole.ReadLine();\r\n}\r\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Run it and check result in AX"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3",src:i(11317).Z+"",width:"1018",height:"27"})}),"\n",(0,r.jsxs)(n.p,{children:["Please prefer previous ",(0,r.jsx)(n.a,{href:"/2016-12-28-crud-purchase-order-using-aif-in-dynamics-ax-2012-r3/",children:"post"})," for another operations."]}),"\n",(0,r.jsx)(n.p,{children:"Thank you for reading!"})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},25066:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3-1-624caef013648fd9b38b7465bafdf505.png"},95646:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3-2-e6f88350314c9115578c08c0de67b07b.png"},69384:(e,n,i)=>{i.d(n,{Z:()=>r});const r="data:image/png;base64,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"},55544:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/CRUD-Purchase-Requisition-using-AIF-in-Dynamics-AX-2012-R3-4-2819fba36554b0634c31cb94eefa80d7.png"},11317:(e,n,i)=>{i.d(n,{Z:()=>r});const r="data:image/png;base64,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"},86516:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/required_fields-cc77f5b7a381c6e5f97771b064ac86dc.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var r=i(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);