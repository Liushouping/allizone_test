import{g as t,S as d,r as s,a as F,o as K,b as U,c as $,d as G,e,t as J,f as a,h as Q,i as X,j as Y,k as tt}from"./vendor.af6d70d9.js";const et=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};et();var st="/allizone-logo.png",ot=(p,c)=>{const n=p.__vccOpts||p;for(const[u,o]of c)n[u]=o;return n};t.registerPlugin(d);const lt={name:"Home",components:{},setup(){const p=d.getAll(),c=s(null),n=s(null),u=s(null),o=s(null),l=s(null),r=s(null),_=s(null),f=s(null),g=s(null),h=s(null),i=s(null),v=s(null),x=s(null),m=s(null),y=s(null),b=s(null),k=s(null),w=s(null),C=s(null),T=s(null),z=s(null),N=s(null),L=s(null),j=s(null),B=s(null),O=s(null),A=s(null),E=s(null),R=s(null),S=s(null),I=s(null),M=s(null),Z=s(null),H=s(null);s(null),s(null),s(null),s(null),s(null);const V=F({info:"Copyright \xA9 2022 Allizone All Rights Reserved"});K(()=>{p.forEach(D=>{D.kill()}),d.clearMatchMedia()}),U(()=>{d.refresh(),W()});function W(){d.matchMedia({"(min-width: 368px)":()=>{t.from(o.value,{y:2e3,opacity:0,scale:0,delay:.25,duration:.5}),t.to(o.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"logo-to",targets:o.value}},scale:1}),t.from(l.value,{y:2e3,opacity:0,scale:0,delay:.75,duration:.5}),t.to(l.value,{scrollTrigger:{start:"top -10",end:"99999",toggleClass:{className:"logotxt-to",targets:l.value}},scale:1}),t.set(n.value,{opacity:0}),t.to(n.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1}),t.set(_.value,{y:40,opacity:0,scale:3}),t.to(_.value,{scrollTrigger:{trigger:r.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,duration:.6}),t.from(f.value,{y:200,opacity:0,scale:0,delay:1,duration:.5}),t.to(f.value,{scrollTrigger:{start:"top -10",end:"99999",toggleClass:{className:"line-to",targets:f.value}},scale:1}),t.set(h.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(h.value,{scrollTrigger:{trigger:g.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(v.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(v.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(x.value,{opacity:.1}),t.to(x.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(m.value,{opacity:.1}),t.to(m.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(y.value,{opacity:.1}),t.to(y.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(b.value,{opacity:.1}),t.to(b.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(k.value,{opacity:.1}),t.to(k.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(w.value,{opacity:.1}),t.to(w.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(C.value,{opacity:.1}),t.to(C.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(T.value,{opacity:.1}),t.to(T.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(z.value,{opacity:.1}),t.to(z.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(N.value,{opacity:.1}),t.to(N.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(L.value,{opacity:.1}),t.to(L.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(j.value,{opacity:.1}),t.to(j.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(B.value,{opacity:.1}),t.to(B.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(O.value,{opacity:.1}),t.to(O.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(A.value,{opacity:.1}),t.to(A.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(E.value,{opacity:.1}),t.to(E.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(R.value,{opacity:.1}),t.to(R.value,{scrollTrigger:{trigger:r.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(S.value,{opacity:.1}),t.to(S.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(I.value,{opacity:.1}),t.to(I.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(M.value,{opacity:.1}),t.to(M.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(Z.value,{opacity:.1}),t.to(Z.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(H.value,{opacity:.1}),t.to(H.value,{scrollTrigger:{trigger:i.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6})}})}return{scramble:c,bgtxt:n,txtzero:u,logo:o,logotxt:l,txtone:r,titleone:_,lineone:f,txttwo:g,titletwo:h,txtthree:i,titlethree:v,topl:x,topll:m,topi:y,topz:b,topo:k,topn:w,tope:C,leftl:T,leftll:z,lefti:N,leftz:L,lefto:j,leftn:B,lefte:O,righta:A,rightl:E,rightll:R,righti:S,rightz:I,righto:M,rightn:Z,righte:H,Bottomdata:V}}},rt={class:"bg-black relative overflow-hidden"},at={ref:"bgtxt"},it={class:"fixed top-[1rem] left-[2rem] flex flex-row text-[16px] md:text-[18px] text-white tracking-[36px] md:tracking-[50px] z-40 font-RandomNineBold"},nt=e("span",null,"A",-1),ct={ref:"topl"},ut={ref:"topll"},gt={ref:"topi"},pt={ref:"topz"},dt={ref:"topo"},ft={ref:"topn"},_t={ref:"tope"},ht={class:"fixed top-16 md:top-[4.6rem] left-[2rem] flex flex-col text-[16px] md:text-[18px] text-white z-40 font-RandomNineBold"},vt={ref:"leftl"},xt={ref:"leftll",class:"mt-6 md:mt-[33px]"},mt={ref:"lefti",class:"mt-6 md:mt-[33px]"},yt={ref:"leftz",class:"mt-6 md:mt-[33px]"},bt={ref:"lefto",class:"mt-6 md:mt-[33px]"},kt={ref:"leftn",class:"mt-6 md:mt-[33px]"},wt={ref:"lefte",class:"mt-6 md:mt-[33px]"},Ct={class:"fixed bottom-12 md:bottom-[1rem] -right-6 md:-right-[0rem] flex flex-col text-[16px] md:text-[18px] text-white tracking-[36px] z-40 font-RandomNineBold"},Tt={class:"flex flex-row justify-end"},zt={ref:"righta"},Nt={ref:"rightl"},Lt={ref:"rightll"},jt={class:"flex flex-row justify-end mt-[10px]"},Bt={ref:"righti"},Ot={ref:"rightz"},At={class:"flex flex-row justify-end mt-[10px]"},Et={ref:"righto"},Rt={ref:"rightn"},St={ref:"righte"},It=e("div",{class:"fixed left-[8px] lg:left-[450px] top-2 z-10 w-[600px] h-[600px] rounded-full blur-[200px] top_animate"},null,-1),Mt=e("div",{class:"fixed right-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-[200px] right_animate"},null,-1),Zt=e("div",{class:"fixed left-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-[200px] left_animate"},null,-1),Ht={ref:"txtzero",class:"w-full h-screen flex flex-col justify-center items-center"},$t={ref:"logo",src:st,class:"logo z-40"},Pt={ref:"logotxt",class:"flex justify-center items-center mt-52 text-2xl md:text-[1.7rem] md:leading-10 text-white font-RandomNineBold tracking-[20px] text-maxpxtocenter z-40",style:{"text-indent":"1.1em"}},qt={ref:"lineone",class:"absolute left-[50%] divideline mt-[550px] h-[60px] z-40"},Vt={ref:"txtone",class:"w-full h-screen flex flex-col justify-center items-center"},Wt={ref:"titleone",class:"text-white text-center z-40"},Dt=a(" all things are converging"),Ft=e("br",null,null,-1),Kt=a(" read + write + ownership"),Ut=e("br",null,null,-1),Gt=a(" one, two,three "),Jt=[Dt,Ft,Kt,Ut,Gt],Qt={ref:"txttwo",class:"w-full h-screen flex flex-col justify-center items-center"},Xt={ref:"titletwo",class:"text-white text-center z-40"},Yt=a(" is it virtual...is it reality..."),te=e("br",null,null,-1),ee=a(" or anything in between"),se=e("br",null,null,-1),oe=a(" lots of questions"),le=e("br",null,null,-1),re=a(" can be answered"),ae=[Yt,te,ee,se,oe,le,re],ie={ref:"txtthree",class:"w-full h-screen flex justify-center items-center"},ne={ref:"titlethree",class:"text-white text-center z-40"},ce=a(" one team - one vision"),ue=e("br",null,null,-1),ge=a(" living and breathing in"),pe=e("br",null,null,-1),de=a(" multiple zones"),fe=e("br",null,null,-1),_e=e("br",null,null,-1),he=a(" ALLIZONE"),ve=e("br",null,null,-1),xe=a(" web3 solutions"),me=e("br",null,null,-1),ye=e("a",{href:"mailto:info@allizone.io",class:"underline z-40"},"contact us",-1),be=[ce,ue,ge,pe,de,fe,_e,he,ve,xe,me,ye],ke={class:"fixed bottom-5 w-full flex flex-col justify-center items-center"},we={class:"flex flex-col justify-center items-center"},Ce={class:"text-white text-xs",href:"mailto:info@allizone.io"};function Te(p,c,n,u,o,l){return $(),G("div",rt,[e("div",at,[e("div",it,[nt,e("span",ct,"L",512),e("span",ut,"L",512),e("span",gt,"I",512),e("span",pt,"Z",512),e("span",dt,"O",512),e("span",ft,"N",512),e("span",_t,"E",512)]),e("div",ht,[e("span",vt,"L",512),e("span",xt,"L",512),e("span",mt,"I",512),e("span",yt,"Z",512),e("span",bt,"O",512),e("span",kt,"N",512),e("span",wt,"E",512)]),e("div",Ct,[e("div",Tt,[e("span",zt,"A",512),e("span",Nt,"L",512),e("span",Lt,"L",512)]),e("div",jt,[e("span",Bt,"I",512),e("span",Ot,"Z",512)]),e("div",At,[e("span",Et,"O",512),e("span",Rt,"N",512),e("span",St,"E",512)])])],512),It,Mt,Zt,e("section",Ht,[e("img",$t,null,512),e("h5",Pt,"ALLIZONE",512),e("span",qt,null,512)],512),e("section",Vt,[e("p",Wt,Jt,512)],512),e("section",Qt,[e("p",Xt,ae,512)],512),e("section",ie,[e("p",ne,be,512)],512),e("footer",ke,[e("div",we,[e("a",Ce,J(u.Bottomdata.info),1)])])])}var P=ot(lt,[["render",Te]]);const ze={setup(p){return(c,n)=>($(),Q(P))}},Ne=[{path:"/",name:"Home",component:P}],Le=X({history:Y(),routes:Ne});const q=tt(ze);q.use(Le);q.mount("#app");
