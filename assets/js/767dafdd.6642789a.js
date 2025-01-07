"use strict";(self.webpackChunkdive_into=self.webpackChunkdive_into||[]).push([[928],{3905:(e,t,n)=>{n.d(t,{kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=s,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const i={title:"Documenter sa base de donn\xe9e",date:new Date("2023-02-23T00:00:00.000Z")},r=void 0,l={permalink:"/blog/2023/02/23/documenter-sa-base",source:"@site/blog/2023-02-23-documenter-sa-base.md",title:"Documenter sa base de donn\xe9e",description:"Objectifs :",date:"2023-02-23T00:00:00.000Z",formattedDate:"23 f\xe9vrier 2023",tags:[],readingTime:6.205,truncated:!0,authors:[],frontMatter:{title:"Documenter sa base de donn\xe9e",date:"2023-02-23T00:00:00.000Z"},nextItem:{title:"Loi de Conway",permalink:"/blog/2023/02/16/loi-de-conway"}},o={authorsImageUrls:[]},u=[{value:"Objectifs :",id:"objectifs-",level:2},{value:"Pourquoi",id:"pourquoi",level:2},{value:"Les commentaires sur les objets de base de donn\xe9es",id:"les-commentaires-sur-les-objets-de-base-de-donn\xe9es",level:2},{value:"Analyseur de m\xe9tadonn\xe9es",id:"analyseur-de-m\xe9tadonn\xe9es",level:2},{value:"Comment industrialiser sa documentation",id:"comment-industrialiser-sa-documentation",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"objectifs-"},"Objectifs :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Comprendre l'importance de documenter sa bdd"),(0,s.kt)("li",{parentName:"ul"},"Les commentaires sur les objets en base"),(0,s.kt)("li",{parentName:"ul"},"Analyseur de m\xe9tadonn\xe9es pour documenter notre SGBD "),(0,s.kt)("li",{parentName:"ul"},"Comment industrialiser sa documentation")),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"img.png",src:n(4640).Z,width:"1538",height:"1056"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"pourquoi"},"Pourquoi"),(0,s.kt)("p",null,"La ",(0,s.kt)("strong",{parentName:"p"},"documentation")," d'une base de donn\xe9es est importante pour plusieurs raisons :"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Comprendre la structure")," : Elle aide les d\xe9veloppeurs et les administrateurs \xe0 comprendre la structure de la base,\nles tables, les colonnes et les relations entre elles.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Collaboration")," : Elle facilite la collaboration entre les d\xe9veloppeurs et les administrateurs en fournissant une\ndescription claire et concise de la structure de la base.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Maintenance")," : Elle aide \xe0 identifier et \xe0 corriger les erreurs dans la structure de la base, ce qui peut r\xe9duire\nle temps de maintenance et les co\xfbts associ\xe9s.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Transparence")," : Elle aide \xe0 garantir la transparence de la structure de la base et \xe0 fournir une vue d'ensemble de\nson fonctionnement pour les audits et les examens de s\xe9curit\xe9.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Mise \xe0 jour et \xe9volution")," : La documentation peut aider \xe0 planifier les mises \xe0 jour et les \xe9volutions de la base\nen fournissant une vue d'ensemble de sa structure actuelle."))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"les-commentaires-sur-les-objets-de-base-de-donn\xe9es"},"Les commentaires sur les objets de base de donn\xe9es"),(0,s.kt)("p",null,"Les commentaires sur les objets de base de donn\xe9es sont des descriptions ou des annotations que l'on peut ajouter \xe0 des\n\xe9l\xe9ments tels que des tables, des colonnes, des vues, des proc\xe9dures stock\xe9es, etc\u2026",(0,s.kt)("br",{parentName:"p"}),"\n","Ils fournissent des informations suppl\xe9mentaires sur l'objet, telles que son but, ses limites,\nses exigences, etc. Ils peuvent \xe9galement aider \xe0 la compr\xe9hension du code, \xe0 la documentation et \xe0 la collaboration.   "),(0,s.kt)("p",null,"La mani\xe8re de cr\xe9er et de g\xe9rer des commentaires sur les objets de base de donn\xe9es d\xe9pend du syst\xe8me de gestion de base\nde donn\xe9es (SGBD) utilis\xe9. Par exemple, pour ajouter un commentaire \xe0 une table dans MySQL, vous pouvez utiliser la\ncommande ALTER TABLE :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name COMMENT 'description de la table';\n")),(0,s.kt)("p",null,"Dans Oracle et Postgres, vous pouvez utiliser la commande COMMENT suivie du nom de l'objet et du commentaire souhait\xe9:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"COMMENT ON TABLE table_name IS 'description de la table';\n")),(0,s.kt)("p",null,"Les commentaires sur les objets de base de donn\xe9es peuvent \xeatre consult\xe9s \xe0 l'aide de commandes sp\xe9cifiques pour chaque\nSGBD ou \xe0 l'aide d'outils comme : ",(0,s.kt)("inlineCode",{parentName:"p"},"phpMyAdmin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Oracle SQL Developer"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"Microsoft SQL Server Management Studio"),", etc."),(0,s.kt)("h2",{id:"analyseur-de-m\xe9tadonn\xe9es"},"Analyseur de m\xe9tadonn\xe9es"),(0,s.kt)("p",null,"Utiliser un analyseur de m\xe9tadonn\xe9es pour documenter notre SGBD peut \xeatre tr\xe8s b\xe9n\xe9fique pour plusieurs raisons :"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Documentation exhaustive")," : Il permet d'extraire des informations sur la structure, les relations,  types de donn\xe9es, index et contraintes de la base de donn\xe9es.\nOn peut utiliser ces informations, pour g\xe9n\xe9rer une documentation qui fournit une image compl\xe8te de notre sch\xe9ma.\n")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Gain de temps")," : La documentation manuelle d'une base de donn\xe9es peut \xeatre une t\xe2che ",(0,s.kt)("strong",{parentName:"p"},"chronophage"),", en particulier\npour les bases de donn\xe9es ",(0,s.kt)("strong",{parentName:"p"},"volumineuses")," et ",(0,s.kt)("strong",{parentName:"p"},"complexes"),". L'utilisation d'un analyseur de m\xe9tadonn\xe9es peut\npermettre de gagner du temps et des efforts en ",(0,s.kt)("strong",{parentName:"p"},"g\xe9n\xe9rant automatiquement")," la documentation.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Pr\xe9cision")," : Il permet d'extraire des informations pr\xe9cises et fiables sur la base de donn\xe9es.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Standardisation")," : Son utilisation garantit que la documentation est normalis\xe9e et\ncoh\xe9rente sur l'ensemble de la base de donn\xe9es, ce qui la rend plus facile \xe0 comprendre et \xe0 maintenir.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Communication")," : La documentation g\xe9n\xe9r\xe9e par un analyseur de m\xe9tadonn\xe9es peut \xeatre utilis\xe9e pour communiquer la\nstructure et le contenu de la base de donn\xe9es aux parties prenantes, notamment les d\xe9veloppeurs, les testeurs, les analystes m\xe9tier et les autres membres de l'\xe9quipe."))),(0,s.kt)("p",null,"Dans l'ensemble, l'utilisation d'un analyseur de m\xe9tadonn\xe9es de notre SGBD peut nous aider \xe0 mieux comprendre, g\xe9rer et\ncommuniquer les informations sur nos bases de donn\xe9es, ce qui peut conduire \xe0 une am\xe9lioration de l'efficacit\xe9,\nde la pr\xe9cision et de la productivit\xe9."),(0,s.kt)("h2",{id:"comment-industrialiser-sa-documentation"},"Comment industrialiser sa documentation"),(0,s.kt)("p",null,"Dans cette section, nous allons explorer comment industrialiser la g\xe9n\xe9ration de documentation sur vos SGBD en utilisant ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaSpy")," comme analyseur de m\xe9tadonn\xe9es et ",(0,s.kt)("inlineCode",{parentName:"p"},"GitlabCI")," comme outil de CI."),(0,s.kt)("p",null,"Une fois que vous avez install\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaSpy")," en local, vous pouvez g\xe9n\xe9rer de la documentation sur vos SGBDs.\nLa documentation g\xe9n\xe9r\xe9e sera sous forme de fichiers statiques ",(0,s.kt)("inlineCode",{parentName:"p"},"HTML"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"CSS")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"JS"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Suivre le guide d'installation : ",(0,s.kt)("a",{parentName:"p",href:"https://schemaspy.readthedocs.io/en/latest/installation.html"},"https://schemaspy.readthedocs.io/en/latest/installation.html"))),(0,s.kt)("p",null,"Dans dans cette section, nous nous concentrerons sur la fa\xe7on d'industrialiser cette documentation dans une ",(0,s.kt)("inlineCode",{parentName:"p"},"CI")," \ud83d\ude80. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Avant de commencer, il est important de se poser les questions suivantes :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sur quel environnement voulez-vous g\xe9n\xe9rer votre documentation : ",(0,s.kt)("inlineCode",{parentName:"li"},"Dev"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Staging"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Prod")," ?"),(0,s.kt)("li",{parentName:"ul"},"Comment SchemaSpy acc\xe8de-t-il aux m\xe9tadonn\xe9es de votre base de donn\xe9es cible ? ",(0,s.kt)("inlineCode",{parentName:"li"},"En direct")," ?"),(0,s.kt)("li",{parentName:"ul"},"Sur quel service d'h\xe9bergement souhaitez-vous d\xe9ployer votre documentation ? ",(0,s.kt)("inlineCode",{parentName:"li"},"Gitlab/Github Pages"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Netlify"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"AWS S3")," ?"),(0,s.kt)("li",{parentName:"ul"},"Voulez-vous versionner cette documentation ? Via ",(0,s.kt)("inlineCode",{parentName:"li"},"Git"),", sauvegarde d'",(0,s.kt)("inlineCode",{parentName:"li"},"artefacts")," dans une CI...?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Dans cet exemple, nous allons industrialiser la g\xe9n\xe9ration de documentation avec le contexte suivant :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pas d'environnement sp\xe9cifique"),(0,s.kt)("li",{parentName:"ul"},"Simulation de restauration gr\xe2ce \xe0 un script charg\xe9 au d\xe9marrage d'un service postgres dans notre CI"),(0,s.kt)("li",{parentName:"ul"},"Connexion de SchemaSpy au service Postgres et g\xe9n\xe9ration de la documentation"),(0,s.kt)("li",{parentName:"ul"},"Exposition de la doc' sur Gitlab Pages."),(0,s.kt)("li",{parentName:"ul"},"Sauvegarde des documentations sur les artifacts de gitlab, les anciennes versions sont disponibles sur ce service")),(0,s.kt)("p",null,"Passons au code, tout d'abord il va nous falloir le script sql qui va nous permettre de simuler la restauration d'une\nbase de donn\xe9es : (fichier qu'on nommera ",(0,s.kt)("inlineCode",{parentName:"p"},"initdb/init-db.sql"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TYPE sexe AS ENUM ('AUTRE', 'FEMME', 'HOMME');\nCREATE TABLE ville\n(\n    id        VARCHAR UNIQUE PRIMARY KEY,\n    nom       VARCHAR NOT NULL,\n    longitude NUMERIC NOT NULL,\n    latitude  NUMERIC NOT NULL,\n    UNIQUE (nom, latitude)\n);\n\nCREATE TABLE utilisateur\n(\n    id       VARCHAR UNIQUE PRIMARY KEY,\n    prenom   VARCHAR                 NOT NULL,\n    nom      VARCHAR                 NOT NULL,\n    age      VARCHAR                 NOT NULL,\n    ville_id VARCHAR                 NOT NULL REFERENCES ville (id),\n    sexe     sexe NOT NULL\n);\n\nCOMMENT ON COLUMN utilisateur.prenom is 'Est le prenom de l utilisateur';\nCOMMENT ON COLUMN utilisateur.nom is 'Est le nom de naissance de l utilisateur';\nCOMMENT ON COLUMN utilisateur.age is 'Est l age de l utilisateur';\nCOMMENT ON COLUMN utilisateur.ville_id is 'Est la cl\xe9 primaire qui fait r\xe9f\xe9rence \xe0 la ville o\xf9 l utilisateur habite';\nCOMMENT ON COLUMN utilisateur.sexe is 'Est le sexe de l utilisateur de type sexe';\n\nINSERT INTO ville (id, nom, longitude, latitude)\nVALUES ('c4e5fcc2-ab73-11ed-afa1-0242ac120002', 'Paris', 2.333333, 48.86);\n\nINSERT INTO utilisateur (id, prenom, nom, age, ville_id, sexe)\nVALUES ('f43692ad-9f11-4ce2-8d21-078e79ea21a3', 'Lo\xefc', 'cam', 28, 'c4e5fcc2-ab73-11ed-afa1-0242ac120002', 'HOMME');\n")),(0,s.kt)("p",null,"Une fois le fichier sql \xe9crit et mis dans un dossier au niveau de la racine \xe0 l'emplacement : ",(0,s.kt)("inlineCode",{parentName:"p"},"initdb/init-db.sql"),"\nNous pouvons passer \xe0 l'\xe9criture de notre pipeline : "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'stages:\n    - Documentation\n\npages:\n    image: openjdk:8-jdk-alpine\n    services:\n        - name: postgres:14.0\n          alias: postgres\n    variables:\n        POSTGRES_DB: dataguru\n        POSTGRES_USER: postgres\n        POSTGRES_PASSWORD: $CI_POSTGRES_PASSWORD\n    stage: Documentation\n    script:\n        - apk add postgresql-client\n        - apk update && apk add graphviz ttf-dejavu wget\n        - wget https://github.com/schemaspy/schemaspy/releases/download/v6.1.0/schemaspy-6.1.0.jar -P /schemaspy\n        - export PGPASSWORD=$POSTGRES_PASSWORD\n        - psql -h "postgres" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f ./initdb/init-db.sql\n        - wget https://jdbc.postgresql.org/download/postgresql-42.3.0.jar -P /drivers_inc/\n        - java -jar /schemaspy/schemaspy-6.1.0.jar -t pgsql -db "$POSTGRES_DB" -host "postgres" -port 5432 -s public -u "$POSTGRES_USER" -p "$POSTGRES_PASSWORD" -o ./public -dp /drivers_inc/postgresql-42.3.0.jar\n    artifacts:\n        expire_in: \'2 weeks\'\n        paths:\n          - public/\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f La pipeline actuelle n'est pas optimis\xe9e et ne suit pas les bonnes pratiques.\nUne solution possible serait de cr\xe9er une image Docker qui contiendrait toutes les d\xe9pendances n\xe9cessaires pour g\xe9n\xe9rer la documentation. Cette approche permettrait de simplifier et d'am\xe9liorer la rapidit\xe9 de la pipeline. ")),(0,s.kt)("p",null,"Workflow d'ex\xe9cution de la pipeline : "),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"img.png",src:n(3529).Z,width:"552",height:"209"})),(0,s.kt)("p",null,"Et votre documentation sera accessible : ",(0,s.kt)("inlineCode",{parentName:"p"},"https://username.gitlab.io/repo_name/")),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"img.png",src:n(1906).Z,width:"1053",height:"606"})))}p.isMDXComponent=!0},3529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline_gitlab-42f27d0fe1413e3b462ba1de3d29a91d.png"},4640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/schemaspy_acceuil-62f5cc68ca7be43845beadcf16b3a2db.png"},1906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/schemaspy_relation-4ce4eb6d6f7f25a55914cec4adbeb68f.png"}}]);