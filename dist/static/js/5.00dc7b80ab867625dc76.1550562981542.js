webpackJsonp([5],{"6xqC":function(t,e,n){"use strict";var a=n("R6lU");e.__esModule=!0,e.default=void 0;var o,s=a(n("lt8z")),i=a(n("7+uW")),c=a(n("pfl8")),l=n("VxeN"),d=function(t){return l.isServer?Promise.resolve():new Promise(function(e,n){o||((o=new(i.default.extend(c.default))({el:document.createElement("div")})).$on("input",function(t){o.value=t}),document.body.appendChild(o.$el)),(0,s.default)(o,(0,s.default)({resolve:e,reject:n},t))})};d.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},d.alert=function(t){return d((0,s.default)({},d.currentOptions,t))},d.confirm=function(t){return d((0,s.default)({},d.currentOptions,{showCancelButton:!0},t))},d.close=function(){o&&(o.value=!1)},d.setDefaultOptions=function(t){(0,s.default)(d.currentOptions,t)},d.resetDefaultOptions=function(){d.currentOptions=(0,s.default)({},d.defaultOptions)},d.install=function(){i.default.use(c.default)},i.default.prototype.$dialog=d,d.resetDefaultOptions();var r=d;e.default=r},"83W7":function(t,e,n){t.exports=n.p+"static/img/pgthree.7830dad.png"},LHvx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=n("bOdI"),s=n.n(o),i=(n("Rv11"),n("TMdk")),c=n.n(i),l=(n("tLo2"),n("blRl")),d=n.n(l),r=(n("jydU"),n("WQwN")),u=n.n(r),f=(n("GKy3"),n("4vvA")),h=n.n(f),p=(n("MHRi"),n("6xqC")),m=n.n(p),v=n("i5qY"),g=n("22O3"),b={name:"Cardsnumber",data:function(){return{note:{backgroundImage:"url("+n("83W7")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},disabled:!0,disableds:!1,account:"",ficats:"",shows:!1,conindex:0,msgLength:0,password:"",coltiter:"请选择开户银行",colcode:"",passphone:"获取验证码",phones:g.a.get("phone"),columns:[{keyId:"",text:"-- 请选择 --"},{keyId:"0801020000",text:"中国工商银行"},{keyId:"0801030000",text:"中国农业银行"},{keyId:"0801040000",text:"中国银行"},{keyId:"0801050000",text:"中国建设银行"},{keyId:"0801000000",text:"中国邮政储蓄银行"},{keyId:"0804100000",text:"平安银行"},{keyId:"0803050000",text:"中国民生银行"},{keyId:"0803030000",text:"中国光大银行"},{keyId:"0803060000",text:"广发银行"},{keyId:"0803020000",text:"中信银行"},{keyId:"0803090000",text:"兴业银行"},{keyId:"0803040000",text:"华夏银行"},{keyId:"0803010000",text:"交通银行"},{keyId:"0803080000",text:"招商银行"},{keyId:"0803100000",text:"上海浦东发展银行"},{keyId:"0804010000",text:"上海银行"},{keyId:"0804031000",text:"北京银行"}]}},watch:{ficats:function(){if(/^\d{6}$/.test(this.ficats)&&/^([1-9]{1})(\d{15}|\d{18}|\d{16})$/.test(this.account.replace(/\s+/g,""))&&"请选择开户银行"!==this.coltiter)this.disabled=!1;else if(this.disabled=!0,this.account.length>0){var t=this.account.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 ");this.account=t}},coltiter:function(){if(/^\d{6}$/.test(this.ficats)&&/^([1-9]{1})(\d{15}|\d{18}|\d{16}})$/.test(this.account.replace(/\s+/g,""))&&"请选择开户银行"!==this.coltiter)this.disabled=!1;else if(this.disabled=!0,this.account.length>0){var t=this.account.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 ");this.account=t}},account:function(){if(/^\d{6}$/.test(this.ficats)&&/^([1-9]{1})(\d{15}|\d{18}|\d{16})$/.test(this.account.replace(/\s+/g,""))&&"请选择开户银行"!==this.coltiter)this.disabled=!1,console.log(1);else if(this.disabled=!0,this.account.length>0){var t=this.account.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 ");this.account=t}}},methods:{showprop:function(t){this.shows=!0},onChange:function(t,e,n){"-- 请选择 --"==e.text?(this.coltiter="请选择开户银行",this.colcode=""):(this.coltiter=e.text,this.colcode=e.keyId)},onCancel:function(){this.shows=!1},conFirm:function(){this.shows=!1},dialong:function(){m.a.alert({title:"支持银行",message:"中国工商银行、中国农业银行、中国银行、中国建设银行、中国邮政储蓄银行、平安银行、中国民生银行、中国光大银行、广发银行、中信银行、兴业银行、华夏银行、交通银行、招商银行、上海浦东发展银行、上海银行、北京银行"}).then(function(){})},cardButtom:function(){var t=this,e=this.account.replace(/\s/g,"");this.$post(this.HOST+"/fuyou/cardBinding",{userId:g.a.get("id"),cardNo:e,bankCode:this.colcode,bankName:this.coltiter,msgCode:this.ficats}).then(function(e){"1000000"==e.code?g.a.get("bandin")?(g.a.remove("bandin"),t.$router.push({path:"/Home"})):t.$router.push({path:"/Orderpage"}):h()(e.msg)},function(t){})},sendcode:function(){var t=this,e=this.account.replace(/\s/g,"");"请选择开户银行"==this.coltiter?h()("请选择开户银行"):/^([1-9]{1})(\d{15}|\d{18}|\d{16}})$/.test(e)?this.$post(this.HOST+"/fuyou/sendCardBindMsg",{userId:g.a.get("id"),cardNo:e,bankCode:this.colcode,bankName:this.coltiter}).then(function(e){"1000000"==e.code?(t.time=60,t.disableds=!0,t.timer()):h()(e.msg)},function(t){}):h()("请输入正确的银行卡号")},timer:function(){this.time>0?(this.time--,this.passphone=this.time+"s后重新获取",setTimeout(this.timer,1e3)):(this.time=0,this.passphone="获取验证码",this.disableds=!1)}},components:(a={Head:v.a},s()(a,u.a.name,u.a),s()(a,m.a.name,m.a),s()(a,d.a.name,d.a),s()(a,c.a.name,c.a),s()(a,h.a.name,h.a),a)},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Cardsnumber_box"},[a("Head",[t._v("绑定银行卡")]),t._v(" "),a("div",{staticClass:"process",style:t.note}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"fullname",on:{click:function(e){t.showprop()}}},[a("p",[a("span",[t._v("\n           开户行\n            ")]),t._v(" "),a("em",{class:{action:"请选择开户银行"!==t.coltiter}},[t._v(t._s(t.coltiter))]),t._v(" "),a("img",{attrs:{src:n("n8Hp"),alt:""}})])]),t._v(" "),a("div",{staticClass:"fullname"},[a("p",[a("span",[t._v("\n           银行卡号\n            ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入银行卡号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),t._v(" "),a("div",[a("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.shows,callback:function(e){t.shows=e},expression:"shows"}},[a("van-picker",{ref:"choice",attrs:{"show-toolbar":"",title:"开户银行",columns:t.columns},on:{cancel:t.onCancel,confirm:t.conFirm,change:t.onChange}})],1)],1),t._v(" "),a("p",{staticClass:"padding_box"}),t._v(" "),a("div",{staticClass:"fullnames"},[a("p",[a("span",[t._v("\n           预留手机\n            ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phones,expression:"phones"}],attrs:{type:"text",disabled:""},domProps:{value:t.phones},on:{input:function(e){e.target.composing||(t.phones=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"fullnames"},[a("p",[a("span",[t._v("\n           获取验证码\n            ")]),t._v(" "),a("button",{attrs:{disabled:t.disableds},on:{click:function(e){t.sendcode()}}},[t._v(t._s(t.passphone))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ficats,expression:"ficats"}],ref:"ficats",attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:t.ficats},on:{input:function(e){e.target.composing||(t.ficats=e.target.value)}}})])]),t._v(" "),a("p",{staticClass:"padding_box"}),t._v(" "),a("p",{staticClass:"bank_box",on:{click:t.dialong}},[t._v("支持银行"),a("van-icon",{attrs:{name:"arrow"}})],1),t._v(" "),a("button",{staticClass:"butt",class:{butts:!1===t.disabled},attrs:{disabled:t.disabled},on:{click:t.cardButtom}},[t._v("下一步")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"contacts"},[e("span",[this._v("请绑定收款账户")])])}]};var x=n("VU/8")(b,_,!1,function(t){n("ggfU")},"data-v-c1374f62",null);e.default=x.exports},MHRi:function(t,e,n){n("XqYu"),n("+ed2"),n("YAYC")},YAYC:function(t,e){},ggfU:function(t,e){},pfl8:function(t,e,n){"use strict";var a=n("R6lU");e.__esModule=!0,e.default=void 0;var o=a(n("ArwO")),s=a(n("w+oK")),i=a(n("/4KT")),c=(0,o.default)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"van-dialog-bounce"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:[t.b(),t.className]},[t.title?n("div",{class:t.b("header",{isolated:!t.message&&!t.$slots.default}),domProps:{textContent:t._s(t.title)}}):t._e(),t.message||t.$slots.default?n("div",{class:t.b("content")},[t._t("default",[t.message?n("div",{class:t.b("message",{"has-title":t.title}),domProps:{innerHTML:t._s(t.message)}}):t._e()])],2):t._e(),n("div",{staticClass:"van-hairline--top",class:t.b("footer",{buttons:t.showCancelButton&&t.showConfirmButton})},[n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showCancelButton,expression:"showCancelButton"}],class:t.b("cancel"),attrs:{loading:t.loading.cancel,size:"large"},on:{click:function(e){t.handleAction("cancel")}}},[t._v("\n        "+t._s(t.cancelButtonText||t.$t("cancel"))+"\n      ")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showConfirmButton,expression:"showConfirmButton"}],class:[t.b("confirm"),{"van-hairline--left":t.showCancelButton&&t.showConfirmButton}],attrs:{size:"large",loading:t.loading.confirm},on:{click:function(e){t.handleAction("confirm")}}},[t._v("\n        "+t._s(t.confirmButtonText||t.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:s.default},mixins:[i.default],props:{title:String,message:String,callback:Function,className:[String,Object,Array],beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(t){var e=this;this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.$emit("input",!1),this.$emit(t),this.callback&&this.callback(t)}}});e.default=c},"w+oK":function(t,e,n){"use strict";var a=n("R6lU");e.__esModule=!0,e.default=void 0;var o=(0,a(n("ArwO")).default)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.b([t.type,t.size,{block:t.block,plain:t.plain,round:t.round,square:t.square,loading:t.loading,disabled:t.disabled,unclickable:t.disabled||t.loading,"bottom-action":t.bottomAction}]),attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?n("loading",{attrs:{size:"20px",color:"default"===t.type?void 0:""}}):n("span",{class:t.b("text")},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}});e.default=o}});