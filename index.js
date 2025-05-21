import{S as m,a as p,i as a}from"./assets/vendor-BkryVRMc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".loader"),u=document.querySelector(".gallery");function g(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`<li class="gallery-item">
      <a href="${s}">
        <img
          class="gallery-img"
          src="${i}"
          alt="${e}"
        />
      </a>
      <div class="info">
        <p class="info-descr">Likes: ${t}</p>
        <p class="info-descr">Views: ${n}</p>
        <p class="info-descr">Comments: ${d}</p>
        <p class="info-descr">Downloads: ${f}</p>
      </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),y.refresh()}const y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(){u.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const S="https://pixabay.com/api/",q="50309371-d07515f8c9a862bfe72f170ff";function v(o){return p.get(S,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",o=>{o.preventDefault(),h();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({title:"Attentione",message:"The field cannot be empty!",position:"topRight"});return}L(),v(r).then(i=>{const s=i.hits;if(s.length===0){a.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}g(s),c.reset()}).catch(i=>{console.error("Помилка при отриманні зображень:",i.message),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:3e3})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
