"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[1094],{15710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(74848),i=t(28453);const o={date:new Date("2020-04-09T00:00:00.000Z"),title:"How to skip standard code in Dynamics 365 finance and operations",tags:["Chain of Command","Dynamics 365 finance and operations","skip standard code"],authors:"max",key:"How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations"},s=void 0,r={permalink:"/2020/04/09/How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations",source:"@site/blog/2020-04-09-How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations/index.md",title:"How to skip standard code in Dynamics 365 finance and operations",description:"Disclaimers: Try at your own risk, this is consider as a bug and it will be fixed soon.",date:"2020-04-09T00:00:00.000Z",tags:[{inline:!0,label:"Chain of Command",permalink:"/tags/chain-of-command"},{inline:!0,label:"Dynamics 365 finance and operations",permalink:"/tags/dynamics-365-finance-and-operations"},{inline:!0,label:"skip standard code",permalink:"/tags/skip-standard-code"}],readingTime:1.7133333333333334,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max",page:null}],frontMatter:{date:"2020-04-09T00:00:00.000Z",title:"How to skip standard code in Dynamics 365 finance and operations",tags:["Chain of Command","Dynamics 365 finance and operations","skip standard code"],authors:"max",key:"How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations"},unlisted:!1,lastUpdatedAt:1701636614e3,lastUpdatedBy:"Luan Nguyen",prevItem:{title:"How to get FinOps Azure storage blob connection string",permalink:"/2022/10/27/how-to-get-d365-azure-blob-storage-str"},nextItem:{title:"Set up a VHD for finance and operations apps",permalink:"/2020/04/06/getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Disclaimers: Try at your own risk, this is consider as a bug and it will be fixed soon."})}),"\n",(0,a.jsxs)(n.p,{children:["According to this MS article about Chain Of Command ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/extensibility/method-wrapping-coc#wrapper-methods-must-always-call-next",children:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/extensibility/method-wrapping-coc#wrapper-methods-must-always-call-next"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'"Wrapper methods must always call next Wrapper methods in an extension class must always call next, so that the next method in the chain and, finally, the original implementation are always called. This restriction helps guarantee that every method in the chain contributes to the result. In the current implementation of this restriction, the call to next must be in the first-level statements in the method body."'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["So as described in the article, the Chain Of Command in Dynamics 365 finance and operations is used to add the logic before or after a method of a class is invoked and the original method will always be executed due to the compulsory of the next statement.\r\nWhen doing some implementations, we found out that there is a tricky way to completely ",(0,a.jsx)(n.strong,{children:"ignore"})," the execution of the original method of the class that is extended."]}),"\n",(0,a.jsx)(n.p,{children:"Please see below for more details:\r\nFor example, I created a project and add a new runnable class named Alex:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'class TestClass\r\n{\r\n    public static void main(Args _args)\r\n    {\r\n        throw error ("Hello World");\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When this class runs, a ",(0,a.jsx)(n.em,{children:"Hello World"}),' info message will be displayed in the FinOps UI. Then I used chain of command to create Alex_Extension class that extends this class and "override" the main method of the Alex\'s class by putting the next call into another method and never call it like this:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'[ExtensionOf(classStr(TestClass))]\r\nfinal class Alex_Extension\r\n{\r\n    public static void main(Args _args)\r\n    {\r\n        //Implement something here\r\n        info ("Ok");\r\n        void ignore()\r\n        {\r\n            next main(_args);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When I run the ",(0,a.jsx)(n.em,{children:"AlexExtension"}),", the original main method of the Alex class will be ignored and only the additional block of code that I wrote in the ",(0,a.jsx)(n.em,{children:"AlexExtension"})," class will be executed, so only the ",(0,a.jsx)(n.strong,{children:"OK"})," info will appear."]}),"\n",(0,a.jsxs)(n.p,{children:["Now we will try with a sample scenario from D365 Finance and Operation. In ",(0,a.jsx)(n.strong,{children:"General Ledger"})," Module, we have ",(0,a.jsx)(n.strong,{children:"General journals"})," form"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:t(23966).A+"",width:"975",height:"407"})}),"\n",(0,a.jsxs)(n.p,{children:["When you click the button for ",(0,a.jsx)(n.strong,{children:"Journal Print"}),", the menu item will be triggered and point to the controller name: ",(0,a.jsx)(n.em,{children:"LedgerJournalController"})," with ",(0,a.jsx)(n.em,{children:"LedgerJournalController"})," class and the report will be generated."]}),"\n",(0,a.jsxs)(n.p,{children:["I will use COC to \u201coverride\u201d the main method of ",(0,a.jsx)(n.em,{children:"LedgerJournalController"})," class by applying the method above:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'[ExtensionOf(classStr(LedgerJournalController))]\r\nfinal class Alex_LedgerJournalController_Extension\r\n{\r\n    public static void main(Args _args)\r\n    {\r\n        info("ok");\r\n        void ignore_first()\r\n        {\r\n            next main(_args);\r\n        }\r\n    }\r\n} \u2003\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Using this I will ignore the the main method of ",(0,a.jsx)(n.em,{children:"LedgerJournalController"})," class and instead of generate the report, the result will be only the ",(0,a.jsx)(n.strong,{children:"OK"})," info line in the extension class:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Image",src:t(72388).A+"",width:"975",height:"408"})}),"\n",(0,a.jsx)(n.p,{children:'This is a little bit tricky because we still call next in our extension class as per the requirement of COC, but as we never call the method that "wrap" the next call so it will not be executed. You can try this to simply ignore or rewrite a method of a class in FinOps.'}),"\n",(0,a.jsx)(n.p,{children:"Thank you for reading."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},72388:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations-1-eea78f76c5b15f296a3f509856449709.png"},23966:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations-66c51bb573c0657ebc959a0ad40005b7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);