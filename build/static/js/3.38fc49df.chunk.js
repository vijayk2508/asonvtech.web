(this["webpackJsonpcustom-app"]=this["webpackJsonpcustom-app"]||[]).push([[3,1,2,9,10,12,13,15,16,17,18],{17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(31),r=t(32),m=t(33);a.default=function(){return n.a.createElement("div",{id:"nav-bar"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},n.a.createElement("div",{className:"container"},n.a.createElement(c.default,null),n.a.createElement(r.default,null),n.a.createElement(m.default,null))))}},18:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(34),r=t(35);a.default=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.default,null),e.children,n.a.createElement(r.default,null))}},30:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var l=t(12),n=t(5),c=t(0),r=t.n(c),m=t(7),i=(t(2),t(1)),s=t(4),o=t(6);r.a.Component;r.a.Component;var d=function(e,a){return"function"===typeof e?e(a):e},u=function(e,a){return"string"===typeof e?Object(m.c)(e,null,null,a):e},f=function(e){return e},E=r.a.forwardRef;"undefined"===typeof E&&(E=f);var g=E((function(e,a){var t=e.innerRef,l=e.navigate,n=e.onClick,c=Object(s.a)(e,["innerRef","navigate","onClick"]),m=c.target,o=Object(i.a)({},c,{onClick:function(e){try{n&&n(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||m&&"_self"!==m||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),l())}});return o.ref=f!==E&&a||t,r.a.createElement("a",o)}));var p=E((function(e,a){var t=e.component,n=void 0===t?g:t,c=e.replace,m=e.to,p=e.innerRef,N=Object(s.a)(e,["component","replace","to","innerRef"]);return r.a.createElement(l.d.Consumer,null,(function(e){e||Object(o.a)(!1);var t=e.history,l=u(d(m,e.location),e.location),s=l?t.createHref(l):"",g=Object(i.a)({},N,{href:s,navigate:function(){var a=d(m,e.location);(c?t.replace:t.push)(a)}});return f!==E?g.ref=a||p:g.innerRef=p,r.a.createElement(n,g)}))})),N=function(e){return e},v=r.a.forwardRef;"undefined"===typeof v&&(v=N);v((function(e,a){var t=e["aria-current"],n=void 0===t?"page":t,c=e.activeClassName,m=void 0===c?"active":c,f=e.activeStyle,E=e.className,g=e.exact,b=e.isActive,h=e.location,x=e.sensitive,k=e.strict,w=e.style,y=e.to,R=e.innerRef,j=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.a.createElement(l.d.Consumer,null,(function(e){e||Object(o.a)(!1);var t=h||e.location,c=u(d(y,t),t),s=c.pathname,L=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=L?Object(l.e)(t.pathname,{path:L,exact:g,sensitive:x,strict:k}):null,O=!!(b?b(S,t):S),C=O?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(E,m):E,_=O?Object(i.a)({},w,{},f):w,A=Object(i.a)({"aria-current":O&&n||null,className:C,style:_,to:c},j);return N!==v?A.ref=a||R:A.innerRef=R,r.a.createElement(p,A)}))}))},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"navbar-brand",href:"#",style:{border:"none",background:"none",color:"white",fontSize:"30",fontWeight:600}},"ASONV TECH"))}},32:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{style:{color:"white"}},n.a.createElement("i",{className:"fas fa-bars"}))))}},33:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(25),r=t(30);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},n.a.createElement("ul",{className:"navbar-nav ml-auto mb-1"},c.a.map((function(e,a){return!0===e.visible?n.a.createElement("li",{className:"nav-item",key:a},n.a.createElement(r.a,{to:e.path,key:a,className:"nav-link active","aria-current":"page"},e.name)):""})))))}},34:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(17);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.default,null))}},35:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{style:{background:"#2c292f"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md-4 text-center text-md-left "},n.a.createElement("div",{className:"py-0"},n.a.createElement("h3",{className:"my-4 text-white"},"Get In Touch"),n.a.createElement("div",{className:"py-2 my-4 text-white"},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("i",{className:"fa fa-map-marker mx-2 "}),"309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1 Mahape, Navi Mumbai - 400710")),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("i",{className:"fa fa-phone  mx-2 "})," +91 22-27782183")),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("i",{className:"fa fa-envelope  mx-2"}),n.a.createElement("a",{href:"mailto:asonv.tech@gmail.com"},"asonv.tech@gmail.com")))))),n.a.createElement("div",{className:"col-md-4 text-white my-4 text-center text-md-left "},n.a.createElement("span",{className:" font-weight-bold "},"About the Company"),n.a.createElement("p",{className:"text-warning my-2"},"We offer training and skill building courses across Technology, Design, Management, Science and Humanities."),n.a.createElement("div",{className:"py-2"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fab fa-facebook fa-2x text-primary mx-3"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fab fa-google-plus fa-2x text-danger mx-3"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fab fa-twitter fa-2x text-info mx-3"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fab fa-youtube fa-2x text-danger mx-3"})))))),n.a.createElement("hr",{className:"p-0 m-0 b-0 bg-white"}),n.a.createElement("div",{className:"py-2"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("p",{className:"text-muted mb-0 py-2"},"\xa9 ",(new Date).getFullYear()," AsonvTech All rights reserved.")))))}},37:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"banner"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("p",{className:"promo-title"},"Asonv Technology"),n.a.createElement("p",null,"Where the Innovation Matters"),n.a.createElement("a",{href:"#"},n.a.createElement("span",null,n.a.createElement("i",{className:"far fa-play-circle"})," Get Start"))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{id:"img-intro",className:"rounded-lg",src:t(68),alt:""}))))))}},38:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=[{imageUrl:t(69),name:"Vijay Kumar",designation:"CEO Founder",socialLink:{facebook:"https://www.facebook.com/VijayK2508",instagram:"",twitter:"",linkedIn:""}},{imageUrl:t(70),name:"User 1",designation:"Designation 1",socialLink:{facebook:"",instagram:"",twitter:"",linkedIn:""}},{imageUrl:t(71),name:"User 2",designation:"Desgination 2",socialLink:{facebook:"",instagram:"",twitter:"",linkedIn:""}},{imageUrl:t(72),name:"User 3",designation:"Desgination 3",socialLink:{facebook:"",instagram:"",twitter:"",linkedIn:""}}];a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"bg-light py-5"},n.a.createElement("div",{className:"container py-5"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h2",{className:"display-4 font-weight-light "},"Our team"),n.a.createElement("p",{className:"font-italic text-muted "},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),n.a.createElement("div",{className:"row text-center"},c.map((function(e,a){return n.a.createElement("div",{className:"col-xl-3 col-sm-6 mb-5",key:a},n.a.createElement("div",{className:"bg-white rounded shadow-sm py-5 px-4"},n.a.createElement("img",{src:e.imageUrl,alt:"",width:"100",className:"img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"}),n.a.createElement("h5",{className:"mb-0"},e.name),n.a.createElement("span",{className:"small text-uppercase text-muted"},e.designation),n.a.createElement("ul",{className:"social mb-0 list-inline mt-3"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:e.socialLink.facebook,className:"social-link",target:"_blank"},n.a.createElement("i",{className:"fab fa-facebook-f"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:e.socialLink.twitter,className:"social-link",target:"_blank"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:e.socialLink.instagram,className:"social-link",target:"_blank"},n.a.createElement("i",{className:"fab fa-instagram"}))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:e.socialLink.linkedIn,className:"social-link",target:"_blank"},n.a.createElement("i",{className:"fab fa-linkedin"}))))))}))))))}},39:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l);a.default=function(){return n.a.createElement("section",{id:"what-we-do"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h2",{className:"section-title mb-2 h1"},"What we do"),n.a.createElement("p",{className:"text-center text-muted h5"},"Having and managing a correct marketing strategy is crucial in a fast moving market."),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-1"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"}))))),n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-2"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"}))))),n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-3"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"})))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-4"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"}))))),n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-5"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"}))))),n.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-block block-6"},n.a.createElement("h3",{className:"card-title"},"Special title"),n.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("a",{title:"Read more",className:"read-more"},"Read more",n.a.createElement("i",{className:"fa fa-angle-double-right ml-2"}))))))))}},45:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(18),r=t(39),m=t(38),i=t(37);a.default=function(){return n.a.createElement(c.default,null,n.a.createElement(i.default,null),n.a.createElement(r.default,null),n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"container py-5"},n.a.createElement("div",{className:"row h-100 align-items-center py-5"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("h1",{className:"display-4"},"About us page"),n.a.createElement("p",{className:"lead text-muted mb-0"},"Create a minimal about us page using Bootstrap 4."),n.a.createElement("p",{className:"lead text-muted"},"Snippet by"," ",n.a.createElement("a",{href:"#",className:"text-muted"},n.a.createElement("u",null,"Bootstrapious")))),n.a.createElement("div",{className:"col-lg-6 d-none d-lg-block"},n.a.createElement("img",{src:t(77),alt:"",className:"img-fluid"}))))),n.a.createElement("div",{className:"bg-white py-5"},n.a.createElement("div",{className:"container py-5"},n.a.createElement("div",{className:"row align-items-center mb-5"},n.a.createElement("div",{className:"col-lg-6 order-2 order-lg-1"},n.a.createElement("i",{className:"fa fa-bar-chart fa-2x mb-3 text-primary"}),n.a.createElement("h2",{className:"font-weight-light"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",{className:"font-italic text-muted mb-4"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("a",{href:"#",className:"btn btn-light px-5 rounded-pill shadow-sm"},"Learn More")),n.a.createElement("div",{className:"col-lg-5 px-5 mx-auto order-1 order-lg-2"},n.a.createElement("img",{src:t(78),alt:"",className:"img-fluid mb-4 mb-lg-0"}))),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-5 px-5 mx-auto"},n.a.createElement("img",{src:t(79),alt:"",className:"img-fluid mb-4 mb-lg-0"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("i",{className:"fa fa-leaf fa-2x mb-3 text-primary"}),n.a.createElement("h2",{className:"font-weight-light"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",{className:"font-italic text-muted mb-4"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("a",{href:"#",className:"btn btn-light px-5 rounded-pill shadow-sm"},"Learn More"))))),n.a.createElement(m.default,null))}},68:function(e,a,t){e.exports=t.p+"static/media/intro.13ac783b.svg"},69:function(e,a,t){e.exports=t.p+"static/media/avatar-1_s02nlg.cc98fb9d.png"},70:function(e,a,t){e.exports=t.p+"static/media/avatar-2_f8dowd.45713465.png"},71:function(e,a,t){e.exports=t.p+"static/media/avatar-3_hzlize.5dc0b110.png"},72:function(e,a,t){e.exports=t.p+"static/media/avatar-4_ozhrib.b2dc2309.png"},77:function(e,a,t){e.exports=t.p+"static/media/illus_kftyh4.4cd242b4.png"},78:function(e,a,t){e.exports=t.p+"static/media/img-1_e25nvh.fded0b0f.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/img-2_vdgqgn.77d9e3d5.jpg"}}]);
//# sourceMappingURL=3.38fc49df.chunk.js.map