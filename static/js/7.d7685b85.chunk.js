(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,a,t){},113:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var r=t(16),n=t(17),c=t(20),s=t(18),o=t(19),i=t(0),l=t.n(i),u=t(4),m=t(23),p=t(65),h=(t(112),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).handleChange=function(e){t.props.onChange(e.target.value)},t.handleClick=function(){t.props.onSubmit()},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.quantity,t=e.price,r=e.onDecrease,n=e.onIncrease;return l.a.createElement("div",{className:"purchaseForm"},l.a.createElement("div",{className:"purchaseForm__wrapper"},l.a.createElement("div",{className:"purchaseForm__row"},l.a.createElement("div",{className:"purchaseForm__rowLabel"},"\u6570\u91cf"),l.a.createElement("div",{className:"purchaseForm__rowValue"},l.a.createElement("span",{className:"purchaseForm__counter purchaseForm__counter--dec",onClick:r},"-"),l.a.createElement("input",{type:"number",className:"purchaseForm__quantity",onChange:this.handleChange,value:a||0}),l.a.createElement("span",{className:"purchaseForm__counter purchaseForm__counter--inc",onClick:n},"+"))),l.a.createElement("div",{className:"purchaseForm__row"},l.a.createElement("div",{className:"purchaseForm__rowLabel"},"\u5c0f\u8ba1"),l.a.createElement("div",{className:"purchaseForm__rowValue"},l.a.createElement("span",{className:"purchaseForm__totalPrice"},"\xa5",(t*a).toFixed(2)))),l.a.createElement("div",{className:"purchaseForm__row"},l.a.createElement("div",{className:"purchaseForm__rowLabel"},"\u624b\u673a\u53f7\u7801"),l.a.createElement("div",{className:"purchaseForm__rowValue"},"182****2198"))),l.a.createElement("ul",{className:"purchaseForm__remark"},l.a.createElement("li",{className:"purchaseForm__remarkItem"},l.a.createElement("i",{className:"purchaseForm__sign"}),l.a.createElement("span",{className:"purchaseForm__desc"},"\u652f\u6301\u968f\u65f6\u9000")),l.a.createElement("li",null,l.a.createElement("i",{className:"purchaseForm__sign"}),l.a.createElement("span",{className:"purchaseForm__desc"},"\u652f\u6301\u8fc7\u671f\u9000"))),l.a.createElement("button",{className:"purchaseForm__submit",onClick:this.handleClick},"\u63d0\u4ea4\u8ba2\u5355"))}}]),a}(i.Component)),d=t(43),_=t(36),b=t(67),v=(t(113),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).handleChange=function(e){t.props.purchaseActions.setOrderQuantity(parseInt(e))},t.handleIncrease=function(){var e=t.props.quantity;t.props.purchaseActions.setOrderQuantity(e+1)},t.handleDecrease=function(){var e=t.props.quantity-1;t.props.purchaseActions.setOrderQuantity(e<=1?1:e)},t.handleSubmit=function(){var e=t.props.match.params.id;t.props.purchaseActions.submitOrder(e)},t.handleCloseTip=function(){t.props.purchaseActions.closeTip()},t.handleBack=function(){t.props.history.goBack()},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.productDetail,t=e.quantity,r=e.showTip;if(!a)return null;var n=a.product,c=a.currentPrice;return l.a.createElement("div",null,l.a.createElement(p.a,{title:"\u4e0b\u5355",color:"#fff",onBack:this.handleBack}),l.a.createElement("h3",{className:"purchase__header"},n),l.a.createElement(h,{quantity:t,price:c,onChange:this.handleChange,onIncrease:this.handleIncrease,onDecrease:this.handleDecrease,onSubmit:this.handleSubmit}),r?l.a.createElement(b.a,{message:"\u8d2d\u4e70\u6210\u529f\uff01",onClose:this.handleCloseTip}):null)}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.detailActions.loadProductDetail(e)}},{key:"componentWillUnmount",value:function(){this.props.purchaseActions.setOrderQuantity(1)}}]),a}(i.Component));a.default=Object(m.b)(function(e,a){var t=a.match.params.id;return{productDetail:Object(d.c)(e,t),quantity:Object(d.d)(e),showTip:Object(d.e)(e)}},function(e){return{purchaseActions:Object(u.b)(d.a,e),detailActions:Object(u.b)(_.a,e)}})(v)},65:function(e,a,t){"use strict";var r=t(16),n=t(17),c=t(20),s=t(18),o=t(19),i=t(0),l=t.n(i),u=(t(66),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.color,t=e.title,r=e.onBack;return l.a.createElement("header",{className:"header",style:{backgroundColor:a}},l.a.createElement("div",{className:"header__back",onClick:r},"\u8fd4\u56de"),l.a.createElement("div",{className:"header__title"},t))}}]),a}(i.Component));a.a=u},66:function(e,a,t){},67:function(e,a,t){"use strict";var r=t(16),n=t(17),c=t(20),s=t(18),o=t(19),i=t(0),l=t.n(i),u=(t(68),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.message,t=e.onClose;return l.a.createElement("div",{className:"tip"},l.a.createElement("div",{className:"tip__alert"},l.a.createElement("div",{className:"tip__content"},a),l.a.createElement("div",{className:"tip__btns"},l.a.createElement("button",{className:"tip__btn",onClick:t},"\u786e\u5b9a"))))}}]),a}(i.Component));a.a=u},68:function(e,a,t){}}]);
//# sourceMappingURL=7.d7685b85.chunk.js.map