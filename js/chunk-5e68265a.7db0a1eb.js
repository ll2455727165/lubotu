(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e68265a"],{"38f5":function(e,t,c){"use strict";c.r(t);c("8e46");var n=c("982c"),a={class:"my"},i={class:"my-info"},s={class:"my-info-user"},r={class:"info-user-img"},o=["src"],u={class:"info-user-info"},f={class:"user-info-name"},l={class:"user-info-desc"},b={class:"my-info-list"};function d(e,t,c,d,j,O){var g=Object(n["L"])("van-uploader"),v=Object(n["L"])("van-cell");return Object(n["D"])(),Object(n["h"])("div",a,[Object(n["i"])("div",{class:"my-bg",style:Object(n["u"])({backgroundImage:"url('".concat(e.userInfo.userBg,"')")})},[Object(n["k"])(g,{class:"my-bg-upload","after-read":e.uploadBg},null,8,["after-read"])],4),Object(n["i"])("div",i,[Object(n["i"])("div",s,[Object(n["i"])("div",r,[Object(n["i"])("img",{class:"auto-img",src:e.userInfo.userImg,alt:""},null,8,o)]),Object(n["i"])("div",u,[Object(n["i"])("div",f,Object(n["O"])(e.userInfo.nickName),1),Object(n["i"])("div",l,Object(n["O"])(""==e.userInfo.desc?"这家伙很懒，什么也没有留下！":e.userInfo.desc),1)])]),Object(n["i"])("div",b,[(Object(n["D"])(!0),Object(n["h"])(n["a"],null,Object(n["J"])(e.listData,(function(e,t){return Object(n["D"])(),Object(n["f"])(v,{title:e.title,"is-link":"",to:e.name,key:t},null,8,["title","to"])})),128))])])])}var j=c("f62e"),O=c("fd6a"),g=(c("4bc1"),c("1576"),c("4fdb"),c("bb4d"),c("1111"),c("c8b4"),c("788d"),c("eff4"),c("fd03")),v=c("43f2"),m=c("3bbd"),p=Object(n["l"])({name:"my",setup:function(){var e=[{title:"个人资料",name:"account"},{title:"我的订单",name:"order"},{title:"我的收藏",name:"like"},{title:"地址管理",name:"address"},{title:"安全中心",name:"secure"}],t=Object(n["H"])({userInfo:{}}),c=I(t),a=c.getUserInfo,i=c.uploadBg;return Object(n["A"])((function(){a()})),Object(O["a"])(Object(O["a"])({listData:e},Object(n["P"])(t)),{},{uploadBg:i})}});function I(e){var t=function(){Object(g["a"])(v["a"].findMy).then((function(t){var c=t.code,n=t.result,a=void 0===n?[]:n;if("A001"==c){var i=Object(j["a"])(a,1),s=i[0],r=void 0===s?{}:s;Reflect.set(e,"userInfo",r)}})).catch((function(e){console.log("err==>",e)}))},c=function(t){var c=["gif","png","jpg","jpeg"],n=1048576,a=t.file.type.split("/")[1];if(!c.includes(a))return Object(m["b"])("文件类型只支持 ".concat(c.join(",")));var i=t.file.size;if(i>n)return Object(m["b"])("文件允许最大不能超过1MB");var s=t.content.replace(/^data:image\/[A-Za-z]+;base64,/,"");Object(g["b"])(v["a"].updateUserBg,{imgType:a,serverBase64Img:s}).then((function(t){var c=t.code,n=t.userBg,a=t.msg;"I001"==c&&Reflect.set(e.userInfo,"userBg",n),Object(m["b"])(a)})).catch((function(e){console.log("err==>",e)}))};return{getUserInfo:t,uploadBg:c}}c("67f3");var y=c("b3f2"),B=c.n(y);const k=B()(p,[["render",d],["__scopeId","data-v-1eadf1b4"]]);t["default"]=k},"67f3":function(e,t,c){"use strict";c("816a")},"816a":function(e,t,c){}}]);
//# sourceMappingURL=chunk-5e68265a.7db0a1eb.js.map