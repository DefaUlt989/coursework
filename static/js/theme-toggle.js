document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-toggle-mobile"),c=document.querySelector(".darkCircle"),s=document.querySelector(".lightCircle"),n=document.body,o=document.getElementById("logo"),i=document.querySelector(".neko-inn-mobile-menu"),a=document.querySelector(".menu-toggle");n.classList.add("no-transition");const d=!0;function l(a){!function(a){const d=a?"light":"dark";o.src=a?o.getAttribute("data-light"):o.getAttribute("data-dark"),n.classList.remove("light-theme","dark-theme"),n.classList.add(`${d}-theme`),c.classList.toggle("grow",!a),s.classList.toggle("grow",a),e.checked=a,t.checked=a,i.classList.contains("active")&&i.classList.remove("active")}(a.target.checked)}n.classList.remove("light-theme","dark-theme"),n.classList.add("light-theme"),o.src=o.getAttribute("data-light"),e.checked=d,t.checked=d,c.classList.toggle("grow",!1),s.classList.toggle("grow",d),e.addEventListener("change",l),t.addEventListener("change",l),a.addEventListener("click",(function(){i.classList.toggle("active")})),requestAnimationFrame((()=>{n.classList.remove("no-transition")}))}));