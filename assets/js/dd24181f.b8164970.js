"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[4415],{34860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={title:"List Page Interaction Class",description:"List Page Interaction Class",date:new Date("2015-07-01T00:00:00.000Z"),categories:["AX2012"],tags:["interaction class","xpp"]},o=void 0,r={id:"development/xpp-sample/2015-06-09-list-page-interaction-class/index",title:"List Page Interaction Class",description:"List Page Interaction Class",source:"@site/docs/03-development/01-xpp-sample/2015-06-09-list-page-interaction-class/index.md",sourceDirName:"03-development/01-xpp-sample/2015-06-09-list-page-interaction-class",slug:"/development/xpp-sample/2015-06-09-list-page-interaction-class/",permalink:"/development/xpp-sample/2015-06-09-list-page-interaction-class/",draft:!1,unlisted:!1,tags:[{label:"interaction class",permalink:"/tags/interaction-class"},{label:"xpp",permalink:"/tags/xpp"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"List Page Interaction Class",description:"List Page Interaction Class",date:"2015-07-01T00:00:00.000Z",categories:["AX2012"],tags:["interaction class","xpp"]},sidebar:"tutorialSidebar",previous:{title:"Execute external database Stored Procedure from X++ code using ODBC connectivity",permalink:"/development/xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/"},next:{title:"Set default value for a comboBox in Dynamics AX 2012 with X++",permalink:"/development/xpp-sample/2015-11-03-defaultVale-combobox-in-x/"}},l={},c=[];function d(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Form interaction classes that allow user interface control logic to be shared across forms. For instance, controlling which buttons are available to a list page and the associated detail form."}),"\n",(0,s.jsx)(t.p,{children:"The interaction classes are extending a base ListPageInteraction class. This has some methods supported by the kernel to interact e.g. with initializations of the list page form. Other classes can be build stand alone to execute e.g. a batch process or represent a web service or posting classes."}),"\n",(0,s.jsx)(t.p,{children:"Form interaction classes are not mandatory for list pages but should be used on data entry forms that require logic. This ensures consistency and allows easier maintenance of logic."}),"\n",(0,s.jsxs)(t.p,{children:["This class inherits ",(0,s.jsx)(t.code,{children:"from SysListPageInteractionBase"}),", here is some methods we need to know"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"initializing"}),": Called when the form is initializing \u2013 Similar to the form init method"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"intializeQuery"}),": Also called when the form is initializing \u2013 Similar to the datasource init method."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"selectionChanged"}),": Called when the active record changes \u2013 Similar to the datasource active method."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"setButtonEnabled"}),": Should be overridden to dynamically enable/disable buttons based on the current selection. This is called from the selectionChanged method."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-C#",children:"public void selectionChanged()\r\n{\r\n    Requisition requisition = this.listPage().activeRecord(queryDataSourceStr(RequisitionQuery,Requisition));\r\n    super();\r\n   \r\n    if(requisition.WorkflowApprovalStatus == WorkflowApprovalStatus::Approved)\r\n        this.listPage().actionPaneControlEnabled(formControlStr(RequisitionListPage,Edit),true);\r\n    else\r\n        this.listPage().actionPaneControlEnabled(formControlStr(RequisitionListPage,Edit),false);\r\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"setButtonVisibility"}),": Should be overridden to show/hide buttons when the form first opens. This is used more to do a one-off layout adjustment based on system configuration/parameters, as well as the menu-item used to open the form."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["eg If you have a menu-item that opens a form based on status, you may want to hide the relevant ",(0,s.jsx)(t.code,{children:"status"})," field to reduce clutter."]}),"\n",(0,s.jsx)(t.p,{children:"Thank you for reading!"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);