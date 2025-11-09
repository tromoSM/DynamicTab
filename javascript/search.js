let available_src_eng;
if(localStorage.getItem('pref-data-search-eng')){
     available_src_eng= JSON.parse(localStorage.getItem('pref-data-search-eng'))
}
else{
   available_src_eng=['google','bing',`wikipedia`,`duckduckgo`,`github`,'chatgpt','url']
}
let search$$load = false;
let search_eng_default ='google'
let search_eng = search_eng_default
window.addEventListener(`DOMContentLoaded`,function(){
document.querySelector(`[tromosm="search-in"]`).setAttribute(`placeholder`, `Search with ${search_eng}`)

   function lastcall(){
   search$$load=true
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
    else if(search_eng=="chatgpt"){
      window.open(`https://chat.openai.com/?q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="youtube"){
      window.open(`https://www.youtube.com/results?search_query=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="instagram"){
      window.open(`https://www.instagram.com/explore/search/keyword/?q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="yahoo"){
      window.open(`https://search.yahoo.com/search?p=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else if(search_eng=="url"){
    if(document.querySelector(`[tromoSM="search-in"]`).value.includes(`https://`)){
      window.open(`${document.querySelector(`[tromoSM="search-in"]`).value.slice(8)}`,'_self')
    }
    else if(document.querySelector(`[tromoSM="search-in"]`).value.includes(`http://`)){
      window.open(`${document.querySelector(`[tromoSM="search-in"]`).value.slice(7)}`,'_self')
    }
    else if(document.querySelector(`[tromoSM="search-in"]`).value.includes(" ")){
      window.open(`https://www.google.com/search?client=DynamicTab-b-d&q=${document.querySelector(`[tromoSM="search-in"]`).value.replaceAll(" ","+")}`,'_self')
    }
    else{
      window.open(`https://${document.querySelector(`[tromoSM="search-in"]`).value}`,'_self')
    }
   }
 }}
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
document.querySelector(`[fill="search-engine-r"]`).textContent=""
}
refresh$$at_c_on_change()
   let o=0
  window.searchEng$$main = function() {
   if(o==0){
      icc=document.createElement(`div`)

   document.querySelector(`[tromoSM="search-engine"]`).setAttribute('tromoSM-',`search-eng-ch`)
    available_src_eng.forEach(av=>{
     if(av!=search_eng){ 
      ic=document.createElement(`img`)
      ic.src=`visual/UI/icons/icon-search-eng-${av}.png`
      ic.setAttribute(`tromoSM`,`ic-av-search-eng`)
      icc.setAttribute(`tromoSM`,`di-av-search-eng`)
      ic.addEventListener('click',function(){
         search_eng=av
         console.log('yo')
      })
      ic.addEventListener('click',function(){
         document.querySelector(`[tromoSM="search-engine"]`).click()
      })
      document.querySelector(`[tromoSM="inp-wrap"]`).appendChild(icc)
      icc.appendChild(ic)
      o=5
      refresh$$at_c_on_change()
     if(search$$load=='url'){
          document.querySelector(`[tromosm="search-in"]`).setAttribute(`placeholder`, `Enter url to visit`)}
      else{
          document.querySelector(`[tromosm="search-in"]`).setAttribute(`placeholder`, `Search with ${search_eng}`)
      }
     }
   })}
   else{
      refresh$$at_c_on_change()
       icc.style.display='none'
       if(search$$load=='url'){
          document.querySelector(`[tromosm="search-in"]`).setAttribute(`placeholder`, `Enter url to visit`)}
      else{
          document.querySelector(`[tromosm="search-in"]`).setAttribute(`placeholder`, `Search with ${search_eng}`)
      }
       o=0
   }
}
document.querySelector(`[tromoSM="search-engine"]`).addEventListener('click',searchEng$$main)
})

