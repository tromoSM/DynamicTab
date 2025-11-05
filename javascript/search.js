let available_src_eng=['google','bing',`wikipedia`,`duckduckgo`,`github`]
let search_eng ='google'
window.addEventListener(`DOMContentLoaded`,function(){
function lastcall(){
   if(document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","")!=""){
    if(search_eng=="google"){
      window.open(`https://www.google.com/search?client=DynamicTab-b-d&q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="bing"){
      window.open(`https://www.bing.com/search?pc=DynamicTab&form=DynamicTabMAIN&q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="wikipedia"){
      window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}&sourceid=DynamicTab`,'_self')
    }
    else if(search_eng=="duckduckgo"){
      window.open(`https://duckduckgo.com/?t=DynamicTab&q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="github"){
      window.open(`https://github.com/search?q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}&ref=opensearch&type=repositories`,'_self')
    }
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
function refresh$$at_c_on_change(){ 
document.querySelector(`[fill=search-engine]`).src=`visual/UI/icons/icon-search-eng-${search_eng}.png`
document.querySelector(`[fill="search-engine-r"]`).textContent=" ▾ "//needs a change.find some unicode for dis
}
refresh$$at_c_on_change()
   let o=0
document.querySelector(`[tromoSM="search-engine"]`).addEventListener('click',function(){
   if(o==0){
      icc=document.createElement(`div`)

   document.querySelector(`[tromoSM="search-engine"]`).setAttribute('tromoSM-',`search-eng-ch`)
    available_src_eng.forEach(av=>{
     if(av!=search_eng){ 
      ic=document.createElement(`img`)
      ic.src=`visual/UI/icons/icon-search-eng-${av}.png`
      ic.setAttribute(`tromoSM`,`ic-av-search-eng`)
      icc.setAttribute(`tromoSM`,`di-av-search-eng`)
      ic.setAttribute(`onclick`,`search_eng="${av}"`)
      document.querySelector(`[tromoSM="search-engine"]`).appendChild(icc)
      icc.appendChild(ic)
      o=5
      refresh$$at_c_on_change()
     }
   })}
   else{
      refresh$$at_c_on_change()
       icc.style.display='none'
       o=0
   }
})
})
