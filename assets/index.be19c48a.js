import{g as t,S as g,r as s,a as V,o as q,b as W,c as G,d as D,e,t as F,f as K,h as i,i as U,j as J,k as X,l as Y}from"./vendor.bcbd1990.js";const tt=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};tt();var et="/allizone-logo.png",st=(d,u)=>{const n=d.__vccOpts||d;for(const[l,o]of u)n[l]=o;return n};t.registerPlugin(g);const ot={name:"Home",components:{},setup(){const d=g.getAll(),u=s(null),n=s(null),l=s(null),o=s(null),r=s(null),a=s(null),p=s(null),f=s(null),c=s(null),v=s(null),_=s(null),h=s(null),m=s(null),x=s(null),Q=s(null),y=s(null),b=s(null),w=s(null),k=s(null),C=s(null),T=s(null),z=s(null),M=s(null),N=s(null),Z=s(null),L=s(null),B=s(null),S=s(null),j=s(null),O=s(null),A=s(null),E=s(null);s(null),s(null),s(null),s(null),s(null);const H=V({info:"Copyright \xA9 2022 Allizone All Rights Reserved"});q(()=>{d.forEach(P=>{P.kill()}),g.clearMatchMedia()}),W(()=>{g.refresh(),$()});function $(){g.matchMedia({"(min-width: 368px)":()=>{t.from(n.value,{y:2e3,opacity:0,duration:.5}),t.to(n.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"gg-to",targets:n.value}},duration:3}),t.set(o.value,{y:40,opacity:0,scale:3}),t.to(o.value,{scrollTrigger:{trigger:l.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,duration:.6}),t.set(r.value,{opacity:0}),t.to(r.value,{scrollTrigger:{trigger:l.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.25}),t.set(p.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(p.value,{scrollTrigger:{trigger:a.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(f.value,{opacity:0}),t.to(f.value,{scrollTrigger:{trigger:a.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.25}),t.set(v.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),t.to(v.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),t.set(_.value,{opacity:.3}),t.to(_.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(h.value,{opacity:.3}),t.to(h.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(m.value,{opacity:.3}),t.to(m.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(x.value,{opacity:.3}),t.to(x.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(Q.value,{opacity:.3}),t.to(Q.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(y.value,{opacity:.3}),t.to(y.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(b.value,{opacity:.3}),t.to(b.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(w.value,{opacity:.3}),t.to(w.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(k.value,{opacity:.3}),t.to(k.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(C.value,{opacity:.3}),t.to(C.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(T.value,{opacity:.3}),t.to(T.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(z.value,{opacity:.3}),t.to(z.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(M.value,{opacity:.3}),t.to(M.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(N.value,{opacity:.3}),t.to(N.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(Z.value,{opacity:.3}),t.to(Z.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(L.value,{opacity:.3}),t.to(L.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(B.value,{opacity:.3}),t.to(B.value,{scrollTrigger:{trigger:l.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(S.value,{opacity:.3}),t.to(S.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(j.value,{opacity:.3}),t.to(j.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(O.value,{opacity:.3}),t.to(O.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(A.value,{opacity:.3}),t.to(A.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),t.set(E.value,{opacity:.3}),t.to(E.value,{scrollTrigger:{trigger:c.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6})},"(max-width: 367px)":()=>{}})}return{txtzero:u,logo:n,txtone:l,titleone:o,lineone:r,txttwo:a,titletwo:p,linetwo:f,txtthree:c,titlethree:v,topl:_,topll:h,topi:m,topz:x,topo:Q,topn:y,tope:b,leftl:w,leftll:k,lefti:C,leftz:T,lefto:z,leftn:M,lefte:N,righta:Z,rightl:L,rightll:B,righti:S,rightz:j,righto:O,rightn:A,righte:E,Bottomdata:H}}},lt={class:"bg-black relative overflow-hidden"},rt={class:"fixed top-0 left-4 flex flex-row text-[42px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] md:tracking-[82px] z-20"},at=e("span",null,"A",-1),it={ref:"topl"},nt={ref:"topll"},ct={ref:"topi"},ut={ref:"topz"},dt={ref:"topo"},gt={ref:"topn"},pt={ref:"tope"},ft={class:"fixed top-20 md:top-24 left-4 flex flex-col text-[42px] md:text-[32px] font-RandomNineBold text-white z-20"},vt={ref:"leftl"},_t={ref:"leftll",class:"mt-4 md:mt-10"},ht={ref:"lefti",class:"mt-4 md:mt-10"},mt={ref:"leftz",class:"mt-4 md:mt-10"},xt={ref:"lefto",class:"mt-4 md:mt-10"},Qt={ref:"leftn",class:"mt-4 md:mt-10"},yt={ref:"lefte",class:"mt-4 md:mt-10"},bt={class:"fixed bottom-8 md:bottom-0 -right-6 md:-right-4 flex flex-col text-[42px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] z-20"},wt={class:"flex flex-row justify-end"},kt={ref:"righta"},Ct={ref:"rightl"},Tt={ref:"rightll"},zt={class:"flex flex-row justify-end"},Mt={ref:"righti"},Nt={ref:"rightz"},Zt={class:"flex flex-row justify-end"},Lt={ref:"righto"},Bt={ref:"rightn"},St={ref:"righte"},jt=K('<div class="fixed -left-32 -bottom-28 z-10"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="480px" id="blobSvga" transform="rotate(-32)" style="opacity:0.3;"><defs><linearGradient id="gradienta" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:rgb(0, 12, 255);"></stop> <stop offset="100%" style="stop-color:rgb(247, 247, 247);"></stop></linearGradient></defs> <path id="blob" fill="url(#gradienta)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg></div><div class="fixed -right-32 -bottom-28 z-10"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="480px" id="blobSvgb" transform="rotate(-32)" style="opacity:0.3;"><defs><linearGradient id="gradientb" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:rgb(42, 255, 0);"></stop> <stop offset="100%" style="stop-color:rgb(247, 247, 247);"></stop></linearGradient></defs> <path id="blob" fill="url(#gradientb)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg></div><div class="fixed -top-[920px] z-10"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="1200px" id="blobSvgc" transform="rotate(-32)" style="opacity:0.5;"><defs><linearGradient id="gradientc" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:rgb(0, 200, 230);"></stop> <stop offset="100%" style="stop-color:rgb(247, 247, 247);"></stop></linearGradient></defs> <path id="blob" fill="url(#gradientc)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg></div>',3),Ot={ref:"txtzero",class:"w-full h-screen flex justify-center items-center"},At={ref:"logo",src:et,class:"gg"},Et={ref:"txtone",class:"w-full h-screen flex flex-col justify-center items-center"},Gt={ref:"titleone",class:"text-white text-center"},Rt=i(" all things are converging"),It=e("br",null,null,-1),Ht=i(" read + write + ownership"),$t=e("br",null,null,-1),Pt=i(" one, two,three "),Vt=[Rt,It,Ht,$t,Pt],qt={ref:"lineone",class:"divideline mt-40"},Wt={ref:"txttwo",class:"w-full h-screen flex flex-col justify-center items-center"},Dt={ref:"titletwo",class:"text-white text-center"},Ft=i(" is it virtual...is it reality..."),Kt=e("br",null,null,-1),Ut=i(" or anything in between"),Jt=e("br",null,null,-1),Xt=i(" lots of questions"),Yt=e("br",null,null,-1),te=i(" can be answered"),ee=[Ft,Kt,Ut,Jt,Xt,Yt,te],se={ref:"linetwo",class:"divideline mt-40"},oe={ref:"txtthree",class:"w-full h-screen flex justify-center items-center"},le={ref:"titlethree",class:"text-white text-center"},re=i(" one team - one vision"),ae=e("br",null,null,-1),ie=i(" living and breathing in"),ne=e("br",null,null,-1),ce=i(" multiple zones"),ue=e("br",null,null,-1),de=e("br",null,null,-1),ge=i(" ALLIZONE"),pe=e("br",null,null,-1),fe=i(" web3 solutions"),ve=e("br",null,null,-1),_e=e("a",{href:"mailto:info@allizone.com",class:"underline"},"contact us",-1),he=[re,ae,ie,ne,ce,ue,de,ge,pe,fe,ve,_e],me={class:"fixed bottom-5 w-full flex flex-col justify-center items-center"},xe={class:"flex flex-col justify-center items-center"},Qe={class:"text-white text-xs",href:"mailto:info@allizone.io"};function ye(d,u,n,l,o,r){return G(),D("div",lt,[e("div",rt,[at,e("span",it,"L",512),e("span",nt,"L",512),e("span",ct,"I",512),e("span",ut,"Z",512),e("span",dt,"O",512),e("span",gt,"N",512),e("span",pt,"E",512)]),e("div",ft,[e("span",vt,"L",512),e("span",_t,"L",512),e("span",ht,"I",512),e("span",mt,"Z",512),e("span",xt,"O",512),e("span",Qt,"N",512),e("span",yt,"E",512)]),e("div",bt,[e("div",wt,[e("span",kt,"A",512),e("span",Ct,"L",512),e("span",Tt,"L",512)]),e("div",zt,[e("span",Mt,"I",512),e("span",Nt,"Z",512)]),e("div",Zt,[e("span",Lt,"O",512),e("span",Bt,"N",512),e("span",St,"E",512)])]),jt,e("section",Ot,[e("img",At,null,512)],512),e("section",Et,[e("div",Gt,Vt,512),e("div",qt,null,512)],512),e("section",Wt,[e("p",Dt,ee,512),e("div",se,null,512)],512),e("section",oe,[e("p",le,he,512)],512),e("footer",me,[e("div",xe,[e("a",Qe,F(l.Bottomdata.info),1)])])])}var R=st(ot,[["render",ye]]);const be={setup(d){return(u,n)=>(G(),U(R))}},we=[{path:"/",name:"Home",component:R}],ke=J({history:X(),routes:we});const I=Y(be);I.use(ke);I.mount("#app");
