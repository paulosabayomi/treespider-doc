"use strict";(self.webpackChunktreespider_doc=self.webpackChunktreespider_doc||[]).push([[283],{9726:(e,n,t)=>{t.r(n),t.d(n,{TestTSpyderTD:()=>c,assets:()=>h,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var r=t(4848),i=t(8453),o=t(6540),a=t(8777);const d={sidebar_position:4},s="Tree Data",l={id:"tree-data",title:"Tree Data",description:"The TreeSpider tree data is straight forward, each employee has the required id and parentId properties, the parentId is for specifying the employee that an employee reports to, and the root employee or the overall head of the organization should not have the parentId property.",source:"@site/docs/tree-data.mdx",sourceDirName:".",slug:"/tree-data",permalink:"/treespider-doc/docs/tree-data",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/treespider-doc/tree/main/docs/tree-data.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/treespider-doc/docs/basic-usage"},next:{title:"Trees",permalink:"/treespider-doc/docs/trees"}},h={},c=o.memo((()=>{const e=[{id:"1",role:"CEO",name:"Lorem John"},{id:"2",role:"Chief of Engineering",parentId:"1",name:"Doe Ipsum"},{id:"3",role:"Lead Engineer",parentId:"2",name:"Walter Rock"},{id:"4",role:"Senior Engineer",parentId:"3",name:"Nick Rand"},{id:"5",role:"Junior Engineer no. 1",parentId:"4",name:"Bob Teest"},{id:"6",role:"Junior Engineer no. 2",parentId:"4",name:"Robb Derth"},{id:"7",role:"Junior Engineer no. 3",parentId:"4",name:"Pete Perth"}];return o.useLayoutEffect((()=>{new a.A({targetContainer:"#test-cont-td-1",width:"100%",tree_data:e})}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"test-cont-td-1"})})})),p=[{value:"Simple representation",id:"simple-representation",level:2},{value:"Simple Data Example",id:"simple-data-example",level:2},{value:"Data definition",id:"data-definition",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>parentId</code>",id:"parentid",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>role</code>",id:"role",level:3},{value:"<code>location</code>",id:"location",level:3},{value:"<code>image</code>",id:"image",level:3}];function m(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tree-data",children:"Tree Data"})}),"\n",(0,r.jsxs)(n.p,{children:["The TreeSpider tree data is straight forward, each employee has the required ",(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"parentId"})," properties, the ",(0,r.jsx)(n.code,{children:"parentId"})," is for specifying the employee that an employee reports to, and the root employee or the overall head of the organization should not have the ",(0,r.jsx)(n.code,{children:"parentId"})," property."]}),"\n",(0,r.jsx)(n.h2,{id:"simple-representation",children:"Simple representation"}),"\n",(0,r.jsx)(n.p,{children:"In simple diagram, the data is like so"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"CEO -> Chief of Engineering -> Lead Engineer -> Senior Engineer -> Junior Engineers\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the simple diagram the ",(0,r.jsx)(n.strong,{children:"Junior Engineers"})," report to the ",(0,r.jsx)(n.strong,{children:"Senior Engineer"})," who reports to the ",(0,r.jsx)(n.strong,{children:"Lead Engineer"})," who then also reports to the ",(0,r.jsx)(n.strong,{children:"Chief of Engineering"})," who then finally reports to the ",(0,r.jsx)(n.strong,{children:"CEO"}),", the CEO doesn't reports to anyone except if there is a board then in that case the root of the structure is going to be the organization's name then the board of directors then the CEO, but in the case of the simple diagram the CEO is the root of the structure, so in the object representation, all the employees except the CEO will have a ",(0,r.jsx)(n.code,{children:"parentId"})," property pointing to the ",(0,r.jsx)(n.code,{children:"id"})," of the employee they report to, for example the next section is the object representation of the above simple example diagram."]}),"\n",(0,r.jsx)(n.h2,{id:"simple-data-example",children:"Simple Data Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'[\n    {\n        id: "1",\n        role: "CEO"\n    },\n    {\n        id: "2",\n        role: "Chief of Engineering",\n        parentId: "1"\n    },\n    {\n        id: "3",\n        role: "Lead Engineer",\n        parentId: "2"\n    },\n    {\n        id: "4",\n        role: "Senior Engineer",\n        parentId: "3"\n    },\n    {\n        id: "5",\n        role: "Junior Engineer no. 1",\n        parentId: "4"\n    },\n    {\n        id: "6",\n        role: "Junior Engineer no. 2",\n        parentId: "4"\n    },\n    {\n        id: "7",\n        role: "Junior Engineer no. 3",\n        parentId: "4"\n    },\n\n]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the above data, notice the CEO doesn't have a ",(0,r.jsx)(n.code,{children:"parentId"})," and the rest of the employees each have the ",(0,r.jsx)(n.code,{children:"parentId"})," which points to the id of the employee they report to, and also notice that all the junior engineers have a ",(0,r.jsx)(n.code,{children:"parentId"})," set to the id of the ",(0,r.jsx)(n.strong,{children:"Senior Engineer"})," which they report to, this is a valid data that can be passed to TreeSpider, then TreeSpider will do the hard work of sorting, organizing and displaying the data with your choice of selected tree type."]}),"\n",(0,r.jsxs)(n.p,{children:["Now passing the data, still using the example data above but adding ",(0,r.jsx)(n.code,{children:"name"})," property to each employee"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// ...\n\nconst employee_data = [\n    {\n        id: "1",\n        role: "CEO",\n        name: "Lorem John"\n    },\n    {\n        id: "2",\n        role: "Chief of Engineering",\n        parentId: "1",\n        name: "Doe Ipsum"\n    },\n    {\n        id: "3",\n        role: "Lead Engineer",\n        parentId: "2",\n        name: "Walter Rock"\n    },\n    {\n        id: "4",\n        role: "Senior Engineer",\n        parentId: "3",\n        name: "Nick Rand"\n    },\n    {\n        id: "5",\n        role: "Junior Engineer no. 1",\n        parentId: "4",\n        name: "Bob Teest"\n    },\n    {\n        id: "6",\n        role: "Junior Engineer no. 2",\n        parentId: "4",\n        name: "Robb Derth"\n    },\n    {\n        id: "7",\n        role: "Junior Engineer no. 3",\n        parentId: "4",\n        name: "Pete Perth"\n    },\n\n]\n\nconst instance1 = new TreeSpider({\n    targetContainer: "#container-1",\n    tree_data: employee_data\n})\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"The above data will be rendered like the working example below, zoom in and out and pan to interact"}),"\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"data-definition",children:"Data definition"}),"\n",(0,r.jsx)(n.p,{children:"More about the data and other properties that can be provided to the employee data, the data structure is as below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"{\n    id: string; \n    parentId: string; \n    name: string; \n    role?: string; \n    location?: string;\n    image?: string;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Technically, only the ",(0,r.jsx)(n.code,{children:"id"})," is required, but the ",(0,r.jsx)(n.code,{children:"parentId"})," and ",(0,r.jsx)(n.code,{children:"name"})," are also required for the data to make sense, explanation of each property below."]}),"\n",(0,r.jsx)(n.h3,{id:"id",children:(0,r.jsx)(n.code,{children:"id"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"required"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"id"})," property is required and it is a ",(0,r.jsx)(n.code,{children:"string"})," that indicates the index of the data, if the ",(0,r.jsx)(n.code,{children:"id"})," of an object in the data array is missing, it can cause recursion issue and which will affect the rendering operation of the data, the ",(0,r.jsx)(n.code,{children:"id"})," is not compulsory to be ordered according to employee hierarchy, in fact the root of the organization can be ordered last in the array, it doesn't affect the data rendering."]}),"\n",(0,r.jsx)(n.h3,{id:"parentid",children:(0,r.jsx)(n.code,{children:"parentId"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"required"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"parentId"})," is required to be added to each employee except the root/head of the organization, it points to the department head to which the employee reports, and it is required that only one object/data should not have a ",(0,r.jsx)(n.code,{children:"parentId"})," to indicate it as the root/head of the organization, if more than one data has a missing ",(0,r.jsx)(n.code,{children:"parentId"})," it can give cause irregularities in the rendering or even an error."]}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"required"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"name"})," is also on the same level of requirement as the ",(0,r.jsx)(n.code,{children:"parentId"})," except it indicate an employee instead of pointing to the lead which the employee reports too, as not everyone has first and last name, so at least a name must be provided either first or last, and if more than 2 names was provided in the name it would assume the first name comes first and the last name comes last and it will create the initials from them and also only display the first and last name, and in the case of only one name it will only render the only name passed and render the initial of the passed name."]}),"\n",(0,r.jsx)(n.h3,{id:"role",children:(0,r.jsx)(n.code,{children:"role"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"Optional"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This is not required but neccessary to indicate the role, position, department or job title of the employee, set this role to the department name if the employee is a lead of their department."}),"\n",(0,r.jsx)(n.h3,{id:"location",children:(0,r.jsx)(n.code,{children:"location"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"Optional"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This is also not required but necessary to show the location of the employee, that is, the city and country of the employee."}),"\n",(0,r.jsx)(n.h3,{id:"image",children:(0,r.jsx)(n.code,{children:"image"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"Optional"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The picture of the employee, the link/url to the employee's picture, if an employee doesn't have a picture leave the image field in the employee's data as undefined, TreeSpider in that case will automatically use the employee's initials instead."}),"\n",(0,r.jsx)(n.p,{children:"The data to be provided to TreeSpider is going to be an array of the object described above, for example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"[\n    { // taking this as the root, note this object is missing the parentId property\n        id: string; \n        name: string; \n        role: string; \n        location: string;\n        image: string;\n    },\n    {\n        id: string; \n        parentId: string; \n        name: string; \n        role: string; \n        location: string;\n        image: string;\n    },\n    {\n        id: string; \n        parentId: string; \n        name: string; \n        role: string; \n        location: string;\n        image: string;\n    }\n]\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);