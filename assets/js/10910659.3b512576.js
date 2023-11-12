"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[2664],{26821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(85893),s=n(11151);const a={date:new Date("2019-10-10T00:00:00.000Z"),modified:new Date("2023-02-02T00:00:00.000Z"),title:"Extend the standard reports in Dynamics 365 finance and operations (CustAccountStatementExt)",tags:["COC","Extension","SSRS"],key:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations",categories:["FinOps","Report","Chain of command"],lightgallery:!0},o=void 0,i={id:"development/business-docs/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations/index",title:"Extend the standard reports in Dynamics 365 finance and operations (CustAccountStatementExt)",description:"- 1. Adding a new field",source:"@site/docs/03-development/02-business-docs/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations/index.md",sourceDirName:"03-development/02-business-docs/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations",slug:"/development/business-docs/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations/",permalink:"/automaly.com/development/business-docs/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations/",draft:!1,unlisted:!1,tags:[{label:"COC",permalink:"/automaly.com/tags/coc"},{label:"Extension",permalink:"/automaly.com/tags/extension"},{label:"SSRS",permalink:"/automaly.com/tags/ssrs"}],version:"current",frontMatter:{date:"2019-10-10T00:00:00.000Z",modified:"2023-02-02T00:00:00.000Z",title:"Extend the standard reports in Dynamics 365 finance and operations (CustAccountStatementExt)",tags:["COC","Extension","SSRS"],key:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations",categories:["FinOps","Report","Chain of command"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Management reporter in new AX, Dynamics 365 For Operation",permalink:"/automaly.com/development/business-docs/2017-07-24-Management-reporter-in-Dynamics-365-for-operation/Management-reporter-in-Dynamics-365-for-operation"},next:{title:"Deploy SSRS reports in Dynamics 365 Finance, SCM using Powershell",permalink:"/automaly.com/development/business-docs/2021-01-27-Deploy-SSRS-reports-in-Dynamics-365-Finance,-SCM-using-Powershell/"}},d={},c=[{value:"1. Adding a new field",id:"1-adding-a-new-field",level:3},{value:"2. Duplicate the report",id:"2-duplicate-the-report",level:3},{value:"3. Modify\xa0the report design, right click on report dataset and choose restore to refresh the new field",id:"3-modifythe-report-design-right-click-on-report-dataset-and-choose-restore-to-refresh-the-new-field",level:3},{value:"4. Create a new Extension class\xa0that extends the standard report controller class.",id:"4-create-a-new-extension-classthat-extends-the-standard-report-controller-class",level:3},{value:"5. Create new report handler class",id:"5-create-new-report-handler-class",level:3},{value:"6. Add a delegate handler method to start to use your custom report.",id:"6-add-a-delegate-handler-method-to-start-to-use-your-custom-report",level:3},{value:"7. Create extension for the existing menu items",id:"7-create-extension-for-the-existing-menu-items",level:3},{value:"8. Update the Print management settings to use the custom business document",id:"8-update-the-print-management-settings-to-use-the-custom-business-document",level:3},{value:"9. Run report and test the result",id:"9-run-report-and-test-the-result",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#1-adding-a-new-field",children:"1. Adding a new field"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#2-duplicate-the-report",children:"2. Duplicate the report"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#3-modifythe-report-design-right-click-on-report-dataset-and-choose-restore-to-refresh-the-new-field",children:"3. Modify\xa0the report design, right click on report dataset and choose restore to refresh the new field"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#4-create-a-new-extension-classthat-extends-the-standard-report-controller-class",children:"4. Create a new Extension class\xa0that extends the standard report controller class."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#5-create-new-report-handler-class",children:"5. Create new report handler class"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#6-add-a-delegate-handler-method-to-start-to-use-your-custom-report",children:"6. Add a delegate handler method to start to use your custom report."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#7-create-extension-for-the-existing-menu-items",children:"7. Create extension for the existing menu items"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#8-update-the-print-management-settings-to-use-the-custom-business-document",children:"8. Update the Print management settings to use the custom business document"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#9-run-report-and-test-the-result",children:"9. Run report and test the result"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this article, I will show the procedure for the SSRS Reports development and customization in Dynamics 365 finance and operations (Version 8.1 and above)."}),"\n",(0,r.jsxs)(t.p,{children:["The scenario is you would like to extend ",(0,r.jsx)(t.strong,{children:"the customer account statement"})," report with 2 main tasks"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/analytics/custom-designs-business-docs?toc=/dynamics365/commerce/toc.json",children:"Create custom design for the report"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/analytics/expand-app-suite-report-data-sets?toc=/dynamics365/commerce/toc.json",children:"Expand the standard report data sets"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Same with AX 2012 version, there is no change on how you developer a new SSRS report with query based and report data provider. But if you want to extend or modify the standard one you need to understand how to use extensions in general, Event handlers and Chain of Command."}),"\n",(0,r.jsx)(t.p,{children:"The steps"}),"\n",(0,r.jsx)(t.h3,{id:"1-adding-a-new-field",children:"1. Adding a new field"}),"\n",(0,r.jsxs)(t.p,{children:["The main temp table is ",(0,r.jsx)(t.strong,{children:"CustAccountStatementExtTmp"}),", right click and create an extension; I'm going to add a new string field ",(0,r.jsx)(t.strong,{children:"MaxTxT"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(42801).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_1.png",width:"1170",height:"194"})}),"\n",(0,r.jsx)(t.h3,{id:"2-duplicate-the-report",children:"2. Duplicate the report"}),"\n",(0,r.jsxs)(t.p,{children:["Duplicate the ",(0,r.jsx)(t.strong,{children:"CustAccountStatementExt"})," report in ",(0,r.jsx)(t.em,{children:"the Application explorer > AOT > Reports > CustAccountStatementExt"})," as shown in below screen shot:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(43914).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_2.png",width:"808",height:"512"})}),"\n",(0,r.jsxs)(t.p,{children:["Rename the report and provide any appropriate name: ",(0,r.jsx)(t.strong,{children:"MaxCustAccountStatementExt"})]}),"\n",(0,r.jsx)(t.h3,{id:"3-modifythe-report-design-right-click-on-report-dataset-and-choose-restore-to-refresh-the-new-field",children:"3. Modify\xa0the report design, right click on report dataset and choose restore to refresh the new field"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(32756).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_3.png",width:"888",height:"702"})}),"\n",(0,r.jsx)(t.p,{children:"Open report designer and add that field into a table"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(21648).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_4.png",width:"1226",height:"738"})}),"\n",(0,r.jsx)(t.h3,{id:"4-create-a-new-extension-classthat-extends-the-standard-report-controller-class",children:"4. Create a new Extension class\xa0that extends the standard report controller class."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"class MaxCustAccountStatementExtController_Ext extends CustAccountStatementExtController{}"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"//Add construct\r\npublic static MaxCustAccountStatementExtController_Ext construct()\r\n{\r\n    return new MaxCustAccountStatementExtController_Ext();\r\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Copy the\xa0main\xa0method from the standard controller class and add references to the new\xa0Controller\xa0class"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"public static void main(Args _args)\r\n{\r\n    SrsPrintMgmtFormLetterController controller = new MaxCustAccountStatementExtController_Ext();\r\n    controller.parmReportName(PrintMgmtDocType::construct(PrintMgmtDocumentType::CustAccountStatement).getDefaultReportFormat());\r\n    controller.parmArgs(_args);\r\n    MaxCustAccountStatementExtController_Ext::startControllerOperation(controller, _args);\r\n}\r\n\xa0\r\nprotected static void startControllerOperation(SrsPrintMgmtFormLetterController _controller, Args _args)\r\n{\r\n    _controller.startOperation();\r\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Optional method, determine which default design for report, some reports don't use ",(0,r.jsx)(t.code,{children:"SrsPrintMgmtFormLetterController"}),", so you can implement this method by your own."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"protected void outputReport()\r\n{\r\n    SRSCatalogItemName  reportDesign;\r\n    reportDesign = ssrsReportStr(MaxCustAccountStatementExt,Report);\r\n    this.parmReportName(reportDesign);\r\n    this.parmReportContract().parmReportName(reportDesign);\r\n    formletterReport.parmReportRun().settingDetail().parmReportFormatName(reportDesign);\r\n    super();\r\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"5-create-new-report-handler-class",children:"5. Create new report handler class"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"class MaxCustAccountStatementHandler{}"})}),"\n",(0,r.jsx)(t.p,{children:"We have two different ways to Populate the data in the Report handler class:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Add a temp table Inserting event, row-by-row calculations. Go to ",(0,r.jsx)(t.code,{children:"CustAccountStatementExtTmp"})," in AOT, expand Events node, and ",(0,r.jsx)(t.em,{children:"Copy event handler method"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"class MaxCustAccountStatementExtHandler\r\n{\r\n    [DataEventHandlerAttribute(tableStr(CustAccountStatementExtTmp), DataEventType::Inserting)]\r\n    public static void CustAccountStatementExtTmpInsertEvent(Common c, DataEventArgs e)\r\n    {\r\n        CustAccountStatementExtTmp  tempTable = c;\r\n        CustGroup custGroup;\r\n        select * from tempTable\r\n            where tempTable.CustGroup == custGroup.CustGroup;\r\n\r\n        tempTable.MaxTxT = custGroup.Description;\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add a data processing post-handler, inserting operations that use a single pass over the result set of the standard solution."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"class MaxCustAccountStatementExtHandler\r\n{\r\n    [PostHandlerFor(classStr(CustAccountStatementExtDP), methodstr(CustAccountStatementExtDP, processReport))]\r\n    public static void TmpTablePostHandler(XppPrePostArgs arguments)\r\n    {\r\n        CustAccountStatementExtDP dpInstance = arguments.getThis() as CustAccountStatementExtDP;\r\n        CustAccountStatementExtTmp tmpTable = dpInstance.getCustAccountStatementExtTmp();\r\n        CustGroup custGroup;\r\n        ttsbegin;\r\n        while select forUpdate tmpTable\r\n        {\r\n            select * from tempTable\r\n                where tempTable.CustGroup == custGroup.CustGroup;\r\n            tempTable.MaxTxT = custGroup.Description;\r\n            tmpTable.update();\r\n        }\r\n        ttscommit;\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"6-add-a-delegate-handler-method-to-start-to-use-your-custom-report",children:"6. Add a delegate handler method to start to use your custom report."}),"\n",(0,r.jsxs)(t.p,{children:["In this example, extend the ",(0,r.jsx)(t.code,{children:"getDefaultReportFormatDelegate"})," method in the ",(0,r.jsx)(t.code,{children:"PrintMgtDocTypeHandlerExt"})," class by using the following code."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C#",children:"class MaxPrintMgtDocTypeHandlersExt\r\n{\r\n    [SubscribesTo(classstr(PrintMgmtDocType), delegatestr(PrintMgmtDocType, getDefaultReportFormatDelegate))]\r\n    public static void getDefaultReportFormatDelegate(PrintMgmtDocumentType _docType, EventHandlerResult _result)\r\n    {\r\n        switch (_docType)\r\n        {\r\n            case PrintMgmtDocumentType::CustAccountStatement:\r\n                _result.result(ssrsReportStr(MaxCustAccountStatementExt, Report));\r\n                break;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"7-create-extension-for-the-existing-menu-items",children:"7. Create extension for the existing menu items"}),"\n",(0,r.jsxs)(t.p,{children:["Navigating to the ",(0,r.jsx)(t.code,{children:"CustAccountStatementExt"})," output menu item and create extension."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(66490).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_5.png",width:"638",height:"294"})}),"\n",(0,r.jsxs)(t.p,{children:["Also make sure to set the value of the\xa0Object\xa0property ",(0,r.jsx)(t.code,{children:"to\xa0MaxCustAccountStatementExtController_Ext"})," to redirect user navigation to the extended solution."]}),"\n",(0,r.jsx)(t.p,{children:"That's all, this is what you should have"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(45669).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_9.png",width:"552",height:"380"})}),"\n",(0,r.jsx)(t.h3,{id:"8-update-the-print-management-settings-to-use-the-custom-business-document",children:"8. Update the Print management settings to use the custom business document"}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.em,{children:"Account payable > Inquiries and reports > Setup > Forms > Form setup"}),"\r\nClick ",(0,r.jsx)(t.strong,{children:"Print Management"}),", find the document configuration settings, and then select the custom design"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(78362).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_6.png",width:"1208",height:"494"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(68167).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_7.png",width:"2368",height:"1054"})}),"\n",(0,r.jsx)(t.h3,{id:"9-run-report-and-test-the-result",children:"9. Run report and test the result"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Extend-the-standard-reports",src:n(93098).Z+"",title:"2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_8.png",width:"1324",height:"800"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},42801:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_1-aa36538ec9a0f9789e3e2f0a8dbc48b5.png"},43914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_2-7e9038e77355a3219cf2bd1fbc17cb22.png"},32756:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_3-b2225acbb41566add6434e100f7f25e6.png"},21648:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_4-8cf5c9a08a545a7f561bc98db998eefb.png"},66490:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_5-893704810ae92400f37f6ee2aea23c9e.png"},78362:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_6-caa531647bf673b18543244281586b89.png"},68167:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_7-0d552beaa54ce4cc52ba581e8df4f9b9.png"},93098:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_8-f8e163a7ccf960effab7339f18e6707e.png"},45669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2019-10-10-Extend-the-standard-reports-in-Dynamics-365-finance-and-operations_9-72ec179f541708aac2cce7a8854e0a13.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);