(function(t){function e(e){for(var i,c,o=e[0],a=e[1],l=e[2],y=0,f=[];y<o.length;y++)c=o[y],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var a=s[o];0!==r[a]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},r={app:0},n=[];function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=a;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0104":function(t,e,s){"use strict";var i=s("36ca"),r=s.n(i);r.a},"034f":function(t,e,s){"use strict";var i=s("85ec"),r=s.n(i);r.a},1:function(t,e){},"199c":function(t,e){},"23be":function(t,e,s){"use strict";var i=s("199c"),r=s.n(i);e["default"]=r.a},"33c6":function(t,e,s){"use strict";var i=s("accf"),r=s.n(i);r.a},3532:function(t,e,s){"use strict";var i=s("3948"),r=s.n(i);r.a},"36ca":function(t,e,s){},3948:function(t,e,s){},"3dfd":function(t,e,s){"use strict";var i=s("5905"),r=s("23be"),n=(s("034f"),s("2877")),c=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"4b03":function(t,e,s){t.exports=s.p+"img/Asset_Logo_vertical.761c9b04.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=s("3dfd"),n=s("8c4f"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pc",attrs:{fluid:""}},[s("v-layout",t._b({directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{"fill-height":""}},"v-layout",t._d({},[t.dinamic,!0])),[s("v-flex",{staticClass:"bcolor_2a2a3f",attrs:{xs12:"",lg3:""}},[s("sidebarCompany")],1),s("v-flex",{staticClass:"grey lighten-5",attrs:{xs3:"",lg3:""}},[s("searchbar"),s("menuop"),s("listmenu")],1),s("v-flex",{staticClass:"grey lighten-4",attrs:{xs6:""}},[t.isSelected?s("sidebarData"):t._e()],1)],1)],1)},o=[],a=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[t.isMobile?i("img",{staticClass:"img-horizontal",attrs:{src:s("6273"),alt:"",width:"300",height:"200"}}):i("img",{staticClass:"img-vertical",attrs:{src:s("4b03"),alt:"",width:"300"}})])},u=[],y={data:function(){return{isMobile:!1}},methods:{onResize:function(){window.innerWidth<1272?this.isMobile=!0:this.isMobile=!1}}},f=y,x=(s("0104"),s("2877")),d=Object(x["a"])(f,l,u,!1,null,"c17676bc",null),v=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{},[""!=t.selectedItems?i("v-layout",{staticClass:"ml-2 lg-ml-5 mt-5",attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",c:""}},[i("v-layout",{staticClass:"ml-n1",attrs:{column:""}},[i("p",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.selectedItems.title))]),i("p",{staticClass:"dsubheading mt-n3 grey--text text--darken-1"},[t._v(t._s(t.selectedItems.title))]),i("p",{staticClass:"subtitle font-weight-bold  grey--text text--lighten-1"},[t._v("STOCK VALUE")]),i("v-flex",{staticClass:"ml-2",attrs:{xs12:""}},[i("v-layout",{attrs:{row:""}},[i("p",{staticClass:"display-2 mt-n3 grey--text text--darken-1 "},[t._v(t._s(t.selectedItems.stockvalue))]),i("p",{staticClass:"color_b0c466 mt-2"},[t._v(t._s(t.selectedItems.percent))]),i("img",{staticClass:"mt-n2",attrs:{src:s("c69b"),width:"10"}})])],1),i("p",{staticClass:"subtitle mt-n3  grey--text text--darken-1"},[t._v("At close: "+t._s(t.selectedItems.close)+" ")]),i("p",{staticClass:"subtitle mt-5 font-weight-bold  grey--text text--lighten-1 mt-3"},[t._v("SECTORS")]),i("p",{staticClass:"mt-n3 subtitle"},[t._v(" "+t._s(t.selectedItems.sectors))]),i("apexchart",{attrs:{type:"area",options:t.chartOptions,series:t.selectedItems.series}})],1)],1)],1):t._e()],1)},h=[],b=s("2f62");function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={data:function(){return{isMobile:!1,chartOptions:{chart:{type:"area",height:350,zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},colors:["#efcd60"],title:{text:"1D 5D 1M 6M YTD 1Y 5Y MAX",align:"left"},yaxis:{opposite:!0},theme:{palette:"palette1"},xaxis:{categories:["10 AM","12 PM","02 PM","04 PM"]},legend:{horizontalAlign:"center"}}}},computed:g({},Object(b["b"])({selectedItems:"selected_items"})),methods:{onResize:function(){window.innerWidth<1272?this.isMobile=!0:this.isMobile=!1}}},O=_,S=Object(x["a"])(O,p,h,!1,null,null,null),E=S.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-item-group",{staticClass:"text-center"},[s("v-layout",[s("v-flex",{attrs:{xs6x:""}},[s("v-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active,r=e.toggle;return s("v-card",{staticClass:"d-flex align-center w-100 black---text ",attrs:{color:i?"bcolor_bfbfbf":"grey lighten-4",dark:"",height:"50"},on:{click:r}},[s("v-scroll-y-transition",[i?s("div",[t._v(" TOP GAIN COMPANIES ")]):s("div",{staticClass:"black--text ml-1"},[t._v(" TOP GAIN COMPANIES ")])])],1)}}])})],1),s("v-flex",{staticClass:"mr-n3",attrs:{xs6:""}},[s("v-item",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.active,r=e.toggle;return s("v-card",{staticClass:"d-flex align-center w-100 black---text border-button-c ml-n3",attrs:{color:i?"bcolor_2a2a3f":"grey lighten-4",dark:"",height:"50"},on:{click:r}},[s("v-scroll-y-transition",[s("div",i?{}:{staticClass:"black--text ml-1"},[t._v(" TOP MOST ACTIVE COMPANIES ")])])],1)}}])})],1)],1)],1)],1)},w=[],T={name:"menuop",components:{},data:function(){return{search:""}},methods:{}},M=T,P=(s("33c6"),Object(x["a"])(M,C,w,!1,null,null,null)),A=P.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"bcolor_gradient_97ffdc",attrs:{fluid:""}},[s("v-layout",{attrs:{row:"","fill-height":""}},[s("v-flex",{staticClass:" ",attrs:{xs12:""}},[s("p",{staticClass:"mt-3 ml-2 white--text"},[t._v("Search companies by symbol.")]),s("v-text-field",{staticClass:"m-2",attrs:{id:"textSearch",solo:"",label:"","append-icon":t.icon,"append-icon-cb":t.clearText},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)},I=[],k=(s("a623"),s("c975"),s("45fc"),s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("1276"),s("53ca"));function D(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function N(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?D(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var L={name:"searchbar",components:{},computed:N({search:{get:function(){var t=this,e=t.$store.getters.g_search.title;return t.icon=void 0==e!=""?"search":"close",e},set:function(t){this.icon=""==t?"search":"close",this.customFilter(t)}}},Object(b["b"])({items:"items"})),data:function(){return{icon:"search"}},methods:{customFilter:function(t){function e(t,e){return null!==t&&-1===["undefined","boolean"].indexOf(Object(k["a"])(t))&&-1!==t.toString().toLowerCase().replace(/[^0-9a-zA-Z&]+/g," ").indexOf(e)}t||this.$store.dispatch("ACTION_SEARCH",this.items);var s=t.toString().toLowerCase().split(",").filter((function(t){return t})),i=this.items.filter((function(t){return s.every((function(s){return Object.keys(t).some((function(i){return e(t[i],s)}))}))}));this.$store.dispatch("ACTION_SEARCH",i)},clearText:function(){this.icon="search",this.$store.dispatch("ACTION_SEARCH",this.items),this.$store.dispatch("ACTION_SELECTED_ITEM",""),this.$store.dispatch("ACTION_SET_ISSELECTED",!1)}}},z=L,R=Object(x["a"])(z,j,I,!1,null,null,null),$=R.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"mt-n3",attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{attrs:{"two-line":""}},[s("div",{staticStyle:{display:"none"}},[t._v(t._s(t.search))]),t._l(t.search_item,(function(e,i){return[!t.show&&t.isMobile?s("v-list-tile",{key:e.action,staticClass:"elevation",attrs:{ripple:""}},[-1!=t.selected.indexOf(i)?s("v-list-tile-action",{staticClass:"ml-n3"},[s("div",{staticClass:"bcolor_efcd60 h-100 w-50 inline"},[s("v-btn",{staticClass:"ml-n5 mt-4",attrs:{flat:""},on:{click:function(e){return t.back(i)}}},[s("v-icon",{attrs:{right:"",dark:""}},[t._v("fas fa-chevron-left")])],1),s("h1",{staticClass:"ml-5 mt-n5 f-w100"},[t._v("|")]),s("h1",{staticClass:"ml-5 mt-n5 f-w100"},[t._v("|")])],1)]):t._e(),s("v-list-tile-content",{attrs:{avatar:""},on:{click:function(s){return t.selected_item(i,e)}}},[s("v-list-tile-title",{staticClass:"font-weight-bold text-uppercase"},[t._v("| "+t._s(e.title)+" ")]),s("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),s("v-list-tile-action",[s("v-list-tile-action-text",{staticClass:"mt-5"},[t._v(t._s(e.action))])],1)],1):t._e(),t.show?s("v-list-tile",{key:e.action,staticClass:"elevation",attrs:{avatar:"",ripple:""},on:{click:function(s){return t.selected_item(i,e)}}},[-1!=t.selected.indexOf(i)?s("v-list-tile-action",{staticClass:"ml-n3"},[s("div",{staticClass:"bcolor_efcd60 h-100 w-50 inline"},[s("h1",{staticClass:"ml-5 mt-2 f-w100"},[t._v("|")]),s("h1",{staticClass:"ml-5 mt-n5 f-w100"},[t._v("|")])])]):t._e(),s("v-list-tile-content",[s("v-list-tile-title",{staticClass:"font-weight-bold text-uppercase"},[t._v(" "+t._s(e.title)+" ")]),s("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),s("v-list-tile-action",[s("v-list-tile-action-text",{staticClass:"mt-5"},[t._v(t._s(e.action))])],1)],1):t._e()]}))],2)],1)],1)],1)},H=[];function W(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function X(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?W(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var Y={computed:X({search:{get:function(){var t=this,e=t.$store.getters.g_search.title;return void 0==e&&(t.show=!0,t.selected=[],t.$store.dispatch("ACTION_SET_ISSELECTED",!1)),e}}},Object(b["b"])({search_item:"search_item",selected_items:"selected_items",items:"items"})),data:function(){return{selected:"",isMobile:!1,show:!0}},methods:{selected_item:function(t,e){this.selected=[],this.selected.push(t),this.$store.dispatch("ACTION_SELECTED_ITEM",e),this.isMobile&&(this.show=!1),this.$store.dispatch("ACTION_SET_ISSELECTED",!0)},onResize:function(){window.innerWidth<1272?(this.isMobile=!0,this.dinamic="column",this.show=!1):(this.isMobile=!1,this.dinamic="row",this.show=!0)},back:function(t){this.isMobile&&-1!=this.selected.indexOf(t)?(this.show=!0,this.selected=[],this.$store.dispatch("ACTION_SET_ISSELECTED",!1)):this.show=!1},selecteed:function(){this.$store.dispatch("ACTION_SELECTED_ITEM",this.items[this.selected[0]]),this.$store.dispatch("ACTION_SET_ISSELECTED",!0)}},mounted:function(){}},F=Y,G=(s("3532"),Object(x["a"])(F,U,H,!1,null,null,null)),J=G.exports;function V(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function Z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?V(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):V(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var B={components:{sidebarCompany:v,sidebarData:E,menuop:A,searchbar:$,listmenu:J},computed:Z({},Object(b["b"])({isSelected:"isSelected"})),data:function(){return{isMobile:!1,dinamic:"row"}},methods:{onResize:function(){window.innerWidth<1272?(this.isMobile=!0,this.dinamic="column"):(this.isMobile=!1,this.dinamic="row")}}},K=B,q=(s("8adb"),Object(x["a"])(K,c,o,!1,null,null,null)),Q=q.exports;i["default"].use(n["a"]);var tt=[{path:"/",name:"principa;",component:Q}],et=new n["a"]({routes:tt}),st=et;s("841c");i["default"].use(b["a"]);var it=[{action:"1",title:"Facebook",subtitle:"MEXICO",stockvalue:"5.20 USD",percent:" + 0.020 (1.31%)",close:"6:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.55},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.38},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"2",title:"AT&T",subtitle:"RUSSIA",stockvalue:"3.15 USD",percent:" +0.020 (1.31%)",close:"4:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.57},{x:"",y:1.44},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.38},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"3",title:"Microsoft",subtitle:"JAPAN",stockvalue:"19.55 USD",percent:" +0.020 (1.31%)",close:"6:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.57},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"4",title:"NiSource Inc.",subtitle:"GERMANY",stockvalue:"13.55 USD",percent:" +0.020 (1.31%)",close:"5:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.55},{x:"",y:1.46},{x:"",y:1.46},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"5",title:"Animation",subtitle:"CHINA",stockvalue:"12.55 USD",percent:" + 0.020 (1.31%)",close:"4:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.57},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.68},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"6",title:"Chemicals",subtitle:"MEXICO",stockvalue:"10.10 USD",percent:" +0.020 (1.31%)",close:"3:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.5},{x:"",y:1.57},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.45},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.51},{x:"02 PM",y:1.3}]}]},{action:"7",title:"Hospitality",subtitle:"MIAMI",stockvalue:"9.12 USD",percent:" +0.020 (1.31%)",close:"5:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.56},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.38},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.41},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"8",title:"Performing Arts",subtitle:"BRAZIL",stockvalue:"13.25 USD",percent:" +0.020 (1.31%)",close:"7:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.57},{x:"",y:1.46},{x:"",y:1.48},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.54},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.52},{x:"",y:1.45},{x:"",y:1.41},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]},{action:"9",title:"Textiles",subtitle:"MEXICO",stockvalue:"5.20 USD",percent:" +0.020 (1.31%)",close:"6:00PM EST",sectors:"SIC-7311 Services-Advertising Agencies Technology Services",series:[{name:"Network",data:[{x:"",y:1.52},{x:"",y:1.57},{x:"",y:1.46},{x:"",y:1.35},{x:"10 AM",y:1.52},{x:"",y:1.41},{x:"",y:1.5},{x:"",y:1.54},{x:"",y:1.43},{x:"",y:1.41},{x:"12 PM",y:1.52},{x:"",y:1.47},{x:"",y:1.4},{x:"",y:1.45},{x:"",y:1.35},{x:"",y:1.53},{x:"02 PM",y:1.3}]}]}],rt=new b["a"].Store({state:{search:"",isSelected:!0,search_item:it,items:it,selected_items:""},getters:{g_search:function(t){return t.selected_items}},mutations:{SET_SEARCHVALUE:function(t,e){t.search=e},SET_SEARCHITEMS:function(t,e){t.search_item=e},SET_SELECTED_ITEM:function(t,e){t.selected_items=e},SET_ISSELECTED:function(t,e){t.isSelected=e}},actions:{ACTION_SEARCH:function(t,e){var s=t.commit;s("SET_SEARCHITEMS",e)},ACTION_SELECTED_ITEM:function(t,e){var s=t.commit;s("SET_SELECTED_ITEM",e)},ACTION_SET_ISSELECTED:function(t,e){var s=t.commit;s("SET_ISSELECTED",e)}},modules:{}}),nt=s("ce5b"),ct=s.n(nt),ot=(s("bf40"),s("15f5"),s("1321")),at=s.n(ot),lt=(s("4989"),s("ab8b"),s("28dd"));i["default"].component("apexchart",at.a),i["default"].use(ct.a),i["default"].use(lt["a"]),i["default"].config.productionTip=!1,new i["default"]({router:st,store:rt,render:function(t){return t(r["default"])}}).$mount("#app")},5905:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("router-view")],1)},r=[];s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return r}))},6273:function(t,e,s){t.exports=s.p+"img/Asset_Logo_Horizontal.9bd05a70.svg"},"85ec":function(t,e,s){},"8adb":function(t,e,s){"use strict";var i=s("d6e1"),r=s.n(i);r.a},accf:function(t,e,s){},c69b:function(t,e,s){t.exports=s.p+"img/Asset_Arrow_green.57cf8ea7.svg"},d6e1:function(t,e,s){}});
//# sourceMappingURL=app.32682ec4.js.map