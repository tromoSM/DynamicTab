window.addEventListener(`DOMContentLoaded`,function(){
    window.addEventListener(`keydown`,function(yo){
      if(yo.ctrlKey&&yo.key=='d'){
        searchEng$$main()
        yo.preventDefault()
      }
       else if(yo.keyCode === 191 && !yo.shiftKey){
        yo.preventDefault()
        document.querySelector(`[tromosm="search-in"]`).focus()
      }
      else if(yo.key=="Escape"){
        document.querySelector(`[tromoSM=full-s-notiff]`).style.display="none"
      }
    })
  
})
