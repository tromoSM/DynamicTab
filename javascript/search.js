window.addEventListener(`DOMContentLoaded`,function(){
function lastcall(){
   if(document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","")!=""){
    window.open(`https://www.google.com/search?client=tromoSM-b-d&q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
 }
 document.querySelector(`[tromosm="search-in"]`).addEventListener(`keydown`,function(gurt){
    if(gurt.key=="Enter"){
        lastcall()
    }
 })
 document.querySelector(`[tromosm="enter-in-main"]`).addEventListener("click",function(){
        lastcall()
 })
})
