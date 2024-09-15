"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[3958],{32905:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(74848),o=r(28453);const s={title:"Number sequence farmework overview in Dynamics AX 2012",date:new Date("2017-01-19T00:00:00.000Z"),categories:["AX2012"],tags:["X++","numbersequence"]},a=void 0,i={id:"operation/tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012/index",title:"Number sequence farmework overview in Dynamics AX 2012",description:"number-sequence-overview",source:"@site/docs/05-operation/01-tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012/index.md",sourceDirName:"05-operation/01-tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012",slug:"/operation/tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012/",permalink:"/docs/operation/tools/2017-01-19-number-sequence-farmework-in-Dynamics-AX-2012/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"X++",permalink:"/docs/tags/x"},{inline:!0,label:"numbersequence",permalink:"/docs/tags/numbersequence"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Number sequence farmework overview in Dynamics AX 2012",date:"2017-01-19T00:00:00.000Z",categories:["AX2012"],tags:["X++","numbersequence"]},sidebar:"tutorialSidebar",previous:{title:"Web Services on IIS - Exception has been thrown by the target of an invocation",permalink:"/docs/operation/tools/2015-08-04-web-services-on-iis-exception-has-been-thrown-by-the-target-of-an-invocation-ax-installation/"},next:{title:"Dynamics 365 for finance and operations database synchronization using command line",permalink:"/docs/operation/tools/2019-08-05-database-sync-d365fo/"}},c={},l=[{value:"1. ETD",id:"1-etd",level:2},{value:"2. Table",id:"2-table",level:2},{value:"3. Enum",id:"3-enum",level:2},{value:"4. NumberSeqModule Class",id:"4-numberseqmodule-class",level:2},{value:"5. Parameters Table and Form",id:"5-parameters-table-and-form",level:2},{value:"5.1. Create <code>ContosoParameters</code> Table",id:"51-create-contosoparameters-table",level:3},{value:"5.2. Create <code>ContosoParameters</code> form",id:"52-create-contosoparameters-form",level:3},{value:"6. How to use on Table",id:"6-how-to-use-on-table",level:2},{value:"7. How to use on Form",id:"7-how-to-use-on-form",level:2},{value:"8. Optional method",id:"8-optional-method",level:2},{value:"9. Testing",id:"9-testing",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"number-sequence-overview",src:r(40651).A+"",title:"number-sequence-overview",width:"799",height:"587"})}),"\n",(0,t.jsxs)(n.p,{children:["For this demo, I will create New module along with NumberSequence, about creating Number Sequence ",(0,t.jsx)(n.em,{children:"without"})," module you also use same steps just leave some steps base on Design picture above."]}),"\n",(0,t.jsx)(n.h2,{id:"1-etd",children:"1. ETD"}),"\n",(0,t.jsxs)(n.p,{children:["Create ETD ",(0,t.jsx)(n.code,{children:"ContosoId"})," extends ",(0,t.jsx)(n.code,{children:"num"})," datatype."]}),"\n",(0,t.jsx)(n.h2,{id:"2-table",children:"2. Table"}),"\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"Contoso"})," Table with ",(0,t.jsx)(n.code,{children:"ContosoId"})," field."]}),"\n",(0,t.jsx)(n.h2,{id:"3-enum",children:"3. Enum"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new enum value ",(0,t.jsx)(n.code,{children:"Contoso"})," in BaseEnum ",(0,t.jsx)(n.code,{children:"NumberSeqModule"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This value will be used to link number sequence to the module and to restrict displayed number sequence by module in Form."}),"\n",(0,t.jsx)(n.h2,{id:"4-numberseqmodule-class",children:"4. NumberSeqModule Class"}),"\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"NumberSeqModuleXXX"})," class"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a new ",(0,t.jsx)(n.code,{children:"NumberSeqModuleXXX"})," class, such as ",(0,t.jsx)(n.code,{children:"NumberSeqModuleContoso"}),", which extends the ",(0,t.jsx)(n.code,{children:"NumberSeqApplicationModule"})," class. The sample code for creating this class is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:'public class NumberSeqModuleContoso extends NumberSeqApplicationModule\r\n{\r\n}\r\n\r\nprotected void loadModule()\r\n{\r\n\tNumberSeqDatatype datatype = NumberSeqDatatype::construct();\r\n\t;\r\n\r\n\t/* Contoso Id */\r\n\tdatatype.parmDatatypeId(extendedtypenum(ContosoId));\r\n\tdatatype.parmReferenceHelp("ContosoId");\r\n\tdatatype.parmWizardIsContinuous(true);\r\n\tdatatype.parmWizardIsManual(NoYes::No);\r\n\tdatatype.parmWizardIsChangeDownAllowed(NoYes::No);\r\n\tdatatype.parmWizardIsChangeUpAllowed(NoYes::No);\r\n\tdatatype.parmWizardHighest(999999);\r\n\tdatatype.addParameterType(NumberSeqParameterType::DataArea, true, false);\r\n\tthis.create(datatype);\r\n}\r\n\r\npublic NumberSeqModule numberSeqModule()\r\n{\r\n\t;\r\n\treturn NumberSeqModule::Contoso;\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Use of the ",(0,t.jsx)(n.code,{children:"DataArea"})," segment in ",(0,t.jsx)(n.em,{children:"Step 4"})," to describe the default segment for the extended data types used for ",(0,t.jsx)(n.code,{children:"ContosoId"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note In ",(0,t.jsx)(n.strong,{children:"Microsoft Dynamics AX 2009"}),", number sequence references could be initialized by restarting the Application Object Server (AOS). In ",(0,t.jsx)(n.strong,{children:"Microsoft Dynamics AX 2012"}),", the initialization of references to populate the ",(0,t.jsx)(n.code,{children:"NumberSequenceDatatype"})," and ",(0,t.jsx)(n.code,{children:"NumberSequenceParameterType"})," tables has moved to the initialization checklist. To initialize the newly created references, run a job that executes the ",(0,t.jsx)(n.code,{children:"LoadModule"})," method likes below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"static void loadNumSeq (Args _args)\r\n{\r\n\t//define the class variable\r\n\tNumberSeqModuleContoso seqMod = new NumberSeqModuleContoso ();\r\n\t//load the number sequences that were not generated\r\n\tseqMod.load();\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also reinitialize all references by running a job that executes the ",(0,t.jsx)(n.code,{children:"LoadAll"})," method in the ",(0,t.jsx)(n.code,{children:"NumberSequenceModuleSetup"})," class. However, for reinitializing all references, you must ensure that there are no existing number sequences already defined in the system."]}),"\n",(0,t.jsxs)(n.p,{children:["Then run the wizard in ",(0,t.jsx)(n.em,{children:"Organization Administration > CommonForms > Numbersequences > Numbersequences > Generate > run the wizard"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"5-parameters-table-and-form",children:"5. Parameters Table and Form"}),"\n",(0,t.jsx)(n.p,{children:"Create a Number sequences page in the parameters form of the new module."}),"\n",(0,t.jsxs)(n.p,{children:["You need to Create ",(0,t.jsx)(n.code,{children:"ContosoParameters"})," Table along with form, See existing forms such as ",(0,t.jsx)(n.code,{children:"CustParameters"})," or ",(0,t.jsx)(n.code,{children:"LedgerParameters"})," for examples of the implementation."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["These forms are using ",(0,t.jsx)(n.strong,{children:"DetailsFormMaster"})," form parten as Best Practice for Setup form."]})}),"\n",(0,t.jsxs)(n.h3,{id:"51-create-contosoparameters-table",children:["5.1. Create ",(0,t.jsx)(n.code,{children:"ContosoParameters"})," Table"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add field key, Extends from ",(0,t.jsx)(n.code,{children:"ParametersKey"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Properties on Field key Visible = false, AllowEdit = false, AllowEditOnCreate = false"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create index name Key with AllowDuplicate = No."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set table properties."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TableContent = Default data"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ConfigurationKey"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"CacheLookup = Found"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TableGroup = Parameter"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"PrimaryKey = Key"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ClusterKey = Key"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The sample code for creating method this table as below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:'void delete()\r\n{\r\n\tthrow error("@SYS23721");\r\n}\r\npublic void initValue()\r\n{\r\n\t;\r\n\tsuper();\r\n\t// Key is set to mandatory so set it to 1\r\n\tthis.Key = 1;\r\n}\r\nstatic ContosoParameters find(boolean _forupdate = false)\r\n{\r\n\tContosoParameters parameter;\r\n\r\n\tif (_forupdate)\r\n\t{\r\n\t\tparameter.selectForUpdate(_forupdate);\r\n\t}\r\n\r\n\tselect firstonly RecId from parameter\r\n\t\twhere parameter.Key == 1;\r\n\r\n\tif (!parameter && !parameter.isTmp())\r\n\t{\r\n\t\tCompany::createParameter(parameter);\r\n\t}\r\n\r\n\treturn parameter;\r\n}\r\nclient server static NumberSeqModule numberSeqModule()\r\n{\r\n\t;\r\n\treturn NumberSeqModule::Contoso;\r\n}\r\npublic server static NumberSequenceReference numRefContosoId()\r\n{\r\n\t;\r\n\tNumberSeqScopeFactory::CreateDataAreaScope(curext());\r\n\treturn NumberSeqReference::findReference(extendedtypenum (ContosoId));\r\n\r\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"52-create-contosoparameters-form",children:["5.2. Create ",(0,t.jsx)(n.code,{children:"ContosoParameters"})," form"]}),"\n",(0,t.jsxs)(n.p,{children:["Note This form can only be used for references that have a scope of DataArea. The administration forms described in the Setup and Administration of number sequences section can be used for references that have any scope. These forms can be found in ",(0,t.jsx)(n.em,{children:"Organization Administration > Common > Number Sequences"})]}),"\n",(0,t.jsxs)(n.p,{children:["The data source of Parameters form likes picture below, you can also refer to ",(0,t.jsx)(n.code,{children:"CustParameters"})," form for design."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ContosoParameters",src:r(44629).A+"",title:"ContosoParameters",width:"291",height:"325"})}),"\n",(0,t.jsx)(n.p,{children:"Code example for form methods:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public class FormRun extends ObjectRun\r\n{\r\n\tNumberSeqReference          numberSeqReference;\r\n\tboolean                     runExecuteDirect;\r\n\tTmpIdRef                    tmpIdRef;\r\n\tNumberSeqScope              scope;\r\n\tNumberSeqApplicationModule  numberSeqApplicationModule;\r\n\tcontainer                   numberSequenceModules;\r\n}\r\n\r\nvoid init()\r\n{\r\n\t;\r\n\tthis.numberSeqPreInit();\r\n\tsuper();\r\n\tContosoParameters::find();\r\n\tthis.numberSeqPostInit();\r\n}\r\n\r\nvoid numberSeqPostInit()\r\n{\r\n\tnumberSequenceReference_ds.object(fieldNum(NumberSequenceReference, AllowSameAs)).visible(numberSeqApplicationModule.sameAsActive());\r\n\treferenceSameAsLabel.visible(numberSeqApplicationModule.sameAsActive());\r\n}\r\n\r\nvoid numberSeqPreInit()\r\n{\r\n\t;\r\n\trunExecuteDirect            = false;\r\n\r\n\tnumberSequenceModules       = [NumberSeqModule::Contoso];\r\n\tnumberSeqApplicationModule  = new NumberSeqModuleContoso ();\r\n\tscope                       = NumberSeqScopeFactory::createDataAreaScope();\r\n\tNumberSeqApplicationModule::createReferencesMulti(numberSequenceModules, scope);\r\n\r\n\ttmpIdRef.setTmpData(NumberSequenceReference::configurationKeyTableMulti(numberSequenceModules));\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Code example for ",(0,t.jsx)(n.code,{children:"NumberSequenceReference"})," data source methods"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"void removeFilter()\r\n{\r\n\t;\r\n\trunExecuteDirect = false;\r\n\tnumbersequenceReference_ds.executeQuery();\r\n}\r\n\r\nvoid executeQuery()\r\n{\r\n\tif (runExecuteDirect)\r\n\t{\r\n\t\tsuper();\r\n\t}\r\n\telse\r\n\t{\r\n\t\trunExecuteDirect = true;\r\n\t\tthis.queryRun(NumberSeqReference::buildQueryRunMulti(numberSequenceReference,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t tmpIdRef,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t numberSequenceTable,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t numberSequenceModules,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t scope));\r\n\t\tnumbersequenceReference_ds.research();\r\n\t}\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"6-how-to-use-on-table",children:"6. How to use on Table"}),"\n",(0,t.jsx)(n.p,{children:"Set number sequence in Contoso Table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"private void setContosoId()\r\n{\r\n\tNumberSeq num;\r\n\tNumberSequenceReference numberSequenceReference;\r\n\t;\r\n\tnumberSequenceReference = CVRParameters::numRefContosoId();\r\n\r\n\tif (numberSequenceReference)\r\n\t{\r\n\t\tnum = NumberSeq::newGetNum(numberSequenceReference);\r\n\t\tthis.Id = num.num();\r\n\t}\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optional method \u2013 in case you don\u2019t want to expose Number sequence on Form Level"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public void initValue()\r\n{\r\n\t;\r\n\tsuper();\r\n\r\n\t// Initialise the title id\r\n\tthis. setContosoId ();\r\n}\r\n\r\npublic void insert()\r\n{\r\n\t;\r\n\tif(!this.Id)\r\n\t{\r\n\t\tthis. setContosoId ();\r\n\t}\r\n\r\n\tsuper();\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"From now on you can create new record in Contoso Table with number sequence."}),"\n",(0,t.jsx)(n.h2,{id:"7-how-to-use-on-form",children:"7. How to use on Form"}),"\n",(0,t.jsx)(n.p,{children:"How to use on form level (In case you don\u2019t want to expose NS in Table Level)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the class declaration of the form that will be accessing data, add a variable declaration for the number sequence handler. The following example shows the variable definition for a number sequence handler."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public class FormRun extends ObjectRun\r\n{\r\n\tNumberSeqFormHandler numberSeqFormHandlerContosoId;\r\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the ",(0,t.jsx)(n.code,{children:"NumberSeqFormHandler"})," method to the form. The code in this method will create an instance of the number sequence form handler and return it."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public NumberSeqFormHandler numSeqFormHandlerContosoId()\r\n{\r\n\tif (!numberSeqFormHandlerContosoId)\r\n\t{\r\n\t\tnumberSeqFormHandlerContosoId = NumberSeqFormHandler::newForm(ContosoParameters:: numRefContosoId().NumberSequenceId,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t element,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Contoso_ds,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t fieldNum(Contoso, ContosoId)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t);\r\n\t}\r\n\treturn numberSeqFormHandlerContosoId;\r\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.strong,{children:"create, delete, and write"})," methods to the data source of the table that contains the field for which the number sequence is being used. The following code examples show these methods that are added to the data source for the Contoso table to support the number sequence for the ",(0,t.jsx)(n.code,{children:"ContosoId"})," field."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public void create(boolean _append = false)\r\n{\r\n\t//before create, (ensure the number seuence has not run out of numbers)\r\n\telement.numSeqFormHandlerContosoId().formMethodDataSourceCreatePre();\r\n\r\n\t// start: inherited table code\r\n\t// we need to let the create happen so the user can\r\n\t// choose the type\r\n\tsuper(_append);\r\n\r\n\t//number sequence, create action, (get next number)\r\n\telement.numSeqFormHandlerContosoId().formMethodDataSourceCreate();\r\n}\r\npublic void delete()\r\n{\r\n\t//release the number sequence value.\r\n\telement. numSeqFormHandlerContosoId().formMethodDataSourceDelete();\r\n\r\n\t//delete the record\r\n\tsuper();\r\n}\r\npublic void write()\r\n{\r\n\tsuper();\r\n\telement. numSeqFormHandlerContosoId().formMethodDataSourceWrite();\r\n}\r\n\r\npublic boolean validateWrite()\r\n{\r\n\tboolean         ret;\r\n\tret = super();\r\n\tret = element.numberSeqFormHandler().formMethodDataSourceValidateWrite(ret) && ret;\r\n\tif (ret)\r\n\t{\r\n\t\tContoso.validateWrite();\r\n\t}\r\n\treturn ret;\r\n}\r\nLink Active()\r\npublic void linkActive()\r\n{\r\n\t;\r\n\telement.numberSeqFormHandler().formMethodDataSourceLinkActive();\r\n\tsuper();\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"8-optional-method",children:"8. Optional method"}),"\n",(0,t.jsx)(n.p,{children:"Continuous sequence"}),"\n",(0,t.jsx)(n.p,{children:"To avoid having gaps for continuous sequence you should add this code to the delete of the table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"public void delete()\r\n{\r\n\tsuper();\r\n\tNumberSeq::releaseNumber(ContosoParameters::numRefContosoId().NumberSequenceId, this.ContosoId);\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"9-testing",children:"9. Testing"}),"\n",(0,t.jsx)(n.p,{children:"Testing Number sequence by Job"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C#",children:"static void Max_numberSeqRefCustAccount(Args _args)\r\n{\r\n\tNumberSequenceReference numberSeqRefCustAccount = CustParameters::numRefCustAccount();\r\n\tNumberSeq               numSeqCustAccount;\r\n\ttry\r\n\t{\r\n//Use the TTS level to decide whether sequence is consumed or not.\r\n\t\tttsBegin;\r\n\t\tif (numberSeqRefCustAccount)\r\n\t\t{\r\n\t\t\tnumSeqCustAccount = NumberSeq::newGetNum(numberSeqRefCustAccount);\r\n\t\t\tif (numSeqCustAccount)\r\n\t\t\t{\r\n\t\t\t\tinfo(numSeqCustAccount.num());\r\n\t\t\t}\r\n\t\t}\r\n\t\tttsCommit;\r\n\t}\r\n\tcatch (Exception::Error)\r\n\t{\r\n\t   info(\"Caught 'Exception::Error'.\");\r\n\t}\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Thank you for reading!"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},44629:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/ContosoParameters-06ed8e9ec60d80b9624d9c923188df84.png"},40651:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/number-sequence-overview-505f00b4aaf5c2fdcc4b4902091195a5.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);