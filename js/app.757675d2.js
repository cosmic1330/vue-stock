(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b6ebe":"8647cfbf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"52f0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("el-container",[n("el-main",[n("router-view")],1)],1),n("el-footer",[n("el-backtop")],1)],1)},o=[],c=(n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Nav"}},[n("el-header",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[n("i",{staticClass:"el-icon-menu"})])],1),n("el-drawer",{attrs:{title:"",visible:e.drawer,"with-header":!0,size:"350px"},on:{"update:visible":function(t){e.drawer=t}}},[n("ul",[n("router-link",{attrs:{to:"/"}},[n("li",[e._v("選股")])]),n("router-link",{attrs:{to:"/self"}},[n("li",[e._v("我追蹤的股票")])]),n("router-link",{attrs:{to:"/check"}},[n("li",[e._v("資料檢查")])])],1),n("p",{attrs:{id:"databaseTime"}},[e._v("資料庫最後時間："+e._s(e.lastDate)),n("UpdateButton")],1)])],1)},u=[],i=(n("52f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"updateDataButton"}},[n("el-button",{attrs:{plain:"",loading:e.disabled},on:{click:e.handleClick}},[e._v(" 更新 ")])],1)}),l=[],p=(n("d81d"),n("b64b"),n("ac1f"),n("5319"),n("f13e"),n("d3b7"),n("bc3a")),d=n.n(p),f=n("5c96"),m=n.n(f),h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("main",[n("Tab")],1)])},v=[],g=(n("c0e2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"PER"}},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"本益比選股",name:"first"}},[n("PER")],1),n("el-tab-pane",{attrs:{label:"法人買賣超選股",name:"second"}},[n("Corporations")],1),n("el-tab-pane",{attrs:{label:"交易量+技術選股",name:"third"}},[e._v("交易量+技術選股")]),n("el-tab-pane",{attrs:{label:"資料檢查",name:"fourth"}},[e._v("資料檢查")])],1)],1)}),w=[],y=(n("e0ee"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"PER"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[n("el-badge",{attrs:{value:e.stock.length,type:"primary"}},[n("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),n("article",{staticClass:"area1"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stock}},[n("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),n("el-table-column",{attrs:{prop:"PER",label:"本益比"}}),n("el-table-column",{attrs:{prop:"yield",label:"殖利率"}})],1)],1),n("el-divider")],1)}),k=[],x=(n("72c9"),{name:"Per",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:"",stock:[]}},methods:{getFilterPerData:function(){var e=this;te().then((function(t){e.stock=t.data.data,e.requirement=t.data.requirement})).catch((function(e){return console.log(e.response)}))}}}),j=x,_=n("2877"),D=Object(_["a"])(j,y,k,!1,null,null,null),O=D.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"corporations"}},[n("el-tooltip",{attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[n("el-badge",{attrs:{value:e.trust.length+e.foreign.length,type:"primary"}},[n("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),n("article",{staticClass:"area1"},[n("h2",[e._v("投信買超股票")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.trust}},[n("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),n("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),n("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}}),n("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),n("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}})],1)],1),n("article",{staticClass:"area1"},[n("h2",[e._v("外資買超股票")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.foreign}},[n("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),n("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),n("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}}),n("el-table-column",{attrs:{prop:"FdayBeforeYesterday",label:"外資前日買超"}}),n("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),n("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}})],1)],1),n("el-divider")],1)},R=[],S=(n("9ced"),{name:"Corporations",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:"法人連續買超2日",trust:[],foreign:[]}},methods:{getFilterPerData:function(){var e=this;ne().then((function(t){e.trust=t.data.trust,e.foreign=t.data.foreign})).catch((function(e){return console.log(e.response)}))}}}),C=S,E=Object(_["a"])(C,P,R,!1,null,null,null),M=E.exports,T={name:"Tab",props:[],mounted:function(){},data:function(){return{activeName:"first"}},components:{PER:O,Corporations:M},computed:{},methods:{},watch:{}},A=T,N=Object(_["a"])(A,g,w,!1,null,null,null),$=N.exports,q=n("d4ec"),L=n("bee2"),B=n("ade3"),F=function(){function e(){Object(q["a"])(this,e),Object(B["a"])(this,"arr",[])}return Object(L["a"])(e,[{key:"getter",value:function(){}}]),e}(),I={name:"Home",mounted:function(){var e=new F;e.getter()},data:function(){return{}},components:{Tab:$},computed:{},methods:{getData:function(e){var t="".concat("https://cors-anywhere.herokuapp.com/","https://tw.quote.finance.yahoo.net/quote/q?type=ta&perd=d&mkt=10&sym=2308&v=1&callback=jQuery111306382856220483186_1591513211276&_=1591513211278"),n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==XMLHttpRequest.DONE)if(200==n.status){var t=n.responseText.replace("jQuery111306382856220483186_1591513211276(","");t=t.replace(");",""),t=JSON.parse(t),console.log(t)}else console.log(e)},n.open("get",t,!0),n.send(null)}},watch:{}},J=I,K=Object(_["a"])(J,b,v,!1,null,null,null),U=K.exports;r["default"].use(h["a"]);var H=[{path:"/",name:"Home",component:U},{path:"/self",name:"Self",component:function(){return n.e("chunk-2d0b6ebe").then(n.bind(null,"1ee9"))}},{path:"/check",name:"Check",component:U}],W=new h["a"]({routes:H,mode:"history",base:"/ui"}),Q=W,Y=function(e){f["Message"].error(e)},X=function(){Q.replace({name:"Check",query:{redirect:Q.currentRoute.fullPath}})},z=function(){Q.replace({name:"403"})},G=function(e,t){switch(e){case 400:Y(t);break;case 401:Y("登入過期,請重新登入"),setTimeout((function(){X()}),1500);break;case 403:z();break;case 404:Y(t);break;default:Y("res沒有攔截到的錯誤"+t);break}},V=d.a.create({baseURL:"http://yangjuiyu.byethost12.com/StockAnalysis/index.php",headers:{"Content-Type":"application/x-www-form-urlencoded"}});d.a.create({baseURL:"https://cors-anywhere.herokuapp.com/"});V.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),V.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return t?(G(t.status,t.data),Promise.reject(e)):window.navigator.online?Promise.reject(e):void Y("請檢察網路，連線後再重新刷新頁面")}));var Z=function(e){var t=e.method,n=e.url,r=e.data,a=void 0===r?null:r,o=e.options,c=void 0===o?null:o;return t=t.toLowerCase(),"post"==t?V.post(n,a,c):"get"==t?V.get(n,c):"delete"==t?V.delete(n,c):"put"==t?V.put(n,a,c):"patch"==t?V.patch(n,a,c):(console.error("未知的method"+t),!1)},ee=function(){return Z({method:"get",url:"/Date/getLastDate"})},te=function(){return Z({method:"get",url:"/BWI/getCommon"})},ne=function(){return Z({method:"get",url:"/Corporations/getCorporationsBuyTreeDays"})},re=function(){return Z({method:"get",url:"/BWI/getAllStockCode"})},ae=function(e){return Z({method:"get",url:"/Single/curlSingleStockYahooPrice/"+e,options:{params:{type:"json"}}})},oe=function(e){return Z({method:"post",url:"/Single/saveYahooPrice",data:e})},ce=function(){return Z({method:"get",url:"/Date/save"})},se=function(){return Z({method:"get",url:"/BWI/getNewBWI"})},ue=function(){return Z({method:"get",url:"/Corporations/getNewCorporations"})},ie=function(){return Z({method:"get",url:"/MACD/forLoopMACD"})},le=function(){return Z({method:"get",url:"/KD/forLoopKD"})},pe=function(){return Z({method:"get",url:"/MA/forLoopMA"})},de=function(e,t){return Z({method:"get",url:"/Single/checkSingleStockInDBOfDate",options:{params:{code:e,date:t}}})},fe={name:"UpdateButton",props:[],mounted:function(){},data:function(){return{disabled:!1,price:[]}},components:{},computed:{},methods:{openInfo:function(e,t){this.$notify.info({title:e,message:t,position:"top-left"})},openSuccess:function(e,t){this.$notify({title:e,message:t,position:"top-left",type:"success"})},handleClick:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getTradingDate();case 3:return t.next=5,e.getPERData();case 5:return t.next=7,e.getCorporationsData();case 7:return t.next=9,e.getStockPrice();case 9:return t.next=11,e.saveMACD();case 11:return t.next=13,e.saveKD();case 13:return t.next=15,e.saveMA();case 15:e.openInfo("成功","更新完成"),e.disabled=!1,t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](0),e.$notify.error({title:"更新失敗",message:t.t0,position:"top-left"}),e.disabled=!1;case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))()},getTradingDate:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ce();case 2:e.openSuccess("成功","更新最新交易日");case 3:case"end":return t.stop()}}),t)})))()},getPERData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se();case 2:e.openSuccess("成功","更新最新本益比");case 3:case"end":return t.stop()}}),t)})))()},getCorporationsData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ue();case 2:e.openSuccess("成功","更新最新三大法人買賣超");case 3:case"end":return t.stop()}}),t)})))()},getStockPrice:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,c,s,u,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disabled=!0,t.prev=1,n={},r={},a=e.$store.state.codes,a=Object.keys(a),o=e.$store.state.lastDate,t.next=9,de(2330,o);case 9:return c=t.sent,t.next=12,de(2308,o);case 12:if(s=t.sent,!0!==c.data||!0!==s.data){t.next=17;break}return t.abrupt("return",!1);case 17:u=0;case 18:if(!(u<a.length)){t.next=49;break}return i=a[u],t.next=22,ae(i);case 22:if(l=t.sent,l=l.data.replace("jQuery111306382856220483186_1591513211276(","").replace(");",""),l=JSON.parse(l).ta,l=l.map((function(e){var t={hight_price:e.h,low_price:e.l,open_price:e.o,close_price:e.c,volume:e.v,date:e.t};return t})),n[i]=l,r[i]=l,u!==Math.round(a.length/4)){t.next=33;break}e.savePrice(n),n={},t.next=46;break;case 33:if(u!==Math.round(a.length/4*2)){t.next=38;break}e.savePrice(n),n={},t.next=46;break;case 38:if(u!==Math.round(a.length/4*3)){t.next=43;break}e.savePrice(n),n={},t.next=46;break;case 43:if(u!==a.length-1){t.next=46;break}return t.next=46,e.savePrice(n);case 46:u++,t.next=18;break;case 49:e.openSuccess("成功","取得全部股價"),t.next=55;break;case 52:t.prev=52,t.t0=t["catch"](1),console.log(t.t0);case 55:case"end":return t.stop()}}),t,null,[[1,52]])})))()},savePrice:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="data=".concat(JSON.stringify(e)),t.next=3,oe(n).then((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},saveMACD:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ie();case 2:e.openSuccess("成功","更新最新MACD");case 3:case"end":return t.stop()}}),t)})))()},saveKD:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,le();case 2:e.openSuccess("成功","更新最新KD");case 3:case"end":return t.stop()}}),t)})))()},saveMA:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,pe();case 2:e.openSuccess("成功","更新最新MA");case 3:case"end":return t.stop()}}),t)})))()}},watch:{}},me=fe,he=Object(_["a"])(me,i,l,!1,null,null,null),be=he.exports,ve={name:"Tab",props:[],mounted:function(){},data:function(){return{drawer:!1}},components:{UpdateButton:be},computed:{lastDate:function(){return this.$store.state.lastDate}},methods:{},watch:{}},ge=ve,we=Object(_["a"])(ge,s,u,!1,null,null,null),ye=we.exports,ke={name:"App",mounted:function(){this.getData()},components:{Nav:ye},data:function(){return{}},computed:{},methods:{getData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee();case 3:return n=t.sent,t.next=6,re();case 6:r=t.sent,a={},r.data.forEach((function(e){a[e.code]=e.name})),e.$store.commit("setCodes",a),e.$store.commit("setLastDate",n.data.date),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},xe=ke,je=(n("5c0b"),Object(_["a"])(xe,a,o,!1,null,null,null)),_e=je.exports,De=n("2f62");r["default"].use(De["a"]);var Oe=new De["a"].Store({state:{codes:{},lastDate:"????-??-??"},getters:{},mutations:{setCodes:function(e,t){e.codes=t},setLastDate:function(e,t){e.lastDate=t}},actions:{},modules:{}}),Pe=(n("0fae"),n("9483"));Object(Pe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(m.a),new r["default"]({router:Q,store:Oe,render:function(e){return e(_e)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"72c9":function(e,t,n){},"9c0c":function(e,t,n){},"9ced":function(e,t,n){},c0e2:function(e,t,n){},e0ee:function(e,t,n){},f13e:function(e,t,n){}});
//# sourceMappingURL=app.757675d2.js.map