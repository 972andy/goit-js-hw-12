import{a as m,S as b,i as c}from"./assets/vendor-aorzEjyT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();m.defaults.baseURL="https://pixabay.com/api/";function p(a,t){const r={params:{key:"45713386-799404e4cc786512a2668b467",image_type:"photo",orientation:"horizontal",safesearch:"true",q:a,page:t,per_page:15}};return m.get("",r)}const S=document.querySelector(".gallery-list"),u=a=>{const t=a.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:n,comments:L,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${r}" alt="${e}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${s}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${n}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${L}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${v}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");S.insertAdjacentHTML("beforeend",t)},y=document.querySelector(".form"),$=document.querySelector(".gallery-list"),i=document.querySelector(".loader"),l=document.querySelector(".load-more"),h=new b(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let g="",d=1,f=0,q=15;const w=async a=>{if(a.preventDefault(),g=a.target.elements.inputField.value.toLowerCase().trim(),d=1,!g){c.error({title:"Error",message:"You need to type something in the field!",position:"topRight"});return}i.classList.remove("hidden"),$.innerHTML="";try{const t=await p(g,d);if(t.data.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.classList.add("hidden"),l.classList.add("hidden");return}else u(t.data.hits),h.refresh(),i.classList.add("hidden"),l.classList.remove("hidden"),f=t.data.totalHits}catch(t){c.error({message:`There is an Error ${t}. Try again!`,position:"topRight"})}finally{y.reset()}},x=async a=>{try{d+=1,l.classList.add("hidden"),i.classList.remove("hidden");const t=await p(g,d);if(u(t.data.hits),h.refresh(),d*q>=f){c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.classList.add("hidden"),i.classList.add("hidden");return}const r=document.querySelectorAll(".gallery-item"),e=r[r.length-t.data.hits.length].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),i.classList.add("hidden"),l.classList.remove("hidden")}catch(t){c.error({message:`There is an Error ${t}. Try again!`,position:"topRight"})}};y.addEventListener("submit",w);l.addEventListener("click",x);
//# sourceMappingURL=index.js.map
