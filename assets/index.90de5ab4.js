import{d as G,o as F,a as H,c as P,b as t,F as J,e as Q,g as e,S as _,r as s,f as X,h as Y,t as tt,i,j as et,k as st,l as ot,m as lt}from"./vendor.21f611c0.js";const rt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};rt();var V=(d,r)=>{const n=d.__vccOpts||d;for(const[a,o]of r)n[a]=o;return n};const at=G({name:"texth5",setup(){const d=()=>{let r=$(".nbr"),n=10,a=0,o,l,p=["A","L","L","I","Z","O","N","E"];r.each(function(){l=Math.round(Math.random()*100),$(this).attr("data-change",l)});function g(){return Math.round(Math.random()*9)}function c(){return Math.round(Math.random()*r.length+1)}function f(){$(".nbr:nth-child("+c()+")").html(""+g()),$(".nbr:nth-child("+c()+")").attr("data-number",a),a++,r.each(function(){parseInt($(this).attr("data-number"))>parseInt($(this).attr("data-change"))&&(o=$(".ltr").index(this),$(this).html(p[o]),$(this).removeClass("nbr"))})}setInterval(f,n)};F(()=>{d()})}}),nt={ref:"logotxt",class:"flex justify-center items-center mt-52 text-2xl md:text-[1.7rem] md:leading-10 text-white tracking-[20px] text-maxpxtocenter z-40",style:{"text-indent":"1.1em"}},it=Q('<div class="random"><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span><span class="nbr ltr">0</span></div>',1),ct=[it],ut={ref:"logotxt",class:"flex justify-center items-center mt-52 text-2xl md:text-[1.7rem] md:leading-10 text-white tracking-[20px] font-RandomNineBold z-40",style:{"text-indent":"1.1em"}};function dt(d,r,n,a,o,l){return H(),P(J,null,[t("div",nt,ct,512),t("h5",ut," ALLIZONE ",512)],64)}var pt=V(at,[["render",dt]]),gt="/allizone-logo.png";e.registerPlugin(_);const ft={name:"Home",components:{texth5:pt},setup(){const d=_.getAll(),r=s(null),n=s(null),a=s(null),o=s(null),l=s(null),p=s(null),g=s(null),c=s(null),f=s(null),u=s(null),h=s(null),x=s(null),m=s(null),v=s(null),y=s(null),b=s(null),k=s(null),w=s(null),C=s(null),T=s(null),z=s(null),N=s(null),L=s(null),j=s(null),O=s(null),A=s(null),B=s(null),I=s(null),M=s(null),E=s(null),R=s(null),S=s(null),Z=s(null);s(null),s(null),s(null),s(null),s(null);const D=X({info:"Copyright \xA9 2022 Allizone All Rights Reserved"});Y(()=>{d.forEach(U=>{U.kill()}),_.clearMatchMedia()}),F(()=>{_.refresh(),K()});function K(){_.matchMedia({"(min-width: 368px)":()=>{e.from(a.value,{y:2e3,opacity:0,scale:0,delay:.25,duration:.5}),e.to(a.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"logo-to",targets:a.value}},scale:1}),e.from(o.value,{y:2e3,opacity:0,scale:0,delay:.75,duration:.5}),e.to(o.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"logotxt-to",targets:o.value}},scale:1}),e.set(r.value,{opacity:0}),e.to(r.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1}),e.set(p.value,{y:40,opacity:0,scale:3}),e.to(p.value,{scrollTrigger:{trigger:l.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,duration:.6}),e.set(g.value,{opacity:0}),e.to(g.value,{scrollTrigger:{trigger:n.value,start:"+1300px +1200px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.25}),e.set(f.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),e.to(f.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),e.set(h.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),e.to(h.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),e.set(x.value,{opacity:.1}),e.to(x.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(m.value,{opacity:.1}),e.to(m.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(v.value,{opacity:.1}),e.to(v.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(y.value,{opacity:.1}),e.to(y.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(b.value,{opacity:.1}),e.to(b.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(k.value,{opacity:.1}),e.to(k.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(w.value,{opacity:.1}),e.to(w.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(C.value,{opacity:.1}),e.to(C.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(T.value,{opacity:.1}),e.to(T.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(z.value,{opacity:.1}),e.to(z.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(N.value,{opacity:.1}),e.to(N.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(L.value,{opacity:.1}),e.to(L.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(j.value,{opacity:.1}),e.to(j.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(O.value,{opacity:.1}),e.to(O.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(A.value,{opacity:.1}),e.to(A.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(B.value,{opacity:.1}),e.to(B.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(I.value,{opacity:.1}),e.to(I.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(M.value,{opacity:.1}),e.to(M.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(E.value,{opacity:.1}),e.to(E.value,{scrollTrigger:{trigger:c.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(R.value,{opacity:.1}),e.to(R.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(S.value,{opacity:.1}),e.to(S.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(Z.value,{opacity:.1}),e.to(Z.value,{scrollTrigger:{trigger:u.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6})},"(max-width: 367px)":()=>{}})}return{bgtxt:r,txtzero:n,logo:a,logotxt:o,txtone:l,titleone:p,lineone:g,txttwo:c,titletwo:f,txtthree:u,titlethree:h,topl:x,topll:m,topi:v,topz:y,topo:b,topn:k,tope:w,leftl:C,leftll:T,lefti:z,leftz:N,lefto:L,leftn:j,lefte:O,righta:A,rightl:B,rightll:I,righti:M,rightz:E,righto:R,rightn:S,righte:Z,Bottomdata:D}}},_t={class:"bg-black relative overflow-hidden"},ht={ref:"bgtxt"},xt={class:"fixed top-[1rem] left-[2rem] flex flex-row text-[16px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] md:tracking-[50px] z-40"},mt=t("span",null,"A",-1),vt={ref:"topl"},yt={ref:"topll"},bt={ref:"topi"},kt={ref:"topz"},wt={ref:"topo"},Ct={ref:"topn"},Tt={ref:"tope"},zt={class:"fixed top-16 md:top-4 md:top-24 left-[2rem] flex flex-col text-[16px] md:text-[32px] font-RandomNineBold text-white z-40"},$t={ref:"leftl"},Nt={ref:"leftll",class:"mt-6 md:mt-[25px]"},Lt={ref:"lefti",class:"mt-6 md:mt-[25px]"},jt={ref:"leftz",class:"mt-6 md:mt-[25px]"},Ot={ref:"lefto",class:"mt-6 md:mt-[25px]"},At={ref:"leftn",class:"mt-6 md:mt-[25px]"},Bt={ref:"lefte",class:"mt-6 md:mt-[25px]"},It={class:"fixed bottom-12 md:bottom-[1rem] -right-6 md:-right-[0rem] flex flex-col text-[16px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] z-40"},Mt={class:"flex flex-row justify-end"},Et={ref:"righta"},Rt={ref:"rightl"},St={ref:"rightll"},Zt={class:"flex flex-row justify-end"},Ht={ref:"righti"},Ft={ref:"rightz"},Pt={class:"flex flex-row justify-end"},Vt={ref:"righto"},qt={ref:"rightn"},Wt={ref:"righte"},Dt=t("div",{class:"fixed left-[8px] lg:left-[450px] top-2 z-10 w-[600px] h-[600px] rounded-full blur-3xl top_animate"},null,-1),Kt=t("div",{class:"fixed right-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl right_animate"},null,-1),Ut=t("div",{class:"fixed left-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl left_animate"},null,-1),Gt={ref:"txtzero",class:"w-full h-screen flex flex-col justify-center items-center"},Jt={ref:"logo",src:gt,class:"logo z-40"},Qt={ref:"logotxt",class:"flex justify-center items-center mt-52 text-2xl md:text-[1.7rem] md:leading-10 text-white font-RandomNineBold tracking-[20px] text-maxpxtocenter z-40",style:{"text-indent":"1.1em"}},Xt={ref:"lineone",class:"absolute left-[50%] divideline mt-[300px] z-40"},Yt={ref:"txtone",class:"w-full h-screen flex flex-col justify-center items-center"},te={ref:"titleone",class:"text-white text-center z-40"},ee=i(" all things are converging"),se=t("br",null,null,-1),oe=i(" read + write + ownership"),le=t("br",null,null,-1),re=i(" one, two,three "),ae=[ee,se,oe,le,re],ne={ref:"txttwo",class:"w-full h-screen flex flex-col justify-center items-center"},ie={ref:"titletwo",class:"text-white text-center z-40"},ce=i(" is it virtual...is it reality..."),ue=t("br",null,null,-1),de=i(" or anything in between"),pe=t("br",null,null,-1),ge=i(" lots of questions"),fe=t("br",null,null,-1),_e=i(" can be answered"),he=[ce,ue,de,pe,ge,fe,_e],xe={ref:"txtthree",class:"w-full h-screen flex justify-center items-center"},me={ref:"titlethree",class:"text-white text-center z-40"},ve=i(" one team - one vision"),ye=t("br",null,null,-1),be=i(" living and breathing in"),ke=t("br",null,null,-1),we=i(" multiple zones"),Ce=t("br",null,null,-1),Te=t("br",null,null,-1),ze=i(" ALLIZONE"),$e=t("br",null,null,-1),Ne=i(" web3 solutions"),Le=t("br",null,null,-1),je=t("a",{href:"mailto:info@allizone.io",class:"underline z-40"},"contact us",-1),Oe=[ve,ye,be,ke,we,Ce,Te,ze,$e,Ne,Le,je],Ae={class:"fixed bottom-5 w-full flex flex-col justify-center items-center"},Be={class:"flex flex-col justify-center items-center"},Ie={class:"text-white text-xs",href:"mailto:info@allizone.io"};function Me(d,r,n,a,o,l){return H(),P("div",_t,[t("div",ht,[t("div",xt,[mt,t("span",vt,"L",512),t("span",yt,"L",512),t("span",bt,"I",512),t("span",kt,"Z",512),t("span",wt,"O",512),t("span",Ct,"N",512),t("span",Tt,"E",512)]),t("div",zt,[t("span",$t,"L",512),t("span",Nt,"L",512),t("span",Lt,"I",512),t("span",jt,"Z",512),t("span",Ot,"O",512),t("span",At,"N",512),t("span",Bt,"E",512)]),t("div",It,[t("div",Mt,[t("span",Et,"A",512),t("span",Rt,"L",512),t("span",St,"L",512)]),t("div",Zt,[t("span",Ht,"I",512),t("span",Ft,"Z",512)]),t("div",Pt,[t("span",Vt,"O",512),t("span",qt,"N",512),t("span",Wt,"E",512)])])],512),Dt,Kt,Ut,t("section",Gt,[t("img",Jt,null,512),t("h5",Qt,"ALLIZONE",512),t("div",Xt,null,512)],512),t("section",Yt,[t("div",te,ae,512)],512),t("section",ne,[t("p",ie,he,512)],512),t("section",xe,[t("p",me,Oe,512)],512),t("footer",Ae,[t("div",Be,[t("a",Ie,tt(a.Bottomdata.info),1)])])])}var q=V(ft,[["render",Me]]);const Ee={setup(d){return(r,n)=>(H(),et(q))}},Re=[{path:"/",name:"Home",component:q}],Se=st({history:ot(),routes:Re});const W=lt(Ee);W.use(Se);W.mount("#app");
