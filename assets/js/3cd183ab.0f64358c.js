"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[87110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),c=s(r),u=o,f=c["".concat(a,".").concat(u)]||c[u]||d[u]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var g={};for(var a in t)hasOwnProperty.call(t,a)&&(g[a]=t[a]);g.originalType=e,g[c]="string"==typeof e?e:o,l[1]=g;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>g,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"slf4j-bridge",title:"SLF4J bridge"},l=void 0,g={unversionedId:"zio-logging/slf4j-bridge",id:"zio-logging/slf4j-bridge",title:"SLF4J bridge",description:"It is possible to use zio-logging for SLF4j loggers, usually third-party non-ZIO libraries. To do so, import",source:"@site/docs/zio-logging/slf4j-bridge.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j-bridge",permalink:"/zio-logging/slf4j-bridge",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j-bridge.md",tags:[],version:"current",frontMatter:{id:"slf4j-bridge",title:"SLF4J bridge"},sidebar:"ecosystem-sidebar",previous:{title:"SLF4J",permalink:"/zio-logging/slf4j"},next:{title:"Log Metrics",permalink:"/zio-logging/metrics"}},a={},s=[{value:"Examples",id:"examples",level:2},{value:"SLF4J bridge with JSON console logger",id:"slf4j-bridge-with-json-console-logger",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-logging")," for SLF4j loggers, usually third-party non-ZIO libraries. To do so, import\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j-bridge")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j-bridge" % "2.1.6"\n')),(0,o.kt)("p",null,"and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Slf4jBridge.initialize")," layer when setting up logging:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\n\nprogram.provideCustom(Slf4jBridge.initialize)\n")),(0,o.kt)("p",null,"SLF4J bridge with custom logger can be setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.slf4j.Slf4jBridge\n\nval logger = Runtime.removeDefaultLoggers >>> zio.logging.consoleJson(LogFormat.default, LogLevel.Debug) >+> Slf4jBridge.initialize\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," You should either use ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j")," to send all ZIO logs to an SLF4j provider (such as logback, log4j etc) OR ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-logging-slf4j-bridge")," to send all SLF4j logs to\nZIO logging. Enabling both causes circular logging and makes no sense."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"slf4j-bridge-with-json-console-logger"},"SLF4J bridge with JSON console logger"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.slf4j.bridge\n\nimport org.slf4j.{ Logger, LoggerFactory }\nimport zio.logging.{ LogFormat, consoleJson }\nimport zio.{ ExitCode, LogLevel, Runtime, Scope, ZIO, ZIOAppArgs, ZIOAppDefault, ZLayer }\n\nobject Slf4jBridgeExampleApp extends ZIOAppDefault {\n\n  private val slf4jLogger: Logger = LoggerFactory.getLogger("SLF4J-LOGGER")\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleJson(LogFormat.default, LogLevel.Debug) >+> Slf4jBridge.initialize\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      _ <- ZIO.logInfo("Start")\n      _ <- ZIO.succeed(slf4jLogger.warn("Test {}!", "WARNING"))\n      _ <- ZIO.logDebug("Done")\n    } yield ExitCode.success)\n\n}\n')),(0,o.kt)("p",null,"Expected Console Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"timestamp":"2022-10-28T18:06:53.835377+02:00","level":"INFO","thread":"zio-fiber-8","message":"Start"}\n{"timestamp":"2022-10-28T18:06:53.855229+02:00","level":"WARN","thread":"zio-fiber-9","message":"Test WARNING!"}\n{"timestamp":"2022-10-28T18:06:53.858792+02:00","level":"DEBUG","thread":"zio-fiber-8","message":"Done"}\n')))}c.isMDXComponent=!0}}]);