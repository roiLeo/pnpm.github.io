"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9795],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,g=s["".concat(c,".").concat(d)]||s[d]||f[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>f});var r=n(2962),i=n(2742),l=(n(9496),n(9613)),o=["components"],a={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"cli/config",title:"pnpm config",description:"Alias: c",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/id/next/cli/config",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"config",title:"pnpm config"},sidebar:"docs",previous:{title:"pnpm doctor",permalink:"/id/next/cli/doctor"},next:{title:"package.json",permalink:"/id/next/package_json"}},u={},f=[{value:"Perintah",id:"perintah",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],s={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"c")),(0,l.kt)("p",null,"Manage the configuration files."),(0,l.kt)("p",null,"The configuration files are in ",(0,l.kt)("inlineCode",{parentName:"p"},"INI")," format."),(0,l.kt)("p",null,"The local configuration file is located in the root of the project and is named ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,l.kt)("p",null,"The global configuration file is located at one of the following locations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," env variable is set, then ",(0,l.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,l.kt)("li",{parentName:"ul"},"On Windows: ",(0,l.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,l.kt)("li",{parentName:"ul"},"On macOS: ",(0,l.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,l.kt)("li",{parentName:"ul"},"On Linux: ",(0,l.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,l.kt)("h2",{id:"perintah"},"Perintah"),(0,l.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,l.kt)("p",null,"Set the config key to the value provided."),(0,l.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,l.kt)("p",null,"Print the config value for the provided key."),(0,l.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,l.kt)("p",null,"Remove the config key from the config file."),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,"Show all the config settings."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"See the configuration in the global config file."))}d.isMDXComponent=!0}}]);