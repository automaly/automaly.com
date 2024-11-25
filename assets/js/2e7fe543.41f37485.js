"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[2374],{2383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=t(74848),c=t(28453);const s={title:"Recalculate InventSum in Dynamics AX",description:"Recalculate InventSum in Dynamics AX",date:new Date("2017-01-02T00:00:00.000Z"),categories:["AX2012"],tags:["inventsum","expression","xpp"]},l=void 0,i={id:"development/xpp-sample/2017-01-02-Recalculate-InventSum/index",title:"Recalculate InventSum in Dynamics AX",description:"Recalculate InventSum in Dynamics AX",source:"@site/docs/03-development/01-xpp-sample/2017-01-02-Recalculate-InventSum/index.md",sourceDirName:"03-development/01-xpp-sample/2017-01-02-Recalculate-InventSum",slug:"/development/xpp-sample/2017-01-02-Recalculate-InventSum/",permalink:"/docs/development/xpp-sample/2017-01-02-Recalculate-InventSum/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"inventsum",permalink:"/docs/tags/inventsum"},{inline:!0,label:"expression",permalink:"/docs/tags/expression"},{inline:!0,label:"xpp",permalink:"/docs/tags/xpp"}],version:"current",lastUpdatedBy:"Max Nguyen",lastUpdatedAt:1726374706e3,frontMatter:{title:"Recalculate InventSum in Dynamics AX",description:"Recalculate InventSum in Dynamics AX",date:"2017-01-02T00:00:00.000Z",categories:["AX2012"],tags:["inventsum","expression","xpp"]},sidebar:"tutorialSidebar",previous:{title:"Difference between QueryFilter and QueryBuildRrange",permalink:"/docs/development/xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE/"},next:{title:"Using Methods in Table Filters & Query Ranges in Dynamics AX 2012",permalink:"/docs/development/xpp-sample/2017-01-02-using-methods-in-table-filters-query-ranges-in-dynamics-ax-2012/"}},r={},m=[];function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"InventSum"})," is needed to recalculate sometimes. We should use ",(0,a.jsx)(n.code,{children:"InventSumRecalcItem"})," class in Dynamics AX."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'InventSumRecalcItem InventSumRecalcItem;\n;\nInventSumRecalcItem = new InventSumRecalcItem("ITEM001", true, checkfix::fix);\nInventSumRecalcItem.updatenow();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["First parameter : ",(0,a.jsx)(n.code,{children:"ItemId"})]}),"\n",(0,a.jsxs)(n.p,{children:["Second parameter : ",(0,a.jsx)(n.code,{children:"Show errors"})]}),"\n",(0,a.jsxs)(n.p,{children:["Third parameter : ",(0,a.jsx)(n.code,{children:"Fix or only check"})]}),"\n",(0,a.jsx)(n.p,{children:"What if you want to calculate for all items:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"InventTable InventTable;\nInventSumRecalcItem InventSumRecalcItem;\n\nWHILE SELECT InventTable\n\tWHERE (InventTable.ItemType == ItemType::Item) || (InventTable.ItemType == ItemType::BOM)\n\t{\n\t\tInventSumRecalcItem = new InventSumRecalcItem(InventTable.ItemId, true, checkfix::fix);\n\t\tInventSumRecalcItem.updatenow();\n\t}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is outdate, please refer this ",(0,a.jsx)(n.a,{href:"/docs/development/framework/2022-11-09-reservation-and-on-hand-inventory-in-warehouse-management/",children:"post"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Thank you for reading!"})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const c={},s=a.createContext(c);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);