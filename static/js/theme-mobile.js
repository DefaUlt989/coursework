document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-toggle-mobile"),o=document.querySelector(".darkCircle"),n=document.querySelector(".lightCircle"),s=document.body,c=document.querySelector(".neko-inn-mobile-menu"),i=document.querySelector(".menu-toggle"),l=document.querySelector(".close-icon");if(s.classList.add("no-animation"),!(e&&t&&c&&i&&l))return void console.error("Не удалось найти один или несколько элементов в DOM.");const d="light";function a(e){const t=e?"light":"dark";s.classList.remove("light-theme","dark-theme"),o.classList.toggle("grow",!e),n.classList.toggle("grow",e),setTimeout((()=>{s.classList.add(`${t}-theme`),n.classList.remove("grow"),o.classList.remove("grow"),r(),m()}),300)}function r(){const e=document.getElementById("logo");s.classList.contains("dark-theme")?e.src=e.getAttribute("data-light"):e.src=e.getAttribute("data-dark")}function m(){c.classList.contains("open")&&(c.classList.remove("open"),i.classList.remove("active"),document.body.style.overflow="")}s.classList.remove("light-theme","dark-theme"),s.classList.add(`${d}-theme`),e.checked=!0,t.checked=!0,e.addEventListener("change",(function(){a(this.checked),s.classList.remove("no-animation")})),t.addEventListener("change",(function(){a(this.checked),s.classList.remove("no-animation")})),i.addEventListener("click",(function(){c.classList.toggle("open"),i.classList.toggle("active"),document.body.style.overflow=c.classList.contains("open")?"hidden":""})),l.addEventListener("click",m),r()}));