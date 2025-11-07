window.addEventListener(`DOMContentLoaded`,function(){
 document.querySelectorAll(`[action]`).forEach(all=>{
  a=all.getAttribute(`action`)
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
    fuhmetwin=this.files[0]
    if(fuhmetwin.size>4*1024*1024){
        alert(`File must be under 3.7MB. Might fail to continue.\nCurrent file size : ${parseInt(fuhmetwin.size/(1024*1024))}MB`)
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
    main=document.createElement("img")
    main.setAttribute("tromoSM",`background-main`)
    main.src=imim
    document.body.appendChild(main)
    localStorage.setItem("imim_data_wallpaper_type",'img')
   }
   else if(fuhmetwin.type.startsWith("video/")){
    main=document.createElement("video")
    appendedsource=document.createElement("source")
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
 })
})
