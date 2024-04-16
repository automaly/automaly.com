"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[8126],{16313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(85893),o=r(11151);const s={date:"2024-01-02",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",categories:["X++"],tags:["SRS","Pre-process"],authors:"kome"},a=void 0,i={permalink:"/blog/2024/01/04/NoDataInTmpTableForPreProcessReport",source:"@site/blog/2024-01-04-NoDataInTmpTableForPreProcessReport/index.md",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",description:"References",date:"2024-01-02T00:00:00.000Z",tags:[{label:"SRS",permalink:"/blog/tags/srs"},{label:"Pre-process",permalink:"/blog/tags/pre-process"}],readingTime:1.1766666666666667,hasTruncateMarker:!0,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://github.com/khahgm7.png",key:"kome"}],frontMatter:{date:"2024-01-02",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",categories:["X++"],tags:["SRS","Pre-process"],authors:"kome"},unlisted:!1,prevItem:{title:"Using Kusto functions in Power BI datasource",permalink:"/blog/2024/01/04/KustoVsPBI"},nextItem:{title:"Set default model for Dynamics 365 Finance Operations project",permalink:"/blog/2023/12/26/set-default-model-for-d365-project"}},l={authorsImageUrls:[void 0]},c=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamicsax-2012/appuser-itpro/tips-to-help-prevent-long-running-reports-from-timing-out#use-pre-processed-rdp-classes",children:"Use pre-processed RDP classes"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.microsoft.com/en-us/download/details.aspx?id=27725",children:"Microsoft Dynamics AX 2012 White Paper: Report Programming Model"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,n.jsx)(t.p,{children:"Pre-process RDP has become very commonplace these days, especially to ones who work with SSRS reports on Dynamics 365 FO a lot."}),"\n",(0,n.jsx)(t.p,{children:"Recently, I faced an issue when no data was inserted into or modififed in my temporary table during run-time despite the fact that RDP class (and its related ones within the same framework) was executed successfully. Even debugging did not show me what was going wrong. There was simply no SQL statements in the trace that I captured."}),"\n",(0,n.jsx)(t.p,{children:"Turned out that I will need to take ownership of the temp table instance before manipulating any data in it."}),"\n",(0,n.jsx)(t.p,{children:"My code used to be (when it did not work):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:"internal final class CSG_PostedServiveOrderWithoutInvDP extends SrsReportDataProviderPreProcessTempDB\r\n{\r\n    CSG_PostedServiveOrderWithoutInvTmp           tmpTable;\r\n\r\n    [SRSReportDataSetAttribute(tableStr(CSG_PostedServiveOrderWithoutInvTmp))]\r\n    public CSG_PostedServiveOrderWithoutInvTmp getTmpTable()\r\n    {\r\n        select tmpTable;\r\n        return tmpTable;\r\n    }\r\n\r\n    public void processReport()\r\n    {\r\n        ttsbegin;\r\n        this.populateTmpTable();\r\n        ttscommit;\r\n    }\r\n\r\n    private void populateTmpTable()\r\n    {\r\n        // Insert data to tmp table here.\r\n    }\r\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);