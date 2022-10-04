"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1092],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,g=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(2081),i=n(4604),l=(n(9496),n(9613)),r=["components"],p={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-7.x/cli/update",title:"pnpm update",description:"Alias: up, upgrade",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/it/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-7.x/docs",previous:{title:"pnpm install",permalink:"/it/cli/install"},next:{title:"pnpm remove",permalink:"/it/cli/remove"}},c={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," aggiorna i pacchetti alla loro ultima versione in base all'intervallo specificato."),(0,l.kt)("p",null,"Se utilizzato senza argomenti, aggiorna tutte le dipendenze."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comando"),(0,l.kt)("th",{parentName:"tr",align:null},"Significato"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze, aderendo agli intervalli specificati in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze, ignorando gli intervalli specificati in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," all'ultima versione su v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze nell'ambito ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Aggiorna tutte le dipendenze nell'ambito ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,l.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,l.kt)("p",null,"You can use patterns to update specific dependencies."),(0,l.kt)("p",null,"Update all ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/*\n")),(0,l.kt)("p",null,"Update all dependencies, except ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,l.kt)("p",null,"Patterns may also be compined, so the next command will update all ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,l.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/* !@babel/core\n")),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Esegue contemporaneamente l'aggiornamento in tutte le sottocartelle con un ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (tranne node_modules)."),(0,l.kt)("p",null,"Esempi di utilizzo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# aggiorna tutti i pacchetti fino a 100 sottocartelle in profondit\xe0\npnpm --recursive update --depth 100\n# aggiorna typescript all'ultima versione in ogni pacchetto\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"Ignora l'intervallo di versioni specificato in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". Verr\xe0 invece utilizzata la versione specificata dal tag ",(0,l.kt)("inlineCode",{parentName:"p"},"pi\xf9 recente")," (potenzialmente aggiornando i pacchetti tra le versioni principali)."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Aggiorna i pacchetti globali."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Cerca di collegare tutti i pacchetti dallo spazio di lavoro. Le versioni vengono aggiornate per corrispondere a quelle dei pacchetti all'interno dello spazio di lavoro."),(0,l.kt)("p",null,"Se vengono aggiornati pacchetti specifici, il comando avr\xe0 esito negativo se una delle dipendenze aggiornate non viene trovata all'interno dello spazio di lavoro. Per esempio, il seguente comando fallisce se ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," non \xe8 un pacchetto dello spazio di lavoro:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Aggiorna solo i pacchetti nelle dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),") e nelle dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Aggiorna solo i pacchetti nelle dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Non aggiornare i pacchetti nelle dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"Mostra le dipendenze obsolete e seleziona quali aggiornare."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}m.isMDXComponent=!0}}]);