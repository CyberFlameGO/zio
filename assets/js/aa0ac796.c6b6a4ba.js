"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3243],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},6155:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"ustream",title:"UStream"},c=void 0,u={unversionedId:"datatypes/stream/ustream",id:"version-1.x/datatypes/stream/ustream",isDocsHomePage:!1,title:"UStream",description:"UStream[A] is a type alias for ZStream[Any, Nothing, A], which represents a ZIO stream that does not require any services, it cannot fail, and after evaluation, it may emit zero or more values of type A.",source:"@site/versioned_docs/version-1.x/datatypes/stream/ustream.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/ustream",permalink:"/version-1.x/datatypes/stream/ustream",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stream/ustream.md",tags:[],version:"1.x",frontMatter:{id:"ustream",title:"UStream"},sidebar:"datatypes-sidebar",previous:{title:"Stream",permalink:"/version-1.x/datatypes/stream/stream"},next:{title:"ZTransducer",permalink:"/version-1.x/datatypes/stream/ztransducer"}},p=[],m={toc:p};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UStream[A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStream[Any, Nothing, A]"),", which represents a ZIO stream that does not require any services, it cannot fail, and after evaluation, it may emit zero or more values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type UStream[+A] = ZStream[Any, Nothing, A]\n")))}l.isMDXComponent=!0}}]);