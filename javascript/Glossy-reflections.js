let arr_gloss$$_all=[
  "inp-wrap",
  "search-engine",
  "enter-in-main",
 "di-av-search-eng",
  "weather-w",
  "bttn-appnd-op-preff", //mighjt not wrk bc it gets made and removed fromda dom everytime it appears unlike other elements
 "close$preff",
 "append-all-av" //same as bttn append op preff
]

window.addEventListener('DOMContentLoaded',function(){
  if(localStorage.getItem("ui-ui-data-gloss")=='Gloss'){
    arr_gloss$$_all.forEach(yo=>{
    document.querySelectorAll(`[tromoSM='${yo}']`).forEach(yoo=>{
    yoo.style.boxShadow="5px 5px 5px -5px rgba(255, 255, 255, 0.39) inset, -5px -5px 5px -5px rgba(255, 255, 255, 0.39) inset, 0px 0px 15px rgba(0, 0, 0, 0.329)"
    })
  })}
  else{
  arr_gloss$$_all.forEach(yo=>{
    document.querySelectorAll(`[tromoSM='${yo}']`).forEach(yoo=>{
    yoo.style.boxShadow="none"
    })
  })
  }
    
})
