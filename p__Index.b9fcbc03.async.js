(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{HhI0:function(E,m,t){"use strict";t.r(m);var Xe=t("14J3"),S=t("BMrR"),be=t("jCWc"),y=t("kPKH"),Se=t("IzEo"),u=t("bx4M"),ze=t("/zsF"),T=t("PArb"),Be=t("+L6B"),v=t("2/Rp"),z=t("1OyB"),B=t("vuIU"),K=t("Ji7U"),F=t("LK+K"),Ke=t("+BJd"),N=t("mr32"),M=t("wx14"),H=t("8ub7"),G=t("oN5p"),$=t("Gn5n"),W=t("nk6Y"),Z=t("43SX"),J=t("afCK"),Q=t("abU2"),Y=t("LF7l"),V=t("uqfK"),k=t("oYKv"),j=t("q1tI"),e=t.n(j),w=t("HTcj"),L=t("9kvl"),Fe=t("Mwp2"),_=t("VXEj"),q=t("wd/R"),ee=t.n(q),te=t("Ff2n"),He=t("5Dmo"),p=t("3S7+"),Ge=t("Telt"),P=t("Tckk"),O=t("rePB"),ae=t("TSYQ"),ne=t.n(ae),le=t("b8qS"),R=t.n(le),I=function(a){var n;return ne()(R.a.avatarItem,(n={},Object(O.a)(n,R.a.avatarItemLarge,a==="large"),Object(O.a)(n,R.a.avatarItemSmall,a==="small"),Object(O.a)(n,R.a.avatarItemMini,a==="mini"),n))},se=function(a){var n=a.src,s=a.size,r=a.tips,l=a.onClick,i=l===void 0?function(){}:l,o=I(s);return e.a.createElement("li",{className:o,onClick:i},r?e.a.createElement(p.a,{title:r},e.a.createElement(P.a,{src:n,size:s,style:{cursor:"pointer"}})):e.a.createElement(P.a,{src:n,size:s}))},D=function(a){var n=a.children,s=a.size,r=a.maxLength,l=r===void 0?5:r,i=a.excessItemsStyle,o=Object(te.a)(a,["children","size","maxLength","excessItemsStyle"]),c=e.a.Children.count(n),f=l>=c?c:l,Ie=e.a.Children.toArray(n),b=Ie.slice(0,f).map(function(Ce){return e.a.cloneElement(Ce,{size:s})});if(f<c){var De=I(s);b.push(e.a.createElement("li",{key:"exceed",className:De},e.a.createElement(P.a,{size:s,style:i},"+".concat(c-l))))}return e.a.createElement("div",Object(M.a)({},o,{className:R.a.avatarList}),e.a.createElement("ul",null," ",b," "))};D.Item=se;var C=D,re=t("Z36Q"),x=t.n(re),oe=function(a){var n=a.list;return e.a.createElement(_.b,{className:x.a.coverCardList,rowKey:"id",grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:n,renderItem:function(r){return e.a.createElement(_.b.Item,null,e.a.createElement(u.a,{className:x.a.card,hoverable:!0,cover:e.a.createElement("img",{alt:r.title,src:r.cover})},e.a.createElement(u.a.Meta,{title:e.a.createElement("a",null,r.title),description:r.subDescription}),e.a.createElement("div",{className:x.a.cardItemContent},e.a.createElement("span",null,ee()(r.updatedAt).fromNow()),e.a.createElement("div",{className:x.a.avatarList},e.a.createElement(C,{size:"small"},r.members.map(function(l){return e.a.createElement(C.Item,{key:"".concat(r.id,"-avatar-").concat(l.id),src:l.avatar,tips:l.name})}))))))}})},de=Object(L.c)(function(d){var a=d.index;return{list:a.list}})(oe),ie=t("yiA8"),A=t.n(ie),Ee=function(a){var n=a.data,s=n.description,r=n.period,l=n.tags,i=n.owner,o=n.href;return e.a.createElement("div",{className:A.a.listContent},e.a.createElement("div",{className:A.a.description},s),e.a.createElement("div",{className:A.a.extra},(l||[]).map(function(c){return e.a.createElement(N.a,{key:c.key},c.label)})))},ce=Ee,me=t("Qqv0"),X=t.n(me),_e=function(a){var n=a.experiences,s=function(l){var i=l.icon,o=l.text;return e.a.createElement("span",null,i," ",o)};return e.a.createElement(_.b,{size:"large",className:X.a.articleList,rowKey:"id",itemLayout:"vertical",dataSource:n,renderItem:function(l){return e.a.createElement(_.b.Item,{key:l.id,actions:[],extra:e.a.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},e.a.createElement("img",{width:272,alt:"logo",src:l.logo}))},e.a.createElement(_.b.Item.Meta,{title:e.a.createElement(e.a.Fragment,null,e.a.createElement("a",{className:X.a.listItemMetaTitle,href:l.href},l.companyName),e.a.createElement("small",null,"\xA0  ",l.period)),description:l.position}),e.a.createElement(ce,{data:l}))}})},ue=Object(L.c)(function(d){var a=d.index;return{experiences:a.experiences}})(_e),$e=t("qVdP"),ve=t("jsC+"),We=t("lUTK"),g=t("BvKs"),Ue=t("dF/Y"),Re=t("G3dp"),fe=t("aK7X"),Le=t("GZ0F"),pe=t("ZhIB"),Pe=t.n(pe),xe=t("Zwxb"),h=t.n(xe);function ge(d){var a=d*1;if(!a||Number.isNaN(a))return"";var n=d;return d>1e4&&(n=e.a.createElement("span",null,Math.floor(d/1e4),e.a.createElement("span",{style:{position:"relative",top:-2,fontSize:14,fontStyle:"normal",marginLeft:2}},"\u4E07"))),n}var Oe=function(a){var n=a.list,s=e.a.createElement(g.a,null,e.a.createElement(g.a.Item,null,e.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.alipay.com/"},"1st menu item")),e.a.createElement(g.a.Item,null,e.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.taobao.com/"},"2nd menu item")),e.a.createElement(g.a.Item,null,e.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.tmall.com/"},"3d menu item"))),r=function(i){var o=i.activeUser,c=i.newUser;return e.a.createElement("div",{className:h.a.cardInfo},e.a.createElement("div",null,e.a.createElement("p",null,"\u6D3B\u8DC3\u7528\u6237"),e.a.createElement("p",null,o)),e.a.createElement("div",null,e.a.createElement("p",null,"\u65B0\u589E\u7528\u6237"),e.a.createElement("p",null,c)))};return e.a.createElement(_.b,{rowKey:"id",className:h.a.filterCardList,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:n,renderItem:function(i){return e.a.createElement(_.b.Item,{key:i.id},e.a.createElement(u.a,{hoverable:!0,bodyStyle:{paddingBottom:20},actions:[e.a.createElement(p.a,{key:"download",title:"\u4E0B\u8F7D"},e.a.createElement(Ue.a,null)),e.a.createElement(p.a,{title:"\u7F16\u8F91",key:"edit"},e.a.createElement(Re.a,null)),e.a.createElement(p.a,{title:"\u5206\u4EAB",key:"share"},e.a.createElement(fe.a,null)),e.a.createElement(ve.a,{overlay:s,key:"ellipsis"},e.a.createElement(Le.a,null))]},e.a.createElement(u.a.Meta,{avatar:e.a.createElement(P.a,{size:"small",src:i.avatar}),title:i.title}),e.a.createElement("div",{className:h.a.cardItemContent},e.a.createElement(r,{activeUser:ge(i.activeUser),newUser:Pe()(i.newUser).format("0,0")}))))}})},Ae=Object(L.c)(function(d){var a=d.index;return{list:a.list}})(Oe),he=t("sTO+"),U=t.n(he),ye=function(){return e.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"32px",height:"1em",viewBox:"-135 22 32 38",enableBackground:"new -135 22 190 38"},e.a.createElement("g",null,e.a.createElement("polygon",{fill:"#BCBBBB",points:"-108.5,56.2 -108.5,46.3 -105.2,46.3 -105.2,59.5 -135,59.5 -135,46.3 -131.7,46.3 -131.7,56.2       "}),e.a.createElement("path",{fill:"#F48024",d:"M-128,45.4l16.2,3.4l0.7-3.2l-16.2-3.4L-128,45.4z M-125.9,37.6l15,7l1.4-3l-15-7L-125.9,37.6z     M-121.7,30.2l12.7,10.6l2.1-2.5l-12.7-10.6L-121.7,30.2z M-113.5,22.4l-2.7,2l9.9,13.3l2.7-2L-113.5,22.4z M-128.4,52.9h16.6    v-3.3h-16.6V52.9z"})))},Te=function(a){return e.a.createElement(H.a,Object(M.a)({component:ye},a))},Ne=[{key:"experience",tab:e.a.createElement("span",null,"Experience ",e.a.createElement("span",{style:{fontSize:14}}))},{key:"education",tab:e.a.createElement("span",null,"Education ",e.a.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:e.a.createElement("span",null,"Projects ",e.a.createElement("span",{style:{fontSize:14}},"(8)"))}],Me=function(a){var n=a.tags;return e.a.createElement("div",{className:U.a.tags},e.a.createElement("div",{className:U.a.tagsTitle},"Skills"),(n||[]).map(function(s){return e.a.createElement(N.a,{key:s.key},s.label)}))},je=function(d){Object(K.a)(n,d);var a=Object(F.a)(n);function n(){var s;Object(z.a)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return s=a.call.apply(a,[this].concat(l)),s.state={tabKey:"experience"},s.input=void 0,s.onTabChange=function(o){s.setState({tabKey:o})},s.renderChildrenByTabKey=function(o){return o==="projects"?e.a.createElement(de,null):o==="experience"?e.a.createElement(ue,null):o==="education"?e.a.createElement(Ae,null):null},s.renderSocialProfiles=function(){return e.a.createElement("div",null,e.a.createElement(v.a,{type:"link",href:"https://github.com/navneet35371",target:"_blank",icon:e.a.createElement(G.a,{style:{color:"black"}})}),e.a.createElement(v.a,{type:"link",href:"https://www.linkedin.com/in/navneet-suman",target:"_blank",icon:e.a.createElement($.a,{style:{color:"#55acee"}})}),e.a.createElement(v.a,{type:"link",href:"https://fb.com/speed.navneet",target:"_blank",icon:e.a.createElement(W.a,{style:{color:"#3b5999"}})}),e.a.createElement(v.a,{type:"link",href:"https://twitter.com/navneet35371",target:"_blank",icon:e.a.createElement(Z.a,{style:{color:"#55acee"}})}),e.a.createElement(v.a,{type:"link",href:"https://medium.com/@navneetsuman",target:"_blank",icon:e.a.createElement(J.a,{style:{color:"black"}})}),e.a.createElement(v.a,{type:"link",href:"https://stackoverflow.com/users/2439751/navneet35371",target:"_blank",icon:e.a.createElement(Te,null)}))},s.renderUserInfo=function(o){return e.a.createElement("div",{className:U.a.detail},e.a.createElement("p",null,e.a.createElement(Q.a,{style:{marginRight:8}}),o.title),e.a.createElement("p",null,e.a.createElement(Y.a,{style:{marginRight:8}}),o.group),e.a.createElement("p",null,e.a.createElement(V.a,{style:{marginRight:8}}),o.geographic),e.a.createElement("p",null,e.a.createElement(k.a,{style:{marginRight:8}}),o.emojis))},s}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var r=this.props.dispatch;r({type:"index/fetchCurrent"}),r({type:"index/fetch"})}},{key:"render",value:function(){var r=this.state.tabKey,l=this.props,i=l.currentUser,o=i===void 0?{}:i,c=l.currentUserLoading,f=c||!(o&&Object.keys(o).length);return e.a.createElement(w.a,null,e.a.createElement(S.a,{gutter:24},e.a.createElement(y.a,{lg:7,md:24},e.a.createElement(u.a,{bordered:!1,style:{marginBottom:24},loading:f},!f&&e.a.createElement("div",null,e.a.createElement("div",{className:U.a.avatarHolder},e.a.createElement("img",{alt:"",src:o.avatar}),e.a.createElement("div",{className:U.a.name},o.name),e.a.createElement("div",null,o.signature)),this.renderUserInfo(o),e.a.createElement(T.a,{dashed:!0}),e.a.createElement(Me,{tags:o.tags||[]}),e.a.createElement(T.a,{style:{marginTop:16},dashed:!0}),this.renderSocialProfiles()))),e.a.createElement(y.a,{lg:17,md:24},e.a.createElement(u.a,{className:U.a.tabsCard,bordered:!1,tabList:Ne,activeTabKey:r,onTabChange:this.onTabChange},this.renderChildrenByTabKey(r)))))}}]),n}(j.Component),Ze=m.default=Object(L.c)(function(d){var a=d.loading,n=d.index;return{currentUser:n.currentUser,currentUserLoading:a.effects["index/fetchCurrent"]}})(je)},Qqv0:function(E,m,t){E.exports={articleList:"articleList___3BKUU","ant-list-vertical":"ant-list-vertical___3YkPv","ant-list-item-extra":"ant-list-item-extra___W4kpw",listItemMetaTitle:"listItemMetaTitle___666IU"}},Z36Q:function(E,m,t){E.exports={coverCardList:"coverCardList___2gaqi",card:"card___3Qlgj",cardItemContent:"cardItemContent___1uPcP",avatarList:"avatarList___yPh3c",cardList:"cardList___3ahaa"}},Zwxb:function(E,m,t){E.exports={filterCardList:"filterCardList___2Xi8I",cardInfo:"cardInfo___vSxeE"}},b8qS:function(E,m,t){E.exports={avatarList:"avatarList___1TjKv",avatarItem:"avatarItem___2zA3b",avatarItemLarge:"avatarItemLarge___1atfx",avatarItemSmall:"avatarItemSmall___1pumu",avatarItemMini:"avatarItemMini___ilD4j"}},"sTO+":function(E,m,t){E.exports={avatarHolder:"avatarHolder___2dotu",name:"name___tdMPP",detail:"detail___3mA6r",tagsTitle:"tagsTitle____w2lD",teamTitle:"teamTitle___1xIK9",tags:"tags___YWZIH",team:"team___1xTcU",tabsCard:"tabsCard___3rsSH"}},yiA8:function(E,m,t){E.exports={listContent:"listContent___2Cxdo",description:"description___3inJq",extra:"extra___1KHoc"}}}]);