"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[262],{3905:(e,t,n)=>{n.d(t,{kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Loi de Conway",date:new Date("2023-02-18T00:00:00.000Z")},i=void 0,l={permalink:"/blog/2023/02/16/loi-de-conway",source:"@site/blog/2023-02-16-loi-de-conway.mdx",title:"Loi de Conway",description:"En 1968, Melvin Conway a publi\xe9 un article intitul\xe9 \"How Do Committees Invent ?\"  [1]  dans lequel il examine la relation entre la structure d'une organisation et la conception d'un syst\xe8me. Il est devenu c\xe9l\xe8bre pour avoir formul\xe9 ce qui est maintenant connu sous le nom de loi de Conway :",date:"2023-02-18T00:00:00.000Z",formattedDate:"18 f\xe9vrier 2023",tags:[],readingTime:2.8,truncated:!0,authors:[],frontMatter:{title:"Loi de Conway",date:"2023-02-18T00:00:00.000Z"},prevItem:{title:"Documenter sa base de donn\xe9e",permalink:"/blog/2023/02/23/documenter-sa-base"},nextItem:{title:"Terraform - Concept & Workflow",permalink:"/blog/2022/11/01/terraform-concepts-et-workflow"}},s={authorsImageUrls:[]},u=[{value:"Conway invers\xe9",id:"conway-invers\xe9",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"En 1968, Melvin Conway a publi\xe9 un article intitul\xe9 ",(0,a.kt)("strong",{parentName:"p"},'"How Do Committees Invent ?"'),"  ",(0,a.kt)("a",{parentName:"p",href:"https://www.melconway.com/Home/Committees_Paper.html"},"[1]"),"  dans lequel il examine la relation entre la structure d'une organisation et la conception d'un syst\xe8me. Il est devenu c\xe9l\xe8bre pour avoir formul\xe9 ce qui est maintenant connu sous le nom de ",(0,a.kt)("strong",{parentName:"p"},"loi de Conway")," :"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," ",(0,a.kt)("strong",{parentName:"p"},"Toute organisation qui con\xe7oit un syst\xe8me, au sens large, concevra une structure qui sera la copie de la structure de communication de l\u2019organisation."))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"img.png",src:n(7942).Z,width:"1208",height:"626"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Conway's Law")," Martin Fowler ",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/ConwaysLaw.html"},"[2]")),(0,a.kt)("p",null,"Pendant la conception d'un syst\xe8me, son architecture a de fortes chances de ressembler \xe0 l\u2019organisation de l'\xe9quipe qui l'a con\xe7ue.\nSi l'on consid\xe8re trois \xe9quipes travaillant sur le d\xe9veloppement d'une m\xeame solution, il est fort probable que la base de code soit divis\xe9e en trois sous-parties distinctes."),(0,a.kt)("p",null,"Alan MacCormack, John Rusnak, et Carliss Baldwin essaient de prouver cette corr\xe9lation dans leur recherche intitul\xe9e\n",(0,a.kt)("strong",{parentName:"p"}," Exploring the Structure of Complex Software Designs: An Empirical Study of Open Source and Proprietary Code")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/220534289_Exploring_the_Structure_of_Complex_Software_Designs_An_Empirical_Study_of_Open_Source_and_Proprietary_Code"},"[3]"),"."),(0,a.kt)("p",null,"En utilisant le ",(0,a.kt)("strong",{parentName:"p"},"DSM (Design Structure Matrix)")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.idp-innovation.com/design-structure-matrix-dsm-modeliser-la-complexite-en-developpement-de-produits/"},"[4]"),"\n, un outil qui vise \xe0 mod\xe9liser la complexit\xe9 d'un syst\xe8me en examinant ses d\xe9pendances."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemple d\u2019un matrice DSM")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"img.png",src:n(727).Z,width:"612",height:"542"})),(0,a.kt)("p",null,"Ils analysent la base de code de ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Mozilla")," et obtienne les r\xe9sultats suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le projet Linux, qui est un projet ",(0,a.kt)("strong",{parentName:"p"},"open source")," con\xe7u pour la collaboration ",(0,a.kt)("strong",{parentName:"p"},"d\xe9centralis\xe9e")," entre des personnes du monde entier, a une ",(0,a.kt)("strong",{parentName:"p"},"architecture modulaire"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le navigateur Netscape, avant son passage en open source sous le nom de Mozilla et qui \xe9tait g\xe9r\xe9 de ",(0,a.kt)("strong",{parentName:"p"},"mani\xe8re propri\xe9taire")," par une \xe9quipe interne, avait une ",(0,a.kt)("strong",{parentName:"p"},"architecture fortement coupl\xe9e"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apr\xe8s son passage en open source, Mozilla a subi une refactorisation globale pour devenir plus modulaire et moins coupl\xe9 que Linux !"))),(0,a.kt)("p",null,"Leur \xe9tude met en lumi\xe8re l'influence de l'organisation des \xe9quipes sur la modularit\xe9 du code. La collaboration distribu\xe9e inh\xe9rente \xe0 l'open source encourage la conception d'une architecture de code plus modulaire, avec une faible interd\xe9pendance entre les diff\xe9rents \xe9l\xe9ments."),(0,a.kt)("p",null,"Il est crucial de consid\xe9rer la structure de l'\xe9quipe lors de la conception d'une architecture. Ignorer la structure organisationnelle peut mener \xe0 des divergences significatives par rapport au design initial."),(0,a.kt)("h2",{id:"conway-invers\xe9"},"Conway invers\xe9"),(0,a.kt)("p",null,'Dans son talk "Microservices and the Inverse Conway Manoeuvre", James Lewis pr\xe9sente une approche appel\xe9e  "Conway invers\xe9"  qui consiste \xe0 organiser l\'\xe9quipe de mani\xe8re \xe0 atteindre l\'architecture d\xe9sir\xe9e.'),(0,a.kt)("div",null,(0,a.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/CsZDGlz7O5w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Une technique largement employ\xe9e par les ",(0,a.kt)("strong",{parentName:"p"},"entreprises performantes")," actuelles, qui augmente les chances de d\xe9velopper des ",(0,a.kt)("strong",{parentName:"p"},"solutions efficaces")," et maintenables de mani\xe8re naturelle."),(0,a.kt)("p",null,"Pour cr\xe9er une architecture modulaire compos\xe9e de plusieurs domaines distincts, il est pr\xe9f\xe9rable de former une \xe9quipe pour chaque domaine sp\xe9cifique. Cela permettra de progresser naturellement vers l'objectif final envisag\xe9."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"De nombreuses organisations continuent de rencontrer des difficult\xe9s pour mettre en place des architectures innovantes, souvent pour de mauvaises raisons."),(0,a.kt)("p",null,"En effet, travailler sur le cloud tout en conservant une organisation cloisonn\xe9e ne va pas forc\xe9ment vous aider \xe0 r\xe9duire votre lead time."),(0,a.kt)("p",null,"La loi de Conway nous rappelle une v\xe9rit\xe9 simple: si la structure de l'organisation ne correspond pas \xe0 l'architecture souhait\xe9e, l'adoption des derni\xe8res tendances technologiques ne suffira pour atteindre les r\xe9sultats escompt\xe9s."),(0,a.kt)("p",null,"Et comme le dit si bien  ",(0,a.kt)("strong",{parentName:"p"},"Ryth Malan")," :"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si l'architecture du syst\xe8me et l'architecture de l'organisation sont en d\xe9saccord, l'architecture de l'organisation l'emporte.")))}c.isMDXComponent=!0},7942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/conway-311ebc5f15ff313c8915ea790dc5ebb8.png"},727:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dsm-e18965daf202cfcb555b09099c54bd66.png"}}]);