(this["webpackJsonptadeu-cv-reactjs"]=this["webpackJsonptadeu-cv-reactjs"]||[]).push([[0],{41:function(e,n,t){e.exports=t(82)},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(33),c=t.n(l),u=t(38),i=t(18),o=t(13),m=t(14),s=t(9),p=t(3),d=t(4);function f(){var e=Object(p.a)(["\n  width: auto !important;\n  height: 5rem !important;\n\n  &:hover {\n    width: auto !important;\n    height: 5rem !important;\n  }\n"]);return f=function(){return e},e}function E(){var e=Object(p.a)(["\n  svg {\n    fill: #b7b7b7 !important;\n    width: 1.25rem !important;\n    height: 1.25rem !important;\n  }\n"]);return E=function(){return e},e}var b=Object(d.a)(m.SideNav)(E()),v=Object(d.a)(m.SideNavItems)(f()),h=[{name:"Me",path:"/",icon:s.User24},{name:"Projects",path:"/projects",icon:s.Code32},{name:"Work",path:"/work",icon:s.Enterprise24},{name:"Education",path:"/education",icon:s.Education24}],g=function(){var e=Object(o.f)();return r.a.createElement(b,{expanded:!1,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(v,null,h.map((function(n){return r.a.createElement(m.SideNavLink,{renderIcon:n.icon,isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))};function j(){var e=Object(p.a)(["\n  width: 180px;\n  height: 180px;\n  margin-right: 1rem;\n  border-radius: calc(180px / 2);\n  border: 8px solid #2b2b2b;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  display: flex;\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(p.a)(["\n  @media (max-width: 640px) {\n    display: ",";\n  }\n"]);return y=function(){return e},e}var k=d.a.div(y(),(function(e){return e.isHome?"block":"none"})),w=d.a.div(O()),x=d.a.img(j()),S=function(e){var n=e.user,t=Object(o.f)();return r.a.createElement(k,{isHome:"/"===t.pathname},r.a.createElement(w,null,r.a.createElement(x,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/".concat(n.basics.usernameCaseSensitive),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.usernameCaseSensitive)),r.a.createElement("p",null,n.basics.region),r.a.createElement("p",null,n.basics.headline),r.a.createElement("b",null,n.basics.yearsOfExperience," years of experience as a developer"))))};function C(){var e=Object(p.a)(["\n  min-height: 100vh;\n"]);return C=function(){return e},e}var z=Object(d.a)(m.Content)(C()),H=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(z,null,r.a.createElement(S,{user:n}),r.a.createElement("div",null,t)))},I=t(12);function N(){var e=Object(p.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  font-weight: bold;\n"]);return N=function(){return e},e}function P(){var e=Object(p.a)(["\n  white-space: pre-wrap;\n"]);return P=function(){return e},e}function A(){var e=Object(p.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return A=function(){return e},e}var J=d.a.h3(A()),M=d.a.p(P()),W=d.a.span(N(),I.a[60],I.b[70]);function _(){var e=Object(p.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return _=function(){return e},e}var B=d.a.li(_()),F=function(e){var n=e.user;return r.a.createElement(H,{user:n},r.a.createElement("div",null,r.a.createElement(J,null,"About Me"),r.a.createElement(M,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(J,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(W,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(J,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(B,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},L=t(27);function T(){var e=Object(p.a)(["\n  margin-top: 1.2rem;\n"]);return T=function(){return e},e}function U(){var e=Object(p.a)(["\n  font-weight: bold;\n"]);return U=function(){return e},e}function q(){var e=Object(p.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return q=function(){return e},e}var D=d.a.li(q(),I.b),G=d.a.h4(U()),K=d.a.div(T()),Q=function(e){var n=e.user;return r.a.createElement(H,{user:n},r.a.createElement("div",null,r.a.createElement(J,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(D,{key:n},r.a.createElement(G,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(K,null,[].concat(Object(L.a)(e.languages),Object(L.a)(e.libraries)).map((function(e,n){return r.a.createElement(W,{key:n},e)}))))})))))};function R(){var e=Object(p.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return R=function(){return e},e}function V(){var e=Object(p.a)(["\n  font-weight: bold;\n"]);return V=function(){return e},e}function X(){var e=Object(p.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return X=function(){return e},e}var Y=d.a.li(X(),I.b),Z=d.a.h4(V()),$=d.a.p(R()),ee=function(e){var n=e.user;return r.a.createElement(H,{user:n},r.a.createElement("div",null,r.a.createElement(J,null,"Work"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(Y,{key:n},r.a.createElement(Z,null,e.position),r.a.createElement("div",null,r.a.createElement($,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to"," ",e.end.year?e.end.year:r.a.createElement("span",null,"nowadays"))),r.a.createElement(M,null,e.summary))})))))};function ne(){var e=Object(p.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  font-weight: bold;\n"]);return te=function(){return e},e}function ae(){var e=Object(p.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ae=function(){return e},e}var re=d.a.li(ae(),I.b),le=d.a.h4(te()),ce=d.a.p(ne()),ue=function(e){var n=e.user;return r.a.createElement(H,{user:n},r.a.createElement("div",null,r.a.createElement(J,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(re,{key:n},r.a.createElement(le,null,e.position),r.a.createElement("div",null,r.a.createElement(ce,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.institution),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(M,null,e.description.replace("\n\n","\n")))})))))},ie=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(F,{user:n})),r.a.createElement(o.a,{path:"/projects"},r.a.createElement(Q,{user:n})),r.a.createElement(o.a,{path:"/work"},r.a.createElement(ee,{user:n})),r.a.createElement(o.a,{path:"/education"},r.a.createElement(ue,{user:n}))))};var oe=function(){var e=Object(a.useState)(null),n=Object(u.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/tupizz").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(ie,{user:t}):r.a.createElement("div",null)};t(81);c.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e519190f.chunk.js.map