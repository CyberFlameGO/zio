"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[56531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,m=u["".concat(s,".").concat(g)]||u[g]||f[g]||a;return t?o.createElement(m,r(r({ref:n},p),{},{components:t})):o.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const a={id:"dive-into-zio-config",title:"Dive Into ZIO Config"},r=void 0,l={unversionedId:"zio-config/dive-into-zio-config",id:"zio-config/dive-into-zio-config",title:"Dive Into ZIO Config",description:"Note that this documentation is for 1.x series. For newer versions, please refer to docs section in GitHub.",source:"@site/docs/zio-config/dive-into-zio-config.md",sourceDirName:"zio-config",slug:"/zio-config/dive-into-zio-config",permalink:"/zio-config/dive-into-zio-config",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-config/dive-into-zio-config.md",tags:[],version:"current",frontMatter:{id:"dive-into-zio-config",title:"Dive Into ZIO Config"},sidebar:"ecosystem-sidebar",previous:{title:"Getting Started",permalink:"/zio-config/"},next:{title:"Manual creation of Config",permalink:"/zio-config/manual-creation-of-config"}},s={},c=[{value:"Describe the config by hand",id:"describe-the-config-by-hand",level:2},{value:"Fully automated Config Description",id:"fully-automated-config-description",level:2},{value:"Read config from various sources",id:"read-config-from-various-sources",level:2},{value:"Readers from configdescriptor",id:"readers-from-configdescriptor",level:3},{value:"Documentations using Config",id:"documentations-using-config",level:3},{value:"Accumulating all errors",id:"accumulating-all-errors",level:3},{value:"Example of mapping keys",id:"example-of-mapping-keys",level:3},{value:"Inbuilt support for pure-config",id:"inbuilt-support-for-pure-config",level:2}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that this documentation is for 1.x series. For newer versions, please refer to ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/zio/zio-config/tree/master/docs"},"docs")," section in GitHub.")),(0,i.kt)("h2",{id:"describe-the-config-by-hand"},"Describe the config by hand"),(0,i.kt)("p",null,"We must fetch the configuration from the environment to a case class (product) in scala. Let it be ",(0,i.kt)("inlineCode",{parentName:"p"},"MyConfig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.IO\n\nimport zio.config._\nimport zio.ConfigProvider\nimport zio.Config, Config._\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class MyConfig(ldap: String, port: Int, dburl: String)\n")),(0,i.kt)("p",null,"To perform any action using zio-config, we need a configuration description.\nLet's define a simple one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val myConfig: Config[MyConfig] =\n  (string("LDAP") zip int("PORT") zip string("DB_URL")).to[MyConfig]\n\n // Config[MyConfig]\n')),(0,i.kt)("p",null,"To get a tuple,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val myConfigTupled: Config[(String, Int, String)] =\n  (string("LDAP") zip int("PORT") zip string("DB_URL"))\n')),(0,i.kt)("h2",{id:"fully-automated-config-description"},"Fully automated Config Description"),(0,i.kt)("p",null,"If you don't like describing your configuration manually, and rely on the names of the parameter in the case class (or sealed trait),\nthere is a separate module called ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-config-magnolia"),"."),(0,i.kt)("p",null,"Note:  ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-config-shapeless")," is an alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-config-magnolia")," to support scala 2.11 projects.\nIt will be deprecated once we find users have moved on from scala 2.11."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.config._\nimport zio.config.magnolia._\n\nval myConfigAutomatic = deriveConfig[MyConfig]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"myConfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"myConfigAutomatic")," are same description, and is of the same type."),(0,i.kt)("p",null,"Refer to API docs for more explanations on ",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/static/dev.zio/zio-config-magnolia_2.13/1.0.0-RC31-1/zio/config/magnolia/index.html#descriptor%5BA%5D(implicitconfig:zio.config.magnolia.package.Descriptor%5BA%5D):zio.Config%5BA%5D"},"descriptor"),"\nMore examples on automatic derivation is in examples module of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config"},"zio-config")),(0,i.kt)("h2",{id:"read-config-from-various-sources"},"Read config from various sources"),(0,i.kt)("p",null,"There are more information on various sources in ",(0,i.kt)("a",{parentName:"p",href:"/zio-config/read-from-various-sources"},"here"),"."),(0,i.kt)("p",null,"Below given is a simple example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val map =\n  Map(\n    "LDAP" -> "xyz",\n    "PORT" -> "8888",\n    "DB_URL" -> "postgres"\n  )\n\nval source = ConfigProvider.fromMap(map)\n\nsource.load(myConfig)\n\n')),(0,i.kt)("h3",{id:"readers-from-configdescriptor"},"Readers from configdescriptor"),(0,i.kt)("p",null,"As mentioned before, you can use config descriptor to read from various sources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val anotherResult =\n  source.load(myConfig)\n")),(0,i.kt)("p",null,"Note that, this is almost similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.fromMap(map, myConfig)")," in the previous section."),(0,i.kt)("p",null,"More details in ",(0,i.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config"},"here"),"."),(0,i.kt)("h3",{id:"documentations-using-config"},"Documentations using Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'generateDocs(myConfig)\n//Creates documentation (automatic)\n\nval betterConfig =\n  (string("LDAP") ?? "Related to auth" zip int("PORT") ?? "Database port" zip\n    string("DB_URL") ?? "url of database"\n   ).to[MyConfig]\n\ngenerateDocs(betterConfig).toTable.toGithubFlavouredMarkdown\n// Custom documentation along with auto generated docs\n')),(0,i.kt)("p",null,"More details in ",(0,i.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config"},"here"),"."),(0,i.kt)("h3",{id:"accumulating-all-errors"},"Accumulating all errors"),(0,i.kt)("p",null,"For any misconfiguration, the ReadError collects all of them with proper semantics: ",(0,i.kt)("inlineCode",{parentName:"p"},"AndErrors")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrErrors"),".\nInstead of directly printing misconfigurations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadError.prettyPrint")," shows the path, detail of collected misconfigurations."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All misconfigurations of ",(0,i.kt)("inlineCode",{parentName:"li"},"AndErrors")," are put in parallel lines.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u2565\n\u2560\u2550\u2550\u2557 \n\u2551  \u2551 FormatError\n\u2551 MissingValue\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OrErrors")," are in the same line which indicates a sequential misconfiguration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u2565\n\u2560MissingValue\n\u2551\n\u2560FormatError\n")),(0,i.kt)("p",null,"Here is a complete example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"   ReadError:\n   \u2565\n   \u2560\u2550\u2550\u2566\u2550\u2550\u2557\n   \u2551  \u2551  \u2551\n   \u2551  \u2551  \u2560\u2500MissingValue\n   \u2551  \u2551  \u2551 path: var2\n   \u2551  \u2551  \u2551 Details: value of type string\n   \u2551  \u2551  \u2551 \n   \u2551  \u2551  \u2560\u2500MissingValue path: envvar3\n   \u2551  \u2551  \u2551 path: var3\n   \u2551  \u2551  \u2551 Details: value of type string\n   \u2551  \u2551  \u2551 \n   \u2551  \u2551  \u25bc\n   \u2551  \u2551\n   \u2551  \u2560\u2500FormatError\n   \u2551  \u2551 cause: Provided value is wrong, expecting the type int\n   \u2551  \u2551 path: var1\n   \u2551  \u25bc\n   \u25bc\n")),(0,i.kt)("p",null,"It says, fix ",(0,i.kt)("inlineCode",{parentName:"p"},"FormatError"),' related to path "var1" in the source. For the next error, either provide var2 or var3\nto fix ',(0,i.kt)("inlineCode",{parentName:"p"},"MissingValue")," error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Use prettyPrint method to avoid having to avoid seeing highly nested ReadErrors, that can be difficult to read."),(0,i.kt)("h3",{id:"example-of-mapping-keys"},"Example of mapping keys"),(0,i.kt)("p",null,"Now on, the only way to change keys is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  // mapKey is just a function in `Config` that pre-existed\n\n  val config = deriveConfig[Config].mapKey(_.toUpperCase)\n")),(0,i.kt)("h2",{id:"inbuilt-support-for-pure-config"},"Inbuilt support for pure-config"),(0,i.kt)("p",null,"Many users make use of the label ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," in HOCON files to annotate the type of the coproduct.\nNow on, zio-config has inbuilt support for reading such a file/string using ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptorForPureConfig"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.config._, typesafe._, magnolia._\n\n@nameWithLabel("type")\nsealed trait X\ncase class A(name: String) extends X\ncase class B(age: Int) extends X\n\ncase class AppConfig(x: X)\n\nval str =\n  s"""\n   x : {\n     type = A\n     name = jon\n   }\n  """\n\nConfigProvider.fromHoconString(str).load(deriveConfig[AppConfig])\n\n')))}f.isMDXComponent=!0}}]);