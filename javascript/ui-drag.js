window.addEventListener(`DOMContentLoaded`,function(){
    document.querySelectorAll(`[ui=true]`).forEach(ui=>{
        ui.addEventListener(`dragstart`,uiui=> uiui.preventDefault())
        ui.setAttribute(`tromoSM-style`,`nodrag`)
    })
})
