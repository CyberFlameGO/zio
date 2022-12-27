"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[50487],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),g=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=g(t),d=a,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=t(87462),a=(t(67294),t(3905));const o={id:"slf4j",title:"SLF4J"},i=void 0,l={unversionedId:"zio-logging/slf4j",id:"zio-logging/slf4j",title:"SLF4J",description:"The Simple Logging Facade for Java (SLF4J) serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j).",source:"@site/docs/zio-logging/slf4j.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j",permalink:"/zio-logging/slf4j",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j.md",tags:[],version:"current",frontMatter:{id:"slf4j",title:"SLF4J"},sidebar:"ecosystem-sidebar",previous:{title:"Java Platform/System Logger",permalink:"/zio-logging/jpl"},next:{title:"SLF4J bridge",permalink:"/zio-logging/slf4j-bridge"}},p={},g=[{value:"Examples",id:"examples",level:2},{value:"SLF4J logger name and annotations",id:"slf4j-logger-name-and-annotations",level:3},{value:"Custom tracing annotation",id:"custom-tracing-annotation",level:3}],c={toc:g};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Simple Logging Facade for Java (",(0,a.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"SLF4J")),") serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j)."),(0,a.kt)("p",null,"In order to use this logging backend, we need to add the following line in our build.sbt file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j" % "2.1.6"\n')),(0,a.kt)("p",null,"Logger layer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.backend.SLF4J\n\nval logger = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n")),(0,a.kt)("p",null,"Default ",(0,a.kt)("inlineCode",{parentName:"p"},"SLF4J")," logger setup:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"logger name (by default)  is extracted from ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.Trace"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for example, trace ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp.run(Slf4jSimpleApp.scala:17)")," will have ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp")," as logger name"),(0,a.kt)("li",{parentName:"ul"},"NOTE: custom logger name may be set by ",(0,a.kt)("inlineCode",{parentName:"li"},"SLF4J.loggerName")," aspect"))),(0,a.kt)("li",{parentName:"ul"},"all annotations (logger name and log marker name annotations are excluded) are placed into MDC context"),(0,a.kt)("li",{parentName:"ul"},"cause is logged as throwable")),(0,a.kt)("p",null,"Custom logger name set by aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Starting user operation") @@ SLF4J.loggerName("zio.logging.example.UserOperation")\n')),(0,a.kt)("p",null,"Log marker name set by aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL")\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can find the source code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples/src/main/scala/zio/logging/example"},"here")),(0,a.kt)("h3",{id:"slf4j-logger-name-and-annotations"},"SLF4J logger name and annotations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.LogAnnotation\nimport zio.logging.backend.SLF4J\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject Slf4jSimpleApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _       <- ZIO.logInfo("Start")\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting user operation") *>\n            ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping user operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ LogAnnotation.TraceId(traceId) @@ SLF4J.loggerName("zio.logging.example.UserOperation")\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,a.kt)("p",null,"Logback configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        <layout class="ch.qos.logback.classic.PatternLayout">\n            <Pattern>%d{HH:mm:ss.SSS} [%thread] trace_id=%X{trace_id} user_id=%X{user} %-5level %logger{36} %msg%n</Pattern>\n        </layout>\n    </appender>\n    <turboFilter class="ch.qos.logback.classic.turbo.MarkerFilter">\n        <Name>CONFIDENTIAL_FILTER</Name>\n        <Marker>CONFIDENTIAL</Marker>\n        <OnMatch>DENY</OnMatch>\n    </turboFilter>\n    <root level="debug">\n        <appender-ref ref="STDOUT" />\n    </root>\n</configuration>\n')),(0,a.kt)("p",null,"Expected Console Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"13:49:14.060 [ZScheduler-Worker-2] trace_id= user_id= INFO  zio.logging.example.Slf4jSimpleApp Start\n13:49:14.090 [ZScheduler-Worker-12] trace_id=98cdf7b7-dc09-4935-8cbc-4a3399b67d2a user_id=3b6163f5-0677-4909-b17f-c181b53312b6 INFO  zio.logging.example.UserOperation Starting user operation\n13:49:14.091 [ZScheduler-Worker-8] trace_id=98cdf7b7-dc09-4935-8cbc-4a3399b67d2a user_id=75e17c12-d397-455c-89b1-4e5292d860ba INFO  zio.logging.example.UserOperation Starting user operation\n13:49:14.616 [ZScheduler-Worker-0] trace_id=98cdf7b7-dc09-4935-8cbc-4a3399b67d2a user_id=3b6163f5-0677-4909-b17f-c181b53312b6 INFO  zio.logging.example.UserOperation Stopping user operation\n13:49:14.616 [ZScheduler-Worker-10] trace_id=98cdf7b7-dc09-4935-8cbc-4a3399b67d2a user_id=75e17c12-d397-455c-89b1-4e5292d860ba INFO  zio.logging.example.UserOperation Stopping user operation\n13:49:14.626 [ZScheduler-Worker-0] trace_id= user_id= INFO  zio.logging.example.Slf4jSimpleApp Done\n")),(0,a.kt)("h3",{id:"custom-tracing-annotation"},"Custom tracing annotation"),(0,a.kt)("p",null,"Following application has custom aspect ",(0,a.kt)("inlineCode",{parentName:"p"},"currentTracingSpanAspect")," implementation which taking current span from ",(0,a.kt)("inlineCode",{parentName:"p"},"Tracing")," service\nwhich then is added to logs by log annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.backend.SLF4J\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\ntrait Tracing {\n  def getCurrentSpan(): UIO[String]\n}\n\nfinal class LiveTracing extends Tracing {\n  override def getCurrentSpan(): UIO[String] = ZIO.succeed(UUID.randomUUID().toString)\n}\n\nobject LiveTracing {\n  val layer: ULayer[Tracing] = ZLayer.succeed(new LiveTracing)\n}\n\nobject CustomTracingAnnotationApp extends ZIOAppDefault {\n\n  private def currentTracingSpanAspect(key: String): ZIOAspect[Nothing, Tracing, Nothing, Any, Nothing, Any] =\n    new ZIOAspect[Nothing, Tracing, Nothing, Any, Nothing, Any] {\n      def apply[R <: Tracing, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =\n        ZIO.serviceWithZIO[Tracing] { tracing =>\n          tracing.getCurrentSpan().flatMap { span =>\n            ZIO.logAnnotate(key, span)(zio)\n          }\n        }\n    }\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      _ <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ currentTracingSpanAspect("trace_id")\n      _ <- ZIO.logInfo("Done")\n    } yield ExitCode.success).provide(LiveTracing.layer)\n\n}\n')),(0,a.kt)("p",null,"Expected Console Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"19:09:57.695 [ZScheduler-Worker-9] trace_id= user_id= INFO  z.l.e.CustomTracingAnnotationApp Starting operation\n19:09:57.695 [ZScheduler-Worker-9] trace_id=403fe6e9-f666-4688-a609-04813ac26892 user_id=35d36d10-4b64-48fc-bf9d-6b6b37d2f4cc INFO  z.l.e.CustomTracingAnnotationApp Starting operation\n19:09:58.056 [ZScheduler-Worker-8] trace_id=403fe6e9-f666-4688-a609-04813ac26892 user_id=068a35f2-2633-4404-9522-ffbfabe63730 INFO  z.l.e.CustomTracingAnnotationApp Stopping operation\n19:09:58.197 [ZScheduler-Worker-10] trace_id=403fe6e9-f666-4688-a609-04813ac26892 user_id=35d36d10-4b64-48fc-bf9d-6b6b37d2f4cc INFO  z.l.e.CustomTracingAnnotationApp Stopping operation\n19:09:58.202 [ZScheduler-Worker-13] trace_id= user_id= INFO  z.l.e.CustomTracingAnnotationApp Done\n")))}s.isMDXComponent=!0}}]);