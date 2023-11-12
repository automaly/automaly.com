"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[3904],{86293:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(85893),i=r(11151);const s={title:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",description:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",date:new Date("2016-12-27T00:00:00.000Z"),tags:["AX2012","Integration"],categories:["AX2012","Integration","AIF"]},o=void 0,a={id:"integration/aif-integration-ax12/2016-12-27-CRUD-Items,-products,-products-master-dimension,-variants-using-AIF-in-Dynamics-AX-2012-R3/index",title:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",description:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",source:"@site/docs/02-integration/04-aif-integration-ax12/2016-12-27-CRUD-Items,-products,-products-master-dimension,-variants-using-AIF-in-Dynamics-AX-2012-R3/index.md",sourceDirName:"02-integration/04-aif-integration-ax12/2016-12-27-CRUD-Items,-products,-products-master-dimension,-variants-using-AIF-in-Dynamics-AX-2012-R3",slug:"/integration/aif-integration-ax12/2016-12-27-CRUD-Items,-products,-products-master-dimension,-variants-using-AIF-in-Dynamics-AX-2012-R3/",permalink:"/integration/aif-integration-ax12/2016-12-27-CRUD-Items,-products,-products-master-dimension,-variants-using-AIF-in-Dynamics-AX-2012-R3/",draft:!1,unlisted:!1,tags:[{label:"AX2012",permalink:"/tags/ax-2012"},{label:"Integration",permalink:"/tags/integration"}],version:"current",frontMatter:{title:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",description:"CRUD Items, products, products master dimension, variants using AIF in Dynamics AX 2012 R3",date:"2016-12-27T00:00:00.000Z",tags:["AX2012","Integration"],categories:["AX2012","Integration","AIF"]},sidebar:"tutorialSidebar",previous:{title:"AIF Integration",permalink:"/integration/aif-integration-ax12/"},next:{title:"CRUD Purchase order using AIF in Dynamics AX 2012 R3",permalink:"/integration/aif-integration-ax12/2016-12-28-CRUD-Purchase-order-using-AIF-in-Dynamics-AX-2012-R3/"}},c={},d=[{value:"Scenarios:",id:"scenarios",level:2},{value:"Process:",id:"process",level:2},{value:"How to do:",id:"how-to-do",level:2},{value:"1. Create 4 AIF inbound services against Services operation above and active it",id:"1-create-4-aif-inbound-services-against-services-operation-above-and-active-it",level:3},{value:"2. After services creation, open visual studio then creates new Console project and add service References for that, you will get somethings like pic below:",id:"2-after-services-creation-open-visual-studio-then-creates-new-console-project-and-add-service-references-for-that-you-will-get-somethings-like-pic-below",level:3},{value:"3. Using C#.Net to consume service",id:"3-using-cnet-to-consume-service",level:3},{value:"<code>EcoResDistinctProduct</code>",id:"ecoresdistinctproduct",level:4},{value:"<code>EcoResProductMaster</code>",id:"ecoresproductmaster",level:4},{value:"<code>EcoResProductMasterDimValueServiceClient</code>",id:"ecoresproductmasterdimvalueserviceclient",level:4},{value:"<code>EcoResDistinctProductVariant</code>",id:"ecoresdistinctproductvariant",level:4},{value:"<code>Release a distinct product or a product master</code>",id:"release-a-distinct-product-or-a-product-master",level:4},{value:"<code>Release product Variants</code>",id:"release-product-variants",level:4}];function l(t){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"scenarios",children:"Scenarios:"}),"\n",(0,n.jsxs)(e.p,{children:["I'm trying to create ",(0,n.jsx)(e.strong,{children:"product/master product"})," in Dynamics AX using AIF inbound port, the AIF services consume by C#.NET."]}),"\n",(0,n.jsxs)(e.p,{children:["From AX 2012 R2, Item is replaced with Product. Item master was in Inventory Management Module, now there is a separate module for item/product creation ",(0,n.jsx)(e.code,{children:"Product information Management"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Some definitions you should know\r\nThere are two types of Products in 2012 they are:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Product"}),": ",(0,n.jsx)(e.code,{children:"Product information management/Common/Products/Products"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Product Master"}),": ",(0,n.jsx)(e.code,{children:"Product information management/Common/Products/Products master"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Variants"}),": To create a product variant, you must define at least one product dimension for a product master. You can also rename dimensions.\r\nTo create product variants, you must complete the following tasks:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Set up dimensions, such as size, color, and style."}),"\n",(0,n.jsx)(e.li,{children:"Set up variant groups."}),"\n",(0,n.jsx)(e.li,{children:"Assign variant groups to a retail hierarchy."}),"\n",(0,n.jsx)(e.li,{children:"Create a product master and variants."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Product dimensions"}),"\r\nProduct dimensions are characteristics that serve to identify a product variant. You can use combinations of product dimensions to define product variants. You must define at least one product dimension for a product master to create a product variant."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"process",children:"Process:"}),"\n",(0,n.jsx)(e.p,{children:"Normally in AX, we create items master follow process:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Create product/product master."}),"\n",(0,n.jsx)(e.li,{children:"Assigning Dimensions Groups to a Product Master."}),"\n",(0,n.jsx)(e.li,{children:"Create Product dimension combinations (Product Variants)"}),"\n",(0,n.jsx)(e.li,{children:"Release product to legal entities"}),"\n",(0,n.jsx)(e.li,{children:"Assigning Item Model Group & Item Groups to a Product Master"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-do",children:"How to do:"}),"\n",(0,n.jsx)(e.p,{children:"Ax provides us standard services for this purpose, so we don\u2019t need to create any custom services for this. I will use 4 services for this purpose, descriptions below"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Service"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Purpose"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"EcoResProductService"})}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Create products (all types). The service can also be used to                            retrieve data that has already been created (Create Product details in The EcoRes tables)."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"EcoResProductMasterDimValueService"})}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Specify values of product dimensions for a product master. These values become available for the creation of product variants. The service can also be used to retrieve data that has already been created."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"ItemService"})}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Release distinct products and product masters. The service can also be used to retrieve data that has already been created."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.code,{children:"InventDimCombinationService"})}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"Release product variants. The service can also be used to retrieve data that has already been created."})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"1-create-4-aif-inbound-services-against-services-operation-above-and-active-it",children:"1. Create 4 AIF inbound services against Services operation above and active it"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"http://DEV-ERP:8103/DynamicsAx/Services/BCEcoResProduct"}),"\r\n",(0,n.jsx)(e.code,{children:"http://DEV-ERP:8103/DynamicsAx/Services/BCEcoResProductMasterDimValue"}),"\r\n",(0,n.jsx)(e.code,{children:"http://DEV-ERP:8103/DynamicsAx/Services/BCItemsMaster"}),"\r\n",(0,n.jsx)(e.code,{children:"http://DEV-ERP:8103/DynamicsAx/Services/BCInventDimCombination"})]}),"\n",(0,n.jsx)(e.h3,{id:"2-after-services-creation-open-visual-studio-then-creates-new-console-project-and-add-service-references-for-that-you-will-get-somethings-like-pic-below",children:"2. After services creation, open visual studio then creates new Console project and add service References for that, you will get somethings like pic below:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"CRUD",src:r(7805).Z+"",title:"CRUD",width:"313",height:"320"})}),"\n",(0,n.jsx)(e.h3,{id:"3-using-cnet-to-consume-service",children:"3. Using C#.Net to consume service"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:"using ItemsMaster.ItemsRef;\r\nusing ItemsMaster.EcoResProductRef;\r\nusing ItemsMaster.EcoResProductMasterRef;\r\nusing ItemsMaster.InventDimRef;\r\nstatic void Main(string[] args)\r\n{\r\n\tProgram master = new Program();\r\n\tmaster.createDistinctProduct();\r\n\tProgram.releaseProduct();\r\n}\n"})}),"\n",(0,n.jsx)(e.h4,{id:"ecoresdistinctproduct",children:(0,n.jsx)(e.code,{children:"EcoResDistinctProduct"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:'public void createDistinctProduct()\r\n{\r\n\tAxdEntity_Product_EcoResDistinctProduct distinctProduct = new AxdEntity_Product_EcoResDistinctProduct()\r\n\t{\r\n\t\tDisplayProductNumber = "MAX00002",\r\n\t\tProductType = AxdEnum_EcoResProductType.Item,\r\n\t\tSearchName = "Max",\r\n\t   \r\n\t};\r\n\r\n\tdistinctProduct.Translation = new AxdEntity_Translation[1];\r\n\tdistinctProduct.Translation[0] = new AxdEntity_Translation()\r\n\t{\r\n\t\tLanguageId = "en-us",\r\n\t\tName = "max"\r\n\t};\r\n\r\n\tdistinctProduct.Identifier = new AxdEntity_Identifier[1];\r\n\tdistinctProduct.Identifier[0] = new AxdEntity_Identifier()\r\n\t{\r\n\t\tProductNumber = "MAX00002"\r\n\t};\r\n\r\n\tdistinctProduct.StorageDimGroup = new AxdEntity_StorageDimGroup[1];\r\n\tdistinctProduct.StorageDimGroup[0] = new AxdEntity_StorageDimGroup()\r\n\t{\r\n\t\tProduct = "MAX00002",\r\n\t\tStorageDimensionGroup = "SW_P"\r\n\t};\r\n\r\n\tdistinctProduct.TrackingDimGroup = new AxdEntity_TrackingDimGroup[1];\r\n\tdistinctProduct.TrackingDimGroup[0] = new AxdEntity_TrackingDimGroup()\r\n\t{\r\n\t\tProduct = "MAX00002",\r\n\t\tTrackingDimensionGroup = "Batch Only"\r\n\t};\r\n\r\n\tAxdEcoResProduct product = new AxdEcoResProduct()\r\n\t{\r\n\t\tProduct = new AxdEntity_Product_EcoResProduct[1] { distinctProduct }\r\n\t};\r\n\r\n\tEcoResProductRef.CallContext EcoResProductSctx = new EcoResProductRef.CallContext()\r\n\t{\r\n\t\tCompany = "bgr",\r\n\t\tLanguage = "en-us",\r\n\t};\r\n\r\n\tEcoResProductRef.EcoResProductServiceClient ecoResProductSClient = new EcoResProductRef.EcoResProductServiceClient();\r\n\t\r\n\tecoResProductSClient.create(EcoResProductSctx, product);\r\n\r\n}\n'})}),"\n",(0,n.jsx)(e.h4,{id:"ecoresproductmaster",children:(0,n.jsx)(e.code,{children:"EcoResProductMaster"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:'public void createMaster()\r\n{\r\n\tAxdEntity_Product_EcoResProductMaster productMaster = new AxdEntity_Product_EcoResProductMaster()\r\n\t{\r\n\t\tDisplayProductNumber = "MAX00002",\r\n\t\tProductType = AxdEnum_EcoResProductType.Item,\r\n\t\tSearchName = "max"\r\n\t};\r\n\r\n\tproductMaster.Translation = new AxdEntity_Translation[1];\r\n\tproductMaster.Translation[0] = new AxdEntity_Translation()\r\n\t{\r\n\t\tLanguageId = "en-us",\r\n\t\tName = "max"\r\n\t};\r\n\r\n\tproductMaster.Identifier = new AxdEntity_Identifier[1];\r\n\tproductMaster.Identifier[0] = new AxdEntity_Identifier()\r\n\t{\r\n\t\tProductNumber = "MAX00002"\r\n\t};\r\n\tproductMaster.ProductDimGroup = new AxdEntity_ProductDimGroup[1];\r\n\tproductMaster.ProductDimGroup[0] = new AxdEntity_ProductDimGroup()\r\n\t{\r\n\t\tProduct = "MAX00002",\r\n\t\tProductDimensionGroup = "MAX10"\r\n\t};\r\n\tproductMaster.VariantConfigurationTechnology = AxdEnum_EcoResVariantConfigurationTechnologyType.PredefinedVariants;\r\n\r\n\tAxdEcoResProduct axdProduct = new AxdEcoResProduct()\r\n\t{\r\n\t\tProduct = new AxdEntity_Product_EcoResProduct[1] { productMaster }\r\n\t};\r\n\r\n\tEcoResProductRef.CallContext EcoResProductSctx = new EcoResProductRef.CallContext()\r\n\t{\r\n\t\tCompany = "bgr",\r\n\t\tLanguage = "en-us",\r\n\t};\r\n\r\n\tEcoResProductRef.EcoResProductServiceClient ecoResProductSClient = new EcoResProductRef.EcoResProductServiceClient();\r\n\t\r\n\tecoResProductSClient.create(EcoResProductSctx, axdProduct);\r\n}\r\n\n'})}),"\n",(0,n.jsx)(e.h4,{id:"ecoresproductmasterdimvalueserviceclient",children:(0,n.jsx)(e.code,{children:"EcoResProductMasterDimValueServiceClient"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-Cs",children:'static void createMasterDimensions()\r\n{\r\n\r\n\tEcoResProductMasterRef.AxdEntity_EcoResSize ecoResSizeL = new EcoResProductMasterRef.AxdEntity_EcoResSize()\r\n\t{\r\n\t\tName = "L"\r\n\t};\r\n\r\n\tEcoResProductMasterRef.AxdEntity_EcoResSize ecoResSizeM = new EcoResProductMasterRef.AxdEntity_EcoResSize()\r\n\t{\r\n\t\tName = "M"\r\n\t};\r\n\t//master dimensions definition (two sizes, L and M)\r\n\tAxdEntity_MasterDim_EcoResProductMasterSize sizeDimensionL = new AxdEntity_MasterDim_EcoResProductMasterSize()\r\n\t{\r\n\t\tSizeProductMaster = "MAX00002",\r\n\t\tSize = "L",\r\n\t\tEcoResSize = new EcoResProductMasterRef.AxdEntity_EcoResSize[1] { ecoResSizeL }\r\n\t};\r\n\tAxdEntity_MasterDim_EcoResProductMasterSize sizeDimensionM = new AxdEntity_MasterDim_EcoResProductMasterSize()\r\n\t{\r\n\t\tSizeProductMaster = "MAX00002",\r\n\t\tSize = "M",\r\n\t\tEcoResSize = new EcoResProductMasterRef.AxdEntity_EcoResSize[1] { ecoResSizeM }\r\n\r\n\t};\r\n\r\n\tAxdEcoResProductMasterDimValue axdDimValue = new AxdEcoResProductMasterDimValue()\r\n\t{\r\n\t\tMasterDim = new AxdEntity_MasterDim_EcoResProductMasterDimensionValue[2] { sizeDimensionL, sizeDimensionM }\r\n\t};\r\n\r\n\tEcoResProductMasterRef.CallContext masterDimctx = new EcoResProductMasterRef.CallContext();\r\n\tEcoResProductMasterDimValueServiceClient masterDimensionService = new EcoResProductMasterDimValueServiceClient();\r\n\ttry\r\n\t{\r\n\t\tmasterDimensionService.create(masterDimctx, axdDimValue);\r\n\t}\r\n\tcatch (Exception e)\r\n\t{\r\n\t\tSystem.Console.WriteLine(e.Message);\r\n\t\tSystem.Console.ReadKey();\r\n\t}\r\n}\n'})}),"\n",(0,n.jsx)(e.h4,{id:"ecoresdistinctproductvariant",children:(0,n.jsx)(e.code,{children:"EcoResDistinctProductVariant"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:'static void createVariant()\r\n{\r\n\t//product variant definition\r\n\tAxdEntity_Product_EcoResDistinctProductVariant productVariant = new AxdEntity_Product_EcoResDistinctProductVariant()\r\n\t{\r\n\t\tDisplayProductNumber = "MAXL",\r\n\t\tProductType = AxdEnum_EcoResProductType.Item,\r\n\t\tSearchName = "MAXL",\r\n\t\tProductMaster = "MAX00002"\r\n\t};\r\n\tproductVariant.Translation = new AxdEntity_Translation[1];\r\n\tproductVariant.Translation[0] = new AxdEntity_Translation()\r\n\t{\r\n\t\tLanguageId = "en-us",\r\n\t\tName = "Max L size"\r\n\t};\r\n\tproductVariant.VariantDimValue = new AxdEntity_VariantDimValue_EcoResProductVariantDimensionValue[1];\r\n\tproductVariant.VariantDimValue[0] = new AxdEntity_VariantDimValue_EcoResProductVariantSize()\r\n\t{\r\n\t\tDistinctProductVariant = "MAXL",\r\n\t\tProductDimensionAttribute = 3173,//The ID of the EcoResSize table\r\n\t\tSize = "L",\r\n\t\tEcoResSize = new EcoResProductRef.AxdEntity_EcoResSize[1]\r\n\t\t{\r\n\t\t\tnew EcoResProductRef.AxdEntity_EcoResSize() { Name = "L" }\r\n\t\t}\r\n\t};\r\n\r\n\tAxdEcoResProduct axdProduct = new AxdEcoResProduct()\r\n\t{\r\n\t\tProduct = new AxdEntity_Product_EcoResProduct[1] { productVariant }\r\n\t};\r\n\tEcoResProductRef.CallContext inventDimctx = new EcoResProductRef.CallContext();\r\n\tEcoResProductServiceClient productService = new EcoResProductServiceClient();\r\n\ttry\r\n\t{\r\n\t\tproductService.create(inventDimctx, axdProduct);\r\n\t}\r\n\tcatch (Exception e)\r\n\t{\r\n\t\tSystem.Console.WriteLine(e.Message);\r\n\t\tSystem.Console.ReadKey();\r\n\t}\r\n}\n'})}),"\n",(0,n.jsx)(e.h4,{id:"release-a-distinct-product-or-a-product-master",children:(0,n.jsx)(e.code,{children:"Release a distinct product or a product master"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:'public static void releaseProduct()\r\n{\r\n\tvar invent = new AxdEntity_Invent()\r\n\t{\r\n\t\tItemId = "MAX00002",\r\n\t\tUnitId = "box"\r\n\t};\r\n\r\n\tvar purch = new AxdEntity_Purch()\r\n\t{\r\n\t\tItemId = "MAX00002",\r\n\t\tUnitId = "box"\r\n\t};\r\n\r\n\tvar sales = new AxdEntity_Sales()\r\n\t{\r\n\t\tItemId = "MAX00002",\r\n\t\tUnitId = "box"\r\n\t};\r\n\r\n\tvar inventTable = new AxdEntity_InventTable()\r\n\t{\r\n\t\tItemId = "MAX00002",\r\n\t\tPmfProductType = AxdEnum_PmfProductType.MainItem,\r\n\t\tProduct = "MAX00002",\r\n\t\tInvent = new AxdEntity_Invent[] { invent },\r\n\t\tPurch = new AxdEntity_Purch[] { purch },\r\n\t\tSales = new AxdEntity_Sales[] { sales },\r\n\t\t\r\n\t};\r\n\r\n\tvar item = new AxdItem()\r\n\t{\r\n\t\tInventTable = new AxdEntity_InventTable[1] { inventTable }\r\n\t};\r\n\r\n\tItemsRef.CallContext callContext = new ItemsRef.CallContext();\r\n\tItemsRef.ItemServiceClient client = new ItemsRef.ItemServiceClient();\r\n\r\n\tcallContext.Company = "bgr";\r\n\tcallContext.Language = "en-us";\r\n\r\n\ttry\r\n\t{\r\n\t\tItemsRef.EntityKey[] itemCreatedEntity = client.create(callContext, item);\r\n\t\tItemsRef.EntityKey itemCreated = (ItemsRef.EntityKey)itemCreatedEntity.GetValue(0);\r\n\r\n\t\tConsole.WriteLine("AxdEntity_Invent " + itemCreated.KeyData[0].Value);\r\n\t\tConsole.ReadLine();\r\n\t}\r\n\tcatch (Exception e)\r\n\t{\r\n\t\tConsole.WriteLine(e.ToString());\r\n\t\tConsole.ReadLine();\r\n\t}\r\n}\n'})}),"\n",(0,n.jsx)(e.h4,{id:"release-product-variants",children:(0,n.jsx)(e.code,{children:"Release product Variants"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-C#",children:'static void releaseProductVariants()\r\n{\r\n\tAxdEntity_InventDimCombination releasedVariant = new AxdEntity_InventDimCombination()\r\n\t{\r\n\t\tDistinctProductVariant = "MAX00002",\r\n\t\tItemId = ""\r\n\t};\r\n\r\n\tAxdInventDimCombination inventDimCombination = new AxdInventDimCombination()\r\n\t{\r\n\t\tInventDimCombination = new AxdEntity_InventDimCombination[1] { releasedVariant }\r\n\t};\r\n\r\n\tInventDimRef.CallContext itemsctx = new InventDimRef.CallContext()\r\n\t{\r\n\t\tCompany = "bgr",\r\n\t\tLanguage = "en-us"\r\n\t};\r\n\tInventDimCombinationServiceClient inventDimCombinationService = new InventDimCombinationServiceClient();\r\n\ttry\r\n\t{\r\n\t\tinventDimCombinationService.create(itemsctx, inventDimCombination);\r\n\t}\r\n\tcatch (Exception e)\r\n\t{\r\n\t\tSystem.Console.WriteLine(e.Message);\r\n\t\tSystem.Console.ReadKey();\r\n\t}\r\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:["In ",(0,n.jsx)(e.code,{children:"main"})," I only create Distinct product and release it, but you can use another method to create master, variant, masterDim and so on."]})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},7805:(t,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,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"},11151:(t,e,r)=>{r.d(e,{Z:()=>a,a:()=>o});var n=r(67294);const i={},s=n.createContext(i);function o(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);