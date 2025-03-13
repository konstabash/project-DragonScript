import{A as p,S as d,a as u,i as f}from"./assets/vendor-DlapUWQT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{new p(".about-me-accordion-container",{duration:400,showMultiple:!0}).open(0);const t=document.querySelector(".about-me-swiper");t&&new d(t,{loop:!0,touchRatio:1,speed:600,grabCursor:!0,simulateTouch:!0,mousewheel:!0,navigation:{nextEl:".about-me-swiper-next"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerGroup:1,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}})});const c=document.querySelector(".previous-arrow-btn"),m=document.querySelector(".next-arrow-btn"),l=new d(".proj-swiper",{effect:"cube",cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},direction:"horizontal",loop:!1,spaceBetween:40,speed:2e3,navigation:{nextEl:".press-button.next-arrow-btn",prevEl:".press-button.previous-arrow-btn",disabledClass:"disabled"},keyboard:{enabled:!0,onlyInViewport:!1}});c.classList.add("disabled");l.on("slideChange",()=>{l.isBeginning?c.classList.add("disabled"):c.classList.remove("disabled"),l.isEnd?m.classList.add("disabled"):m.classList.remove("disabled")});document.addEventListener("DOMContentLoaded",()=>{new p(".faq-accordion-container",{duration:400,showMultiple:!0})});window.addEventListener("load",()=>{const e=document.querySelector("#covers"),t=document.querySelectorAll(".marquee__line");if(!e)return;new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting?t.forEach(n=>n.style.animationPlayState="running"):t.forEach(n=>n.style.animationPlayState="paused")})},{threshold:.3}).observe(e)});async function w(){try{const{data:e}=await u.get("https://portfolio-js.b.goit.study/api/reviews");return e}catch{return f.error({title:"Error",message:"Failed to load reviews. Please try again later.",position:"topRight",timeout:3e3}),[]}}function g(e){const t=document.querySelector(".reviews-swiper-wrapper");if(e.length===0){t.innerHTML='<div class="reviews-not-found-container"><p class="reviews-not-found">Not found</p></div>';return}t.innerHTML=e.map(o=>`
      <li class="swiper-slide">
        <div class="review-card">
          <img src="${o.avatar_url}" alt="${o.author}" class="reviews-avatar">
          <h3 class="reviews-swiper-title">${o.author}</h3>
          <p class="reviews-swiper-text">${o.review}</p>
        </div>
      </li>
    `).join("")}function v(){const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn"),o=new d(".reviews-swiper",{direction:"horizontal",loop:!1,spaceBetween:16,speed:2e3,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn",disabledClass:"reviews-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});e.classList.add("reviews-disabled"),o.on("slideChange",()=>{o.isBeginning?e.classList.add("reviews-disabled"):e.classList.remove("reviews-disabled"),o.isEnd?t.classList.add("reviews-disabled"):t.classList.remove("reviews-disabled")})}async function y(){const e=await w();g(e),v()}document.addEventListener("DOMContentLoaded",y);const h="/project-DragonScript/assets/sprite-bhXrWSpf.svg#icon-error";u.defaults.baseURL="https://portfolio-js.b.goit.study/api";const r={userEmail:document.querySelector('[name="email"]'),userComment:document.querySelector('[name="comment"]'),form:document.querySelector(".footer-form"),crossBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector(".backdrop"),isValidMessage:document.querySelector(".form-error-message")},L=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,E={position:"topRight",message:"An error occurred while processing your request. Please try again.",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ed3b44",iconUrl:h};r.form.addEventListener("submit",C);r.userEmail.addEventListener("blur",x);r.userComment.addEventListener("blur",V);r.modal.addEventListener("click",B);r.crossBtn.addEventListener("click",b);r.userEmail.addEventListener("input",e=>{e.currentTarget.style.borderBottomColor="rgba(250, 250, 250, 0.5)",r.isValidMessage.textContent=""});r.userComment.addEventListener("input",e=>e.currentTarget.style.borderBottomColor="rgba(250, 250, 250, 0.5)");document.addEventListener("keydown",e=>{e.code==="Escape"&&(r.modal.classList.remove("is-open"),document.body.style.overflow="")});async function C(e){if(e.preventDefault(),r.userEmail.dataset.state==="error")return;r.isValidMessage.textContent="",r.userEmail.style.borderBottomColor="rgba(250, 250, 250, 0.2)",r.userComment.style.borderBottomColor="rgba(250, 250, 250, 0.2)";const t=e.currentTarget.elements,o={email:t[0].value.trim(),comment:t[1].value.trim()};if(o.comment!=="")try{await S(o),e.target.reset(),b(),document.body.style.overflow="hidden"}catch{f.error(E);return}}async function S(e){const{data:t}=await u.post("/requests",e);return t}function M(e){const t="#e74a3b";r.isValidMessage.textContent="Invalid email, try again",r.isValidMessage.style.color=t,e.currentTarget.style.borderBottomColor=t,r.isValidMessage.style.marginTop="4px"}function q(e){const t="#3cbc81";r.isValidMessage.textContent="Success!",r.isValidMessage.style.color=t,e.currentTarget.style.borderBottomColor=t,r.isValidMessage.style.marginTop="4px"}function x(e){const t=e.currentTarget.value.trim();if(t===""){r.isValidMessage.textContent="",e.currentTarget.style.borderBottomColor="rgba(250, 250, 250, 0.2)";return}L.test(t)?(q(e),e.currentTarget.dataset.state="success"):(M(e),e.currentTarget.dataset.state="error")}function V(e){if(e.currentTarget.value.trim()===""){e.currentTarget.style.borderBottomColor="rgba(250, 250, 250, 0.2)";return}}function b(){r.modal.classList.toggle("is-open"),document.body.style.overflow=""}function B(e){e.currentTarget===e.target&&(r.modal.classList.remove("is-open"),document.body.style.overflow="")}
//# sourceMappingURL=index.js.map
