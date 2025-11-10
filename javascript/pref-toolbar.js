pref$$setting=['change favicon','change wallpaper','add search engines','Glossy reflections','wallpaper styling']
window.addEventListener('DOMContentLoaded',function(){
prefTool$$1=document.createElement(`div`)
prefTool$$3=document.createElement(`div`)
prefTool$$3.setAttribute(`ytsd`,`gg`)
prefTool$$2=document.createElement(`img`)
prefTool$$1.setAttribute('tromoSM',`bttn-0-pref`)
document.body.appendChild(prefTool$$1)
document.body.appendChild(prefTool$$3)
prefTool$$1.appendChild(prefTool$$2)
prefTool$$2.src='visual/UI/icons/settings.svg'
prefTool$$2.setAttribute('tromoSM',`img-0-pref`)
prefTool$$3.setAttribute('tromoSM',`dv-0-full`)
close$$$toolpref=document.createElement(`button`)
document.body.appendChild(close$$$toolpref)
close$$$toolpref.setAttribute(`tromoSM`,`close$preff`)
close$$$toolpref.innerHTML="×"
ti=document.createElement('p')
ti.innerHTML="Preferences"
ti.setAttribute('tromoSM','ti-preff-main')
prefTool$$3.appendChild(ti)
pref$$setting.forEach(yo=>{
b=document.createElement(`button`)
irb=document.createElement(`button`)
g=document.createElement(`img`)
if(yo.slice(0,6)=="change"){
    irb.innerHTML="change"
    irb.setAttribute(`action`,`file-$-${yo.slice(7)}`)
}
else if(yo=="wallpaper styling"){
  irb.innerHTML="not available"
    irb.style.opacity="0.5"
    irb.style.pointerEvents="none"
    //irb.innerHTML="change styling"
    //irb.setAttribute(`action`,`file-$-${yo.replaceAll(" ","_")}`)
}
else if(yo=="Glossy reflections"){
    irb.setAttribute(`action`,`file-$-${yo.replaceAll(" ","_")}`)
  irb.innerHTML="enable"
}
else if(yo=="add search engines"){
    irb.innerHTML=search_eng_default.charAt(0).toUpperCase()+search_eng_default.slice(1)
    let y=document.createElement("img")
    y.src="visual/UI/icons/chevron-arrow-head-open.svg"
    irb.appendChild(y)
    y.setAttribute('tromoSM','im-im-bttn-in')
    irb.setAttribute(`action`,`file-$-${yo.replaceAll(" ","_")}`)
}
prefTool$$1.addEventListener('click',function(){
prefTool$$3.style.display="flex"
close$$$toolpref.style.display="flex"
})
p=document.createElement(`p`)
g.src=`visual/UI/icons/pref-${yo.replace(" ","-")}.svg`
g.onerror=()=>{
g.src=`visual/UI/icons/settings.svg`
}
p.textContent=yo
b.setAttribute(`tromoSM`,`bttn-appnd-op-preff`)
prefTool$$3.appendChild(b)
b.appendChild(g)
b.appendChild(p)
b.appendChild(irb)
})

function close$$toolpref(){
document.querySelector(`[ytsd=gg]`).style.display="none"
    close$$$toolpref.style.display="none"
}

window.addEventListener("keydown",function(ahh){
if(ahh.key=="Escape"){
    close$$toolpref()
}
})
close$$$toolpref.addEventListener("click",function(vro){
vro.stopPropagation()
close$$toolpref()
})
})
