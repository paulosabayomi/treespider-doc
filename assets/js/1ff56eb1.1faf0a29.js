"use strict";(self.webpackChunktreespider_doc=self.webpackChunktreespider_doc||[]).push([[4105],{1659:(e,n,t)=>{t.r(n),t.d(n,{TestTSpyder:()=>h,TestTSpyderT:()=>u,TestTSpyderZ:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=t(4848),i=t(8453),r=t(6540),o=t(8777);const d={sidebar_position:3},l="Basic Usage",s={id:"basic-usage",title:"Basic Usage",description:"Presumming you've followed the installation steps, here is the basic usage of TreeSpider, all TreeSpider options are optional except the targetContainer, to intialize TreeSpider.",source:"@site/docs/basic-usage.mdx",sourceDirName:".",slug:"/basic-usage",permalink:"/docs/basic-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/treespider-doc/tree/main/docs/basic-usage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Tree Data",permalink:"/docs/tree-data"}},c={},p=r.memo((()=>{const e=[{id:"1",name:"Abayomi Amusa",role:"CEO",location:"Lagos, Nigeria"},{id:"2",parentId:"1",name:"Trey Anderson",role:"Product Manager",location:"California, United States"},{id:"3",parentId:"1",name:"Troy Manuel",role:"Software Developer",location:"Alberta, Canada"},{id:"4",parentId:"1",name:"Rebecca Oslon",role:"Software Developer",location:"London, United Kingdom"},{id:"5",parentId:"1",name:"David Scheg",role:"Product Designer",location:"Jiaozian, China"},{id:"6",parentId:"2",name:"James Zucks",role:"DevOps",location:"Accra, Ghana"},{id:"7",parentId:"2",name:"Zu Po Xe",role:"Backend Developer",location:"Johanesburg, South Africa"},{id:"8",parentId:"2",name:"Scott Ziagler",role:"FrontEnd Developer Intern"},{id:"9",parentId:"7",name:"Xervia Allero",role:"FrontEnd Developer Intern"},{id:"10",parentId:"3",name:"Adebowale Ajanlekoko",role:"Fullstack Developer"}];return r.useLayoutEffect((()=>{new o.A({targetContainer:"#test-cont-bu-0",tree_data:e,width:"100%"})}),[]),(0,a.jsx)("div",{id:"test-cont-bu-0",style:{marginBottom:35}})})),h=r.memo((()=>{const e=[{id:"1",name:"Abayomi Amusa",role:"CEO",location:"Lagos, Nigeria"},{id:"2",parentId:"1",name:"Trey Anderson",role:"Product Manager",location:"California, United States"},{id:"3",parentId:"1",name:"Troy Manuel",role:"Software Developer",location:"Alberta, Canada"},{id:"4",parentId:"1",name:"Rebecca Oslon",role:"Software Developer",location:"London, United Kingdom"},{id:"5",parentId:"1",name:"David Scheg",role:"Product Designer",location:"Jiaozian, China"},{id:"6",parentId:"2",name:"James Zucks",role:"DevOps",location:"Accra, Ghana"},{id:"7",parentId:"2",name:"Zu Po Xe",role:"Backend Developer",location:"Johanesburg, South Africa"},{id:"8",parentId:"2",name:"Scott Ziagler",role:"FrontEnd Developer Intern"},{id:"9",parentId:"7",name:"Xervia Allero",role:"FrontEnd Developer Intern"},{id:"10",parentId:"3",name:"Adebowale Ajanlekoko",role:"Fullstack Developer"}];return r.useLayoutEffect((()=>{new o.A({targetContainer:"#test-cont-bu-1",tree_data:e,tree_type:"cellar",chart_head_type:"landscape",backgroundPattern:"blurry",width:"100%"})}),[]),(0,a.jsx)("div",{id:"test-cont-bu-1"})})),u=r.memo((()=>{const e=r.useRef(),n=r.useRef(),t=r.useCallback((()=>{e.current&&(e.current.initialize(),n.current.remove())}),[e.current,n.current]);return r.useLayoutEffect((()=>{e.current=new o.A({targetContainer:"#test-cont-bu-3",width:"100%",random_data_length:30,autoInitialize:!1})}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"test-cont-bu-3"}),(0,a.jsx)("button",{ref:e=>n.current=e,onClick:t,children:"Click me to initialize TreeSpider"})]})})),m=[{value:"Initializing",id:"initializing",level:2},{value:"Passing organization data",id:"passing-organization-data",level:2},{value:"Options",id:"options",level:2},{value:"Methods",id:"methods",level:2},{value:"UI interaction",id:"ui-interaction",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"basic-usage",children:"Basic Usage"})}),"\n",(0,a.jsxs)(n.p,{children:["Presumming you've followed the installation steps, here is the basic usage of TreeSpider, all TreeSpider options are optional except the ",(0,a.jsx)(n.code,{children:"targetContainer"}),", to intialize TreeSpider."]}),"\n",(0,a.jsx)(n.h2,{id:"initializing",children:"Initializing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<div id="container-1"></div>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import TreeSpider from "path/to/treespider/dist/es/treeSpider.bundle.min.js"\n\n// OR if TreeSpider was installed with npm in a project with a bundler\n\n// import TreeSpider from "treespider"\n\nconst instance1 = new TreeSpider({\n    targetContainer: "#container-1"\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then this will display TreeSpider in the browser with randomly generated fake data, next, load your organization data into TreeSpider, the data is linear and straight forward."}),"\n",(0,a.jsx)(n.h2,{id:"passing-organization-data",children:"Passing organization data"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"tree_data"})," option takes an array of objects which will be the organization's employee data, the ",(0,a.jsx)(n.code,{children:"id"})," property is required, and each employee will have a ",(0,a.jsx)(n.code,{children:"parentId"})," which is the id of the department head that each employee reports to, and it is also required that there is an object/data that doesn't have a ",(0,a.jsx)(n.code,{children:"parentId"})," which will serve as the root or the overall head of the organization."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'const employee_data = [\n    {\n        id: "1",\n        name: "Abayomi Amusa",\n        role: "CEO",\n        location: "Lagos, Nigeria"\n    },\n    {\n        id: "2",\n        parentId: "1",\n        name: "Trey Anderson",\n        role: "Product Manager",\n        location: "California, United States"\n    },\n    {\n        id: "3",\n        parentId: "1",\n        name: "Troy Manuel",\n        role: "Software Developer",\n        location: "Alberta, Canada"\n    },\n    {\n        id: "4",\n        parentId: "1",\n        name: "Rebecca Oslon",\n        role: "Software Developer",\n        location: "London, United Kingdom"\n    },\n    {\n        id: "5",\n        parentId: "1",\n        name: "David Scheg",\n        role: "Product Designer",\n        location: "Jiaozian, China"\n    },\n    {\n        id: "6",\n        parentId: "2",\n        name: "James Zucks",\n        role: "DevOps",\n        location: "Accra, Ghana"\n    },\n    {\n        id: "7",\n        parentId: "2",\n        name: "Zu Po Xe",\n        role: "Backend Developer",\n        location: "Johanesburg, South Africa"\n    },\n    {\n        id: "8",\n        parentId: "2",\n        name: "Scott Ziagler",\n        role: "FrontEnd Developer Intern"\n    },\n    {\n        id: "9",\n        parentId: "7",\n        name: "Xervia Allero",\n        role: "FrontEnd Developer Intern"\n    },\n    {\n        id: "10",\n        parentId: "3",\n        name: "Adebowale Ajanlekoko",\n        role: "Fullstack Developer"\n    },\n]\n\nconst instance1 = new TreeSpider({\n    targetContainer: \'#container-1\',\n    tree_data: employee_data\n})\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Notice the ",(0,a.jsx)(n.code,{children:"CEO"})," doesn't have a ",(0,a.jsx)(n.code,{children:"parentId"})," property and that signifies it is the root or the overall head of the organization, and each employee has the ",(0,a.jsx)(n.code,{children:"parentId"})," property pointing the employee they report to, learn more about  the tree data structure on the tree date page."]}),"\n",(0,a.jsx)(n.p,{children:"Then this will display the structure with the default tree type and other default options, zoom out and pan around to interact."}),"\n","\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"There can be multiple TreeSpider instances on the same page"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.p,{children:["You can also customize it or choose the tree type and chart head you want, like for example let's choose the ",(0,a.jsx)(n.code,{children:"cellar"})," tree type with the ",(0,a.jsx)(n.code,{children:"landscape"})," chart head type and also a ",(0,a.jsx)(n.code,{children:"blurry"})," background pattern."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// ...\n\nconst instance1 = new TreeSpider({\n    targetContainer: "#container-1",\n    tree_data: employee_data, // from the example above\n    tree_type: "cellar",\n    chart_head_type: "landscape",\n    backgroundPattern: "blurry",\n    width: "100%", // added so it will fit the container area\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"And this will be displayed as below"}),"\n","\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsxs)(n.p,{children:["You can also programmatically interact with TreeSpider, for instance let's programatically initialize TreeSpider, we will set the ",(0,a.jsx)(n.code,{children:"autoInitialize"})," option to ",(0,a.jsx)(n.code,{children:"false"})," then programmatically initialize it by calling the ",(0,a.jsx)(n.code,{children:"TreeSpider.initialize()"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'const inst1 = new TreeSpider({\n            targetContainer: "#container-1",\n            // ...\n            autoInitialize: false\n        });\n\ndocument.querySelector("#button").onclick = () => {\n    inst1.initialize();\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In the example above an ",(0,a.jsx)(n.code,{children:"onclick"})," event was attached to a button to initialize TreeSpider onclick, to see this option in action click on the button below."]}),"\n","\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(n.h2,{id:"ui-interaction",children:"UI interaction"}),"\n",(0,a.jsx)(n.p,{children:"You can interact with the chart by double clicking on the chart heads to automatically zoom them in, pan in any direction, zoom in an out with pointer and mouse event, collapse and expand chart heads, and also interact using the UI tools."})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var a=t(6540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);