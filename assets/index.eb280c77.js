import{g as t,S as v,r as l,a as st,o as rt,b as ot,c as J,d as at,e,t as nt,f as a,h as it,i as ct,j as ut,k as dt}from"./vendor.af6d70d9.js";const gt=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};gt();var pt="/allizone-logo.png",ft=(p,c)=>{const i=p.__vccOpts||p;for(const[d,s]of c)i[d]=s;return i};t.registerPlugin(v);const ht={name:"Home",components:{},setup(){const p=v.getAll(),c=l(null),i=l(null),d=l(null),s=l(null),r=l(null),o=l(null),x=l(null),b=l(null),g=l(null),y=l(null),n=l(null),k=l(null),w=l(null),C=l(null),T=l(null),z=l(null),M=l(null),L=l(null),N=l(null),I=l(null),j=l(null),A=l(null),O=l(null),E=l(null),S=l(null),B=l(null),Z=l(null),H=l(null),R=l(null),P=l(null),q=l(null),V=l(null),W=l(null),D=l(null);l(null),l(null),l(null),l(null),l(null);const Y=st({info:"Copyright \xA9 2022 Allizone All Rights Reserved"}),tt=()=>{let u=$(".nbr"),F=35,f=0,h,_,K=["A","L","L","I","Z","O","N","E"];u.each(function(){_=Math.round(Math.random()*100),$(this).attr("data-change",_)});function U(){return Math.round(Math.random()*9)}function m(){return Math.round(Math.random()*u.length+1)}function G(){$(".nbr:nth-child("+m()+")").html(""+U()),$(".nbr:nth-child("+m()+")").attr("data-number",f),f++,u.each(function(){parseInt($(this).attr("data-number"))>parseInt($(this).attr("data-change"))&&(h=$(".ltr").index(this),$(this).html(K[h]),$(this).removeClass("nbr"))})}setInterval(G,F)},et=()=>{let u=$(".nbrla"),F=35,f=0,h,_,K=["L","L","I","Z","O","N","E"];u.each(function(){_=Math.round(Math.random()*100),$(this).attr("data-change",_)});function U(){return Math.random().toString(36).replace(/[^A-Z]+/g,"").substr(0,1)}function m(){return Math.round(Math.random()*u.length+1)}function G(){$(".nbrla:nth-child("+m()+")").html(""+U()),$(".nbrla:nth-child("+m()+")").attr("data-number",f),f++,u.each(function(){parseInt($(this).attr("data-number"))>parseInt($(this).attr("data-change"))&&(h=$(".ltrla").index(this),$(this).html(K[h]),$(this).removeClass("nbrla"))})}setInterval(G,F)};rt(()=>{p.forEach(u=>{u.kill()}),v.clearMatchMedia()}),ot(()=>{v.refresh(),lt()});function lt(){v.matchMedia({"(min-width: 368px)":()=>{t.from(s.value,{y:2e3,opacity:0,scale:0,delay:.25,duration:.5}),t.to(s.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"logo-to",targets:s.value}},scale:1}),t.from(r.value,{y:2e3,opacity:0,scale:0,delay:.75,duration:.5}),t.to(r.value,{scrollTrigger:{start:"top -10",end:"99999",toggleClass:{className:"logotxt-to",targets:r.value}},scale:1}),t.set(i.value,{opacity:0}),t.to(i.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1}),t.set(x.value,{y:40,opacity:0,scale:3}),t.to(x.value,{scrollTrigger:{trigger:o.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,duration:.6}),t.set(b.value,{opacity:0}),t.to(b.value,{scrollTrigger:{start:"+1300px +1200px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1,onEnter(){tt(),et(),$(".scramble").scramble()}},opacity:1,duration:.25}),t.set(y.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(y.value,{scrollTrigger:{trigger:g.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(k.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(k.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(w.value,{opacity:.1}),t.to(w.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(C.value,{opacity:.1}),t.to(C.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(T.value,{opacity:.1}),t.to(T.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(z.value,{opacity:.1}),t.to(z.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(M.value,{opacity:.1}),t.to(M.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(L.value,{opacity:.1}),t.to(L.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(N.value,{opacity:.1}),t.to(N.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(I.value,{opacity:.1}),t.to(I.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(j.value,{opacity:.1}),t.to(j.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(A.value,{opacity:.1}),t.to(A.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(O.value,{opacity:.1}),t.to(O.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(E.value,{opacity:.1}),t.to(E.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(S.value,{opacity:.1}),t.to(S.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(B.value,{opacity:.1}),t.to(B.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(Z.value,{opacity:.1}),t.to(Z.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(H.value,{opacity:.1}),t.to(H.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(R.value,{opacity:.1}),t.to(R.value,{scrollTrigger:{trigger:o.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(P.value,{opacity:.1}),t.to(P.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(q.value,{opacity:.1}),t.to(q.value,{scrollTrigger:{trigger:g.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(V.value,{opacity:.1}),t.to(V.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(W.value,{opacity:.1}),t.to(W.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(D.value,{opacity:.1}),t.to(D.value,{scrollTrigger:{trigger:n.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6})}})}return{scramble:c,bgtxt:i,txtzero:d,logo:s,logotxt:r,txtone:o,titleone:x,lineone:b,txttwo:g,titletwo:y,txtthree:n,titlethree:k,topl:w,topll:C,topi:T,topz:z,topo:M,topn:L,tope:N,leftl:I,leftll:j,lefti:A,leftz:O,lefto:E,leftn:S,lefte:B,righta:Z,rightl:H,rightll:R,righti:P,rightz:q,righto:V,rightn:W,righte:D,Bottomdata:Y}}},_t={class:"bg-black relative overflow-hidden"},mt={ref:"bgtxt"},vt={class:"fixed top-[1rem] left-[2rem] flex flex-row text-[16px] md:text-[32px] text-white tracking-[36px] md:tracking-[50px] z-40 random"},xt=e("span",{class:"nbr ltr"},"0",-1),bt={ref:"topl",class:"nbr ltr"},yt={ref:"topll",class:"nbr ltr"},kt={ref:"topi",class:"nbr ltr"},wt={ref:"topz",class:"nbr ltr"},Ct={ref:"topo",class:"nbr ltr"},Tt={ref:"topn",class:"nbr ltr"},$t={ref:"tope",class:"nbr ltr"},zt={class:"fixed top-16 md:top-4 md:top-24 left-[2rem] flex flex-col text-[16px] md:text-[32px] text-white z-40 randomla"},Mt={ref:"leftl",class:"nbrla ltrla"},Lt={ref:"leftll",class:"mt-6 md:mt-[25px] nbrla ltrla"},Nt={ref:"lefti",class:"mt-6 md:mt-[25px] nbrla ltrla"},It={ref:"leftz",class:"mt-6 md:mt-[25px] nbrla ltrla"},jt={ref:"lefto",class:"mt-6 md:mt-[25px] nbrla ltrla"},At={ref:"leftn",class:"mt-6 md:mt-[25px] nbrla ltrla"},Ot={ref:"lefte",class:"mt-6 md:mt-[25px] nbrla ltrla"},Et={class:"fixed bottom-12 md:bottom-[1rem] -right-6 md:-right-[0rem] flex flex-col text-[16px] md:text-[32px] text-white tracking-[36px] z-40"},St={class:"flex flex-row justify-end"},Bt={ref:"righta"},Zt={ref:"rightl"},Ht={ref:"rightll"},Rt={class:"flex flex-row justify-end"},Pt={ref:"righti"},qt={ref:"rightz"},Vt={class:"flex flex-row justify-end"},Wt={ref:"righto"},Dt={ref:"rightn"},Ft={ref:"righte"},Kt=e("div",{class:"fixed left-[8px] lg:left-[450px] top-2 z-10 w-[600px] h-[600px] rounded-full blur-3xl top_animate"},null,-1),Ut=e("div",{class:"fixed right-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl right_animate"},null,-1),Gt=e("div",{class:"fixed left-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl left_animate"},null,-1),Jt={ref:"txtzero",class:"w-full h-screen flex flex-col justify-center items-center"},Qt={ref:"logo",src:pt,class:"logo z-40"},Xt={ref:"logotxt",class:"flex justify-center items-center mt-52 text-2xl md:text-[1.7rem] md:leading-10 text-white font-RandomNineBold tracking-[20px] text-maxpxtocenter z-40",style:{"text-indent":"1.1em"}},Yt={ref:"lineone",class:"absolute left-[50%] divideline mt-[300px] z-40"},te={ref:"txtone",class:"w-full h-screen flex flex-col justify-center items-center"},ee={ref:"titleone",class:"text-white text-center z-40"},le=a(" all things are converging"),se=e("br",null,null,-1),re=a(" read + write + ownership"),oe=e("br",null,null,-1),ae=a(" one, two,three "),ne=[le,se,re,oe,ae],ie={ref:"txttwo",class:"w-full h-screen flex flex-col justify-center items-center"},ce={ref:"titletwo",class:"text-white text-center z-40"},ue=a(" is it virtual...is it reality..."),de=e("br",null,null,-1),ge=a(" or anything in between"),pe=e("br",null,null,-1),fe=a(" lots of questions"),he=e("br",null,null,-1),_e=a(" can be answered"),me=[ue,de,ge,pe,fe,he,_e],ve={ref:"txtthree",class:"w-full h-screen flex justify-center items-center"},xe={ref:"titlethree",class:"text-white text-center z-40"},be=a(" one team - one vision"),ye=e("br",null,null,-1),ke=a(" living and breathing in"),we=e("br",null,null,-1),Ce=a(" multiple zones"),Te=e("br",null,null,-1),$e=e("br",null,null,-1),ze=a(" ALLIZONE"),Me=e("br",null,null,-1),Le=a(" web3 solutions"),Ne=e("br",null,null,-1),Ie=e("a",{href:"mailto:info@allizone.io",class:"underline z-40"},"contact us",-1),je=[be,ye,ke,we,Ce,Te,$e,ze,Me,Le,Ne,Ie],Ae={class:"fixed bottom-5 w-full flex flex-col justify-center items-center"},Oe={class:"flex flex-col justify-center items-center"},Ee={class:"text-white text-xs",href:"mailto:info@allizone.io"};function Se(p,c,i,d,s,r){return J(),at("div",_t,[e("div",mt,[e("div",vt,[xt,e("span",bt,"0",512),e("span",yt,"0",512),e("span",kt,"0",512),e("span",wt,"0",512),e("span",Ct,"0",512),e("span",Tt,"0",512),e("span",$t,"0",512)]),e("div",zt,[e("span",Mt,"0",512),e("span",Lt,"0",512),e("span",Nt,"0",512),e("span",It,"0",512),e("span",jt,"0",512),e("span",At,"0",512),e("span",Ot,"0",512)]),e("div",Et,[e("div",St,[e("span",Bt,"A",512),e("span",Zt,"L",512),e("span",Ht,"L",512)]),e("div",Rt,[e("span",Pt,"I",512),e("span",qt,"Z",512)]),e("div",Vt,[e("span",Wt,"O",512),e("span",Dt,"N",512),e("span",Ft,"E",512)])])],512),Kt,Ut,Gt,e("section",Jt,[e("img",Qt,null,512),e("h5",Xt,"ALLIZONE",512),e("div",Yt,null,512)],512),e("section",te,[e("div",ee,ne,512)],512),e("section",ie,[e("p",ce,me,512)],512),e("section",ve,[e("p",xe,je,512)],512),e("footer",Ae,[e("div",Oe,[e("a",Ee,nt(d.Bottomdata.info),1)])])])}var Q=ft(ht,[["render",Se]]);const Be={setup(p){return(c,i)=>(J(),it(Q))}},Ze=[{path:"/",name:"Home",component:Q}],He=ct({history:ut(),routes:Ze});const X=dt(Be);X.use(He);X.mount("#app");
