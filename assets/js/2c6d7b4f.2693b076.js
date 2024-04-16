"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[156],{31985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),s=n(11151);const a={date:"2024-01-02",title:"Using Kusto functions in Power BI datasource",categories:["Power BI"],tags:["Kusto","Power BI"],authors:"kome"},i=void 0,o={permalink:"/blog/2024/01/04/KustoVsPBI",source:"@site/blog/2024-01-04-KustoVsPBI/index.md",title:"Using Kusto functions in Power BI datasource",description:"References",date:"2024-01-02T00:00:00.000Z",tags:[{label:"Kusto",permalink:"/blog/tags/kusto"},{label:"Power BI",permalink:"/blog/tags/power-bi"}],readingTime:1.82,hasTruncateMarker:!0,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://github.com/khahgm7.png",key:"kome"}],frontMatter:{date:"2024-01-02",title:"Using Kusto functions in Power BI datasource",categories:["Power BI"],tags:["Kusto","Power BI"],authors:"kome"},unlisted:!1,prevItem:{title:"Using XppPrePostArgs to pass parameters through a method",permalink:"/blog/2024/01/02/TrickXppPrePostArg"},nextItem:{title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",permalink:"/blog/2024/01/04/NoDataInTmpTableForPreProcessReport"}},c={authorsImageUrls:[void 0]},l=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2},{value:"Let&#39;s create demo data for testing",id:"lets-create-demo-data-for-testing",level:3},{value:"Get data from Azure Data Explorer (ADX) to Power BI (PBI)",id:"get-data-from-azure-data-explorer-adx-to-power-bi-pbi",level:3},{value:"Using Kusto function to simplify the process",id:"using-kusto-function-to-simplify-the-process",level:3},{value:"Enhacing data by altering the function",id:"enhacing-data-by-altering-the-function",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/data-explorer/power-bi-data-connector?tabs=web-ui",children:"Use Azure Data Explorer data in Power BI"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/data-explorer/kusto/management/create-function",children:".create function command"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dataexplorer.azure.com/home",children:"Azure Data Explorer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/",children:"Kusto Query Language (KQL)"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(t.h3,{id:"lets-create-demo-data-for-testing",children:"Let's create demo data for testing"}),"\n",(0,r.jsxs)(t.p,{children:["For the purpose of testing and demonstrating, I will create a new table in my testing ADX cluster (everyone can create their own free cluster following ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/data-explorer/start-for-free-web-ui",children:"Create a free Azure Data Explorer cluster"}),"). Let's call it ",(0,r.jsx)(t.code,{children:"UserAsset"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The table will have two fields:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"User"})," - type ",(0,r.jsx)(t.code,{children:"string"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NumberOfLaptop"})," - type ",(0,r.jsx)(t.code,{children:"integer"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The script is as below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:".create table UserAsset \r\n(\r\n    User: string\r\n    , NumberOfLaptop: int\r\n) \n"})}),"\n",(0,r.jsx)(t.p,{children:"Then, we will put some demo data into the table."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:".ingest inline into table UserAsset <|\r\nMax,2\r\nKome,1\n"})}),"\n",(0,r.jsx)(t.p,{children:"We will have the table and its data like below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UserAsset\r\n| project\r\n    User\r\n    , NumberOfLaptop\r\n    , IngestedOn = ingestion_time()\r\n| order by NumberOfLaptop desc\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Kusto table and data",src:n(28308).Z+"",width:"588",height:"336"})}),"\n",(0,r.jsx)(t.h3,{id:"get-data-from-azure-data-explorer-adx-to-power-bi-pbi",children:"Get data from Azure Data Explorer (ADX) to Power BI (PBI)"}),"\n",(0,r.jsx)(t.p,{children:"Simple enough, we then can use the very Kusto query (KQ) in PBI Desktop to get such data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Add new datasource in PBID",src:n(154).Z+"",width:"941",height:"746"})}),"\n",(0,r.jsx)(t.p,{children:"We can copy the query here."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Add query to datasource",src:n(59793).Z+"",width:"700",height:"557"})}),"\n",(0,r.jsx)(t.p,{children:"Upon clicking OK and transform the data, we will have the data available. Notice that whole KQ will be put as plain text in the source."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Alt text",src:n(85675).Z+"",width:"1659",height:"378"})}),"\n",(0,r.jsx)(t.h3,{id:"using-kusto-function-to-simplify-the-process",children:"Using Kusto function to simplify the process"}),"\n",(0,r.jsx)(t.p,{children:"Now, we can create a function to get data from ADX to PBI Desktop."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:".create function GetDataForPBI() {\r\n    UserAsset\r\n    | project\r\n        User\r\n        , NumberOfLaptop\r\n        , IngestedOn = ingestion_time()\r\n    | order by NumberOfLaptop desc\r\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Create function",src:n(23112).Z+"",width:"1411",height:"341"})}),"\n",(0,r.jsx)(t.p,{children:"Then, we can simply call the function from PBI to get the data instead of calling the whole query."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Getting data using function",src:n(84124).Z+"",width:"1487",height:"203"})}),"\n",(0,r.jsx)(t.h3,{id:"enhacing-data-by-altering-the-function",children:"Enhacing data by altering the function"}),"\n",(0,r.jsx)(t.p,{children:"We can even passing parameters to the functions to alter the data. In this case, let's try adding some texts to User. My function would become as below:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Taking a boolean input ",(0,r.jsx)(t.code,{children:"_addText"}),", it is defaulted to ",(0,r.jsx)(t.code,{children:"false"})]}),"\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.code,{children:"_addText"})," is true, add some text to ",(0,r.jsx)(t.code,{children:"User"})]}),"\n",(0,r.jsxs)(t.li,{children:["Else, leave ",(0,r.jsx)(t.code,{children:"User"})," as it is"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Notice that we will need to use ",(0,r.jsx)(t.code,{children:"create-or-alter"})," because the function is existing already."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'.create-or-alter function GetDataForPBI(_addText:bool = false) {\r\nUserAsset\r\n| extend\r\n    User = iff(\r\n        _addText\r\n        , strcat(\r\n            User\r\n            , "-AddedText"\r\n        )\r\n        , User\r\n    )\r\n| project\r\n    User\r\n    , NumberOfLaptop\r\n    , IngestedOn = ingestion_time()\r\n| order by NumberOfLaptop desc\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then, we can call the function from PBI and add the parameter to see how the data is reflected."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Function with parameters",src:n(5223).Z+"",width:"1303",height:"219"})}),"\n",(0,r.jsx)(t.p,{children:"We can even add new columns from ADX and the new data will be reflected on PBI. For example, I will add a column (with emoji) to indicate someone is owning more than one laptop."}),"\n",(0,r.jsx)(t.p,{children:"My function will become as below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'.create-or-alter function GetDataForPBI(_addText:bool = false) {\r\n    UserAsset\r\n    | extend\r\n        User = iff(\r\n            _addText\r\n            , strcat(\r\n                User\r\n                , "-AddedText"\r\n            )\r\n            , User\r\n        )\r\n    | project\r\n        User\r\n        , NumberOfLaptop\r\n        , IngestedOn = ingestion_time()\r\n        , OwningMoreThanOneLaptop = iff(\r\n            NumberOfLaptop > 1\r\n            , "\ud83d\udcbb+"\r\n            , ""\r\n        )\r\n    | order by NumberOfLaptop desc\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Upon refreshing the source, we can see the new column coming up."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"New column from Kusto",src:n(14979).Z+"",width:"1306",height:"230"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-1-c29f624585460bf259a436820d09ff91.png"},59793:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-2-7bf59f241f0d2ca88b42cd62a7141ce4.png"},85675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3-7f798d5e223bffda62d5253d65eacbc9.png"},23112:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-4-d7cf06d1a8cd6aba90fff8002d58e30c.png"},84124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-5-b0b03146315759c18e1c6e5d0ac0fa96.png"},5223:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-6-95bc3715135de749a43a20ea10c94af7.png"},14979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-7-1bb6ec8dcfa51fae453aa3ae76fa7f3f.png"},28308:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-cddcf7e80e46384a2e6d7435472c16e0.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);