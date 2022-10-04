"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5596],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||s[k]||p;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<p;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(2081),r=n(4604),p=(n(9496),n(9613)),l=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-7.x/cli/update",title:"pnpm update",description:"\u547d\u4ee4\u5225\u540d\uff1aup, upgrade",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/zh-TW/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-7.x/docs",previous:{title:"pnpm install",permalink:"/zh-TW/cli/install"},next:{title:"pnpm remove",permalink:"/zh-TW/cli/remove"}},c={},s=[{value:"\u547d\u4ee4\u7c21\u8981",id:"\u547d\u4ee4\u7c21\u8981",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u547d\u4ee4\u5225\u540d\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u5c07\u5957\u4ef6\u66f4\u65b0\u81f3\u5176\u5141\u8a31\u7bc4\u570d\u5167\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,p.kt)("p",null,"\u7576\u4e0d\u4f7f\u7528\u5176\u4ed6\u5f15\u6578\u6642\uff0c\u66f4\u65b0\u6240\u6709\u76f8\u4f9d\u6027\u3002"),(0,p.kt)("h2",{id:"\u547d\u4ee4\u7c21\u8981"},"\u547d\u4ee4\u7c21\u8981"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,p.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"\u4f9d ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json")," \u4e2d\u6307\u5b9a\u7684\u7bc4\u570d\uff0c\u5c07\u6240\u6709\u76f8\u4f9d\u6027\u66f4\u65b0\u81f3\u6700\u65b0\u7248")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565 ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json")," \u4e2d\u6307\u5b9a\u7684\u7bc4\u570d\uff0c\u5c07\u6240\u6709\u76f8\u4f9d\u6027\u66f4\u65b0\u81f3\u6700\u65b0\u7248")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"\u5c07 ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," \u66f4\u65b0\u5230 v2 \u7684\u6700\u65b0\u7248")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," \u5e95\u4e0b\u7684\u6240\u6709\u76f8\u4f9d\u6027")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," \u5e95\u4e0b\u7684\u6240\u6709\u76f8\u4f9d\u6027")))),(0,p.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,p.kt)("p",null,"You can use patterns to update specific dependencies."),(0,p.kt)("p",null,"Update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/*\n")),(0,p.kt)("p",null,"Update all dependencies, except ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,p.kt)("p",null,"Patterns may also be compined, so the next command will update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,p.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/* !@babel/core\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u5c0d\u9664\u4e86 node_modules \u4ee5\u5916\u6240\u6709\u5305\u542b ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684\u5b50\u76ee\u9304\u4e26\u884c\u57f7\u884c\u66f4\u65b0\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"Ignores the version range specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,p.kt)("h3",{id:"--global"},"--global"),(0,p.kt)("p",null,"Update global packages."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,p.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"\u50c5\u66f4\u65b0\u4f4d\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," \u8207 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u5957\u4ef6\u3002"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"\u50c5\u66f4\u65b0\u4f4d\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u7684\u5957\u4ef6\u3002"),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"\u4e0d\u66f4\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u5957\u4ef6\u3002"),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"\u5217\u51fa\u904e\u6642\u7684\u76f8\u4f9d\u5957\u4ef6\uff0c\u4e26\u5f9e\u4e2d\u9078\u64c7\u8981\u66f4\u65b0\u7684\u3002"),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-TW/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);