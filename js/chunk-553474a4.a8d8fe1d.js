(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553474a4"],{"081c":function(e,t,n){},"10fd":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}n("bb4d"),n("94c2");var a=n("3bbd"),s=function(){function e(){o(this,e)}return r(e,[{key:"valid",value:function(e){for(var t in e)return!!e[t].reg.test(e[t].value)||Object(a["b"])(e[t].errorMsg)}}]),e}();t["a"]=new s},"29ef":function(e,t,n){},3708:function(e,t,n){var o=n("c814"),c=n("ca14"),r=c.RegExp;e.exports=o((function(){var e=r(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},"466a":function(e,t,n){"use strict";var o=n("cbac"),c=n("c252"),r=n("54ab"),a=n("ab58"),s=n("54b9"),i=n("34bc"),l=n("a30f"),u=n("e13b").get,d=n("3708"),b=n("6346"),f=i("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,v=c("".charAt),w=c("".indexOf),O=c("".replace),j=c("".slice),x=function(){var e=/a/,t=/b*/g;return o(p,e,"a"),o(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=s.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],k=x||h||m||d||b;k&&(g=function(e){var t,n,c,s,i,d,b,k=this,y=u(k),P=r(e),I=y.raw;if(I)return I.lastIndex=k.lastIndex,t=o(g,I,P),k.lastIndex=I.lastIndex,t;var R=y.groups,C=m&&k.sticky,E=o(a,k),_=k.source,U=0,A=P;if(C&&(E=O(E,"y",""),-1===w(E,"g")&&(E+="g"),A=j(P,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==v(P,k.lastIndex-1))&&(_="(?: "+_+")",A=" "+A,U++),n=new RegExp("^(?:"+_+")",E)),h&&(n=new RegExp("^"+_+"$(?!\\s)",E)),x&&(c=k.lastIndex),s=o(p,C?n:k,A),C?s?(s.input=j(s.input,U),s[0]=j(s[0],U),s.index=k.lastIndex,k.lastIndex+=s[0].length):k.lastIndex=0:x&&s&&(k.lastIndex=k.global?s.index+s[0].length:c),h&&s&&s.length>1&&o(f,s[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(s[i]=void 0)})),s&&R)for(s.groups=d=l(null),i=0;i<R.length;i++)b=R[i],d[b[0]]=s[b[1]];return s}),e.exports=g},"4eca":function(e,t,n){"use strict";n("081c")},"54b9":function(e,t,n){var o=n("c814"),c=n("ca14"),r=c.RegExp,a=o((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),s=a||o((function(){return!r("a","y").sticky})),i=a||o((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:s,UNSUPPORTED_Y:a}},"5a5a":function(e,t,n){"use strict";var o=n("982c"),c=function(e){return Object(o["G"])("data-v-85424242"),e=e(),Object(o["E"])(),e},r={class:"bg-box"},a=c((function(){return Object(o["i"])("div",{class:"bg"},null,-1)})),s={class:"bg-content"};function i(e,t,n,c,i,l){return Object(o["D"])(),Object(o["h"])("div",r,[a,Object(o["i"])("div",s,[Object(o["K"])(e.$slots,"default",{},void 0,!0)])])}var l=Object(o["l"])({name:"bg-box",setup:function(){return{}}}),u=(n("4eca"),n("b3f2")),d=n.n(u);const b=d()(l,[["render",i],["__scopeId","data-v-85424242"]]);t["a"]=b},6346:function(e,t,n){var o=n("c814"),c=n("ca14"),r=c.RegExp;e.exports=o((function(){var e=r("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"6eaf":function(e,t,n){"use strict";n.r(t);var o=n("982c"),c=function(e){return Object(o["G"])("data-v-688c462a"),e=e(),Object(o["E"])(),e},r={class:"secure"},a={class:"logout-box"},s=Object(o["j"])("退出登录"),i={class:"form-box"},l=c((function(){return Object(o["i"])("div",{class:"form-title"},"修改密码",-1)})),u={class:"commit-btn"},d=Object(o["j"])("提交");function b(e,t,n,c,b,f){var p=Object(o["L"])("van-nav-bar"),g=Object(o["L"])("van-cell"),v=Object(o["L"])("bg-box"),w=Object(o["L"])("van-button"),O=Object(o["L"])("van-field"),j=Object(o["L"])("van-cell-group"),x=Object(o["L"])("van-form"),m=Object(o["L"])("van-popup");return Object(o["D"])(),Object(o["h"])("div",r,[Object(o["k"])(p,{title:"安全中心","left-text":"返回","left-arrow":"",fixed:"",onClickLeft:e.back},null,8,["onClickLeft"]),Object(o["k"])(v,null,{default:Object(o["U"])((function(){return[Object(o["k"])(g,{title:"修改密码",center:"","is-link":"",onClick:e.openPasswordBox},null,8,["onClick"]),Object(o["k"])(g,{title:"注销账号",center:"","is-link":"",onClick:e.destroy},null,8,["onClick"])]})),_:1}),Object(o["i"])("div",a,[Object(o["k"])(w,{color:"#0C34BA",block:"",round:"",onClick:e.logout},{default:Object(o["U"])((function(){return[s]})),_:1},8,["onClick"])]),Object(o["k"])(m,{show:e.isOpen,"onUpdate:show":t[2]||(t[2]=function(t){return e.isOpen=t}),closeable:"",position:"bottom"},{default:Object(o["U"])((function(){return[Object(o["i"])("div",i,[l,Object(o["k"])(x,null,{default:Object(o["U"])((function(){return[Object(o["k"])(j,{inset:""},{default:Object(o["U"])((function(){return[Object(o["k"])(O,{modelValue:e.password.oldPassword,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.password.oldPassword=t}),type:e.isPassword?"password":"text",name:"旧密码",label:"旧密码",placeholder:"旧密码(首字符必须为字母)","right-icon":e.isPassword?"closed-eye":"eye-o",autocomplete:"off",onClickRightIcon:e.toggleType},null,8,["modelValue","type","right-icon","onClickRightIcon"]),Object(o["k"])(O,{modelValue:e.password.newPassword,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password.newPassword=t}),type:e.isPassword?"password":"text",name:"新密码",label:"新密码",placeholder:"新密码(首字符必须为字母)","right-icon":e.isPassword?"closed-eye":"eye-o",autocomplete:"off",onClickRightIcon:e.toggleType},null,8,["modelValue","type","right-icon","onClickRightIcon"])]})),_:1}),Object(o["i"])("div",u,[Object(o["k"])(w,{round:"",block:"",color:"#0C34BA",onClick:e.commit},{default:Object(o["U"])((function(){return[d]})),_:1},8,["onClick"])])]})),_:1})])]})),_:1},8,["show"])])}var f=n("fd6a"),p=(n("4bc1"),n("1576"),n("4fdb"),n("a0ce")),g=n("fd03"),v=n("43f2"),w=n("10fd"),O=n("3bbd"),j=n("5a5a"),x=Object(o["l"])({name:"secure",components:{BgBox:j["a"]},setup:function(){var e=Object(o["H"])({isOpen:!1,isPassword:!0,password:{oldPassword:"",newPassword:""}}),t=m(e),n=t.back,c=t.openPasswordBox,r=t.destroy,a=t.logout,s=t.toggleType,i=t.commit;return Object(f["a"])(Object(f["a"])({},Object(o["P"])(e)),{},{back:n,openPasswordBox:c,destroy:r,logout:a,toggleType:s,commit:i})}});function m(e){var t=Object(p["d"])(),n=function(){t.back()},o=function(){Reflect.set(e,"isOpen",!0)},c=function(){Object(g["b"])(v["a"].destroyAccount).then((function(e){var n=e.code,o=e.msg;"G001"==n&&t.push({name:"login"}),sessionStorage.removeItem("token"),Object(O["b"])(o)})).catch((function(e){console.log("err==>",e)}))},r=function(){O["a"].confirm({title:"注销账号",message:"是否确定注销账号，一旦注销无法恢复！"}).then((function(){c()})).catch((function(){Object(O["b"])("取消注销账号")}))},a=function(){O["a"].confirm({title:"退出登录",message:"是否确定退出登录！"}).then((function(){sessionStorage.removeItem("token"),t.push({name:"login"})})).catch((function(){Object(O["b"])("取消退出登录")}))},s=function(){Reflect.set(e,"isPassword",!e.isPassword)},i=function(){var n={oldPassword:{value:e.password.oldPassword,errorMsg:"旧密码由数字字母下划线组合(6-16字符)",reg:/^[A-Za-z]\w{5,15}$/},newPassword:{value:e.password.newPassword,errorMsg:"密码由数字字母下划线组合(6-16字符)",reg:/^[A-Za-z]\w{5,15}$/}},o=w["a"].valid(n);if(o){if(e.password.newPassword==e.password.oldPassword)return Object(O["b"])("新密码和旧密码不能相同");var c=Object.create(null);Reflect.set(c,"password",e.password.newPassword),Reflect.set(c,"oldPassword",e.password.oldPassword),Object(g["b"])(v["a"].updatePassword,c).then((function(e){var n=e.code,o=e.msg;"E001"==n&&(sessionStorage.removeItem("token"),t.push({name:"login"})),Object(O["b"])(o)})).catch((function(e){console.log("err==>",e)}))}};return{back:n,openPasswordBox:o,destroy:r,logout:a,toggleType:s,commit:i}}n("afaa");var h=n("b3f2"),k=n.n(h);const y=k()(x,[["render",b],["__scopeId","data-v-688c462a"]]);t["default"]=y},"94c2":function(e,t,n){"use strict";n("bb4d");var o=n("961e"),c=n("ca14"),r=n("cbac"),a=n("c252"),s=n("081e"),i=n("9a02"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=c.Error,d=a(/./.test);o({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!s(t))return d(this,e);var n=r(t,this,e);if(null!==n&&!i(n))throw new u("RegExp exec method returned something other than an Object or null");return!!n}})},ab58:function(e,t,n){"use strict";var o=n("97d8");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},afaa:function(e,t,n){"use strict";n("29ef")},bb4d:function(e,t,n){"use strict";var o=n("961e"),c=n("466a");o({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})}}]);
//# sourceMappingURL=chunk-553474a4.a8d8fe1d.js.map