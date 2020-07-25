(this["webpackJsonpmarvel-heroes-team"]=this["webpackJsonpmarvel-heroes-team"]||[]).push([[0],{158:function(e,a,t){},166:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(19),i=t.n(r),o=(t(90),t(91),t(92),t(93),t(7)),l=t(82),m=t(12),s=t(20),u=t(32),d=t(31),h=t(46),f=t.n(h),g=function e(a){Object(m.a)(this,e),this.name=a.name,this.image="".concat(a.thumbnail.path,"/standard_xlarge.jpg"),this.teamImage="".concat(a.thumbnail.path,"/portrait_small.jpg"),this.id=a.id},p=function e(a){Object(m.a)(this,e),this.name=a.name,this.image="".concat(a.thumbnail.path,"/standard_fantastic.jpg"),this.fullImage="".concat(a.thumbnail.path,"/detail.jpg"),this.id=a.id,this.description=a.description},E=t(71),_=t.n(E).a.create({baseURL:"https://gateway.marvel.com:443/v1/public"}),v="aa3d20826840bd8571b0a17580337f2c",y=new(function(){function e(){Object(m.a)(this,e),this.getSingleCharacter=function(e){return _.get("/characters/".concat(e,"?apikey=").concat(v)).then((function(e){return new p(e.data.data.results[0])})).catch((function(e){return console.log(e)}))}}return Object(s.a)(e,[{key:"getCharacter",value:function(){return _.get("/characters?apikey=".concat(v)).then((function(e){return e.data.data.results})).then((function(e){return e.map((function(e){return new g(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),b=t(33),I=t.n(b),N=t(72),k=t(173),C=t(174),H=t(23),w=function(e){var a=e.name,t=e.img,n=e.myTeamAdd,r=e.id;return c.a.createElement(N.a,{lg:"4",md:"6",sm:"12",xs:"auto"},c.a.createElement(k.a,{className:I.a.card,style:{width:"18rem"}},c.a.createElement(k.a.Img,{variant:"top",src:t}),c.a.createElement(k.a.Body,null,c.a.createElement(k.a.Title,{className:I.a.name},a),c.a.createElement(H.b,{to:"/hero-info/".concat(r)},c.a.createElement(C.a,{className:I.a.info,variant:"primary"},"Info")),c.a.createElement(C.a,{onClick:function(){return n(r)},variant:"primary"},"Add"))))},S=t(43),x=function(e){var a=e.filteredHeroes,t=e.myTeamAdd;return a.map((function(e){return c.a.createElement(w,{myTeamAdd:t,key:e.id,name:e.name,img:e.image,id:e.id})}))},O=t(170),j=t(169),T=t(34),M=t.n(T),F=t(172),L=t(74),A=t(75),B=function(e){var a=e.searchedHeroes;return c.a.createElement(j.a,null,c.a.createElement(N.a,{lg:"12"},c.a.createElement("span",null,c.a.createElement(F.a,{className:M.a.form},c.a.createElement(A.a,{className:M.a.icon}),c.a.createElement(L.a,{onChange:function(e){a(e.target.value)},type:"text",placeholder:"Search",className:"".concat(M.a.input," mr-sm-2 ")})))))},D=t(35),J=t.n(D),q=t(76),P=function(e){var a=e.name,t=e.img,n=e.id,r=e.removeHero;return c.a.createElement(N.a,{lg:"12"},c.a.createElement("div",{className:J.a.card},c.a.createElement("img",{src:t}),c.a.createElement("p",{className:J.a.name},a),c.a.createElement(q.a,{onClick:function(){r(n)},className:J.a.remove})))},R=function(e){var a=e.myTeam,t=e.removeHero;return c.a.createElement(j.a,null,a.map((function(e){return c.a.createElement(P,{removeHero:t,key:e.id,id:e.id,name:e.name,img:e.teamImage})})))},U=t(49),W=t.n(U),z=t(171),G=function(){return c.a.createElement(z.a,{className:"".concat(W.a.header," justify-content-center"),bg:"dark",variant:"dark"},c.a.createElement(z.a.Brand,{className:W.a.name},c.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","Hero Team"))},Q=(t(158),function(){return c.a.createElement("div",{class:"sk-chase"},c.a.createElement("div",{class:"sk-chase-dot"}),c.a.createElement("div",{class:"sk-chase-dot"}),c.a.createElement("div",{class:"sk-chase-dot"}),c.a.createElement("div",{class:"sk-chase-dot"}),c.a.createElement("div",{class:"sk-chase-dot"}),c.a.createElement("div",{class:"sk-chase-dot"}))}),Y=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).searchedHeroes=function(e){var a=n.state.heroes.filter((function(a){return a.name.toLowerCase().includes(e.toLowerCase())}));n.setState({filteredHeroes:a})},n.myTeamAdd=function(e){if(!n.state.myTeam.find((function(a){return a.id===Number(e)}))){var a=n.state.filteredHeroes.find((function(a){return a.id===Number(e)})),t=[].concat(Object(l.a)(n.state.myTeam),[a]);n.setState({myTeam:t}),localStorage.setItem("myTeam",JSON.stringify(t))}},n.removeHero=function(e){var a=n.state.myTeam.filter((function(a){return a.id!==e}));n.setState({myTeam:a}),localStorage.setItem("myTeam",JSON.stringify(a))},n.state={heroes:[],filteredHeroes:[],myTeam:[],isLoading:!0},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=localStorage.getItem("myTeam");y.getCharacter().then((function(t){return e.setState({heroes:t,filteredHeroes:t,myTeam:a?JSON.parse(a):[]})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(G,null),this.state.isLoading?c.a.createElement(Q,null):c.a.createElement(O.a,{fluid:!0},c.a.createElement(j.a,{className:"justify-content-lg-center"},c.a.createElement(N.a,{lg:"9",md:"7",sm:"5"},c.a.createElement(B,{searchedHeroes:this.searchedHeroes}),c.a.createElement(j.a,{className:f.a.content},c.a.createElement(x,{filteredHeroes:this.state.filteredHeroes,myTeamAdd:this.myTeamAdd}))),c.a.createElement(N.a,{lg:"3",md:"5",sm:"7"},c.a.createElement(j.a,{className:"justify-content-lg-center"},c.a.createElement(N.a,{lg:"12"},c.a.createElement("h4",{className:f.a.title},"My Team"),c.a.createElement(R,{myTeam:this.state.myTeam,removeHero:this.removeHero})))))))}}]),t}(c.a.Component),X=t(78),Z=t.n(X),K=t(27),V=t.n(K),$=function(){return c.a.createElement(z.a,{className:V.a.headerInfo,bg:"dark",variant:"dark"},c.a.createElement(O.a,null,c.a.createElement(z.a.Brand,{className:V.a.title}," Marvel Heroes"),c.a.createElement(H.b,{className:V.a.link,to:"/"}," ",c.a.createElement(z.a.Brand,{className:V.a.home},"Homepage")," ")))},ee=t(25),ae=t.n(ee),te=t(79),ne=t.n(te),ce=function(e){var a=e.fullImage,t=e.showFullImage;return c.a.createElement("div",{className:ne.a.fullImage},c.a.createElement("img",{src:a,onClick:t}))},re=t(80),ie=function(e){var a=e.image,t=e.title,n=e.description,r=e.isFullImage,i=e.showFullImage,o=e.fullImage;return c.a.createElement(N.a,{className:ae.a.padding,lg:"12"},r&&c.a.createElement(ce,{fullImage:o,showFullImage:i}),c.a.createElement("div",{className:ae.a.card},c.a.createElement("div",{className:ae.a.image},c.a.createElement("img",{src:a}),c.a.createElement(re.a,{className:ae.a.zoomIn,onClick:function(){i()}})),c.a.createElement("div",null,c.a.createElement("h4",{className:ae.a.title},t),c.a.createElement("p",null,n),""===n&&c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"))))},oe=t(36),le=t.n(oe),me=function(e){var a=e.image,t=e.modalImage,n=e.title,r=e.display,i=e.openModal,o={modalImage:t,title:n,prices:e.prices,date:e.date};return c.a.createElement(N.a,{lg:"2",md:"3",sm:"4",xs:"4"},c.a.createElement("div",{onClick:function(){i(o)},className:r?le.a.displayComics:le.a.hideComics},c.a.createElement("div",null,c.a.createElement("img",{src:a})),c.a.createElement("div",null,c.a.createElement("h6",{className:le.a.comic},n))))},se=t(81),ue=t.n(se),de=t(17),he=t.n(de),fe=function(e){var a=e.modalIsOpen,t=e.openModal,n=e.detailsComics;return c.a.createElement(ue.a,{isOpen:a,ariaHideApp:!1,onRequestClose:function(){t({})},style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(86, 186, 237, 0.6)"},content:{position:"absolute",top:"80px",left:"80px",right:"80px",bottom:"80px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},contentLabel:"modal"},c.a.createElement(O.a,{className:he.a.modal},c.a.createElement(j.a,{className:he.a.content},c.a.createElement(N.a,{lg:{span:4,offset:2},md:"6",sm:"8",xs:"12"},c.a.createElement("img",{className:he.a.img,src:n.modalImage})),c.a.createElement(N.a,{lg:"4",md:"6",sm:"4",xs:"12"},c.a.createElement("p",{className:he.a.name},"Name:"),c.a.createElement("h4",{className:he.a.subName},n.title),c.a.createElement("p",{className:he.a.name},"Date of Print:"),c.a.createElement("h4",{className:he.a.subName},function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();return"".concat(c,".").concat(n,".").concat(t,".")}(n.date)),c.a.createElement("p",{className:he.a.name},"Price:"),c.a.createElement("h4",{className:he.a.subName},n.prices)))))},ge=function(e){var a=e.comics,t=e.display,n=e.openModal,r=e.modalIsOpen,i=e.detailsComics;return c.a.createElement(c.a.Fragment,null,c.a.createElement(fe,{modalIsOpen:r,openModal:n,detailsComics:i}),a.map((function(e){return c.a.createElement(me,{key:e.id,display:t,title:e.name,image:e.image,modalImage:e.modalImage,prices:e.prices,date:e.date,openModal:n,modalIsOpen:r})})))},pe=function e(a){Object(m.a)(this,e),this.name=a.title,this.image="".concat(a.thumbnail.path,"/standard_large.jpg"),this.modalImage="".concat(a.thumbnail.path,"/portrait_incredible.jpg"),this.id=a.id,this.date=a.dates[1].date,this.prices=a.prices[0].price},Ee=new(function(){function e(){Object(m.a)(this,e)}return Object(s.a)(e,[{key:"getComics",value:function(e){return _.get("/characters/".concat(e,"/comics?apikey=").concat("aa3d20826840bd8571b0a17580337f2c")).then((function(e){return e.data.data.results.slice(0,12)})).then((function(e){return e.map((function(e){return new pe(e)}))})).catch((function(e){return console.log(e)}))}}]),e}()),_e=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).showFullImage=function(){n.setState((function(e){return{isFullImage:!e.isFullImage}}))},n.showComics=function(e){n.setState({comicsShown:!n.state.comicsShown})},n.openModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.setState((function(a){return{modalIsOpen:!a.modalIsOpen,detailsComics:e}}))},n.state={info:[],comics:[],comicsShown:!1,isFullImage:!1,modalIsOpen:!1,detailsComics:{},isLoading:!0},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.getSingleCharacter(this.props.match.params.id).then((function(a){e.setState({info:a})})),Ee.getComics(this.props.match.params.id).then((function(a){e.setState({comics:a})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement($,null),this.state.isLoading?c.a.createElement(Q,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{className:Z.a.info},c.a.createElement(j.a,null,c.a.createElement(ie,{key:this.state.info.id,title:this.state.info.name,image:this.state.info.image,description:this.state.info.description,showFullImage:this.showFullImage,isFullImage:this.state.isFullImage,fullImage:this.state.info.fullImage}))),c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(N.a,{lg:"12"},c.a.createElement(S.Switch,{id:"Switch-11",offLabel:"Hide Comics",onChange:this.showComics,onLabel:"Show Comics"}))),c.a.createElement(j.a,null,c.a.createElement(ge,{comics:this.state.comics,display:this.state.comicsShown,openModal:this.openModal,modalIsOpen:this.state.modalIsOpen,detailsComics:this.state.detailsComics})))))}}]),t}(c.a.Component),ve=t(50),ye=t.n(ve),be=function(){return c.a.createElement(z.a,{className:"".concat(ye.a.footer," justify-content-center"),bg:"dark",variant:"dark"},c.a.createElement(z.a.Brand,{className:ye.a.name},c.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","Copyright \xa9 2020, by Nikola Miti\u0107"))};var Ie=function(){return c.a.createElement("div",{className:"page-container"},c.a.createElement("div",{className:"content"},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:Y}),c.a.createElement(o.a,{exact:!0,path:"/hero-info/:id",component:_e}))),c.a.createElement(be,null))};t(166);i.a.render(c.a.createElement(H.a,null,c.a.createElement(Ie,null)),document.getElementById("root"))},17:function(e,a,t){e.exports={name:"Modal_name__2xBIv",subName:"Modal_subName__2fvhL",img:"Modal_img__1fCoq",content:"Modal_content__18HlS"}},25:function(e,a,t){e.exports={card:"HeroInfo_card__ZDqWx",image:"HeroInfo_image__27OeL",title:"HeroInfo_title__2pX5y",padding:"HeroInfo_padding__2KUJy",zoomIn:"HeroInfo_zoomIn__1w51Y"}},27:function(e,a,t){e.exports={headerInfo:"HeaderInfo_headerInfo__37gBC",link:"HeaderInfo_link__3NTgt",title:"HeaderInfo_title__1G_h1",home:"HeaderInfo_home__2qHA5"}},33:function(e,a,t){e.exports={card:"Characters_card__QkrEd",info:"Characters_info__1dqvd",name:"Characters_name__2obi5"}},34:function(e,a,t){e.exports={input:"Search_input__2HZDi",icon:"Search_icon__3Y9SO",form:"Search_form__3tA-q"}},35:function(e,a,t){e.exports={remove:"MyTeam_remove__1aNeN",card:"MyTeam_card__lHwhL",name:"MyTeam_name__3NPGr"}},36:function(e,a,t){e.exports={displayComics:"SwitchComics_displayComics__3Elfa",hideComics:"SwitchComics_hideComics__UQSeA",comic:"SwitchComics_comic__3WMCB"}},46:function(e,a,t){e.exports={title:"HomePage_title__NGRrR",content:"HomePage_content__2wJQD"}},49:function(e,a,t){e.exports={header:"Header_header__1_qbX",name:"Header_name__2N7TJ"}},50:function(e,a,t){e.exports={name:"Footer_name__1jbuv",footer:"Footer_footer__2C5Wn"}},78:function(e,a,t){e.exports={info:"HeroInfoPage_info__13US7"}},79:function(e,a,t){e.exports={fullImage:"FullImage_fullImage__3pbOa"}},85:function(e,a,t){e.exports=t(167)},90:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.c43afa41.chunk.js.map