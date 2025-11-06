window.addEventListener(`DOMContentLoaded`,function(){
document.querySelectorAll(`[tromoSM="event"]`).forEach(gurt=>{
function event$$search(){
    if(search$$load==true){
    gurt.style.background='#16ff66'
    gurt.style.scale='1'
    gurt.addEventListener(`click`,function(){
        console.log('an important event is running.')
    })
}
}
 window.addEventListener('click',event$$search)
 window.addEventListener('keypress',event$$search)
})
})
