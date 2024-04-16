"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[6149],{21602:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(85893),a=s(11151);const r={title:"The Type system of Dynamics AX 2012",date:new Date("2016-11-24T01:22:39.000Z"),categories:["AX2012"],tags:["operator","programming"]},i=void 0,o={id:"development/aot/2016-11-25-the-type-system-of-dynamics-ax-2012/index",title:"The Type system of Dynamics AX 2012",description:"The Microsoft Dynamics AX runtime manages the storage of value type data on the call stack and reference type objects on the memory heap.",source:"@site/docs/03-development/03-aot/2016-11-25-the-type-system-of-dynamics-ax-2012/index.md",sourceDirName:"03-development/03-aot/2016-11-25-the-type-system-of-dynamics-ax-2012",slug:"/development/aot/2016-11-25-the-type-system-of-dynamics-ax-2012/",permalink:"/development/aot/2016-11-25-the-type-system-of-dynamics-ax-2012/",draft:!1,unlisted:!1,tags:[{label:"operator",permalink:"/tags/operator"},{label:"programming",permalink:"/tags/programming"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"The Type system of Dynamics AX 2012",date:"2016-11-24T01:22:39.000Z",categories:["AX2012"],tags:["operator","programming"]},sidebar:"tutorialSidebar",previous:{title:"Link Type and Join Types in ax 2012",permalink:"/development/aot/2016-01-07-link-type-and-join-types-in-ax-2012/"},next:{title:"Simple summary Keys are in Dynamics AX",permalink:"/development/aot/2017-01-02-Simple-summary-Keys-are-in-Dynamics-AX/"}},c={},l=[{value:"Value types",id:"value-types",level:2},{value:"Reference types",id:"reference-types",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Microsoft Dynamics AX runtime manages the storage of ",(0,n.jsx)(t.code,{children:"value type"})," data on the ",(0,n.jsx)(t.strong,{children:"call stack"})," and ",(0,n.jsx)(t.code,{children:"reference type"})," objects on the ",(0,n.jsx)(t.strong,{children:"memory heap"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The call stack"})," is the memory structure that holds data about the active methods called during program execution. ",(0,n.jsx)(t.strong,{children:"The memory heap"})," is the memory area that allocates storage for objects that are destroyed automatically by the Microsoft Dynamics AX run-time."]}),"\n",(0,n.jsx)(t.h2,{id:"value-types",children:"Value types"}),"\n",(0,n.jsxs)(t.p,{children:["Value types include the built-in ",(0,n.jsx)(t.code,{children:"primitive types, extended data types, enumeration types, and built-in collection types"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The primitive types"})," are boolean, int, int64, real, date, utcDateTime, timeofday, str, and guid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The extended data types"})," are specialized primitive types and specialized base enumerations."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The enumeration types"})," are base enumerations and extended data types."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The collection types"})," are the built-in array and container types."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["By default, variables declared as ",(0,n.jsx)(t.strong,{children:"value types"})," are assigned their zero value by the Microsoft Dynamics AX runtime. These variables can\u2019t be set to null. Variable values are copied when variables are used to invoke methods and when they are used in assignment statements. Therefore, two value type variables can\u2019t reference the same value."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"2015-10-06-the-type-system-of-dynamics-ax-2012",src:s(39942).Z+"",title:"the-type-system-of-dynamics-ax-2012",width:"300",height:"238"})}),"\n",(0,n.jsx)(t.h2,{id:"reference-types",children:"Reference types"}),"\n",(0,n.jsxs)(t.p,{children:["Reference types include ",(0,n.jsx)(t.code,{children:"the record types, class types, and interface types"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The record types"})," are table, map, and view. User-defined record types are dynamically composed from application model layers. Microsoft Dynamics AX runtime record types are exposed in the system application programming interface (API). Although the methods are not visible in the AOT, all record types implement the methods that are members of the system xRecord type, a Microsoft Dynamics AX runtime class type."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User-defined class types"})," are dynamically composed from application model layers and Microsoft Dynamics AX runtime class types exposed in the system API."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interface types"})," are type specifications and can\u2019t be instantiated in the Microsoft Dynamics AX  runtime. Class types can, however, implement interfaces. Variables declared as reference types contain references to objects that the Microsoft Dynamics AX runtime instantiates from dynamically composed types defined in the application model layering system and from types exposed in the system API. The Microsoft Dynamics AX runtime also performs memory deallocation (garbage collection) for these objects when they are no longer referenced."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Reference variables declared as record types reference objects that the Microsoft Dynamics AX runtime instantiates automatically. Class type objects are programmatically instantiated using the new operator. Copies of object references are passed as reference parameters in method calls and are assigned to reference variables, so two variables can reference the same object."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Thank you for reading!"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},39942:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/2015-10-06-the-type-system-of-dynamics-ax-2012-1fa65ceae5bba36cea9c51ca77b27205.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(67294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);