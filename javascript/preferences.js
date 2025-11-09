window.addEventListener(`DOMContentLoaded`,function(){
 document.querySelectorAll(`[action]`).forEach(all=>{
 let a=all.getAttribute(`action`)
  if(a=="file-$-wallpaper"){
 
  let g =document.createElement('input')
  g.setAttribute('type','file')
  g.setAttribute('hidden',"")
  g.setAttribute('tromoSM-action','file0wallpaper0')
  g.setAttribute("accept",'image/*, video/* ')
  document.body.appendChild(g)
  document.querySelector(`[action='file-$-wallpaper']`).addEventListener("click",function(){
   g.click()  
  }) 
  g.addEventListener('change',function(){
    let fuhmetwin=this.files[0]
    if(fuhmetwin.size>3*1024*1024){
        alert(`File must be under 3MB. Might fail to continue.\nCurrent file size : ${parseInt(fuhmetwin.size/(1024*1024))}MB`)
    }
    if(!fuhmetwin) return;
    const gurtahh= new FileReader()
    gurtahh.onload=()=>{
        const imim=gurtahh.result
        localStorage.setItem("imim_data_wallpaper",imim)
        document.querySelectorAll(`[tromoSM=background-main]`).forEach(ol=>{
            ol.remove()
        })
   if(fuhmetwin.type.startsWith("image/")){
   let  main=document.createElement("img")
    main.setAttribute("tromoSM",`background-main`)
    main.src=imim
    document.body.appendChild(main)
    localStorage.setItem("imim_data_wallpaper_type",'img')
   }
   else if(fuhmetwin.type.startsWith("video/")){
    main=document.createElement("video")
    let appendedsource=document.createElement("source")
    main.setAttribute("tromoSM",`background-main`)
    main.setAttribute("autoplay",``)
    main.setAttribute("muted",``)
    main.setAttribute("loop",``)
    appendedsource.src=imim
    main.appendChild(appendedsource)
    localStorage.setItem("imim_data_wallpaper_type",'vid')
    document.body.appendChild(main)
    }
   }
    gurtahh.readAsDataURL(fuhmetwin)

  })
}
 else if(a=="file-$-favicon"){
 
    
  let favin =document.createElement('input')
  favin.setAttribute('type','file')
  favin.setAttribute('hidden',"")
  favin.setAttribute('tromoSM-action','file0favicon0')
  favin.setAttribute("accept",'image/*')
  document.body.appendChild(favin)
  document.querySelector(`[action='file-$-favicon']`).addEventListener("click",function(){
   favin.click()  
  }) 
  favin.addEventListener('change',function(){
    let gurtbelike=this.files[0]
    if(gurtbelike.size>(1024*1024)/2){
        alert(`File must be under 0.5MB. Might fail to continue.\nCurrent file size : ${parseInt(gurtbelike.size/(1024*1024))}MB`)
    }
    if(!gurtbelike) return;
    const gurtahh= new FileReader()
    gurtahh.onload=()=>{
        const imim=gurtahh.result
        localStorage.setItem("imim_data_favicon",imim)
        document.querySelectorAll(`[rel=icon]`).forEach(ol=>{
            ol.remove()
        })
   if(gurtbelike.type.startsWith("image/")){
   let  main=document.createElement("link")
    main.setAttribute("rel",`icon`)
    main.setAttribute('href',imim)
    document.head.appendChild(main)
   }
   }
    gurtahh.readAsDataURL(gurtbelike)

  })
    
 }

 else if(a=="file-$-add_search_engines"){
document.querySelector(`[action="file-$-add_search_engines"]`).addEventListener('click',function(){

  let available_src_eng_all=['google','bing',`wikipedia`,`duckduckgo`,`github`,'chatgpt','youtube','instagram','yahoo','url']
  let full_S=document.createElement("div")
  full_S.setAttribute("tromoSM",'full-s-notiff')
  let all0=document.createElement("div")
  document.body.appendChild(full_S)
  full_S.appendChild(all0)  
 let close$$$toolpref=document.createElement(`button`)
 full_S.appendChild(close$$$toolpref)
 close$$$toolpref.addEventListener("click",function(){
    full_S.remove()
 })
 close$$$toolpref.setAttribute(`tromoSM`,`close$preff`)
 close$$$toolpref.innerHTML="×"
 close$$$toolpref.style.display="flex"
  all0.setAttribute("tromoSM",'av-tab-src')
  available_src_eng_all.forEach(yo=>{
  let mini0=document.createElement("div")
  mini0.setAttribute('tromoSM','append-all-av')
  all0.appendChild(mini0)
  mini0.innerText=yo
  let in_mini0=document.createElement("input")

  if(yo==search_eng_default){
  in_mini0.setAttribute("type","radio")
  in_mini0.setAttribute("start","doubleindex")
  }
  else{
  in_mini0.setAttribute("type","checkbox")
  }
  in_mini0.setAttribute("tromoSM","in-radio-ap")
  if(available_src_eng.includes(yo)){
   in_mini0.setAttribute("checked","")
   in_mini0.setAttribute("gurt","1")
  }
  in_mini0.setAttribute('action-dump', yo)
  mini0.appendChild(in_mini0)
  mini0.addEventListener('click',function(){
  in_mini0.click()
})
 in_mini0.addEventListener('click',function(e){
    e.stopPropagation()
   if(in_mini0.getAttribute('gurt')=="1"){
    available_src_eng.splice(available_src_eng.indexOf(yo),1)   
}
   else{
   available_src_eng.push(yo)
   }

 localStorage.setItem('pref-data-search-eng',JSON.stringify(available_src_eng))

 })
  })
})
 }

 })
})
