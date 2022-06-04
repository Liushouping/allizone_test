import{d as Y,o as H,n as D,a as E,c as F,b as t,g as e,S as $,r as o,e as G,f as K,t as Q,h as g,i as U,j as J,k as tt,l as et}from"./vendor.24bb719d.js";const st=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};st();var I=(f,p)=>{const n=f.__vccOpts||f;for(const[a,r]of p)n[a]=r;return n};const ot=Y({name:"Canvas",props:{},setup(){const f=()=>{D(()=>{const p=document.querySelector("canvas"),n=p.getContext("2d");let a,r;function c(){a=window.innerWidth,r=window.innerHeight,p.width=a,p.height=r}c();function d(){let s;return function l(u){s&&(cancelAnimationFrame(s),s=null),s=requestAnimationFrame(function(){u().update(s),l(u)})}}function i(s,l){return s+Math.random()*(l-s)}function b(s,l){const u={x:i(-s*l,s*l),y:i(-s,s)};return{x:u.x.toFixed(0),y:u.y.toFixed(0)}}function h(s,l){return(s*l+i(-l/8,l/8)).toFixed(0)}function w(s,l){return(r/2+i(-1,1)).toFixed(0)}function k(){return function(s,l,u){return u===0?(s=`M${l.x},${l.y}`,s):u===1?(s+=`Q${l.dx},${l.dy},${l.x},${l.y}`,s):(s+=`T${l.x},${l.y}`,s)}}function v(){const s=Math.floor(i(3,5)),l=a/s,u=[];for(let _=0;_<=s;_+=1){let y=b(l,_);u.push({dx:y.x,dy:y.y,x:h(_,l),y:w()})}return u.reduce(k(),"")}class x{constructor(l){this.color=l,this.path=v(),this.scale={x:i(-1,1),y:i(-1,1)},this.alpha=0,this.hue=l.h,this.rangeX=i(.99,1.01)**9,this.rangeY=i(.9,1.1)**9,this.translate={tx:i(-.2,.5),ty:i(-.2,.5)},this.translateRange={rx:i(-.5,.5),ry:i(-.5,.5)},this.t=0,this.tIncrement=i(1e-4,1e-5),this.alphaOffset=i(.2,.8),this.alphaSpeed=i(400,1e3)}getColorString(){return`hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.alpha})`}updateTranslate(){this.translate.x+=10*this.translateRange.rx,this.translate.y+=10*this.translateRange.ry}resetScale(){this.rangeX=i(.99,1.01)**9,this.rangeY=i(.99,1.01)**9,this.scale={x:i(-1,1),y:i(-1,1)}}updateScale(){this.scale.x+=.001*this.rangeX+this.t,this.scale.y+=.001*this.rangeY+this.t}updateHue(){this.hue+=Math.sin(this.t*1e3)}resetHue(){this.hue=this.color.h}updateAlpha(){this.alpha=this.alphaOffset*Math.sin(this.t*this.alphaSpeed+.1)**2}resetAlpha(){this.alpha=0,this.alphaOffset=i(.1,.6),this.alphaSpeed=i(300,1e3)}updateT(){this.t+=this.tIncrement}resetT(){Math.random()<.9&&(this.t=0)}rotate(){this.rotation+=this.t}update(){return this.updateT(),this.updateScale(),this.updateHue(),this.rotate(),this.alpha<=1&&this.updateAlpha(),this.alpha<.001&&(this.resetHue(),this.path=v(),this.resetAlpha(),this.resetScale(),this.resetT()),this}draw(){return n.save(),n.beginPath(),n.strokeStyle=this.getColorString(),n.rotate(this.rotation),n.translate(a/2,r/2),n.scale(this.scale.x,this.scale.y),n.stroke(new Path2D(this.path)),n.restore(),this}}function C(){var s=n.createRadialGradient(a/2,r/2,0,a/2,r/2,Math.max(a/2,r/2));s.addColorStop(0,"hsla(240, 100%, 15%, 0.2)"),s.addColorStop(1,"hsla(180deg, 35%, 15%, 0.02)"),n.fillStyle=s,n.fillRect(0,0,a,r)}const T=d();function m(){c();const s=[];for(let l=0;l<20;l+=1)s.push(new x({h:240,s:100,l:50,a:1}).draw()),s.push(new x({h:120,s:100,l:50,a:1}).draw());T(function(){return{update:l=>{l%4||C(),s.forEach(u=>u.update().draw())}}})}m(),window.addEventListener("resize",()=>{requestAnimationFrame(m)},{passive:!0})})};H(()=>{f()})}}),lt={class:"absolute w-full top-32 md:top-80 lg:top-32 2xl:top-44 z-10 px-6 lg:px-14 opacity-60"},rt=t("canvas",{id:"canvas",class:"h-[210px] lg:h-[260px] w-full"},null,-1),at=[rt];function it(f,p,n,a,r,c){return E(),F("div",lt,at)}var nt=I(ot,[["render",it]]),ct="/allizone-logo.png";e.registerPlugin($);const ut={name:"Home",components:{Canvas:nt},setup(){const f=$.getAll(),p=o(null),n=o(null),a=o(null),r=o(null),c=o(null),d=o(null),i=o(null),b=o(null),h=o(null),w=o(null),k=o(null),v=o(null),x=o(null),C=o(null),T=o(null),m=o(null),s=o(null),l=o(null),u=o(null),z=o(null),_=o(null),y=o(null),S=o(null),A=o(null),L=o(null),N=o(null),M=o(null),O=o(null),R=o(null),j=o(null),P=o(null),B=o(null);o(null),o(null),o(null),o(null),o(null);const Z=G({info:"Copyright \xA9 2022 Allizone All Rights Reserved"});K(()=>{f.forEach(X=>{X.kill()}),$.clearMatchMedia()}),H(()=>{$.refresh(),W()});function W(){$.matchMedia({"(min-width: 368px)":()=>{e.from(n.value,{y:2e3,opacity:0,scale:0,duration:.5}),e.to(n.value,{scrollTrigger:{start:"top -80",end:"99999",toggleClass:{className:"logo-to",targets:n.value}},scale:1}),e.set(r.value,{y:40,opacity:0,scale:3}),e.to(r.value,{scrollTrigger:{trigger:a.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,duration:.6}),e.set(c.value,{opacity:0}),e.to(c.value,{scrollTrigger:{trigger:a.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.25}),e.set(i.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),e.to(i.value,{scrollTrigger:{trigger:d.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),e.set(b.value,{opacity:0}),e.to(b.value,{scrollTrigger:{trigger:d.value,start:"top +300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.25}),e.set(w.value,{y:40,filter:"blur(16px)",opacity:0,scale:3}),e.to(w.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},y:0,scale:1,opacity:1,filter:"blur(0px)",duration:.6}),e.set(k.value,{opacity:.3}),e.to(k.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(v.value,{opacity:.3}),e.to(v.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(x.value,{opacity:.3}),e.to(x.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(C.value,{opacity:.3}),e.to(C.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(T.value,{opacity:.3}),e.to(T.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(m.value,{opacity:.3}),e.to(m.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(s.value,{opacity:.3}),e.to(s.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(l.value,{opacity:.3}),e.to(l.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(u.value,{opacity:.3}),e.to(u.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(z.value,{opacity:.3}),e.to(z.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(_.value,{opacity:.3}),e.to(_.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(y.value,{opacity:.3}),e.to(y.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(S.value,{opacity:.3}),e.to(S.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(A.value,{opacity:.3}),e.to(A.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(L.value,{opacity:.3}),e.to(L.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(N.value,{opacity:.3}),e.to(N.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(M.value,{opacity:.3}),e.to(M.value,{scrollTrigger:{trigger:a.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(O.value,{opacity:.3}),e.to(O.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(R.value,{opacity:.3}),e.to(R.value,{scrollTrigger:{trigger:d.value,start:"top +=100px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(j.value,{opacity:.3}),e.to(j.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(P.value,{opacity:.3}),e.to(P.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6}),e.set(B.value,{opacity:.3}),e.to(B.value,{scrollTrigger:{trigger:h.value,start:"top +=300px",end:"+=300",scrub:!0,toggleClass:"active",markers:!1},opacity:1,duration:.6})},"(max-width: 367px)":()=>{}})}return{txtzero:p,logo:n,txtone:a,titleone:r,lineone:c,txttwo:d,titletwo:i,linetwo:b,txtthree:h,titlethree:w,topl:k,topll:v,topi:x,topz:C,topo:T,topn:m,tope:s,leftl:l,leftll:u,lefti:z,leftz:_,lefto:y,leftn:S,lefte:A,righta:L,rightl:N,rightll:M,righti:O,rightz:R,righto:j,rightn:P,righte:B,Bottomdata:Z}}},dt={class:"bg-black relative overflow-hidden"},pt={class:"fixed top-0 left-4 flex flex-row text-[16px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] md:tracking-[82px] z-20"},ht=t("span",null,"A",-1),gt={ref:"topl"},ft={ref:"topll"},_t={ref:"topi"},vt={ref:"topz"},xt={ref:"topo"},mt={ref:"topn"},yt={ref:"tope"},bt={class:"fixed top-20 md:top-24 left-4 flex flex-col text-[16px] md:text-[32px] font-RandomNineBold text-white z-20"},wt={ref:"leftl"},kt={ref:"leftll",class:"mt-4 md:mt-10"},Ct={ref:"lefti",class:"mt-4 md:mt-10"},Tt={ref:"leftz",class:"mt-4 md:mt-10"},$t={ref:"lefto",class:"mt-4 md:mt-10"},zt={ref:"leftn",class:"mt-4 md:mt-10"},St={ref:"lefte",class:"mt-4 md:mt-10"},At={class:"fixed bottom-8 md:bottom-0 -right-6 md:-right-4 flex flex-col text-[16px] md:text-[32px] font-RandomNineBold text-white tracking-[36px] z-20"},Lt={class:"flex flex-row justify-end"},Nt={ref:"righta"},Mt={ref:"rightl"},Ot={ref:"rightll"},Rt={class:"flex flex-row justify-end"},jt={ref:"righti"},Pt={ref:"rightz"},Bt={class:"flex flex-row justify-end"},Et={ref:"righto"},Ht={ref:"rightn"},Ft={ref:"righte"},It=t("div",{class:"fixed left-[10px] lg:left-[450px] top-2 z-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 top_animate",style:{"background-color":"#00fcff"}},null,-1),qt=t("div",{class:"fixed right-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 right_animate",style:{"background-color":"#2aff00"}},null,-1),Vt=t("div",{class:"fixed left-8 bottom-8 z-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 left_animate",style:{"background-color":"#000cff"}},null,-1),Zt={ref:"txtzero",class:"w-full h-screen flex justify-center items-center"},Wt={ref:"logo",src:ct,class:"logo z-50"},Xt={ref:"txtone",class:"w-full h-screen flex flex-col justify-center items-center"},Yt={ref:"titleone",class:"text-white text-center"},Dt=g(" all things are converging"),Gt=t("br",null,null,-1),Kt=g(" read + write + ownership"),Qt=t("br",null,null,-1),Ut=g(" one, two,three "),Jt=[Dt,Gt,Kt,Qt,Ut],te={ref:"lineone",class:"divideline mt-40"},ee={ref:"txttwo",class:"w-full h-screen flex flex-col justify-center items-center"},se={ref:"titletwo",class:"text-white text-center"},oe=g(" is it virtual...is it reality..."),le=t("br",null,null,-1),re=g(" or anything in between"),ae=t("br",null,null,-1),ie=g(" lots of questions"),ne=t("br",null,null,-1),ce=g(" can be answered"),ue=[oe,le,re,ae,ie,ne,ce],de={ref:"linetwo",class:"divideline mt-40"},pe={ref:"txtthree",class:"w-full h-screen flex justify-center items-center"},he={ref:"titlethree",class:"text-white text-center"},ge=g(" one team - one vision"),fe=t("br",null,null,-1),_e=g(" living and breathing in"),ve=t("br",null,null,-1),xe=g(" multiple zones"),me=t("br",null,null,-1),ye=t("br",null,null,-1),be=g(" ALLIZONE"),we=t("br",null,null,-1),ke=g(" web3 solutions"),Ce=t("br",null,null,-1),Te=t("a",{href:"mailto:info@allizone.io",class:"underline"},"contact us",-1),$e=[ge,fe,_e,ve,xe,me,ye,be,we,ke,Ce,Te],ze={class:"fixed bottom-5 w-full flex flex-col justify-center items-center"},Se={class:"flex flex-col justify-center items-center"},Ae={class:"text-white text-xs",href:"mailto:info@allizone.io"};function Le(f,p,n,a,r,c){return E(),F("div",dt,[t("div",pt,[ht,t("span",gt,"L",512),t("span",ft,"L",512),t("span",_t,"I",512),t("span",vt,"Z",512),t("span",xt,"O",512),t("span",mt,"N",512),t("span",yt,"E",512)]),t("div",bt,[t("span",wt,"L",512),t("span",kt,"L",512),t("span",Ct,"I",512),t("span",Tt,"Z",512),t("span",$t,"O",512),t("span",zt,"N",512),t("span",St,"E",512)]),t("div",At,[t("div",Lt,[t("span",Nt,"A",512),t("span",Mt,"L",512),t("span",Ot,"L",512)]),t("div",Rt,[t("span",jt,"I",512),t("span",Pt,"Z",512)]),t("div",Bt,[t("span",Et,"O",512),t("span",Ht,"N",512),t("span",Ft,"E",512)])]),It,qt,Vt,t("section",Zt,[t("img",Wt,null,512)],512),t("section",Xt,[t("div",Yt,Jt,512),t("div",te,null,512)],512),t("section",ee,[t("p",se,ue,512),t("div",de,null,512)],512),t("section",pe,[t("p",he,$e,512)],512),t("footer",ze,[t("div",Se,[t("a",Ae,Q(a.Bottomdata.info),1)])])])}var q=I(ut,[["render",Le]]);const Ne={setup(f){return(p,n)=>(E(),U(q))}},Me=[{path:"/",name:"Home",component:q}],Oe=J({history:tt(),routes:Me});const V=et(Ne);V.use(Oe);V.mount("#app");
