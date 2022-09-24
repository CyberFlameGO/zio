"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8369],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"zio-amqp",title:"ZIO AMQP"},i=void 0,l={unversionedId:"ecosystem/community/zio-amqp",id:"ecosystem/community/zio-amqp",title:"ZIO AMQP",description:"ZIO AMQP is a ZIO-based AMQP client for Scala.",source:"@site/docs/ecosystem/community/zio-amqp.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/zio-amqp",permalink:"/ecosystem/community/zio-amqp",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/zio-amqp.md",tags:[],version:"current",frontMatter:{id:"zio-amqp",title:"ZIO AMQP"},sidebar:"ecosystem-sidebar",previous:{title:"TranzactIO",permalink:"/ecosystem/community/tranzactio"},next:{title:"ZIO Arrow",permalink:"/ecosystem/community/zio-arrow"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/svroonland/zio-amqp"},"ZIO AMQP")," is a ZIO-based AMQP client for Scala."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ZIO AMQP is a ZIO-based wrapper around the RabbitMQ client. It provides a streaming interface to AMQP queues and helps to prevent us from shooting ourselves in the foot with thread-safety issues."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "nl.vroste" %% "zio-amqp" % "0.3.0"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First, let's create an instance of RabbitMQ:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name some-rabbit -p 5672:5672 -p 5673:5673 -p 15672:15672 rabbitmq:3-management\n")),(0,o.kt)("p",null,"Then we need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"my_exchange")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"my_queue")," and bind the queue to the exchange via the RabbitMQ management dashboard (",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:15672"),")."),(0,o.kt)("p",null,"Now we can run the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import nl.vroste.zio.amqp._\nimport nl.vroste.zio.amqp.model._\nimport zio._\n\nimport java.net.URI\n\nobject ZIOAMQPExample extends ZIOAppDefault {\n\n  val channel: ZIO[Scope, Throwable, Channel] = for {\n    connection <- Amqp.connect(URI.create("amqp://localhost:5672"))\n    channel    <- Amqp.createChannel(connection)\n  } yield channel\n\n  val myApp: ZIO[Any, Throwable, Unit] =\n    ZIO.scoped {\n      for {\n        channel                            <- channel\n        producer: ZIO[Any, Throwable, Long] =\n          Random.nextUUID\n            .flatMap(uuid => channel.publish(ExchangeName("my_exchange"), uuid.toString.getBytes).unit)\n            .schedule(Schedule.spaced(1.seconds))\n\n        consumer: ZIO[Any, Throwable, Unit] =\n          channel\n            .consume(queue = QueueName("my_queue"), consumerTag = ConsumerTag("my_consumer"))\n            .mapZIO { record =>\n              val deliveryTag = record.getEnvelope.getDeliveryTag\n              Console.printLine(s"Received $deliveryTag: ${new String(record.getBody)}") *>\n                channel.ack(DeliveryTag(deliveryTag))\n            }\n            .runDrain\n        p                                  <- producer.fork\n        c                                  <- consumer.fork\n        _                                  <- p.zip(c).join\n      } yield ()\n    }\n\n  override def run: ZIO[Environment with ZIOAppArgs with Scope, Any, Any] = myApp\n}\n')))}m.isMDXComponent=!0}}]);