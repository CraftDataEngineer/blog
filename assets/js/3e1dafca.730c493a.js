"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[358],{3905:(e,t,n)=>{n.d(t,{kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(v,i(i({ref:t},p),{},{components:n})):l.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},244:(e,t,n)=>{var l=n(4836);t.Z=void 0;var r=l(n(4938)),a=n(5893),i=(0,r.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=i},6874:(e,t,n)=>{var l=n(4836);t.Z=void 0;var r=l(n(4938)),a=n(5893),i=(0,r.default)((0,a.jsx)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");t.Z=i},1332:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);function r(e){let{children:t,hidden:n,className:r}=e;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8515:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7462),r=n(7294),a=n(2389),i=n(650),o=n(6010);const u="tabItem_tAz6";function s(e){const{lazy:t,block:n,defaultValue:a,values:s,groupId:c,className:p}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=s??d.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),v=(0,i.lx)(m,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===a?a:a??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==k&&!m.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,i.UB)(),[h,N]=(0,r.useState)(k),g=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.o5)();if(null!=c){const e=b[c];null!=e&&e!==h&&m.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=g.indexOf(t),l=m[n].value;l!==h&&(y(t),N(l),null!=c&&f(c,l))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]||g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]||g[g.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},m.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>g.push(e),onKeyDown:x,onFocus:O,onClick:O},a,{className:(0,o.Z)("tabs__item",u,a?.className,{"tabs__item--active":h===t})}),n??t)}))),t?(0,r.cloneElement)(d.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function c(e){const t=(0,a.Z)();return r.createElement(s,(0,l.Z)({key:String(t)},e))}},5487:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var l=n(7462),r=(n(7294),n(3905)),a=n(8515),i=n(1332),o=n(244),u=n(6874);n(6473);const s={title:"DevOps Basics",slug:"/"},c="DevOps Basics",p={type:"mdx",permalink:"/catalogue/content/devops_basics",source:"@site/src/pages/catalogue/content/devops_basics.mdx",title:"DevOps Basics",description:"------------",frontMatter:{title:"DevOps Basics",slug:"/"}},d=[{value:"Description",id:"description",level:2},{value:"Objectifs",id:"objectifs",level:2},{value:"Public Cible",id:"public-cible",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Le programme",id:"le-programme",level:2},{value:"Module 1 : Origines de DevOps et Accelerate",id:"module-1--origines-de-devops-et-accelerate",level:4},{value:"Module 2 :  Culture, m\xe9thodes et organisation",id:"module-2---culture-m\xe9thodes-et-organisation",level:4},{value:"Module 3 : Architecture et patterns",id:"module-3--architecture-et-patterns",level:4},{value:"Module 4 : L\u2019infrastructure par le cloud",id:"module-4--linfrastructure-par-le-cloud",level:4},{value:"Module 5 : D\xe9ploiement continu",id:"module-5--d\xe9ploiement-continu",level:4},{value:"Besoin d&#39;aide pour trouver votre formation ?",id:"besoin-daide-pour-trouver-votre-formation-",level:4}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},v=(k="CalendarMonthIcon",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var k;const b={toc:d,Highlight:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devops-basics"},"DevOps Basics"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Date et prix")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"STANDARD",default:!0,mdxType:"TabItem"},(0,r.kt)("b",null," Prochaines sessions :"),(0,r.kt)("br",null),(0,r.kt)("b",null," ",(0,r.kt)(v,{viewBox:"0 -14 36 36",mdxType:"CalendarMonthIcon"})," Le 16/11/2022 "),(0,r.kt)("br",null),(0,r.kt)("b",null," ",(0,r.kt)(u.Z,{viewBox:"0 -14 36 36",mdxType:"EuroIcon"})," 795 ")," ",(0,r.kt)("br",null),(0,r.kt)("b",null," ",(0,r.kt)(o.Z,{viewBox:"0 -14 36 36",mdxType:"AccessTimeIcon"})," 1 jour")," ( 7 heures ) ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("a",{className:"button button--sm button--primary button--outline",href:"/RendezVous"},"Nous contacter")),(0,r.kt)(i.Z,{value:"sur-mesure",label:"SUR-MESURE",mdxType:"TabItem"},(0,r.kt)("b",null,"FORMATION \xc0 LA DEMANDE")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Cette th\xe9matique vous int\xe9resse ?",(0,r.kt)("br",null),"Nos experts con\xe7oivent votre formation sur-mesure",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("a",{className:"button button--sm button--primary button--outline",href:"/RendezVous"},"Nous contacter"))))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Le ",(0,r.kt)("inlineCode",{parentName:"p"},"mouvement DevOps")," consiste \xe0 supprimer les ",(0,r.kt)("strong",{parentName:"p"},"barri\xe8res entre les \xe9quipes")," traditionnellement cloisonn\xe9es : ",(0,r.kt)("inlineCode",{parentName:"p"},"Dev")," ",(0,r.kt)("strong",{parentName:"p"},"/")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Ops"),".\nUn mod\xe8le qui incite les \xe9quipes de d\xe9veloppement et d'exploitation \xe0 travailler ensemble tout au long du cycle de vie\ndes applications logicielles, du d\xe9veloppement au d\xe9ploiement et \xe0 l'exploitation."),(0,r.kt)("p",null,"Au cours de cette formation, nous allons vous pr\xe9senter les b\xe9n\xe9fices du DevOps \xe0 travers l\u2019\xe9tude Accelerate et ses quatre piliers :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Culture, m\xe9thodes et organisation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Architecture applicative exploitable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L\u2019infrastructure par le code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Le d\xe9ploiement continu"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"objectifs"},"Objectifs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conna\xeetre les ",(0,r.kt)("strong",{parentName:"li"},"concepts")," et les ",(0,r.kt)("strong",{parentName:"li"},"b\xe9n\xe9fices")," de la d\xe9marche DevOps"),(0,r.kt)("li",{parentName:"ul"},"D\xe9couvrir les ",(0,r.kt)("strong",{parentName:"li"},"patterns")," de conception DevOps"),(0,r.kt)("li",{parentName:"ul"},"Identifier les ",(0,r.kt)("strong",{parentName:"li"},"enjeux de l'industrialisation")," des ",(0,r.kt)("strong",{parentName:"li"},"d\xe9ploiements")," applicatifs"),(0,r.kt)("li",{parentName:"ul"},"Savoir ",(0,r.kt)("strong",{parentName:"li"},"fiabiliser des cha\xeenes de production"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"public-cible"},"Public Cible"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Manager de la DSI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"D\xe9veloppeur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Architecte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Testeur")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Responsable de production")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Responsable d'exploitation"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une exp\xe9rience dans la contribution ou la gestion d'un projet informatique")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"le-programme"},"Le programme"),(0,r.kt)("h4",{id:"module-1--origines-de-devops-et-accelerate"},"Module 1 : Origines de DevOps et Accelerate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les nouvelles exigences du march\xe9"),(0,r.kt)("li",{parentName:"ul"},"D\xe9finition de DevOps"),(0,r.kt)("li",{parentName:"ul"},"Les quatre objectifs des auteurs d\u2019Accelerate"),(0,r.kt)("li",{parentName:"ul"},"Les quatre indicateurs de mesure de performances"),(0,r.kt)("li",{parentName:"ul"},"Impact de la capacit\xe9 \xe0 d\xe9livrer")),(0,r.kt)("h4",{id:"module-2---culture-m\xe9thodes-et-organisation"},"Module 2 :  Culture, m\xe9thodes et organisation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le mur de la confusion Dev / Ops"),(0,r.kt)("li",{parentName:"ul"},"Les valeurs fondatrices du Manifeste agile"),(0,r.kt)("li",{parentName:"ul"},"Les r\xf4les de l\u2019\xe9quipe agile"),(0,r.kt)("li",{parentName:"ul"},"Scrum : le processus et les rituels")),(0,r.kt)("h4",{id:"module-3--architecture-et-patterns"},"Module 3 : Architecture et patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les concepts de la disponibilit\xe9"),(0,r.kt)("li",{parentName:"ul"},"Patterns de scalabilit\xe9"),(0,r.kt)("li",{parentName:"ul"},"Strat\xe9gies de reprise apr\xe8s sinistre"),(0,r.kt)("li",{parentName:"ul"},"Patterns de d\xe9ploiement"),(0,r.kt)("li",{parentName:"ul"},"Introduction au cloud")),(0,r.kt)("h4",{id:"module-4--linfrastructure-par-le-cloud"},"Module 4 : L\u2019infrastructure par le cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D\xe9finition de l\u2019infrastructure as code"),(0,r.kt)("li",{parentName:"ul"},"Les 3 grandes cat\xe9gories"),(0,r.kt)("li",{parentName:"ul"},"Les caract\xe9ristiques"),(0,r.kt)("li",{parentName:"ul"},"Responsabilit\xe9s des diff\xe9rents outils"),(0,r.kt)("li",{parentName:"ul"},"Cartographie des outils")),(0,r.kt)("h4",{id:"module-5--d\xe9ploiement-continu"},"Module 5 : D\xe9ploiement continu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les 5 principes cl\xe9s"),(0,r.kt)("li",{parentName:"ul"},"D\xe9finition : d\xe9ploiement continu"),(0,r.kt)("li",{parentName:"ul"},"L\u2019importance des tests"),(0,r.kt)("li",{parentName:"ul"},"\xc9tape de construction d\u2019une pipeline"),(0,r.kt)("li",{parentName:"ul"},"Exemple de pipeline")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"besoin-daide-pour-trouver-votre-formation-"},"Besoin d'aide pour trouver votre formation ?"),(0,r.kt)("a",{className:"button button--warning button--outline",href:"/contact"},"Contactez-nous "))}f.isMDXComponent=!0},6473:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/devops-37e84fb617eb1111b9b833a0d25041d6.png"}}]);