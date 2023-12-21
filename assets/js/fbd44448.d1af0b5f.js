"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[2692],{89176:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=i(85893),n=i(11151);const s={date:"2023-01-01",title:"Filtering options Dynamics 365 Finance Operations",categories:["Configuration","FinOps"],tags:["Filtering","Metadata search"],comment:!1,hiddenFromHomePage:!0,navigation:!1,hiddenFromSearch:!1},l=void 0,a={id:"operation/tools/2023-01-01-filtering/index",title:"Filtering options Dynamics 365 Finance Operations",description:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/filtering",source:"@site/docs/05-operation/01-tools/2023-01-01-filtering/index.md",sourceDirName:"05-operation/01-tools/2023-01-01-filtering",slug:"/operation/tools/2023-01-01-filtering/",permalink:"/docs/operation/tools/2023-01-01-filtering/",draft:!1,unlisted:!1,tags:[{label:"Filtering",permalink:"/docs/tags/filtering"},{label:"Metadata search",permalink:"/docs/tags/metadata-search"}],version:"current",frontMatter:{date:"2023-01-01",title:"Filtering options Dynamics 365 Finance Operations",categories:["Configuration","FinOps"],tags:["Filtering","Metadata search"],comment:!1,hiddenFromHomePage:!0,navigation:!1,hiddenFromSearch:!1},sidebar:"tutorialSidebar",previous:{title:"Admin provisioning tools in Dynamics 365 Finance Operations",permalink:"/docs/operation/tools/2022-09-18-admin-provisioning-tools/"},next:{title:"Visual Studio Tips for Dynamics 365 Finance Operations",permalink:"/docs/2023-02-02-vs-tips-finops"}},o={},h=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Filter expressions",id:"2-filter-expressions",level:2},{value:"2.1. Other frequent filter expressions",id:"21-other-frequent-filter-expressions",level:3},{value:"3. Filter Pane",id:"3-filter-pane",level:2},{value:"3.1. When is the Filter Pane available?",id:"31-when-is-the-filter-pane-available",level:3},{value:"3.2. What data does the Filter Pane work on?",id:"32-what-data-does-the-filter-pane-work-on",level:3},{value:"3.3. What fields are initially shown in the Filter Pane?",id:"33-what-fields-are-initially-shown-in-the-filter-pane",level:3},{value:"3.4. Can I control the default fields that appear in the Filter Pane?",id:"34-can-i-control-the-default-fields-that-appear-in-the-filter-pane",level:3},{value:"3.5. I don\u2019t want users to be able to filter on a specific field or modify an existing filter. How do I accomplish this?",id:"35-i-dont-want-users-to-be-able-to-filter-on-a-specific-field-or-modify-an-existing-filter-how-do-i-accomplish-this",level:3},{value:"3.6. Can I control the fields that appear in the Add a filter field list in the Filter Pane?",id:"36-can-i-control-the-fields-that-appear-in-the-add-a-filter-field-list-in-the-filter-pane",level:3},{value:"3.7. How is the Filter Pane used?",id:"37-how-is-the-filter-pane-used",level:3},{value:"4. QuickFilter",id:"4-quickfilter",level:2},{value:"4.1. Why don&#39;t I have a column selector in my QuickFilter?",id:"41-why-dont-i-have-a-column-selector-in-my-quickfilter",level:3},{value:"4.2. Can I use the QuickFilter to filter other collection controls (such as trees)?",id:"42-can-i-use-the-quickfilter-to-filter-other-collection-controls-such-as-trees",level:3},{value:"5. Grid column header filtering/sorting",id:"5-grid-column-header-filteringsorting",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/filtering",children:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/user-interface/filtering"})}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#1-introduction",children:"1. Introduction"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#2-filter-expressions",children:"2. Filter expressions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#21-other-frequent-filter-expressions",children:"2.1. Other frequent filter expressions"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#3-filter-pane",children:"3. Filter Pane"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#31-when-is-the-filter-pane-available",children:"3.1. When is the Filter Pane available?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#32-what-data-does-the-filter-pane-work-on",children:"3.2. What data does the Filter Pane work on?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#33-what-fields-are-initially-shown-in-the-filter-pane",children:"3.3. What fields are initially shown in the Filter Pane?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#34-can-i-control-the-default-fields-that-appear-in-the-filter-pane",children:"3.4. Can I control the default fields that appear in the Filter Pane?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#35-i-dont-want-users-to-be-able-to-filter-on-a-specific-field-or-modify-an-existing-filter-how-do-i-accomplish-this",children:"3.5. I don\u2019t want users to be able to filter on a specific field or modify an existing filter. How do I accomplish this?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#36-can-i-control-the-fields-that-appear-in-the-add-a-filter-field-list-in-the-filter-pane",children:"3.6. Can I control the fields that appear in the Add a filter field list in the Filter Pane?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#37-how-is-the-filter-pane-used",children:"3.7. How is the Filter Pane used?"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#4-quickfilter",children:"4. QuickFilter"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#41-why-dont-i-have-a-column-selector-in-my-quickfilter",children:"4.1. Why don't I have a column selector in my QuickFilter?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#42-can-i-use-the-quickfilter-to-filter-other-collection-controls-such-as-trees",children:"4.2. Can I use the QuickFilter to filter other collection controls (such as trees)?"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#5-grid-column-header-filteringsorting",children:"5. Grid column header filtering/sorting"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Microsoft Dynamics AX 2012 offers the following filtering options."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Filter option"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Filter by grid"}),(0,r.jsx)(t.td,{children:"The user defines filter conditions in input fields below the grid column headers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Filter by selection (filter by field)"}),(0,r.jsx)(t.td,{children:"The user selects a field value and uses that value as a filter condition."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced filter"}),(0,r.jsx)(t.td,{children:"The user opens a dialog box that contains advanced filtering options (filter on columns, not on the form; join additional data sources; sort by multiple columns; and so on)."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Finance and operations offers the following filtering options."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Filter option"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Filter Pane"}),(0,r.jsx)(t.td,{children:"An inline pane that slides in from the left, and that contains multiple filter criteria that can be applied to the targeted content."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QuickFilter"}),(0,r.jsx)(t.td,{children:"A framework-provided filtering mechanism that can appear above any list or grid, and that provides fast single-column filtering."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Grid column filtering"}),(0,r.jsx)(t.td,{children:"The user can define filter conditions and perform single-column sorting by using a drop dialog that is opened from the grid column header."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced filter or sort"}),(0,r.jsxs)(t.td,{children:["For most advanced filtering scenarios, the migrated ",(0,r.jsx)(t.strong,{children:"Advanced filter"})," form from Dynamics AX 2012 is still available."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"2-filter-expressions",children:"2. Filter expressions"}),"\n",(0,r.jsxs)(t.p,{children:['One important difference between filtering in finance and operations apps and filtering in Dynamics AX 2012 is related to the way that query symbols are used when filter values are defined (for example, "*" to match 0 or more characters, or ".." to specify a range of values to match). In Dynamics AX 2012, these symbols are highly visible during the filtering experience. For example, for the filter by grid option, if a user selects the ',(0,r.jsx)(t.strong,{children:"contains"})," operator on a field, the system translates that operator by adding wildcard characters (*) to each end of the current expression. In the current version, the query symbols are implied by the selected operator and aren't injected into the user interface. This makes filtering more intuitive and simpler for users. For users who want to specify additional filter conditions by using specific query symbols, or users who must enter more complex conditions, the ",(0,r.jsx)(t.strong,{children:"matches"}),' operator is provided for each data type. For all other operators, the query symbols are interpreted as literals. For example, the filter condition "First name MATCHES A" finds all records where the first name starts with the letter A. However, the filter condition "First Name IS A*" finds records where the first name is literally equal to "A*." The following table shows how the client translates between finance and operations apps filter operators and Dynamics AX 2012 query syntax.']}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Filter operator"}),(0,r.jsx)(t.th,{children:"Finance and operations apps query syntax"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Is exactly \u201ccircle\u201d /  Is equal to \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201ccircle\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Is not \u201ccircle\u201d / Is not equal to \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c!circle\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Is one of \u201ccircle\u201d, \u201csquare\u201d, \u201ccirclesquare\u201d"}),(0,r.jsx)(t.td,{children:"\u201ccircle,square,circlesquare\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Contains \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c*circle*\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Does not contain \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c!*circle*\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Begins with \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201ccircle*\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"After \u201ccircle\u201d / Greater than \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c>circle\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Greater than or equal \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201ccircle..\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Before \u201ccircle\u201d / Less than \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c<circle\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Less than or equal \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201c..circle\u201d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Between \u201csquare\u201d and \u201ccircle\u201d"}),(0,r.jsx)(t.td,{children:"\u201csquare..circle\u201d"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Any query syntax that doesn't match the preceding templates is interpreted as the ",(0,r.jsx)(t.strong,{children:"matches"})," operator."]}),"\n",(0,r.jsx)(t.h3,{id:"21-other-frequent-filter-expressions",children:"2.1. Other frequent filter expressions"}),"\n",(0,r.jsxs)(t.p,{children:["Users may want to filter for blank values in column. While there is no filter operator for this specifically, the syntax for performing this filtering remains the same as Dynamics AX 2012. With either the ",(0,r.jsx)(t.strong,{children:"matches"})," operator or the ",(0,r.jsx)(t.strong,{children:"is equal to"})," operator, users can type ",(0,r.jsx)(t.strong,{children:'""'})," to retrieve rows with blank values for the current column. For example, ",(0,r.jsx)(t.strong,{children:'First Name IS ""'}),' will find all records where the first name is blank. Note that "" only matches rows where the column value is the empty string and does not match rows where the column value is NULL or 0.']}),"\n",(0,r.jsxs)(t.p,{children:['Users may also want to filter for records that do not belong to a specific list of values. While "is not one of" is not a filter operator, this filter expression can be achieved using the ',(0,r.jsx)(t.strong,{children:"matches"})," operator by negating each list item in the list. For example,  ",(0,r.jsx)(t.strong,{children:"!circle, !square"}),' will find all records that are neither "circle" nor "square."']}),"\n",(0,r.jsx)(t.h2,{id:"3-filter-pane",children:"3. Filter Pane"}),"\n",(0,r.jsxs)(t.p,{children:["The Filter Pane provides an easy-to-use interface for filtering full page lists. The Filter Pane is an inline pane that slides in from the left side of the screen and pushes the page content to the right, so that users can see the data that they want to filter. Users open this filter mechanism by clicking the system-defined ",(0,r.jsx)(t.strong,{children:"Show filters"})," button on the left side of the page. After it has been opened, the Filter Pane remains visible until the user goes to a new page, or until the user closes the Filter Pane by using the ",(0,r.jsx)(t.strong,{children:"Hide filters"})," button."]}),"\n",(0,r.jsx)(t.h3,{id:"31-when-is-the-filter-pane-available",children:"3.1. When is the Filter Pane available?"}),"\n",(0,r.jsx)(t.p,{children:"Currently, the Filter Pane is available for all forms except the following forms:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Drop dialogs"}),"\n",(0,r.jsx)(t.li,{children:"Dialogs"}),"\n",(0,r.jsx)(t.li,{children:"Enhanced previews"}),"\n",(0,r.jsx)(t.li,{children:"Lookups"}),"\n",(0,r.jsx)(t.li,{children:"Form parts"}),"\n",(0,r.jsx)(t.li,{children:"Parts"}),"\n",(0,r.jsx)(t.li,{children:"Table of contents form type"}),"\n",(0,r.jsx)(t.li,{children:"Forms that have no data sources"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The availability of the Filter Pane on particular forms and form types is evolving, so this list might change."]}),"\n",(0,r.jsx)(t.h3,{id:"32-what-data-does-the-filter-pane-work-on",children:"3.2. What data does the Filter Pane work on?"}),"\n",(0,r.jsx)(t.p,{children:"Because the Filter Pane is targeted at full page lists, it works only on the tables and fields that are directly joined (by inner/outer joins) to the first master data source on the form. This filtering mechanism isn't intended for filtering on secondary collections, or for filtering on other root data sources and their directly joined data sources. Other filtering mechanisms (QuickFilter, grid column filtering, and so on) are available to meet these other requirements."}),"\n",(0,r.jsx)(t.h3,{id:"33-what-fields-are-initially-shown-in-the-filter-pane",children:"3.3. What fields are initially shown in the Filter Pane?"}),"\n",(0,r.jsx)(t.p,{children:"Here is how the fields that are initially shown in the Filter Pane are selected:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"All ranges/filters that currently exist on the query (only non-hidden filters/ranges are shown) are used."}),"\n",(0,r.jsx)(t.li,{children:"If no ranges filters currently exist on the query, the fields from the primary index from the first master data source are used."}),"\n",(0,r.jsx)(t.li,{children:"If there are no fields from the primary index from the first master data source, the TitleFields that are defined directly on the first master data source are used.  If no TitleFields are defined, no default fields are shown. (Currently, if the first master data source extends another table (for example, table B), we don't show the TitleFields from table B. However, we plan to add that check in the future.)"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"34-can-i-control-the-default-fields-that-appear-in-the-filter-pane",children:"3.4. Can I control the default fields that appear in the Filter Pane?"}),"\n",(0,r.jsxs)(t.p,{children:["Developers can make sure that a particular field appears in the Filter Pane by adding an empty filter for that field to the query. For an example, see the ",(0,r.jsx)(t.strong,{children:"FmCustomer"})," form, which adds the filters post super() in form init(). Note that after an empty field has been added to guarantee that it appears in the Filter Pane, the fields in the Filter Pane will always be those that are explicitly on the query, and will never be the TitleFields or fields from the primary index on the first master data source."]}),"\n",(0,r.jsx)(t.h3,{id:"35-i-dont-want-users-to-be-able-to-filter-on-a-specific-field-or-modify-an-existing-filter-how-do-i-accomplish-this",children:"3.5. I don\u2019t want users to be able to filter on a specific field or modify an existing filter. How do I accomplish this?"}),"\n",(0,r.jsxs)(t.p,{children:["Developers can affect whether users can modify/add filters on certain fields by changing the status of the filters. The allowed values are in the ",(0,r.jsx)(t.strong,{children:"RangeStatus"})," enum:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Open (default)"})," \u2013 The user can see and modify this filter."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Locked"})," \u2013 The user can see the filter value but can't modify it. The user also can't add another filter on this column."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Hidden"})," \u2013 The user can't see that there is a filter on this column. The user also can't add another filter on this column."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"36-can-i-control-the-fields-that-appear-in-the-add-a-filter-field-list-in-the-filter-pane",children:"3.6. Can I control the fields that appear in the Add a filter field list in the Filter Pane?"}),"\n",(0,r.jsxs)(t.p,{children:["The fields that appear in the ",(0,r.jsx)(t.strong,{children:"Add a filter field"})," list are all the filterable fields from the query that involves the first master data source on the form. Therefore, developers can't control the fields that appear in this list. Usually, if you see unexpected fields or can't find the fields that you want to filter on, the fields that you're expecting are either on a different master data source (not the first) or on a child collection."]}),"\n",(0,r.jsx)(t.h3,{id:"37-how-is-the-filter-pane-used",children:"3.7. How is the Filter Pane used?"}),"\n",(0,r.jsxs)(t.p,{children:["The Filter Pane is simple and straightforward to use. First, select a filtering operator in the list that is associated with each filter field. Note that the set of operators that appears depends on the data type of the field. Then enter an appropriate value for the filter condition, and click ",(0,r.jsx)(t.strong,{children:"Apply"}),". The form is updated based on the filter criteria that you specified."]}),"\n",(0,r.jsx)(t.h2,{id:"4-quickfilter",children:"4. QuickFilter"}),"\n",(0,r.jsx)(t.p,{children:"In Dynamics AX 2012, the QuickFilter was a framework control that was automatically added only to list pages. In finance and operations apps, the QuickFilter is now a modeled control that can be associated with any grid in the system. As the user starts to type, a column selector drop-down appears to guide the user toward the column that the filter will be applied to. The developer can also specify the default column for the QuickFilter. If no column is specified by the developer, the default column is the first field that can be filtered in the grid."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"QuickFilter control.",src:i(95376).Z+"",title:"QuickFilter control.",width:"914",height:"308"})}),"\n",(0,r.jsx)(t.h3,{id:"41-why-dont-i-have-a-column-selector-in-my-quickfilter",children:"4.1. Why don't I have a column selector in my QuickFilter?"}),"\n",(0,r.jsxs)(t.p,{children:["Column selectors are shown only for QuickFilters that are attached to grids. If you don't see a column selector, the most likely reason is that the ",(0,r.jsx)(t.strong,{children:"TargetControl"})," property on the QuickFilter is blank. This property must point to the grid that it should operate on. If the ",(0,r.jsx)(t.strong,{children:"TargetControl"})," property is set correctly, but you don't see a column selector, you might not have any filterable columns in your grid. In addition to non-text controls (such as images), controls that are bound to data methods aren't filterable."]}),"\n",(0,r.jsx)(t.h3,{id:"42-can-i-use-the-quickfilter-to-filter-other-collection-controls-such-as-trees",children:"4.2. Can I use the QuickFilter to filter other collection controls (such as trees)?"}),"\n",(0,r.jsx)(t.p,{children:"Yes, you can use the QuickFilter to filter other collection controls, but you must manually wire up the filtering. Here are the general steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Leave the ",(0,r.jsx)(t.strong,{children:"TargetControl"})," property blank."]}),"\n",(0,r.jsxs)(t.li,{children:["Override the ",(0,r.jsx)(t.strong,{children:"applyFilter()"})," method on the QuickFilter."]}),"\n",(0,r.jsx)(t.li,{children:"Write code in that method to perform the desired filtering."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"5-grid-column-header-filteringsorting",children:"5. Grid column header filtering/sorting"}),"\n",(0,r.jsx)(t.p,{children:"In finance and operations apps, the grid filtering experience is more closely aligned with the experience in Microsoft Excel. When the user clicks a column header, a drop-down dialog appears, and the user can use it to filter the column. The filtering experience here mimics the filtering experience in the Filter pane. Additionally, there are options to sort the grid based on the column that is currently selected."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"[!NOTE]\r\nSome columns in a grid may not be filterable. In these cases, the column header will not be clickable. From a technical perspective, only columns corresponding to fields in a SQL table can be filtered on or sorted. Columns whose values are computed via code are not filterable or sortable using grid column headers, the Filter pane, QuickFilter, or Advanced filter or sort."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{target:"_blank",href:i(39687).Z+"",children:(0,r.jsx)(t.img,{alt:"Example of grid filtering.",src:i(74165).Z+"",width:"907",height:"247"})})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39687:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/files/4_filter-cebb082ba7d3cea2d651bc41549b02e5.png"},95376:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/3_filter-2e817d9e7a942147ed01cf7e509d5df3.png"},74165:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/4_filter-cebb082ba7d3cea2d651bc41549b02e5.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>l});var r=i(67294);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);