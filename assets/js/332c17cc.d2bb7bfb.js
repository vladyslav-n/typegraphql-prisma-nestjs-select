(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[370],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={title:"Installation",sidebar_position:1},s=void 0,p={unversionedId:"basics/installation",id:"basics/installation",isDocsHomePage:!1,title:"Installation",description:"Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use Node.js v12.4.0 or newer.",source:"@site/../docs/basics/installation.md",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/basics/installation",editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/basics/installation.md",version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/basics/configuration"}},l=[{value:"TypeGraphQL",id:"typegraphql",children:[]},{value:"<code>typegraphql-prisma</code> generator",id:"typegraphql-prisma-generator",children:[]},{value:"Additional dependencies",id:"additional-dependencies",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use ",(0,i.kt)("strong",{parentName:"p"},"Node.js v12.4.0 or newer"),"."))),(0,i.kt)("h3",{id:"typegraphql"},"TypeGraphQL"),(0,i.kt)("p",null,"First of all, you should perform all the steps described in the TypeGraphQL installation instruction:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://typegraphql.com/docs/installation.html"},"https://typegraphql.com/docs/installation.html")),(0,i.kt)("h3",{id:"typegraphql-prisma-generator"},(0,i.kt)("inlineCode",{parentName:"h3"},"typegraphql-prisma")," generator"),(0,i.kt)("p",null,"After that, you have to install the generator, as a dev dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D typegraphql-prisma\n")),(0,i.kt)("p",null,"Furthermore, ",(0,i.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," requires Prisma to work properly, so please install Prisma dependencies if you don't have it already installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D prisma\nnpm i @prisma/client\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that ",(0,i.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," is designed to work with a selected versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"prisma"),"."),(0,i.kt)("p",{parentName:"div"},"Please make sure you use ",(0,i.kt)("inlineCode",{parentName:"p"},"prisma")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@prisma/client")," of version matching ",(0,i.kt)("inlineCode",{parentName:"p"},"~3.1.1"),".\nOtherwise, the runtime check will report an error when you run the generator."))),(0,i.kt)("h3",{id:"additional-dependencies"},"Additional dependencies"),(0,i.kt)("p",null,"You also need to install the GraphQL Scalars library (to support the Prisma ",(0,i.kt)("inlineCode",{parentName:"p"},"Json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BigInt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Byte")," types):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i graphql-scalars\n")),(0,i.kt)("p",null,"In order to properly support the aggregate and group by queries, the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-fields")," package is used so it also has to be installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i graphql-fields @types/graphql-fields\n")))}d.isMDXComponent=!0}}]);