"use strict";(self.webpackChunktreespider_doc=self.webpackChunktreespider_doc||[]).push([[3891],{7881:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/treespider-doc/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Installation","href":"/treespider-doc/docs/installation","docId":"installation","unlisted":false},{"type":"link","label":"Basic Usage","href":"/treespider-doc/docs/basic-usage","docId":"basic-usage","unlisted":false},{"type":"link","label":"Tree Data","href":"/treespider-doc/docs/tree-data","docId":"tree-data","unlisted":false},{"type":"link","label":"Trees","href":"/treespider-doc/docs/trees","docId":"trees","unlisted":false},{"type":"link","label":"Chart Heads","href":"/treespider-doc/docs/chart-heads","docId":"chart-heads","unlisted":false},{"type":"link","label":"Options","href":"/treespider-doc/docs/options","docId":"options","unlisted":false},{"type":"link","label":"Colors","href":"/treespider-doc/docs/colors","docId":"colors","unlisted":false},{"type":"link","label":"Methods","href":"/treespider-doc/docs/methods","docId":"methods","unlisted":false},{"type":"link","label":"Events","href":"/treespider-doc/docs/events","docId":"events","unlisted":false},{"type":"category","label":"Frameworks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"React JS","href":"/treespider-doc/docs/frameworks/react-js","docId":"frameworks/react-js","unlisted":false}],"href":"/treespider-doc/docs/category/frameworks"},{"type":"link","label":"Contributing","href":"/treespider-doc/docs/contributing","docId":"contributing","unlisted":false}]},"docs":{"basic-usage":{"id":"basic-usage","title":"Basic Usage","description":"Presumming you\'ve followed the installation steps, here is the basic usage of TreeSpider, all TreeSpider options are optional except the targetContainer, to intialize TreeSpider.","sidebar":"tutorialSidebar"},"chart-heads":{"id":"chart-heads","title":"Chart Heads","description":"As TreeSpider has different tree types so it also has different options of chart heads that can be chosen from, each trees has a fitting chart head, for example the rounded chart head goes well on the goldenRod tree, the chart heads are as follows","sidebar":"tutorialSidebar"},"colors":{"id":"colors","title":"Colors","description":"This page explains more on the colorrange option, you can customize TreeSpider chart head colors to fit your taste by providing an array of colors to the colorrange option, by default, TreeSpider uses a range of rainbow colors, how does it work? TreeSpider interpolates the provided colors using d3.interpolateRgbBasis() which produces a color range based on the provided colors, it then slice out a color based on the index of the tree data of the chart head, the index gets converted into percentage, like for example if the index of the tree data is 98 and the total length of the tree data is 200, the maths is going to be 98/200 which then gives the percentage and with this percentage it is used to get a slice from the interpolated color range and then the tree data\'s chart head get assigned the color slice, next let\'s check out how it really works.","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"TreeSpider is still a work-in-progress and I am planning to make it better that it currently is, and your contribution is highly appreciated, and if you need a feature or want to add a tree type, a new chart head, a new link type or any other things you are welcome to contribute them, or if you noticed a bug you\'re welcome to create a pull request, your contributions are appreciated.","sidebar":"tutorialSidebar"},"events":{"id":"events","title":"Events","description":"TreeSpider has a list of events that can be listened for, the below is a list of all events.","sidebar":"tutorialSidebar"},"frameworks/react-js":{"id":"frameworks/react-js","title":"React JS","description":"TreeSpider can run in React JS applications, this documentation uses React JS and it runs TreeSpider, the following are the steps to running TreeSpider in a React JS application.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"TreeSpider can be installed with npm or can be included via CDN.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"TreeSpider is an easy-to-use javascript library built for the purpose of displaying organization structure and employee structure and hierarchy within the organization, i.e for displaying employee data to know who reports to who and in which department, it makes it easy to manage employees in any organization of all sizes.","sidebar":"tutorialSidebar"},"methods":{"id":"methods","title":"Methods","description":"The following methods can be used to interact with TreeSpider programmatically","sidebar":"tutorialSidebar"},"options":{"id":"options","title":"Options","description":"TreeSpider can be personalized and customized with the options, the options are as follows","sidebar":"tutorialSidebar"},"tree-data":{"id":"tree-data","title":"Tree Data","description":"The TreeSpider tree data is straight forward, each employee has the required id and parentId properties, the parentId is for specifying the employee that an employee reports to, and the root employee or the overall head of the organization should not have the parentId property.","sidebar":"tutorialSidebar"},"trees":{"id":"trees","title":"Trees","description":"These are the different tree choices that can be chosen from, they will be caterized into radial and non-radial trees:","sidebar":"tutorialSidebar"}}}}')}}]);