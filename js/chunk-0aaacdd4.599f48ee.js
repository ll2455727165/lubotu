(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aaacdd4"],{"081c":function(t,e,n){},"4eca":function(t,e,n){"use strict";n("081c")},"4f74":function(t,e,n){"use strict";n("b17d")},5408:function(t,e,n){"use strict";var c=n("961e"),a=n("d796").map,r=n("7ba8"),d=r("map");c({target:"Array",proto:!0,forced:!d},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a5a":function(t,e,n){"use strict";var c=n("982c"),a=function(t){return Object(c["G"])("data-v-85424242"),t=t(),Object(c["E"])(),t},r={class:"bg-box"},d=a((function(){return Object(c["i"])("div",{class:"bg"},null,-1)})),o={class:"bg-content"};function i(t,e,n,a,i,s){return Object(c["D"])(),Object(c["h"])("div",r,[d,Object(c["i"])("div",o,[Object(c["K"])(t.$slots,"default",{},void 0,!0)])])}var s=Object(c["l"])({name:"bg-box",setup:function(){return{}}}),u=(n("4eca"),n("b3f2")),f=n.n(u);const l=f()(s,[["render",i],["__scopeId","data-v-85424242"]]);e["a"]=l},"94b8":function(t,e,n){"use strict";var c=n("961e"),a=n("ca14"),r=n("c814"),d=n("8e04"),o=n("9a02"),i=n("41a4"),s=n("28dc"),u=n("0074"),f=n("433e"),l=n("7ba8"),b=n("519f"),v=n("a0a0"),j=b("isConcatSpreadable"),O=9007199254740991,p="Maximum allowed index exceeded",h=a.TypeError,g=v>=51||!r((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),k=l("concat"),m=function(t){if(!o(t))return!1;var e=t[j];return void 0!==e?!!e:d(t)},w=!g||!k;c({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,c,a,r,d=i(this),o=f(d,0),l=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?d:arguments[e],m(r)){if(a=s(r),l+a>O)throw h(p);for(n=0;n<a;n++,l++)n in r&&u(o,l,r[n])}else{if(l>=O)throw h(p);u(o,l++,r)}return o.length=l,o}})},b17d:function(t,e,n){},f168:function(t,e,n){"use strict";n.r(e);var c=n("982c"),a={class:"address"};function r(t,e,n,r,d,o){var i=Object(c["L"])("van-nav-bar"),s=Object(c["L"])("van-address-list"),u=Object(c["L"])("bg-box");return Object(c["D"])(),Object(c["h"])("div",a,[Object(c["k"])(i,{title:"地址列表","left-text":"返回","left-arrow":"",fixed:"",onClickLeft:t.back},null,8,["onClickLeft"]),Object(c["k"])(u,null,{default:Object(c["U"])((function(){return[Object(c["k"])(s,{modelValue:t.chosenAddressId,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.chosenAddressId=e}),list:t.list,"default-tag-text":"默认",switchable:!1,onAdd:t.add,onEdit:t.edit},null,8,["modelValue","list","onAdd","onEdit"])]})),_:1})])}var d=n("fd6a"),o=(n("5408"),n("4bc1"),n("1576"),n("4fdb"),n("94b8"),n("a0ce")),i=n("fd03"),s=n("43f2"),u=n("5a5a"),f=Object(c["l"])({components:{BgBox:u["a"]},setup:function(){var t=Object(c["H"])({chosenAddressId:"",list:[]}),e=l(t),n=e.back,a=e.getAddressData,r=e.add,o=e.edit;return Object(c["A"])((function(){a()})),Object(d["a"])(Object(d["a"])({},Object(c["P"])(t)),{},{back:n,add:r,edit:o})}});function l(t){var e=Object(o["d"])(),n=function(){e.back()},c=function(){Object(i["a"])(s["a"].findAddress).then((function(e){var n=e.code,c=e.result;2e4==n&&(c.map((function(t){Reflect.set(t,"isDefault",Boolean(t.isDefault)),Reflect.set(t,"address","".concat(t.province).concat(t.city).concat(t.county).concat(t.addressDetail))})),Reflect.set(t,"list",c))})).catch((function(t){console.log("err==>",t)}))},a=function(){e.push({name:"newAddress"})},r=function(t){var n=t.aid;e.push({name:"newAddress",query:{aid:n}})};return{back:n,getAddressData:c,add:a,edit:r}}n("4f74");var b=n("b3f2"),v=n.n(b);const j=v()(f,[["render",r],["__scopeId","data-v-1e3a44fe"]]);e["default"]=j}}]);
//# sourceMappingURL=chunk-0aaacdd4.599f48ee.js.map