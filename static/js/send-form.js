const emailJSScript=document.createElement("script");function sendEmail_S(e){e.preventDefault();const t=document.getElementById("email").value.trim(),n=document.getElementById("error-email-s"),l=document.getElementById("success-message-s");n.textContent="",l.textContent="",n.style.display="none",l.style.display="none";if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t))return n.textContent="Please enter a valid email address",void(n.style.display="block");e.target.querySelector("button").disabled=!0;let a={email:t};emailjs.send("service_nu0ag27","template_8pbtvji",a).then((function(t){200===t.status?(l.textContent="You've successfully subscribed to our newsletter!",l.style.display="block",e.target.reset()):(n.textContent="An error occurred. Please try again later.",n.style.display="block")})).catch((function(e){console.error("Error:",e),n.textContent="An error occurred. Please try again later.",n.style.display="block"})).finally((()=>{e.target.querySelector("button").disabled=!1}))}function sendEmail(e){e.preventDefault();const t=document.getElementById("fullName").value,n=document.getElementById("booking_email").value,l=document.getElementById("phoneNumber").value,a=document.getElementById("catName").value,r=document.getElementById("datePicker").value,s=document.getElementById("petCount").value,o=document.getElementById("planSelect").value,i=document.getElementById("error-email"),c=document.getElementById("success-message");i.textContent="",c.textContent="",i.style.display="none",c.style.display="none";if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(n))return i.innerText="Please enter a valid email address",void(i.style.display="block");e.target.querySelector("button").disabled=!0;let d={fullName:t,booking_email:n,phoneNumber:l,catName:a,datePicker:r,petCount:s,planSelect:o};emailjs.send("service_nu0ag27","template_ztjd86m",d).then((function(e){200===e.status?(c.innerText="Your booking has been successfully submitted!",c.style.display="block"):(i.innerText="An error occurred. Please try again later.",i.style.display="block")})).catch((function(e){console.error("Error sending email:",e),i.innerText="An error occurred. Please try again later.",i.style.display="block"})).finally((()=>{e.target.querySelector("button").disabled=!1}))}emailJSScript.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",document.head.appendChild(emailJSScript),emailJSScript.onload=function(){emailjs.init({publicKey:"0SuMCSLgLulwtbq_m"})};