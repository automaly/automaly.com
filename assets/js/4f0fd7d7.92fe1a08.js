"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[1755],{13091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(74848),o=t(28453);const a={title:"How to verify active inventory dimensions on an item",date:new Date("2016-01-17T09:22:50.000Z"),categories:["AX2012"],tags:["inventdim"]},r=void 0,s={id:"development/xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item/index",title:"How to verify active inventory dimensions on an item",description:"If you want to list items come along with their Actvie Dimension, you can do it easily with this simple job",source:"@site/docs/03-development/01-xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item/index.md",sourceDirName:"03-development/01-xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item",slug:"/development/xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item/",permalink:"/docs/development/xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"inventdim",permalink:"/docs/tags/inventdim"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"How to verify active inventory dimensions on an item",date:"2016-01-17T09:22:50.000Z",categories:["AX2012"],tags:["inventdim"]},sidebar:"tutorialSidebar",previous:{title:'How to use operator "or" in QueryBuildRange',permalink:"/docs/development/xpp-sample/2015-12-30-how-to-use-operator-in-querybuildrange/"},next:{title:"Create record in DimensionAttributeValueCombination table manually.",permalink:"/docs/development/xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually/"}},m={},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"If you want to list items come along with their Actvie Dimension, you can do it easily with this simple job"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"cs     inventTable;\r\nInventDimParm   inventDimParm;\r\n\r\ninventTable   = InventTable::find('110924');\r\ninventDimParm =  InventDimParm::activeDimFlag(InventDimGroupSetup::newInventTable(inventTable));\r\n\r\nif(inventDimParm.InventSiteIdFlag)\r\n{\r\n\tinfo(\"Site Actived\");\r\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);