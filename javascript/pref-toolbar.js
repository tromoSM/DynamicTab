pref$$setting=['change wallpaper','change theme']
window.addEventListener('DOMContentLoaded',function(){
prefTool$$1=document.createElement(`div`)
prefTool$$3=document.createElement(`div`)
prefTool$$2=document.createElement(`img`)
prefTool$$1.setAttribute('tromoSM',`bttn-0-pref`)
document.body.appendChild(prefTool$$1)
document.body.appendChild(prefTool$$3)
prefTool$$1.appendChild(prefTool$$2)
prefTool$$2.src='visual/UI/icons/settings.svg'
prefTool$$2.setAttribute('tromoSM',`img-0-pref`)
prefTool$$3.setAttribute('tromoSM',`dv-0-full`)
pref$$setting.forEach(yo=>{
b=document.createElement(`button`)
irb=document.createElement(`button`)
g=document.createElement(`img`)
if(yo=="change wallpaper"||yo=="change theme"){
    irb.innerHTML="change"
    irb.setAttribute(`action`,`file-$-${yo.slice(7)}`)
}
prefTool$$1.addEventListener('click',function(){
prefTool$$3.style.display="flex"
})
function close$$toolpref(){
prefTool$$3.style.display="none"
}
p=document.createElement(`p`)
g.src=`visual/UI/icons/pref-${yo.replace(" ","-")}.svg`
p.textContent=yo
b.setAttribute(`tromoSM`,`bttn-appnd-op-preff`)
prefTool$$3.appendChild(b)
b.appendChild(g)
b.appendChild(p)
b.appendChild(irb)
window.addEventListener("keydown",function(ahh){
if(ahh.key=="Escape"){
    close$$toolpref()
}
})
})
})
