(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0jlH":function(y,_,t){"use strict";t.r(_);var p=t("1OyB"),m=t("vuIU"),E=t("Ji7U"),i=t("LK+K"),d=t("q1tI"),s=t.n(d),c=t("tbuW"),h=t("WHYC"),D=t("9kvl"),P=t("s4NR"),U=t.n(P),M=function(l){Object(E.a)(r,l);var u=Object(i.a)(r);function r(){var o;Object(p.a)(this,r);for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return o=u.call.apply(u,[this].concat(a)),o.state={isReady:!1},o}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=this.props.dispatch;e&&e({type:"user/fetchCurrent"})}},{key:"render",value:function(){var e=this.state.isReady,a=this.props,n=a.children,f=a.loading,O=a.currentUser,v=O&&O.userid,R=Object(P.stringify)({redirect:window.location.href});return!v&&f||!e?s.a.createElement(c.a,null):!v&&window.location.pathname!=="/user/login"?s.a.createElement(h.c,{to:"/user/login?".concat(R)}):n}}]),r}(s.a.Component);_.default=Object(D.c)(function(l){var u=l.user,r=l.loading;return{currentUser:u.currentUser,loading:r.models.user}})(M)},tbuW:function(y,_,t){"use strict";var p=t("T2oS"),m=t("W9HT"),E=t("q1tI"),i=t.n(E),d=function(c){var h=c.tip;return i.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},i.a.createElement(m.a,{size:"large",tip:h}))};_.a=d}}]);
