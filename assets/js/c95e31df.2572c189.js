"use strict";(self.webpackChunktreespider_doc=self.webpackChunktreespider_doc||[]).push([[5859],{2781:(e,n,t)=>{t.r(n),t.d(n,{TestTSpyder1:()=>h,assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var i=t(4848),o=t(8453),r=t(6540),s=t(8777);const a={sidebar_position:9},l="Methods",c={id:"methods",title:"Methods",description:"The following methods can be used to interact with TreeSpider programmatically",source:"@site/docs/methods.mdx",sourceDirName:".",slug:"/methods",permalink:"/docs/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/paulosabayomi/treespider-doc/tree/main/docs/methods.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Colors",permalink:"/docs/colors"},next:{title:"Events",permalink:"/docs/events"}},d={},h=r.memo((()=>{const e=r.useRef(),n=r.useRef(),t=r.useCallback((()=>{e.current&&(e.current.initialize(),n.current.remove())}),[e.current,n.current]);return r.useLayoutEffect((()=>{e.current=new s.A({targetContainer:"#test-cont-mt-3",width:"100%",random_data_length:30,autoInitialize:!1})}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{id:"test-cont-mt-3"}),(0,i.jsx)("button",{ref:e=>n.current=e,onClick:t,children:"Click me to initialize TreeSpider"})]})})),m=[{value:"initialize",id:"initialize",level:2},{value:"resetZoom",id:"resetzoom",level:2},{value:"updateChartHeadBg",id:"updatechartheadbg",level:2},{value:"on",id:"on",level:2},{value:"setOptions",id:"setoptions",level:2},{value:"zoom",id:"zoom",level:2},{value:"startStopRotateCW",id:"startstoprotatecw",level:2},{value:"startStopRotateACW",id:"startstoprotateacw",level:2},{value:"rotateOnceCW",id:"rotateoncecw",level:2},{value:"rotateOnceACW",id:"rotateonceacw",level:2}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"methods",children:"Methods"})}),"\n",(0,i.jsx)(n.p,{children:"The following methods can be used to interact with TreeSpider programmatically"}),"\n",(0,i.jsx)(n.h2,{id:"initialize",children:"initialize"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to manually initialize TreeSpider, set the ",(0,i.jsx)(n.code,{children:"autoInitialize"})," option to ",(0,i.jsx)(n.code,{children:"false"})," then programmatically call this method to manually initialize TreeSpider, example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const instance1 = new TreeSpider({\n    targetContainer: "#container-1",\n    autoInitialize: false\n})\n// ...\n\ndocument.querySelector("#random-btn").onclick = () => instance1.initialize()\n'})}),"\n",(0,i.jsx)(n.p,{children:"Click on the button below to initialize TreeSpider"}),"\n","\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h2,{id:"resetzoom",children:"resetZoom"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Call this method to reset the zoom level to the default zoom level, and this will also recenter or re-place the root chart head back to the default position."}),"\n",(0,i.jsx)(n.h2,{id:"updatechartheadbg",children:"updateChartHeadBg"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"color: string"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method is for programmatically setting the background color of the chart heads, it takes in the color as the argument, the color can be in hex format or a color name or any other CSS formats, example below"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const instance1 = new TreeSpider({\n    targetContainer: "#container-1"\n})\n\n// ...\n\ndocument.querySelector("#random-btn").onclick = () => instance1.updateChartHeadBg(\'black\')\n'})}),"\n",(0,i.jsx)(n.h2,{id:"on",children:"on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"eventName: TEventType, callbackFn: (data?: any) => null"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This method is a short form of the ",(0,i.jsx)(n.code,{children:"addEventListener"})," method and it works exactly like it, it can be used to listen to events, to learn more about using events check the events page, example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const instance1 = new TreeSpider({\n    targetContainer: "#container-1"\n})\n\ninstance1.on("library.init", (e) => {\n    console.log("library has been initialized", e)\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"setoptions",children:"setOptions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"options_to_set: Omit<ITreeSpiderMain,'targetContainer'>"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This option is for setting options that were not passed directly to the library and it will also override the options that were passed directly to the library, and it is recommended to call this method before initializing TreeSpider, and it is best to use this method when ",(0,i.jsx)(n.code,{children:"autoInitialize"})," is set to ",(0,i.jsx)(n.code,{children:"false"})," and when TreeSpider will be manually initialized, example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const instance1 = new TreeSpider({\n    targetContainer: "#container-1",\n    autoInitialize: false,\n})\n\ninstance1.setOptions({\n    tree_data: [...]\n})\n\ndocument.querySelector("#random-btn").onclick = () => {\n    instance1.initialize()\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"zoom",children:"zoom"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"dir: 'in' | 'out'"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This option is for programmatically zooming in and out, it takes the direction of zoom either ",(0,i.jsx)(n.code,{children:"in"})," or ",(0,i.jsx)(n.code,{children:"out"})," as an argument."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The rotation feature is only available for radial or circular trees and the following methods will not work for none radial trees."})}),"\n",(0,i.jsx)(n.h2,{id:"startstoprotatecw",children:"startStopRotateCW"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method is for starting or stopping the chart rotation in the clockwise direction."}),"\n",(0,i.jsx)(n.h2,{id:"startstoprotateacw",children:"startStopRotateACW"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method is for starting or stopping the chart rotation in the anticlockwise direction."}),"\n",(0,i.jsx)(n.h2,{id:"rotateoncecw",children:"rotateOnceCW"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method is for rotating the tree only once in the clockwise direction."}),"\n",(0,i.jsx)(n.h2,{id:"rotateonceacw",children:"rotateOnceACW"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Params: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"none"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method is for rotating the tree only once in the anticlockwise direction."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);