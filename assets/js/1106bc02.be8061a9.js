"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[7243],{73202:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(85893),a=r(11151);const i={title:"How to block vendor and send email for notification.",description:"Using batch to find and block vendor base on last transaction condition and notify for them by emails.",date:new Date("2017-01-10T00:00:00.000Z"),categories:["AX2012"],tags:["xpp","send email"]},s=void 0,o={id:"development/xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX/index",title:"How to block vendor and send email for notification.",description:"Using batch to find and block vendor base on last transaction condition and notify for them by emails.",source:"@site/docs/03-development/01-xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX/index.md",sourceDirName:"03-development/01-xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX",slug:"/development/xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX/",permalink:"/docs/development/xpp-sample/2017-01-10-Block-vendor-and-send-email-for-notification-in-Dynamics-AX/",draft:!1,unlisted:!1,tags:[{label:"xpp",permalink:"/docs/tags/xpp"},{label:"send email",permalink:"/docs/tags/send-email"}],version:"current",frontMatter:{title:"How to block vendor and send email for notification.",description:"Using batch to find and block vendor base on last transaction condition and notify for them by emails.",date:"2017-01-10T00:00:00.000Z",categories:["AX2012"],tags:["xpp","send email"]},sidebar:"tutorialSidebar",previous:{title:"Using Methods in Table Filters & Query Ranges in Dynamics AX 2012",permalink:"/docs/development/xpp-sample/2017-01-02-using-methods-in-table-filters-query-ranges-in-dynamics-ax-2012/"},next:{title:"Overview delete action in Dyanmics AX 2012",permalink:"/docs/development/xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/"}},l={},c=[{value:"1. Set up E-mail parameters",id:"1-set-up-e-mail-parameters",level:3},{value:"2. Vendor emails",id:"2-vendor-emails",level:3},{value:"3. Batch class",id:"3-batch-class",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Main requirements is Using batch to find and block vendor base on last transaction condition and notify for them by emails."}),"\n",(0,t.jsx)(n.h3,{id:"1-set-up-e-mail-parameters",children:"1. Set up E-mail parameters"}),"\n",(0,t.jsxs)(n.p,{children:["For set up email, we need Go to AX ",(0,t.jsx)(n.code,{children:"System administrator > Setup > E-mail parameters"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Email-parameters",src:r(97033).Z+"",width:"587",height:"356"})}),"\n",(0,t.jsx)(n.h3,{id:"2-vendor-emails",children:"2. Vendor emails"}),"\n",(0,t.jsxs)(n.p,{children:["Vendor emails locate on ",(0,t.jsx)(n.code,{children:"LogisticsElectronicAddress.Locator"}),", ",(0,t.jsx)(n.code,{children:"partyTable.PrimaryContactEmail"}),", ",(0,t.jsx)(n.code,{children:"partyLocation.Location"}),", please take a look on this job to find how to update Vendor emails and you also could see the relations more clearly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:'static void UpdateVendorEmail(Args _args)\r\n{\r\n    VendTable                   vendTable;\r\n    LogisticsElectronicAddress  electronicAddress;\r\n    DirPartyTable               partyTable;\r\n    DirPartyLocation            partyLocation;\r\n\r\n    electronicAddress.initValue();\r\n    electronicAddress.Type = LogisticsElectronicAddressMethodType::Email;\r\n    electronicAddress.Description = "max";\r\n    electronicAddress.Locator     = "luan52@outlook.com";\r\n    electronicAddress.IsPrimary   = NoYes::Yes;\r\n    electronicAddress.insert();\r\n\r\n    while select forUpdate partyTable\r\n        exists join vendTable\r\n            where vendTable.Party == partyTable.RecId\r\n    {\r\n        ttsBegin;\r\n        partyTable.PrimaryContactEmail = electronicAddress.RecId;\r\n        partyTable.update();\r\n        ttsCommit;\r\n\r\n        select firstOnly forupdate partyLocation\r\n            where partyLocation.Party == partyTable.RecId;\r\n\r\n        if (partyLocation)\r\n        {\r\n            ttsBegin;\r\n            partyLocation.Location = electronicAddress.Location;\r\n            partyLocation.update();\r\n            ttsCommit;\r\n        }\r\n        else\r\n        {\r\n            partyLocation.initValue();\r\n            partyLocation.Location = electronicAddress.Location;\r\n            partyLocation.Party     = partyTable.RecId;\r\n            partyLocation.insert();\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-batch-class",children:"3. Batch class"}),"\n",(0,t.jsxs)(n.p,{children:["Main logic here is find Vend accounts are not exist in ",(0,t.jsx)(n.code,{children:"VendTrans"})," table with condition ",(0,t.jsx)(n.code,{children:"endTrans.TransDate >= beginDate"}),", and ",(0,t.jsx)(n.code,{children:"beginDate"})," count from today ",(0,t.jsx)(n.code,{children:"systemDateGet()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public class Max_VendorBlockedBatch extends RunBaseBatch\r\n{\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the date before 6 months from today"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public TransDate getBeginDate()\r\n{\r\n    TransDate   beginDate;\r\n    TransDate   currentDate;\r\n    Months      month;\r\n    YearBase    years;\r\n    Day         day;\r\n\r\n    currentDate = systemDateGet();\r\n    day         = dayOfMth(currentDate);\r\n    month       = mthOfYr(currentDate);\r\n    years       = year(currentDate);\r\n    if (month < 6)\r\n    {\r\n        beginDate = mkDate(day, 12 - (6 - month) + 1, years - 1);\r\n    }\r\n    else\r\n    {\r\n        beginDate = mkDate(day, month - 6 + 1, years);\r\n    }\r\n\r\n    return beginDate;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Send E-mail"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"\r\npublic void sendEmail(AccountNum _vendor, str _recipient)\r\n{\r\n\xa0\xa0\xa0\xa0str\xa0                                    sender  = 'sender@email.com';\r\n\xa0\xa0\xa0\xa0str\xa0                                    subject = 'Account blocked';\r\n\xa0\xa0\xa0\xa0str\xa0                                    body    = 'Your account is blocked due to last transaction';\r\n\xa0\xa0\xa0\xa0List                                    toList;\r\n\xa0\xa0\xa0\xa0ListEnumerator                          le;\r\n\xa0\xa0\xa0\xa0Set                                     permissionSet;\r\n\xa0\xa0\xa0\xa0System.Exception                        e;\r\n\xa0\xa0\xa0\xa0str                                     mailServer;\r\n\xa0\xa0\xa0\xa0int                                     mailServerPort;\r\n\xa0\xa0\xa0\xa0System.Net.Mail.SmtpClient\xa0             mailClient;\r\n\xa0\xa0\xa0\xa0System.Net.Mail.MailMessage             mailMessage;\r\n\xa0\xa0\xa0\xa0System.Net.Mail.MailAddress             mailFrom;\r\n\xa0\xa0\xa0\xa0System.Net.Mail.MailAddress             mailTo;\r\n\xa0\xa0\xa0\xa0System.Net.Mail.MailAddressCollection   mailToCollection;\r\n\xa0\r\n\xa0\xa0\xa0\xa0try\r\n\xa0\xa0\xa0\xa0{\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0toList = strSplit(_recipient, ';');\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0permissionSet = new Set(Types::Class);\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0permissionSet.add(new InteropPermission(InteropKind::ClrInterop));\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CodeAccessPermission::assertMultiple(permissionSet);\r\n\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailServer      = SysEmaiLParameters::find(false).SMTPRelayServerName;\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailServerPort  = SysEmaiLParameters::find(false).SMTPPortNumber;\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailClient      = new System.Net.Mail.SmtpClient(mailServer, mailServerPort);\r\n\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0le = toList.getEnumerator();\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0le.moveNext();\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailFrom    = new System.Net.Mail.MailAddress(sender);\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailTo\xa0     = new System.Net.Mail.MailAddress(strLTrim(strRTrim(le.current())));\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailMessage = new System.Net.Mail.MailMessage(mailFrom, mailTo);\xa0\xa0\xa0\xa0\xa0\r\n\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailToCollection = mailMessage.get_To();\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0while (le.moveNext())\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0{\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailToCollection.Add(strLTrim(strRTrim(le.current())));\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailMessage.set_Priority(System.Net.Mail.MailPriority::High);\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailMessage.set_Subject(subject);\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailMessage.set_Body(body);\r\n\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailClient.Send(mailMessage);\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0mailMessage.Dispose();\r\n\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CodeAccessPermission::revertAssert();\xa0\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0info(strFmt('Email was sent to vendor %1.', _vendor));\r\n\xa0\xa0\xa0\xa0}\r\n\xa0\xa0\xa0\xa0catch (Exception::CLRError)\r\n\xa0\xa0\xa0\xa0{\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0e = ClrInterop::getLastException();\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0while (e)\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0{\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0info(e.get_Message());\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0e = e.get_InnerException();\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\r\n\r\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CodeAccessPermission::revertAssert();\r\n\xa0\xa0\xa0\xa0}\r\n}\r\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Initializes a new instance of the ",(0,t.jsx)(n.em,{children:(0,t.jsx)("c",{children:"Batch"})})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public static MAX_VendorBlockedBatch construct()\r\n{\r\n    return new MAX_VendorBlockedBatch();\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Gets description of the dialog."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public static ClassDescription description()\r\n{\r\n    return 'Vendor blocked batch';\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Find the vendor without transaction and disable, then send email to vendor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public void run()\r\n{\r\n    VendTrans   vendTrans;\r\n    VendTable   vendTable;\r\n    TransDate   beginDate;\r\n    Email       email;\r\n    int         i;\r\n\r\n    try\r\n    {\r\n        beginDate = this.getBeginDate();\r\n        while select forUpdate AccountNum, Party from vendTable\r\n            Notexists join vendTrans\r\n            where vendTrans.AccountNum == vendTable.AccountNum\r\n                && vendTrans.TransDate >= beginDate\r\n        {\r\n            //Set the vendor blocked\r\n            ttsBegin;\r\n            vendTable.Blocked = CustVendorBlocked::All;\r\n            vendTable.update();\r\n            ttsCommit;\r\n\r\n            //Send E-mail to vendor\r\n            email = vendTable.email();\r\n            if (email)\r\n            {\r\n                this.sendEmail(vendTable.AccountNum, email);\r\n            }\r\n            else\r\n            {\r\n                warning(strFmt('The vendor %1 did not have E-mail address.', vendTable.AccountNum));\r\n            }\r\n        }\r\n    }\r\n    catch (Exception::Deadlock)\r\n    {\r\n        retry;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Provides an enter point for the ",(0,t.jsx)("c",{children:"Batch"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public static void main(Args _args)\r\n{\r\n    MAX_VendorBlockedBatch vendorBlockedBatch = MAX_VendorBlockedBatch::construct();\r\n\r\n    if (vendorBlockedBatch.prompt())\r\n    {\r\n        vendorBlockedBatch.run();\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"From here you can run class and set up recurrence for batch job."}),"\n",(0,t.jsx)(n.p,{children:"Thank you for reading!"})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97033:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Email-parameters-7ec9d6e473b03763a495cf2a6181a19d.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);