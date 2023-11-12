"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[7945],{33138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var o=r(85893),n=r(11151);const c={title:"Execute Stored Procedure from X++ code",description:"Execute Stored Procedure from X++ code",date:new Date("2015-05-12T00:00:00.000Z"),categories:["AX2012"],tags:["xpp","stored procedure"],lightgallery:!0,toc:{auto:!0}},s=void 0,a={id:"development/xpp-sample/2015-05-12-execute-stored-procedure-from-x-code/index",title:"Execute Stored Procedure from X++ code",description:"Execute Stored Procedure from X++ code",source:"@site/docs/03-development/01-xpp-sample/2015-05-12-execute-stored-procedure-from-x-code/index.md",sourceDirName:"03-development/01-xpp-sample/2015-05-12-execute-stored-procedure-from-x-code",slug:"/development/xpp-sample/2015-05-12-execute-stored-procedure-from-x-code/",permalink:"/automaly.com/development/xpp-sample/2015-05-12-execute-stored-procedure-from-x-code/",draft:!1,unlisted:!1,tags:[{label:"xpp",permalink:"/automaly.com/tags/xpp"},{label:"stored procedure",permalink:"/automaly.com/tags/stored-procedure"}],version:"current",frontMatter:{title:"Execute Stored Procedure from X++ code",description:"Execute Stored Procedure from X++ code",date:"2015-05-12T00:00:00.000Z",categories:["AX2012"],tags:["xpp","stored procedure"],lightgallery:!0,toc:{auto:!0}},sidebar:"tutorialSidebar",previous:{title:"Create and write to XML file in Dynamics AX",permalink:"/automaly.com/development/xpp-sample/2015-02-04-create-and-write-to-xml-file-in-dynamics-ax/"},next:{title:"Execute external database Stored Procedure from X++ code using ODBC connectivity",permalink:"/automaly.com/development/xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/"}},d={},i=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["To execute a stored procedure from X++ use the Server method, the Client method does not have permissions; you don\u2019t require any special privileges or permissions to execute a stored procedure. If we use other than ",(0,o.jsx)(t.strong,{children:"Server"})," method, a message should appear like this"]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["Request for the permission of type ",(0,o.jsx)(t.code,{children:"SqlStatementExecutePermission"})," failed."]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:"public static void main(AssemblyLoadEventArgs _args)\r\n{\r\n    Connection con = new Connection();\r\n    Statement stmt = new Con.createStatement();\r\n \r\n    ResultSet r;\r\n    str sql;\r\n \r\n    SqlStatementExecutePermission perm;\r\n    sql = stmt('EXEC [StoreprocedureName]');\r\n    perm = new SqlStatementExecutePermission(sql);\r\n    perm.assert();\r\n    try\r\n    {\r\n        stmt.executeUpdate(sql);\r\n    }\r\n    catch (Exception::Error)\r\n    {\r\n        print \"An error occured in the query\";\r\n        pause;\r\n    }   \r\n    CodeAccessPermission::revertAssert();\r\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var o=r(67294);const n={},c=o.createContext(n);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);