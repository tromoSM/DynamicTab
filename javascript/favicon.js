window.addEventListener("DOMContentLoaded",function(){
if(localStorage.getItem("imim_data_favicon")){
 let main=document.createElement("link")
     main.setAttribute("rel",`icon`)
     main.setAttribute('href',localStorage.getItem("imim_data_favicon"))
     document.head.appendChild(main)
}})
