document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("datePicker"),n=document.querySelector(".booking-section__date-icon"),t=flatpickr(e,{enableTime:!0,dateFormat:"Y-m-d H:i",minDate:"today",time_24hr:!0,disableMobile:"true",onClose:function(e,n,t){e.length>0&&(t.input.value=e[0].toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}))}});n.addEventListener("click",(function(){t.open()}))}));