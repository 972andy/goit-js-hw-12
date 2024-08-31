import{a as p,S as $,i as n}from"./assets/vendor-aorzEjyT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();p.defaults.baseURL="https://pixabay.com/api/";function y(a,e){const r={params:{key:"45713386-799404e4cc786512a2668b467",image_type:"photo",orientation:"horizontal",safesearch:"true",q:a,page:e,per_page:15}};return p.get("",r)}const q=document.querySelector(".gallery-list"),u=a=>{const e=a.map(({webformatURL:r,largeImageURL:d,tags:t,likes:s,views:o,comments:b,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${d}">
          <img class="gallery-image" src="${r}" alt="${t}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${s}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${o}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${b}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${S}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");q.insertAdjacentHTML("beforeend",e)},h=document.querySelector(".form"),f=document.querySelector(".gallery-list"),i=document.querySelector(".loader"),l=document.querySelector(".load-more"),L=new $(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let g="",c=1,m=0,v=0,x=15;const O=async a=>{if(a.preventDefault(),g=a.target.elements.inputField.value.toLowerCase().trim(),c=1,!g){n.error({title:"Error",message:"You need to type something in the field!",position:"topRight"});return}i.classList.remove("hidden"),f.innerHTML="";try{const e=await y(g,c);if(e.data.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.classList.add("hidden"),l.classList.add("hidden");return}else u(e.data.hits),L.refresh(),i.classList.add("hidden"),l.classList.remove("hidden"),v=e.data.totalHits}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}finally{h.reset()}},P=async a=>{try{c+=1,l.classList.add("hidden"),i.classList.remove("hidden");const e=await y(g,c);if(u(e.data.hits),c*x>=v){n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.classList.add("hidden"),i.classList.add("hidden");return}m=f.querySelector(".gallery-item").getBoundingClientRect().height,scrollBy({top:m*2,behavior:"smooth"}),i.classList.add("hidden"),l.classList.remove("hidden"),L.refresh()}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}};h.addEventListener("submit",O);l.addEventListener("click",P);
//# sourceMappingURL=index.js.map
