(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-349e5e44"],{1111:function(e,t,n){"use strict";var c=n("61a6"),r=n("cbac"),s=n("c252"),i=n("3b2d"),a=n("7a02"),d=n("97d8"),o=n("c39c"),u=n("baf4"),l=n("bc8b"),f=n("f4b1"),b=n("54ab"),O=n("1ffe"),p=n("9a1e"),h=n("a7fb"),j=n("466a"),v=n("54b9"),g=n("c814"),A=v.UNSUPPORTED_Y,m=4294967295,y=Math.min,w=[].push,x=s(/./.exec),k=s(w),R=s("".slice),S=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var s=b(o(this)),i=void 0===n?m:n>>>0;if(0===i)return[];if(void 0===e)return[s];if(!a(e))return r(t,s,e,i);var d,u,l,f=[],O=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=new RegExp(e.source,O+"g");while(d=r(j,v,s)){if(u=v.lastIndex,u>h&&(k(f,R(s,h,d.index)),d.length>1&&d.index<s.length&&c(w,f,p(d,1)),l=d[0].length,h=u,f.length>=i))break;v.lastIndex===d.index&&v.lastIndex++}return h===s.length?!l&&x(v,"")||k(f,""):k(f,R(s,h)),f.length>i?p(f,0,i):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t,[function(t,n){var c=o(this),i=void 0==t?void 0:O(t,e);return i?r(i,t,c,n):r(s,b(c),t,n)},function(e,c){var r=d(this),i=b(e),a=n(s,r,i,c,s!==t);if(a.done)return a.value;var o=u(r,RegExp),O=r.unicode,p=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(A?"g":"y"),j=new o(A?"^(?:"+r.source+")":r,p),v=void 0===c?m:c>>>0;if(0===v)return[];if(0===i.length)return null===h(j,i)?[i]:[];var g=0,w=0,x=[];while(w<i.length){j.lastIndex=A?0:w;var S,D=h(j,A?R(i,w):i);if(null===D||(S=y(f(j.lastIndex+(A?w:0)),i.length))===g)w=l(i,w,O);else{if(k(x,R(i,g,w)),x.length===v)return x;for(var I=1;I<=D.length-1;I++)if(k(x,D[I]),x.length===v)return x;w=g=S}}return k(x,R(i,g)),x}]}),!S,A)},"392d":function(e,t,n){"use strict";n.r(t);n("8e46");var c=n("982c"),r=function(e){return Object(c["G"])("data-v-1a6a5fba"),e=e(),Object(c["E"])(),e},s={class:"pay"},i={class:"pay-box"},a={class:"select-address"},d={class:"user-box"},o={class:"user-info"},u={class:"user-name"},l={class:"user-phone"},f={key:0,class:"default-address"},b=r((function(){return Object(c["i"])("span",null,"默认",-1)})),O=[b],p={class:"detail-address"},h={class:"order-info"},j={class:"btn-box"},v=Object(c["j"])("立即结算"),g=r((function(){return Object(c["i"])("div",{class:"address-title"},[Object(c["i"])("span",null,"选择地址")],-1)}));function A(e,t,n,r,b,A){var m=Object(c["L"])("van-nav-bar"),y=Object(c["L"])("van-icon"),w=Object(c["L"])("order-item"),x=Object(c["L"])("order-list"),k=Object(c["L"])("van-button"),R=Object(c["L"])("van-address-list"),S=Object(c["L"])("van-popup");return Object(c["D"])(),Object(c["h"])("div",s,[Object(c["k"])(m,{title:"订单结算","left-text":"返回","left-arrow":"",onClickLeft:e.back},null,8,["onClickLeft"]),Object(c["i"])("div",i,[Object(c["i"])("div",a,[Object(c["i"])("div",null,[Object(c["i"])("span",{onClick:t[0]||(t[0]=function(){return e.showSelectAddressList&&e.showSelectAddressList.apply(e,arguments)})},"选择地址"),Object(c["k"])(y,{name:"arrow"})]),Object(c["i"])("div",d,[Object(c["i"])("div",o,[Object(c["i"])("div",u,Object(c["O"])(e.currentAddress.name),1),Object(c["i"])("div",l,Object(c["O"])(e.currentAddress.tel),1),e.currentAddress.isDefault?(Object(c["D"])(),Object(c["h"])("div",f,O)):Object(c["g"])("",!0)]),Object(c["i"])("div",p,Object(c["O"])(e.currentAddress.address),1)])]),Object(c["i"])("div",h,[Object(c["k"])(x,{"info-title-left":"订单信息",count:e.productInfo.count,total:e.productInfo.total},{default:Object(c["U"])((function(){return[(Object(c["D"])(!0),Object(c["h"])(c["a"],null,Object(c["J"])(e.products,(function(e,t){return Object(c["D"])(),Object(c["f"])(w,{item:e,key:t},null,8,["item"])})),128))]})),_:1},8,["count","total"])])]),Object(c["i"])("div",j,[Object(c["k"])(k,{type:"primary",color:"#0C34BA",block:"",round:"",onClick:e.payBox},{default:Object(c["U"])((function(){return[v]})),_:1},8,["onClick"])]),Object(c["k"])(S,{show:e.isOpen,"onUpdate:show":t[2]||(t[2]=function(t){return e.isOpen=t}),position:"bottom",closeable:""},{default:Object(c["U"])((function(){return[g,Object(c["k"])(R,{modelValue:e.chosenAddressId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.chosenAddressId=t}),list:e.list,"default-tag-text":"默认",onAdd:e.newAddress,onEdit:e.editAddress,onSelect:e.selectAddress},null,8,["modelValue","list","onAdd","onEdit","onSelect"])]})),_:1},8,["show"])])}var m=n("fd6a"),y=(n("4bc1"),n("1576"),n("4fdb"),n("3b21"),n("bb4d"),n("1111"),n("8270"),n("5408"),n("94b8"),n("a0ce")),w=n("fd03"),x=n("43f2"),k=n("c276"),R=n("0ccc"),S=n("60b8"),D=n("3bbd"),I=Object(c["l"])({name:"pay",components:{OrderList:R["a"],OrderItem:S["a"]},setup:function(){var e=Object(c["H"])({chosenAddressId:"",currentAddress:{},list:[],productInfo:{count:0,total:0},products:[],isOpen:!1}),t=L(e),n=t.back,r=t.getShopbagBySids,s=t.getAddressData,i=t.showSelectAddressList,a=t.payBox,d=t.newAddress,o=t.editAddress,u=t.selectAddress;return Object(c["A"])((function(){r(),s()})),Object(m["a"])(Object(m["a"])({},Object(c["P"])(e)),{},{back:n,showSelectAddressList:i,payBox:a,newAddress:d,editAddress:o,selectAddress:u})}});function L(e){Object(k["a"])("token");var t=Object(y["d"])(),n=Object(y["c"])().query.sids,c=function(){t.back()},r=function(){var c=Object.create(null);Reflect.set(c,"sids",JSON.stringify(n.split("-"))),Object(w["a"])(x["a"].commitShopcart,c).then((function(n){var c=n.code,r=n.result,s=n.msg;if(5e4==c){if(!Reflect.get(r,"length"))return t.push({name:"home"});r.map((function(t){e.productInfo.count+=t.count,e.productInfo.total+=t.count*t.price})),Reflect.set(e,"products",r)}else Object(D["b"])(s)})).catch((function(e){console.log("err=>",e)}))},s=function(){Object(w["a"])(x["a"].findAddress).then((function(t){var n=t.code,c=t.result;2e4==n&&(c.map((function(t){Reflect.set(t,"isDefault",Boolean(t.isDefault)),Reflect.set(t,"id",t.aid),Reflect.set(t,"address","".concat(t.province).concat(t.city).concat(t.county).concat(t.addressDetail)),Reflect.get(t,"isDefault")&&(Reflect.set(e,"chosenAddressId",t.aid),Reflect.set(e,"currentAddress",t))})),Reflect.set(e,"list",c))})).catch((function(e){console.log("err==>",e)}))},i=function(){Reflect.set(e,"isOpen",!0)},a=function(){var c=Object.create(null);Reflect.set(c,"sids",JSON.stringify(n.split("-"))),Reflect.set(c,"phone",e.currentAddress.tel),Reflect.set(c,"address",e.currentAddress.address),Reflect.set(c,"receiver",e.currentAddress.name),Object(w["b"])(x["a"].pay,c).then((function(e){var n=e.code,c=e.msg;6e4==n&&t.push({name:"order"}),Object(D["b"])(c)})).catch((function(e){console.log("err==>",e)}))},d=function(){D["a"].confirm({title:"确认订单",message:"是否立即结算?",confirmButtonColor:"#0C34BA"}).then((function(){a()})).catch((function(){Object(D["b"])("取消结算")}))},o=function(){t.push({name:"newAddress"})},u=function(e){var n=e.aid;t.push({name:"newAddress",query:{aid:n}})},l=function(t){Reflect.set(e,"isOpen",!1),Reflect.set(e,"currentAddress",t)};return{back:c,getShopbagBySids:r,getAddressData:s,showSelectAddressList:i,payBox:d,newAddress:o,editAddress:u,selectAddress:l}}n("6734");var C=n("b3f2"),B=n.n(C);const F=B()(I,[["render",A],["__scopeId","data-v-1a6a5fba"]]);t["default"]=F},"3b21":function(e,t,n){var c=n("961e"),r=n("ca14"),s=n("d45e"),i=n("61a6"),a=n("c252"),d=n("c814"),o=r.Array,u=s("JSON","stringify"),l=a(/./.exec),f=a("".charAt),b=a("".charCodeAt),O=a("".replace),p=a(1..toString),h=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,g=function(e,t,n){var c=f(n,t-1),r=f(n,t+1);return l(j,e)&&!l(v,r)||l(v,e)&&!l(j,c)?"\\u"+p(b(e,0),16):e},A=d((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&c({target:"JSON",stat:!0,forced:A},{stringify:function(e,t,n){for(var c=0,r=arguments.length,s=o(r);c<r;c++)s[c]=arguments[c];var a=i(u,null,s);return"string"==typeof a?O(a,h,g):a}})},6734:function(e,t,n){"use strict";n("dfe0")},"94b8":function(e,t,n){"use strict";var c=n("961e"),r=n("ca14"),s=n("c814"),i=n("8e04"),a=n("9a02"),d=n("41a4"),o=n("28dc"),u=n("0074"),l=n("433e"),f=n("7ba8"),b=n("519f"),O=n("a0a0"),p=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",v=r.TypeError,g=O>=51||!s((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),A=f("concat"),m=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)},y=!g||!A;c({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,c,r,s,i=d(this),a=l(i,0),f=0;for(t=-1,c=arguments.length;t<c;t++)if(s=-1===t?i:arguments[t],m(s)){if(r=o(s),f+r>h)throw v(j);for(n=0;n<r;n++,f++)n in s&&u(a,f,s[n])}else{if(f>=h)throw v(j);u(a,f++,s)}return a.length=f,a}})},dfe0:function(e,t,n){}}]);
//# sourceMappingURL=chunk-349e5e44.16b8fb5b.js.map