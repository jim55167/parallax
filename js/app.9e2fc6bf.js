(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},o={app:0},s=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"199c":function(t,e){},"23be":function(t,e,i){"use strict";var a=i("199c"),o=i.n(a);e["default"]=o.a},"3dfd":function(t,e,i){"use strict";var a=i("76d7"),o=i("23be"),s=(i("5c0b"),i("2877")),n=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=n.exports},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),o=i("3dfd"),s=i("8c4f"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Navbar"),i("Singlebody"),i("Onebody"),i("Strippedbody"),i("Regularbody"),i("Randombody")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("div",{staticClass:"d-flex navbar-box"},[a("div",{staticClass:"row d-flex navbar-flow position-relative"},[t._m(0),a("ul",{staticClass:"navbar-list",class:{inverse:t.showMenu}},[t._m(1),t._m(2),t._m(3)]),[a("span",{staticClass:"icon",on:{click:t.toggleMenu}},[a("img",{attrs:{alt:"menu",src:i("8457")}})])]],2)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("p",[i("a",{attrs:{href:"#"}},[t._v("Fixie")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"active"},[i("a",{attrs:{href:"#"}},[t._v("Product")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"active"},[i("a",{attrs:{href:"#"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"active"},[i("a",{attrs:{href:"#"}},[t._v("Contact")])])}],d={data:function(){return{showMenu:!1}},methods:{toggleMenu:function(){this.showMenu=!this.showMenu}},mounted:function(){var t=this.$gsap.timeline({scrollTrigger:{trigger:"this",start:"top bottom",end:"bottom center",toggleActions:"play none none none"}});t.fromTo(".navbar-list",{y:"-100%",opacity:0},{y:"5%",opacity:1,duration:1})}},u=d,p=i("2877"),f=Object(p["a"])(u,l,c,!1,null,null,null),v=f.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content-head d-flex"},[a("div",{staticClass:"body-left d-flex"},[a("div",{staticClass:"left-nav"},[a("h1",{staticClass:"title_style"},[t._v("Single Speed,")]),a("h1",{staticClass:"title_style"},[t._v("Single Life.")]),a("div",{staticClass:"head-left-content"},[a("p",{staticClass:"head-nav"},[t._v(" More recently the “fixie” has become a popular alternative among mainly urban cyclists, offering the advantage of simplicity compared with the standard multi-geared bicycle. ")]),a("input",{staticClass:"head_input",attrs:{type:"button",value:"Shop Now"}})])])]),a("div",{staticClass:"head-right position-relative"},[a("img",{staticClass:"head-image",attrs:{src:i("592f"),alt:"圖一"}}),a("div",{staticClass:"d-flex head-right-button position-absolute"},[a("div",{staticClass:"d-flex"},[a("button",{attrs:{type:"button"}},[a("i",{staticClass:"fa-2x fas fa-chevron-left input-icon"})]),a("button",{attrs:{type:"button"}},[a("i",{staticClass:"fa-2x fas fa-chevron-right input-icon"})])]),a("div",{staticClass:"selected-name d-flex"},[a("p",{staticClass:"d-flex"},[t._v("Collection 001-xx")])])])])])])}],b={mounted:function(){var t=this.$gsap.timeline({scrollTrigger:{trigger:"this",start:"top bottom",end:"bottom center",toggleActions:"play none none none"}});t.fromTo(".head-right",{x:"50%",opacity:0},{x:"0",opacity:1,duration:.5,delay:.8}).fromTo(".title_style",{x:"-50%",opacity:0},{x:"0",opacity:1,duration:.5,delay:.2}).fromTo(".head-nav",{x:"-50%",opacity:0},{x:"0",opacity:1,duration:.5,delay:.2}).fromTo(".head_input",{x:"-50%",opacity:0},{x:"0%",opacity:1,duration:.5,delay:.2})}},h=b,y=Object(p["a"])(h,g,m,!1,null,null,null),C=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"onebody d-flex position-relative"},[i("form",{attrs:{action:"#"}},[i("div",{staticClass:"read-more d-flex position-absolute"},[i("input",{attrs:{type:"button",value:"Read More"}}),i("button",{staticClass:"d-flex",attrs:{type:"submit"}},[i("i",{staticClass:"fas fa-arrow-right"})])])]),i("div",{staticClass:"onebody-left"},[i("div",{staticClass:"onebody-image"})]),i("div",{staticClass:"onebody-right position-relative"},[i("div",{staticClass:"onebody-nav"},[i("p",[t._v("A fixed gear drivetrain is more mechanically efficient than any other bicycle drivetrain, with the most direct power transfer from rider to the wheels. Thus, it requires less energy in any given gear to move than a geared bike in the same gear.")])]),i("div",{staticClass:"onebody-title position-relative d-flex"},[i("h1",{staticClass:"title-gsap position-absolute"},[t._v("One Gear,")]),i("h2",{staticClass:"title2-gsap position-absolute"},[t._v("Many Variations")])])])])])}],_={mounted:function(){this.$gsap.to(".onebody-image",{backgroundPosition:"-100px",ease:"none",scrollTrigger:{trigger:".onebody-left",scrub:!0}}),this.$gsap.to(".title-gsap",{right:"5rem",ease:"none",scrollTrigger:{trigger:".onebody-title",scrub:!0}}),this.$gsap.to(".title2-gsap",{right:"-2rem",ease:"none",scrollTrigger:{trigger:".onebody-title",scrub:!0}})}},M=_,w=Object(p["a"])(M,x,A,!1,null,null,null),T=w.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"str-body d-flex position-relative"},[i("form",{attrs:{action:"#"}},[i("div",{staticClass:"read-more d-flex position-absolute"},[i("input",{attrs:{type:"button",value:"Read More"}}),i("button",{staticClass:"d-flex",attrs:{type:"submit"}},[i("i",{staticClass:"fas fa-arrow-right"})])])]),i("section",{staticClass:"str-left d-flex position-relative"},[i("div",{staticClass:"left-nav position-relative",attrs:{id:"strip-gsap"}},[i("h1",{staticClass:"left-nav-gsap position-absolute"},[t._v("Stripped-Down")]),i("h2",{staticClass:"left-nav-gsap2 position-absolute"},[t._v("Performance")])]),i("div",{staticClass:"str-left-content position-absolute"},[i("p",[t._v(" Without the added parts required for a fully geared drive train—derailleurs, shifters, cables, cable carriers, multiple chain rings, freewheel hub, brazed-on mounting lugs—a fixed gear bicycle weighs less than its geared equivalent. ")])])]),i("div",{staticClass:"str-right"},[i("div",{staticClass:"str-image"})])])])}],D={mounted:function(){this.$gsap.to(".left-nav-gsap",{left:"5rem",ease:"none",scrollTrigger:{trigger:"#strip-gsap",scrub:!0}}),this.$gsap.to(".left-nav-gsap2",{left:"-5rem",ease:"none",scrollTrigger:{trigger:"#strip-gsap",scrub:!0}}),this.$gsap.to(".str-image",{backgroundPosition:"-100px",ease:"none",scrollTrigger:{trigger:".str-right",scrub:!0}})}},O=D,R=Object(p["a"])(O,I,Z,!1,null,null,null),j=R.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"collection d-flex"},[i("div",{staticClass:"collection-nav"},[i("h1",{staticClass:"collection_title"},[t._v("A collection built for regular commuters")]),i("p",{staticClass:"collection_p"},[t._v("Riders unknown to each other commonly greet each other when on bikes. As in many subcultures, this feeling of belonging is a key factor in recruiting and retaining participants.")])])]),i("div",{staticClass:"collection-box"},[i("div",{staticClass:"collection-img",attrs:{alt:"圖四"}}),i("div",{staticClass:"collection-text position-absolute"},[i("div",[i("h1",[t._v("“I like to ride. Fixed gear. No brakes. Can’t stop. Don’t want to, either.”")])]),i("div",[i("i",[t._v("Premium Rush (2021)")])])])])])}],Y={mounted:function(){var t=this.$gsap.timeline({scrollTrigger:{trigger:".collection-nav",start:"top bottom",end:"bottom center",toggleActions:"play none none none"}});t.fromTo(".collection_title",{y:"80%",opacity:0},{y:"-30%",opacity:1,duration:1}).fromTo(".collection_p",{y:"100%",opacity:0},{y:"-10%",opacity:1,duration:1,delay:.2})}},k=Y,S=Object(p["a"])(k,G,N,!1,null,null,null),W=S.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"footer-body d-flex"},[a("div",{staticClass:"footer-box"},[a("ul",{staticClass:"d-flex"},[a("li",[a("section",{staticClass:"random1"},[a("img",{staticClass:"footer-box-img",attrs:{src:i("ff9e"),alt:"圖五"}}),a("h1",{staticClass:"footer-title"},[t._v("All who cycle are my friends")]),a("p",{staticClass:"footer-date footer-nav"},[t._v("2020.4.27")]),a("nav",{staticClass:"footer-nav"},[t._v(" A rider from Stockholm interviewed for an article about the phenomenon notes that riding a bike imparts a feeling of freedom to the rider Das Bremsen… ")])])]),a("li",[a("section",{staticClass:"random2"},[a("img",{staticClass:"footer-box-img",attrs:{src:i("fc90"),alt:"圖六"}}),a("h1",{staticClass:"footer-title"},[t._v("Swedish riders and enthusiasts")]),a("p",{staticClass:"footer-date footer-nav"},[t._v("2020.3.11")]),a("nav",{staticClass:"footer-nav"},[t._v(" There are also several bicycle clubs throughout Sweden with a fixed-gear niche. Komet Club Rouler is a club based in Gothenburg, annually arranging… ")])])]),a("li",[a("section",{staticClass:"random3"},[a("img",{staticClass:"footer-box-img",attrs:{src:i("b427"),alt:"圖七"}}),a("h1",{staticClass:"footer-title"},[t._v("The Australian fixie culture")]),a("p",{staticClass:"footer-date footer-nav"},[t._v("2020.2.29")]),a("nav",{staticClass:"footer-nav"},[t._v(" Online stores in Australia ship partially-assembled bikes directly to consumers, considerably undercutting prices at typical brick and mortar stores… ")])])])])])]),a("div",{staticClass:"footer-bottom d-flex"},[a("div",{staticClass:"footer-bottom-color"},[a("div",{staticClass:"footer-bottom-box d-flex"},[a("div",{staticClass:"footer-bottom-nav d-flex"},[a("ul",{staticClass:"d-flex"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Product")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blog")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])])]),a("p",[t._v("©2020 Fixie. All Rights Reserved.")]),a("tfoot",[a("a",{attrs:{href:"#"}},[t._v("Fixie")])])])])])])])}],F={mounted:function(){var t=this.$gsap.timeline({scrollTrigger:{trigger:".footer-body",start:"top bottom",end:"center center",toggleActions:"play none none none"}});t.fromTo(".random1",{y:"50%",opacity:0},{y:"0%",opacity:1,duration:.5,delay:.2}).fromTo(".random2",{y:"50%",opacity:0},{y:"0%",opacity:1,duration:.5,delay:.2}).fromTo(".random3",{y:"50%",opacity:0},{y:"0%",opacity:1,duration:.5,delay:.4})}},L=F,P=Object(p["a"])(L,E,z,!1,null,null,null),Q=P.exports,J={name:"Home",components:{Navbar:v,Singlebody:C,Onebody:T,Strippedbody:j,Regularbody:W,Randombody:Q}},B=J,$=Object(p["a"])(B,n,r,!1,null,"12327958",null),V=$.exports;a["a"].use(s["a"]);var H=[{path:"/",name:"Home",component:V}],X=new s["a"]({routes:H}),U=X,K=i("cffa"),q=i("1dac");K["a"].registerPlugin(q["a"]),a["a"].prototype.$gsap=K["a"],a["a"].prototype.$scrollTrigger=q["a"],a["a"].config.productionTip=!1,new a["a"]({router:U,render:function(t){return t(o["default"])}}).$mount("#app")},"592f":function(t,e,i){t.exports=i.p+"img/p1.39e79db4.jpg"},"5c0b":function(t,e,i){"use strict";i("9c0c")},"76d7":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},o=[]},8457:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTE4VDE4OjM2OjMwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMi0xMFQxNzoyNDo0NiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMi0xMFQxNzoyNDo0NiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTIxZDgwZC02M2IwLTY4NDgtYmNiNy03YTFkOWU5MDcyZjYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYWQ1MWFmNS1iZDk4LTQ2NDUtOTQ3MS0wODhmY2RkZDcyYTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZTVkMDEyYS1kNzdjLTFmNGMtYTE3Ni1iMzM5NjU2NjFmZmIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVlNWQwMTJhLWQ3N2MtMWY0Yy1hMTc2LWIzMzk2NTY2MWZmYiIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0xOFQxODozNjozMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NTIxZDgwZC02M2IwLTY4NDgtYmNiNy03YTFkOWU5MDcyZjYiIHN0RXZ0OndoZW49IjIwMjAtMTItMTBUMTc6MjQ6NDYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53K7acAAAAk0lEQVRoge3YMQ6AIBAFUdZ4YDgJR8bWyu1UZue1WjAhFt9Ya7VKjq8P8DaD6QymM5jOYDqD6QymO7MXxhhbzak5Zzw9L3fDBtNF9scj4vGT+J2sp9wNG0xnMJ3BdAbTpWup977VWmqtuZbuDKZzLdEZTGcwncF0BtO5lugMpkvXEk25GzaYzmA6g+kMpjOYzmC6C5hVGw+ppXhuAAAAAElFTkSuQmCC"},"9c0c":function(t,e,i){},b427:function(t,e,i){t.exports=i.p+"img/p7.4a12d121.jpg"},fc90:function(t,e,i){t.exports=i.p+"img/p6.64bc4026.jpg"},ff9e:function(t,e,i){t.exports=i.p+"img/p5.4e940549.jpg"}});
//# sourceMappingURL=app.9e2fc6bf.js.map