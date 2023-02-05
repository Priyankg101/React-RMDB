(this["webpackJsonpreact-rmdb"]=this["webpackJsonpreact-rmdb"]||[]).push([[0],{30:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,u,d,b,p,h,j,x,l,f,m=t(0),v=t.n(m),g=t(18),O=t.n(g),w=t(10),y=t(2),k=t.p+"static/media/react-movie-logo.42955eb6.svg",S=t.p+"static/media/tmdb_logo.f15b6632.svg",_=t(3),M=t(4),T=M.b.div(r||(r=Object(_.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),z=M.b.div(a||(a=Object(_.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),G=M.b.img(c||(c=Object(_.a)(["\n  width: 200px;\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]))),B=M.b.img(i||(i=Object(_.a)(["\n  width: 100px;\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]))),I=t(1),W=function(){return Object(I.jsx)(T,{children:Object(I.jsxs)(z,{children:[Object(I.jsx)(w.b,{to:"/",children:Object(I.jsx)(G,{src:k,alt:"RMDB-Logo"})}),Object(I.jsx)(B,{src:S,alt:"TMDB-Logo"})]})})},q="https://api.themoviedb.org/3/",C="1ed7b8c08976dc9fcce2c7de3c644bc4",E="".concat(q,"search/movie?api_key=").concat(C,"&language=en-US&query="),J="".concat(q,"movie/popular?api_key=").concat(C,"&language=en-US"),L="".concat(q,"authentication/token/new?api_key=").concat(C),N="".concat(q,"authentication/token/validate_with_login?api_key=").concat(C),R="".concat(q,"authentication/session/new?api_key=").concat(C),D="http://image.tmdb.org/t/p/",F=M.b.div(o||(o=Object(_.a)(["\n  background: ",";\n  background-size: 100%, cover;\n  background-position: center;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(e){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(e.image,"'), var(--darkGrey)")})),H=M.b.div(s||(s=Object(_.a)(["\n  padding: 20px;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n"]))),P=M.b.div(u||(u=Object(_.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 40px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n  h1 {\n    font-size: var(--fontSuperBig);\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n  p {\n    font-size: var(--fontMed);\n  \n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]))),U=function(e){var n=e.image,t=e.title,r=e.text;return Object(I.jsx)(F,{image:n,children:Object(I.jsx)(H,{children:Object(I.jsxs)(P,{children:[Object(I.jsx)("h1",{children:t}),Object(I.jsx)("p",{children:r})]})})})},A=M.b.div(d||(d=Object(_.a)(["\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  padding: 0 20px;\n\n  h1 {\n    color: var(--medGrey);\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),K=M.b.div(b||(b=Object(_.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 2rem;\n"]))),Q=function(e){var n=e.header,t=e.children;return Object(I.jsxs)(A,{children:[Object(I.jsx)("h1",{children:n}),Object(I.jsx)(K,{children:t})]})},V=M.b.img(p||(p=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 720px;\n  transition: all 0.3s;\n  object-fit: cover;\n  border-radius: 20px;\n  animation: animateMovieThumb 0.5s;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  @keyframes animateMovieThumb {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),X=function(e){var n=e.image,t=e.movieId,r=e.clickable;return Object(I.jsx)("div",{children:r?Object(I.jsx)(w.b,{to:"/".concat(t),children:Object(I.jsx)(V,{src:n,alt:"movie-thumb"})}):Object(I.jsx)(V,{src:n,alt:"movie-thumb"})})},Y=M.b.div(h||(h=Object(_.a)(["\n  border: 5px solid var(--lightGrey); \n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Z=t(6),$=t.p+"static/media/search-icon.cd820f5a.svg",ee=M.b.div(j||(j=Object(_.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),ne=M.b.div(x||(x=Object(_.a)(["\n  position: relative;\n  max-width: var(--maxWidth);\n  width: 100%;\n  height: 55px;\n  background: var(--medGrey);\n  margin: 0 auto;\n  border-radius: 40px;\n  color: var(--white);\n\n  img {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n  }\n\n  input {\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]))),te=function(e){var n=e.setSearchTerm,t=Object(m.useState)(""),r=Object(Z.a)(t,2),a=r[0],c=r[1],i=Object(m.useRef)(!0);return Object(m.useEffect)((function(){if(!i.current){var e=setTimeout((function(){n(a)}),500);return function(){return clearTimeout(e)}}i.current=!1}),[n,a]),Object(I.jsx)(ee,{children:Object(I.jsxs)(ne,{children:[Object(I.jsx)("img",{src:$,alt:"search-icon"}),Object(I.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(e){return c(e.currentTarget.value)},value:a})]})})},re=M.b.button(l||(l=Object(_.a)(["\n  display: block;\n  background: var(--darkGrey);\n  width: 25%;\n  min-width: 200px;\n  height: 60px;\n  border-radius: 30px;\n  color: var(--white);\n  border: 0;\n  font-size: var(--fontBig);\n  margin: 20px auto;\n  transition: all 0.3s;\n  outline: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]))),ae=function(e){var n=e.text,t=e.callback;return Object(I.jsx)(re,{type:"button",onClick:t,children:n})},ce=t(5),ie=t.n(ce),oe=t(14),se=t(7),ue=t(9),de={method:"POST",headers:{"Content-Type":"application/json"}},be={fetchMovies:function(){var e=Object(ue.a)(ie.a.mark((function e(n,t){var r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n?"".concat(E).concat(n,"&page=").concat(t):"".concat(J,"&page=").concat(t),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),fetchMovie:function(){var e=Object(ue.a)(ie.a.mark((function e(n){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(q,"movie/").concat(n,"?api_key=").concat(C),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchCredits:function(){var e=Object(ue.a)(ie.a.mark((function e(n){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(q,"movie/").concat(n,"/credits?api_key=").concat(C),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getRequestToken:function(){var e=Object(ue.a)(ie.a.mark((function e(){var n;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(L);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n.request_token);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),authenticate:function(){var e=Object(ue.a)(ie.a.mark((function e(n,t,r){var a,c;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:r,request_token:n},e.next=3,fetch(N,Object(se.a)(Object(se.a)({},de),{},{body:JSON.stringify(a)}));case 3:return e.next=5,e.sent.json();case 5:if(!e.sent.success){e.next=13;break}return e.next=9,fetch(R,Object(se.a)(Object(se.a)({},de),{},{body:JSON.stringify({request_token:n})}));case 9:return e.next=11,e.sent.json();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),rateMovie:function(){var e=Object(ue.a)(ie.a.mark((function e(n,t,r){var a,c;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(q,"movie/").concat(t,"/rating?api_key=").concat(C,"&session_id=").concat(n),e.next=3,fetch(a,Object(se.a)(Object(se.a)({},de),{},{body:JSON.stringify({value:r})}));case 3:return e.next=5,e.sent.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},pe=be,he={page:0,results:[],total_pages:0,total_results:0},je=t.p+"static/media/no_image.22d2aa4d.jpg",xe=function(){var e=function(){var e=Object(m.useState)(he),n=Object(Z.a)(e,2),t=n[0],r=n[1],a=Object(m.useState)(!1),c=Object(Z.a)(a,2),i=c[0],o=c[1],s=Object(m.useState)(!1),u=Object(Z.a)(s,2),d=u[0],b=u[1],p=Object(m.useState)(""),h=Object(Z.a)(p,2),j=h[0],x=h[1],l=Object(m.useState)(!1),f=Object(Z.a)(l,2),v=f[0],g=f[1];console.log(j);var O=function(){var e=Object(ue.a)(ie.a.mark((function e(n){var t,a,c=arguments;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"",e.prev=1,b(!1),o(!0),e.next=6,pe.fetchMovies(t,n);case 6:a=e.sent,r((function(e){return Object(se.a)(Object(se.a)({},a),{},{results:n>1?[].concat(Object(oe.a)(e.results),Object(oe.a)(a.results)):Object(oe.a)(a.results)})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),b(!0);case 13:o(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){r(he),O(1,j)}),[j]),Object(m.useEffect)((function(){v&&(O(t.page+1,j),g(!1))}),[v,j,t.page]),{state:t,loading:i,error:d,setSearchTerm:x,searchTerm:j,setIsLoadingMore:g}}(),n=e.state,t=e.loading,r=e.error,a=e.setSearchTerm,c=e.searchTerm,i=e.setIsLoadingMore;return console.log(n),r?Object(I.jsx)("div",{children:"Something Went Wrong ..."}):Object(I.jsxs)(I.Fragment,{children:[!c&&n.results[0]&&Object(I.jsx)(U,{image:"".concat(D).concat("w1280").concat(n.results[0].backdrop_path),title:n.results[0].original_title,text:n.results[0].overview}),Object(I.jsx)(te,{setSearchTerm:a}),Object(I.jsx)(Q,{header:c?"Search Result":"Popular Movies",children:n.results.map((function(e){return Object(I.jsx)(X,{clickable:!0,image:e.poster_path?D+"w780"+e.poster_path:je,movieId:e.id},e.id)}))}),t&&Object(I.jsx)(Y,{}),n.page<n.total_pages&&!t&&Object(I.jsx)(ae,{text:"Load More",callback:function(){return i(!0)}})]})},le=function(){var e=function(e){var n=Object(m.useState)({}),t=Object(Z.a)(n,2),r=t[0],a=t[1],c=Object(m.useState)(!0),i=Object(Z.a)(c,2),o=i[0],s=i[1],u=Object(m.useState)(!1),d=Object(Z.a)(u,2),b=d[0],p=d[1];return Object(m.useEffect)((function(){var n=function(){var n=Object(ue.a)(ie.a.mark((function n(){var t,r,c;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),p(!1),n.next=5,pe.fetchMovie(e);case 5:return t=n.sent,n.next=8,pe.fetchCredits(e);case 8:r=n.sent,c=r.crew.filter((function(e){return"Director"===e.job})),a(Object(se.a)(Object(se.a)({},t),{},{actors:r.cast,directors:c})),s(!1),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),p(!0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),{state:r,loading:o,error:b}}(Object(y.h)().movieId);e.state,e.loading,e.error;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{children:"Movie"})})},fe=function(){return Object(I.jsx)("div",{children:"Not Found"})},me=Object(M.a)(f||(f=Object(_.a)(["\n    :root {\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }\n    * {\n        box-sizing: border-box;\n        font-family: 'Abel', sans serif;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n\n        h1 {\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white);\n        }\n\n        h3 {\n            font-size: 1.1rem;\n            font-weight: 600;\n        }\n\n        p {\n            font-size: 1rem;\n            color: var(--white);\n        }\n    }\n\n"]))),ve=function(){return Object(I.jsxs)(w.a,{children:[Object(I.jsx)(W,{}),Object(I.jsxs)(y.c,{children:[Object(I.jsx)(y.a,{path:"/",element:Object(I.jsx)(xe,{})}),Object(I.jsx)(y.a,{path:"/:movieId",element:Object(I.jsx)(le,{})}),Object(I.jsx)(y.a,{path:"/*",element:Object(I.jsx)(fe,{})})]}),Object(I.jsx)(me,{})]})};O.a.render(Object(I.jsx)(v.a.StrictMode,{children:Object(I.jsx)(ve,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.df9ad904.chunk.js.map