document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".pricing-card-button"),t=document.getElementById("planSelect");if(!e.length||!t)return void console.error("Кнопки 'BOOK NOW' або селектор планів не знайдені!");e.forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault();const r=e.closest(".pricing-card, .highlight-wrapper .highlight");if(!r)return void console.error("Картка для кнопки не знайдена");const n=r.querySelector(".pricing-card-header").textContent.trim().toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");let c=!1;[...t.options].forEach((e=>{e.textContent.trim()===n&&(e.selected=!0,c=!0)})),c||console.warn(`План "${n}" не знайдено в селекторі`),document.querySelector("#booking")?.scrollIntoView({behavior:"smooth"})}))}))}));