(this.webpackJsonpsmartdesignjoinery=this.webpackJsonpsmartdesignjoinery||[]).push([[0],{46:function(e,n,t){},52:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,o=t(0),d=t.n(o),p=t(14),j=t.n(p),b=(t(46),t(12)),m=t(5),l=t(3),g=t(2),x=t.p+"static/media/menu-mobile.18808940.jpg",h=g.a.div(i||(i=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: white;\n    height: 60px;\n    text-transform: uppercase;\n    z-index: 1;\n    background-color: ",";\n    \n    @media (max-width: 768px) {\n        height: 100px;\n        background-color: #693912;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n    }\n"])),(function(e){return"/home"===e.location?"rgba(0,0,0, 0.5)":"black"}),x),u=g.a.img(a||(a=Object(l.a)(["\n    margin-left: 100px;\n    height: 60px;\n    \n    \n    @media (max-width: 768px) {\n        margin: 0 auto;\n        z-index: 2;\n        height: 80px;\n    }\n"]))),f=t.p+"static/media/logo.143159ca.jpg",O=t(11),w="active",v=Object(g.a)(b.c).attrs((function(){return{activeClassName:w}}))(c||(c=Object(l.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 15px;\n    font-size: 20px;\n    text-decoration: none;\n    color: white;\n    &."," {\n        font-weight: bold;\n    }\n    @media (max-width: 768px) {\n        margin-right: 0;\n        font-size: 25px;\n        padding: 30px 180px;\n        text-align: center;\n    }\n"])),w),y=g.a.ul(r||(r=Object(l.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 100px;\n    font-size: 20px;\n    \n\n    @media (max-width: 768px) {\n        flex-flow: column nowrap;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n        position: fixed;\n        transform: ",";\n        margin: 0;\n        top: 0;\n        right: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-top: 3rem;\n        justify-content: space-evenly;\n        font-size: 32px;\n        transition: transform 0.3s ease-in-out;\n        z-index: -1;\n        align-items: center;\n    }\n"])),x,(function(e){return e.open?"translateX(0)":"translateX(150%)"})),k=t(1),z=function(e){var n=e.open;return Object(k.jsxs)(y,{open:n,children:[Object(k.jsx)(v,{to:"/home",children:"Home"}),Object(k.jsx)(v,{to:"/gallery",children:"Gallery"}),Object(k.jsx)(v,{to:"/information",children:"Information"}),Object(k.jsx)(v,{to:"/contact",children:"Contact"})]})},S=g.a.div(s||(s=Object(l.a)(["\n    width: 32px;\n    height: 32px;\n    position: fixed;\n    right: 20px;\n    top: 34px;\n    display: none;\n    z-index: 1;\n\n    @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n        flex-flow: column nowrap;\n    }\n\n    div {\n    width: 32px;\n    height: 4px;\n    background-color: #fff;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n        transform: ",";\n    }\n\n    &:nth-child(2) {\n        transform: ",";\n        opacity: ",";\n    }\n\n    &:nth-child(3) {\n        transform: ",";\n    }\n}\n"])),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),C=function(){var e=Object(o.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(S,{open:t,onClick:function(){return i(!t)},children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)(z,{open:t})]}),Object(k.jsx)(z,{open:t})]})},F=Object(m.h)((function(e){return Object(k.jsxs)(h,{location:e.location.pathname,children:[Object(k.jsx)(u,{src:f}),Object(k.jsx)(C,{})]})})),q=function(){return Object(k.jsx)("div",{children:"Information"})};function E(e){var n={};return e.username.trim()||(n.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email required",e.message?e.message.length<6&&(n.message="Message needs to be 6 characters or more"):n.message="Message is required",n}var W,I,V,Y,L,P,T,A,J,D,M,N,X,B,K,R,_,G,H,U,Z,Q,$,ee,ne,te,ie,ae,ce,re,se,oe,de,pe,je,be,me,le,ge,xe,he,ue,fe,Oe=t(19),we=t(30),ve=function(e){var n=Object(o.useState)({username:"",email:"",message:""}),t=Object(O.a)(n,2),i=t[0],a=t[1],c=Object(o.useState)({}),r=Object(O.a)(c,2),s=r[0],d=r[1];return Object(o.useEffect)((function(){Object.keys(s).length,0}),[s,false,e]),{handleChange:function(e){var n=e.target,t=n.name,c=n.value;a(Object(we.a)(Object(we.a)({},i),{},Object(Oe.a)({},t,c)))},values:i,errors:s,setValues:a,setErrors:d}},ye=g.a.div(W||(W=Object(l.a)(["\n    margin-bottom: 8px;\n    width: 80%;\n    p {\n        font-size: 0.8rem;\n    margin-top: 0.5rem;\n    color: #f00e0e; \n    }\n"]))),ke=g.a.div(I||(I=Object(l.a)(["\n    display: inline-block;\n    font-size: 12.8px;\n    margin-bottom: 6px;\n    color: #000;\n"]))),ze=g.a.input(V||(V=Object(l.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid black;\n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),Se=g.a.textarea(Y||(Y=Object(l.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 80px;\n    width: 100%;\n    border: none;\n    font-size: 0.8rem;\n    border: 1px solid black; \n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),Ce=g.a.button(L||(L=Object(l.a)(["\n    width: 80%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 2px;\n    background: rgb(70, 26, 4);\n    outline: none;\n    border: none;\n    color: #fff;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    &:hover {\n        cursor: pointer;\n        background: rgb(114, 66, 43);    \n    }\n"]))),Fe=t(41),qe=(t(52),function(e){var n=e.submitForm,t=ve(n,E),i=t.handleChange,a=t.errors,c=t.values,r=t.setValues,s=t.setErrors,d=(t.setIsSubmitting,Object(o.useRef)());return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),s(E(c)),Fe.a.sendForm("yahoo","template_lgc1ezc",e.target,"user_S84rE02uoYvJJVbKOZwK3").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),r({username:"",email:"",message:""}),console.log(e.target)},ref:d,children:[Object(k.jsxs)(ye,{children:[Object(k.jsx)(ke,{children:"Name"}),Object(k.jsx)(ze,{type:"text",name:"username",placeholder:"Enter your name",value:c.username,onChange:i}),a.username&&Object(k.jsx)("p",{children:a.username})]}),Object(k.jsxs)(ye,{children:[Object(k.jsx)(ke,{children:"Email"}),Object(k.jsx)(ze,{type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:i}),a.email&&Object(k.jsx)("p",{children:a.email})]}),Object(k.jsxs)(ye,{children:[Object(k.jsx)(ke,{children:"Password"}),Object(k.jsx)(Se,{name:"message",rows:"7",placeholder:"Please type your request...",value:c.password,onChange:i}),a.message&&Object(k.jsx)("p",{children:a.message})]}),Object(k.jsx)(Ce,{type:"submit",children:"Send"})]})})}),Ee=g.a.div(P||(P=Object(l.a)(["\n    margin: 10px auto;\n    width: 1140px;\n    position: relative;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),We=function(){var e=Object(o.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(Ee,{children:t?window.location.reload(!1):Object(k.jsx)(qe,{submitForm:function(){i(!0)}})})})},Ie=g.a.h3(T||(T=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 28px;\n    line-height: 1.5;\n    margin-top: 100px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n        margin-top: 30px;\n        margin-bottom: 50px;\n    }\n"]))),Ve=g.a.span(A||(A=Object(l.a)(["\n    font-weight: bold;\n"]))),Ye=function(){return Object(k.jsxs)(Ie,{children:["Contact ",Object(k.jsx)(Ve,{children:"with us"})," and check",Object(k.jsx)("br",{}),"what we can do ",Object(k.jsx)(Ve,{children:"together!"})]})},Le=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ye,{}),Object(k.jsx)(We,{})]})},Pe=g.a.h3(J||(J=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 38px;\n    line-height: 1.5;\n    margin: 50px 0;\n    @media (max-width: 768px) {\n        font-size: 30px;\n        margin-top: 30px;\n        margin-bottom: 50px;\n    }\n"]))),Te=g.a.span(D||(D=Object(l.a)(["\n    font-weight: bold;\n"]))),Ae=function(){return Object(k.jsxs)(Pe,{children:["Let's ",Object(k.jsx)(Te,{children:"check"})," out",Object(k.jsx)("br",{}),"our ",Object(k.jsx)(Te,{children:"work!"})]})},Je=t(31),De=t.n(Je),Me=t.p+"static/media/1.534bd15c.jpg",Ne=t.p+"static/media/2.53c57379.jpg",Xe=t.p+"static/media/3.6f15489c.jpg",Be=t.p+"static/media/4.9ca3b221.jpg",Ke=t.p+"static/media/5.fc1e1206.jpg",Re=t.p+"static/media/6.32621e39.jpg",_e=t.p+"static/media/7.d4832748.jpg",Ge=t.p+"static/media/8.09983a22.jpg",He=t.p+"static/media/9.277cab72.jpg",Ue=t.p+"static/media/10.285f954a.jpg",Ze=t.p+"static/media/11.1c6f258a.jpg",Qe=t.p+"static/media/12.f7828bb2.jpg",$e=t.p+"static/media/13.e3a97166.jpg",en=t.p+"static/media/14.15ec0c36.jpg",nn=t.p+"static/media/15.e1de3295.jpg",tn=t.p+"static/media/16.073dc835.jpg",an=t.p+"static/media/17.ce225ba1.jpg",cn=t.p+"static/media/18.d67db7e6.jpg",rn=t.p+"static/media/19.4bbd7239.jpg",sn=t.p+"static/media/20.935c3a28.jpg",on=t.p+"static/media/21.72e155e9.jpg",dn=t.p+"static/media/22.4cc77fb4.jpg",pn=t.p+"static/media/23.8d250fc6.jpg",jn=t.p+"static/media/24.04654585.jpg",bn=t.p+"static/media/25.67ccb4ec.jpg",mn=t.p+"static/media/26.a86039a4.jpg",ln=t.p+"static/media/27.176d974d.jpg",gn=t.p+"static/media/28.20d9b932.jpg",xn=t.p+"static/media/29.e1cd06bf.jpg",hn=t.p+"static/media/30.12896625.jpg",un=t.p+"static/media/31.a9d3d0f7.jpg",fn=t.p+"static/media/32.853f491f.jpg",On=t.p+"static/media/33.be3a228c.jpg",wn=t.p+"static/media/34.cc554e08.jpg",vn=t.p+"static/media/35.4b839a1c.jpg",yn=t.p+"static/media/36.80b6e0e4.jpg",kn=t.p+"static/media/37.19fd6d8d.jpg",zn=t.p+"static/media/38.323136cc.jpg",Sn=t.p+"static/media/39.426a6b7f.jpg",Cn=t.p+"static/media/40.76622b43.jpg",Fn=t.p+"static/media/41.dc11068a.jpg",qn=t.p+"static/media/42.3d13c6d6.jpg",En=t.p+"static/media/43.1957d981.jpg",Wn=t.p+"static/media/44.59f21b6f.jpg",In=t.p+"static/media/45.814f7c33.jpg",Vn=t.p+"static/media/46.01c59c9f.jpg",Yn=t.p+"static/media/47.bcaa3db1.jpg",Ln=t.p+"static/media/48.641dc227.jpg",Pn=t.p+"static/media/49.86687315.jpg",Tn=t.p+"static/media/50.01902aa2.jpg",An=t.p+"static/media/51.fe9b51cc.jpg",Jn=t.p+"static/media/52.53bd3d9c.jpg",Dn=t.p+"static/media/53.e1da53d7.jpg",Mn=t.p+"static/media/54.7f009f82.jpg",Nn=t.p+"static/media/55.c900411b.jpg",Xn=t.p+"static/media/56.a7e5b8a4.jpg",Bn=t.p+"static/media/57.057c34be.jpg",Kn=t.p+"static/media/58.67ad303d.jpg",Rn=t.p+"static/media/59.501f4159.jpg",_n=t.p+"static/media/60.1d872114.jpg",Gn=t.p+"static/media/61.d5e7612c.jpg",Hn=t.p+"static/media/62.e632f4e8.jpg",Un=t.p+"static/media/63.48de6a89.jpg",Zn=t.p+"static/media/64.6e1fb6e7.jpg",Qn=t.p+"static/media/65.1e859caf.jpg",$n=t.p+"static/media/66.8e149a97.jpg",et=t.p+"static/media/67.4b6d7afc.jpg",nt=t.p+"static/media/68.fff39fd1.jpg",tt=t.p+"static/media/69.43777563.jpg",it=t.p+"static/media/70.439bc562.jpg",at=t.p+"static/media/71.a0b9757e.jpg",ct=t.p+"static/media/72.94d81308.jpg",rt=t.p+"static/media/73.8d51206d.jpg",st=t.p+"static/media/74.d1df344e.jpg",ot=t.p+"static/media/75.7f50754d.jpg",dt=t.p+"static/media/76.5b7ee13c.jpg",pt=t.p+"static/media/77.abcc932f.jpg",jt=t.p+"static/media/78.0bc6098e.jpg",bt=t.p+"static/media/79.baa9cc88.jpg",mt=t.p+"static/media/80.509878dd.jpg",lt=t.p+"static/media/81.1eb2018a.jpg",gt=t.p+"static/media/82.ad1d420c.jpg",xt=t.p+"static/media/83.f90d5060.jpg",ht=t.p+"static/media/84.f98c3df4.jpg",ut=t.p+"static/media/85.b7b66703.jpg",ft=t.p+"static/media/86.c87fd744.jpg",Ot=t.p+"static/media/87.b8f503d1.jpg",wt=t.p+"static/media/88.b6bda62d.jpg",vt=t.p+"static/media/89.bb5d7383.jpg",yt=t.p+"static/media/90.97fbf105.jpg",kt=t.p+"static/media/91.e9fa21d1.jpg",zt=t.p+"static/media/92.ae018341.jpg",St=t.p+"static/media/93.9ffd4670.jpg",Ct=t.p+"static/media/94.200f14ce.jpg",Ft=t.p+"static/media/95.07a8d32b.jpg",qt=t.p+"static/media/96.7ad601db.jpg",Et=t.p+"static/media/97.c0d0059d.jpg",Wt=t.p+"static/media/98.a3049643.jpg",It=t.p+"static/media/99.6aba8f09.jpg",Vt=t.p+"static/media/100.a3b02467.jpg",Yt=t.p+"static/media/101.08febf91.jpg",Lt=t.p+"static/media/102.7615780d.jpg",Pt=t.p+"static/media/103.0d16c604.jpg",Tt=t.p+"static/media/104.599ca799.jpg",At=t.p+"static/media/105.30dee089.jpg",Jt=t.p+"static/media/106.7be17184.jpg",Dt=t.p+"static/media/107.2bf591c4.jpg",Mt=t.p+"static/media/108.1bbc4cb4.jpg",Nt=t.p+"static/media/109.f21b95ef.jpg",Xt=t.p+"static/media/110.1ef2a302.jpg",Bt=t.p+"static/media/111.2ed11bfd.jpg",Kt=t.p+"static/media/112.5b3a75eb.jpg",Rt=t.p+"static/media/113.6773ef5e.jpg",_t=t.p+"static/media/114.1daf6812.jpg",Gt=t.p+"static/media/115.8d065979.jpg",Ht=g.a.div(M||(M=Object(l.a)(["\n    margin: 0 150px;    \n    @media (max-width: 768px) {\n        margin: 0 10px;\n    }\n"]))),Ut=g.a.img(N||(N=Object(l.a)(["\n    width: 100%;\n    height: 380px;\n    display: block;\n    object-fit: cover;\n    object-position: center;\n    opacity: 0.8;\n    transition: 0.4s;\n    cursor: pointer;\n    &:hover {\n        opacity: 1;\n    }\n"]))),Zt=t(20),Qt=function(){var e=[Me,Ne,Xe,Be,Ke,Re,_e,Ge,He,Ue,Ze,Qe,$e,en,nn,tn,an,cn,rn,sn,on,dn,pn,jn,bn,mn,ln,gn,xn,hn,un,fn,On,wn,vn,yn,kn,zn,Sn,Cn,Fn,qn,En,Wn,In,Vn,Yn,Ln,Pn,Tn,An,Jn,Dn,Mn,Nn,Xn,Bn,Kn,Rn,_n,Gn,Hn,Un,Zn,Qn,$n,et,nt,tt,it,at,ct,rt,st,ot,dt,pt,jt,bt,mt,lt,gt,xt,ht,ut,ft,Ot,wt,vt,yt,kt,zt,St,Ct,Ft,qt,Et,Wt,It,Vt,Yt,Lt,Pt,Tt,At,Jt,Dt,Mt,Nt,Xt,Bt,Kt,Rt,_t,Gt,vn];return Object(k.jsx)(Zt.a,{children:Object(k.jsx)(Ht,{children:Object(k.jsx)(Je.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3,1100:4},children:Object(k.jsx)(De.a,{gutter:"10px",children:e.map((function(e,n){return Object(k.jsx)(Ut,{src:e,alt:""},n)}))})})})})},$t=Object(g.b)(X||(X=Object(l.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),ei=g.a.div(B||(B=Object(l.a)(["\n    position: fixed;\n    width: 40px;\n    right: 20px;\n    bottom: 30px;\n    animation: "," 2s infinite;\n    cursor: pointer;\n    overflow: hidden;\n"])),$t),ni=g.a.a(K||(K=Object(l.a)(["\n    color: rgba(108,58,19, 0.8);\n    font-size: 48px;\n"]))),ti=function(){var e=Object(o.useState)(window.scrollY),n=Object(O.a)(e,2),t=n[0],i=n[1];Object(o.useEffect)((function(){var e=function(){return i(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(k.jsx)(ei,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(k.jsx)(ni,{children:t>650&&Object(k.jsx)("i",{className:"icon fas fa-chevron-up"})})})},ii=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ae,{}),Object(k.jsx)(Qt,{}),Object(k.jsx)(ti,{})]})},ai=t.p+"static/media/background.3d2347f4.jpg",ci=Object(g.b)(R||(R=Object(l.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),ri=g.a.div(_||(_=Object(l.a)(["\n    background-image: url(",");\n    background-size: cover;  \n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"])),ai),si=g.a.div(G||(G=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0, 0.4);\n    mix-blend-mode: overlay;\n"]))),oi=g.a.div(H||(H=Object(l.a)(["\n    position: absolute;\n    top: 55%;\n    left: 0;\n    color: white;\n    margin-left: 100px;\n\n    @media (max-width: 768px) {\n        margin: 0 auto;\n        width: 100%;\n        text-align: center;\n    }\n"]))),di=g.a.h2(U||(U=Object(l.a)(["\n    font-size: 3em;\n    padding: 10px;\n    background: rgba(0,0,0, 0.6);\n    margin-bottom: 0;\n\n    @media (max-width: 768px) {\n        font-size: 1.8rem;\n\n    }\n"]))),pi=g.a.h3(Z||(Z=Object(l.a)(["\n   font-size: 2em; \n   padding: 10px;\n   background: rgba(0,0,0, 0.6);\n   margin-top: 10px;\n\n   @media (max-width: 768px) {\n        font-size: 1.4rem;\n\n    }\n"]))),ji=g.a.div(Q||(Q=Object(l.a)(["\n    position: absolute;\n    width: 50px;\n    left: calc(50% - 25px);\n    bottom: 0;\n    animation: "," 2s infinite;\n    overflow: hidden;\n"])),ci),bi=g.a.a($||($=Object(l.a)(["\n    color: white;\n    font-size: 3em;\n"]))),mi=g.a.div(ee||(ee=Object(l.a)(["\n    height: calc(100vh - 60px);\n    @media (max-width: 768px) {\n        height: calc(100vh - 100px);\n    }\n"]))),li=t(39),gi=function(){return Object(k.jsxs)(mi,{children:[Object(k.jsx)(ri,{}),Object(k.jsx)(si,{}),Object(k.jsxs)(oi,{children:[Object(k.jsx)(di,{children:"Smart Design Joinery"}),Object(k.jsx)(pi,{children:"Vision, Passion, Purpose"})]}),Object(k.jsx)(ji,{class:"arrow bounce",children:Object(k.jsx)(bi,{children:Object(k.jsx)(li.Link,{to:"motto",spy:!0,smooth:!0,children:Object(k.jsx)("i",{class:"fas fa-chevron-down"})})})})]})},xi=g.a.h2(ne||(ne=Object(l.a)(["\n    text-align: center;\n    font-size: 48px;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    padding: 10px;\n\n    @media (max-width: 768px) {\n        font-size: 30px;\n    }\n"]))),hi=g.a.div(te||(te=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),ui=function(){return Object(k.jsx)(hi,{children:Object(k.jsx)(xi,{children:"Our Service"})})},fi=t.p+"static/media/doors.32621e39.jpg",Oi=t.p+"static/media/stairs.3d13c6d6.jpg",wi=t.p+"static/media/wardrobe.641dc227.jpg",vi=Object(g.a)(b.b)(ie||(ie=Object(l.a)(["\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 20px;\n    letter-spacing: 2px;\n    border: 2px solid #6C3A13;\n    padding: 10px 15px;\n    color: #6C3A13;\n    transition: 0.3s;\n    &:hover {\n        border: 2px solid #ffffff;\n        color: #ffffff;\n        background-color: #6C3A13;\n    };\n    @media (max-width: 768px) {\n        font-size: 18px;\n        padding: 5px 12px;\n        \n    }    \n"]))),yi=g.a.div(ae||(ae=Object(l.a)(["\n    display: flex;\n    width: 1140px;\n    height: 70vh;\n    margin: 0 auto;\n    @media (max-width: 768px) {\n        flex-direction: column;\n        width: 90vw;\n        align-items: center;\n        height: 100%;\n        \n    }\n"]))),ki=g.a.div(ce||(ce=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 15px;\n"]))),zi=g.a.img(re||(re=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n        margin-bottom: 0;\n    }\n"])),Oi),Si=g.a.img(se||(se=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-top: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n    }\n"])),wi),Ci=g.a.img(oe||(oe=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n        margin-top: 50px;\n    }\n"])),fi),Fi=g.a.h3(de||(de=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    font-size: 30px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n    }\n"]))),qi=g.a.p(pe||(pe=Object(l.a)(["\n    text-align: center;\n    @media (max-width: 768px) {\n        font-size: 16px;\n    }\n"]))),Ei=g.a.div(je||(je=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 50%;\n    background-color: #F4F5F6;\n    align-items: center;\n    @media (max-width: 768px) {\n        padding: 15px 0;\n    }\n"]))),Wi=function(){var e=Object(o.useState)(window.innerWidth),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(o.useEffect)((function(){var e=function(){return i(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(k.jsxs)(yi,{children:[Object(k.jsxs)(ki,{children:[Object(k.jsx)(zi,{}),Object(k.jsxs)(Ei,{children:[Object(k.jsx)(Fi,{children:"Stairs"}),Object(k.jsx)(qi,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(vi,{to:"/gallery",children:"See gallery"})]})]}),Object(k.jsxs)(ki,{children:[t<768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Si,{}),Object(k.jsxs)(Ei,{children:[Object(k.jsx)(Fi,{children:"Wardrobe"}),Object(k.jsx)(qi,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(vi,{to:"/gallery",children:"See gallery"})]})]}),t>768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(Ei,{children:[Object(k.jsx)(Fi,{children:"Wardrobe"}),Object(k.jsx)(qi,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(vi,{to:"/gallery",children:"See gallery"})]}),Object(k.jsx)(Si,{})]})]}),Object(k.jsxs)(ki,{children:[Object(k.jsx)(Ci,{}),Object(k.jsxs)(Ei,{children:[Object(k.jsx)(Fi,{children:"Doors"}),Object(k.jsx)(qi,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(vi,{to:"/gallery",children:"See gallery"})]})]})]})},Ii=t(40),Vi=t.p+"static/media/carpenter.9891abc0.jpg",Yi=g.a.div(be||(be=Object(l.a)(["\n    position: relative;\n    top: 100px;\n    left: 50%;\n    color: white;\n    @media (max-width: 768px) {\n        top: 10px;\n        left: 0;\n        padding: 0 10px;\n        text-align: center;\n    }\n"]))),Li=g.a.h3(me||(me=Object(l.a)(["\n    font-size: 36px;\n    text-transform: uppercase;\n    @media (max-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 50px;\n    }\n"]))),Pi=g.a.p(le||(le=Object(l.a)(["\n    font-size: 20px;\n    line-height: 1.5;\n"]))),Ti=g.a.div(ge||(ge=Object(l.a)(["\n    background: rgba(0, 0, 0, 0.6);\n"]))),Ai=function(){return Object(k.jsx)(Ti,{children:Object(k.jsx)(Ii.Parallax,{bgImage:Vi,bgImageAlt:"carpenter",strength:150,style:{position:"relative"},bgImageStyle:{zIndex:"-1"},children:Object(k.jsxs)(Yi,{style:{height:400},children:[Object(k.jsx)(Li,{children:"Who we are? What we are doing?"}),Object(k.jsxs)(Pi,{children:["We\u2019re your Furniture Company. With over 30 years experience in ",Object(k.jsx)("br",{}),"the industry, we know how to produce quality handmade furniture.",Object(k.jsx)("br",{})," We are making the latest traditional and modern furniture designs",Object(k.jsx)("br",{})," for your home.  "]})]})})})},Ji=g.a.h2(xe||(xe=Object(l.a)(["\n    margin: 100px auto;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 1.3;\n    font-size: 40px;\n    font-weight: 400;\n    @media (max-width: 768px) {\n        margin: 50px auto;\n        font-size: 30px;\n    }\n"]))),Di=g.a.span(he||(he=Object(l.a)(["\n    color: #6C3A13;\n    font-weight: bold;\n    font-size: 60px;\n    @media (max-width: 768px) {\n        font-size: 40px;\n    }\n"]))),Mi=g.a.span(ue||(ue=Object(l.a)(["\n    display: inline-block;\n    font-size: 70px;\n    font-weight: bold;\n    color: #6C3A13;\n    transform: skew(-15deg);\n    @media (max-width: 768px) {\n        font-size: 50px;\n    }\n"]))),Ni=function(){return Object(k.jsxs)(Ji,{id:"motto",children:["We are not just ",Object(k.jsx)(Di,{children:"building"}),"...",Object(k.jsx)("br",{}),"...we ",Object(k.jsx)(Di,{children:"create "}),Object(k.jsx)(Mi,{children:"!"})]})},Xi=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(gi,{}),Object(k.jsx)(Ni,{}),Object(k.jsx)(Ai,{}),Object(k.jsx)(ui,{}),Object(k.jsx)(Wi,{}),Object(k.jsx)(Ye,{}),Object(k.jsx)(We,{}),Object(k.jsx)(ti,{})]})},Bi=g.a.p(fe||(fe=Object(l.a)(["\n    position: ",";\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: white;\n    background-color: black;\n    padding: 15px;\n    margin: 0;\n    text-align: center;\n"])),(function(e){return"/home"===e.location?"relative":"fixed"})),Ki=Object(m.h)((function(e){return Object(k.jsx)(Bi,{location:e.location.pathname,children:"Smart Design Joinery\xa9. All rights reserved"})}));function Ri(){var e=Object(m.g)().pathname;return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var _i=function(){return Object(k.jsx)(Zt.b,{children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(Ri,{}),Object(k.jsx)(F,{}),Object(k.jsxs)(m.d,{children:[Object(k.jsx)(m.b,{path:"/home",children:Object(k.jsx)(Xi,{})}),Object(k.jsx)(m.b,{path:"/gallery",children:Object(k.jsx)(ii,{})}),Object(k.jsx)(m.b,{path:"/information",children:Object(k.jsx)(q,{})}),Object(k.jsx)(m.b,{path:"/contact",children:Object(k.jsx)(Le,{})}),Object(k.jsx)(m.b,{children:Object(k.jsx)(m.a,{to:"/home"})})]}),Object(k.jsx)(Ki,{})]})})},Gi=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};j.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(_i,{})}),document.getElementById("root")),Gi()}},[[62,1,2]]]);
//# sourceMappingURL=main.286d4c39.chunk.js.map