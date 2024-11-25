"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[5882],{64913:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var n=o(74848),r=o(28453);const l={date:"2021-12-23",title:"Send multiple records to workflow",categories:["X++","Workflow"],tags:["Workflow"],authors:"max",unlisted:!0},a=void 0,m={permalink:"/2021/12/23/Dynamics-365-Finance-Operations-Send-multiple-records-to-workflow",source:"@site/blog/2021-12-23-Dynamics-365-Finance-Operations-Send-multiple-records-to-workflow/index.md",title:"Send multiple records to workflow",description:"How to send multiple records to workflow using X++ in Dynamics 365 Finance Operations",date:"2021-12-23T00:00:00.000Z",tags:[{inline:!0,label:"Workflow",permalink:"/tags/workflow"}],readingTime:.8866666666666667,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max",page:null}],frontMatter:{date:"2021-12-23",title:"Send multiple records to workflow",categories:["X++","Workflow"],tags:["Workflow"],authors:"max",unlisted:!0},unlisted:!0,lastUpdatedAt:17035003e5,lastUpdatedBy:"Dynamics365"},s={authorsImageUrls:[void 0]},i=[];function c(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"How to send multiple records to workflow using X++ in Dynamics 365 Finance Operations"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Submit Code"',children:"#define.WorkFlowTemplateName(\"Template Name\")  \n// or -- workFlowTypeStr(Template name)\n\nif (common.WorkflowApprovalStatus == WFApprovalStatus::Draft)\n{\n    Workflow::activateFromWorkflowType(#WorkFlowTemplateName, common.RecId, \n\t                                'Workflow submitted by button', false, Curuserid());\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Approval Code"',children:'WorkflowWorkItemTable   WorkflowWorkItemTable;\n\n// main code\nselect firstonly WorkflowWorkItemTable\n    where workflowWorkItemTable.Type == WorkflowWorkItemType::WorkItem\n\t&& workflowWorkItemTable.Status == WorkflowWorkItemStatus::Pending // this should be Pending\n\t&& WorkflowWorkItemTable.RefTableId == tableNum(common)\n\t&& WorkflowWorkItemTable.RefRecId  == common.RecId;\n\nif (WorkflowWorkItemTable)\n{\n    WorkflowWorkItemActionManager::dispatchWorkItemAction(WorkflowWorkItemTable,\n\t\t\t\t\t\t\t"Mulitple Approve by button", \n\t\t\t\t\t\t\tcuruserId(), \n                                                        WorkflowWorkItemActionType::Complete,\n\t\t\t\t\t\t\tmenuitemActionStr("Approve menu item name"));\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Reject Code"',children:"WorkflowWorkItemTable   WorkflowWorkItemTable;\n\n// main code\nselect WorkflowWorkItemTable\n    where workflowWorkItemTable.Type == WorkflowWorkItemType::WorkItem\n\t&& workflowWorkItemTable.Status == WorkflowWorkItemStatus::Pending\n\t&& WorkflowWorkItemTable.RefTableId == tableNum(Common)\n\t&& WorkflowWorkItemTable.RefRecId  == common.RecId;\n\nif (WorkflowWorkItemTable)\n{\n    ttsbegin;\n    WorkflowWorkItemActionManager::dispatchWorkItemAction(WorkflowWorkItemTable,\n\t\t\t\t\t\t\t    \"Mulitple Reject by button\", \n\t\t\t\t\t\t\t    curuserId(), \n\t\t\t\t\t\t\t    WorkflowWorkItemActionType::Return,\n\t\t\t\t\t\t\t    menuitemActionStr('Reject menu item Name'));\n    ttscommit;\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Recall Code"',children:'#define.WorkFlowTemplateName("Template Name")  \n// or -- workFlowTypeStr(Template name)\n\nif (common.WorkflowApprovalStatus == WFApprovalStatus::Submitted \n    || common.WorkflowApprovalStatus == WFApprovalStatus::PendingApproval)\n{\n    WorkflowCorrelationId\tworkflowCorrelationId = Workflow::activateFromWorkflowType(#WorkFlowTemplateName, \n\t\t\t\t\t\t\t\t\t\t\t    common.RecId, \n                                                                                            \'By button RecallAllToWorkflow\', \n\t\t\t\t\t\t\t\t\t\t\t    true, Curuserid());\n   \n    Workflow::cancelWorkflow(workflowCorrelationId,"Mulitple Recalled by user");\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Button Clicked method Code: For multi-select, we need to loop the record by record so for that I have used the button clicked. Instead of this, we can create a new class and write in the main method."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'showLineNumbers title="Recall Code"',children:"void clicked()\n{   \n    FormDataSource      Common_ds = element.Common_ds;\n    Common    \t       common    = Common_ds.cursor(); \n    System.Exception    ex;\n\n    next clicked();      \n\n    if (Common_ds.Anymarked())\n    {\n        for (common = getFirstSelection(Common_ds); common; common = Common_ds.getNext())\n\t{\n\t    try\n\t    {\n\t        // call the Approve or submit or Reject code \n\t    }    \n\t    catch\n\t    {\n\t\tex = CLRInterop::getLastException().GetBaseException();\n\t\terror(ex.get_Message());\n\t    }\n\t}\n    }\n\t\n    Common_ds.research(true);\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Set button properties",src:o(69704).A+"",width:"1178",height:"351"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},69704:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/image_2023_09_12T12_01_42_192Z-aba96cf601c3fbc0a409f3ffb283d6dc.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>m});var n=o(96540);const r={},l=n.createContext(r);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);