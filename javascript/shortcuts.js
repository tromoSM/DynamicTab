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
    })
  
})
