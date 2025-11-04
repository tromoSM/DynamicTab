window.addEventListener(`DOMContentLoaded`,function(){
let lat
let long
   navigator.geolocation.getCurrentPosition((gurt)=>{
   lat=gurt.coords.latitude
   long=gurt.coords.longitude

   fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,visibility&current=is_day,temperature_2m,apparent_temperature,weather_code,rain,wind_speed_10m,cloud_cover&timezone=auto&forecast_days=1&forecast%3Flatitude=52.52`).then(yo => yo.json()).then(dih =>{
   console.log(dih.current.is_day)
   document.querySelectorAll(`[tromoSM="fill-temp"]`).forEach(fill=>{
      weather$$c=document.createElement(`div`)
      weather$$p=document.createElement(`p`)
      weather$$c.appendChild(weather$$p)
      fill.textContent=parseInt(dih.current.temperature_2m)
      fill.appendChild(weather$$c)
      weather$$p.textContent=`℃`
      weather$$c.setAttribute(`tromoSM`,`flex-upper-w`)
      weather$$p.setAttribute(`tromoSM`,`temp-mes`)
      
    if(dih.current.is_day==0){
      weather$$str=document.createElement(`img`)
      document.querySelector(`[tromoSM="weather-w"]`).appendChild(weather$$str)
      weather$$str.setAttribute(`tromoSM`,`star-each`)
      weather$$str.src="visual/UI/img/star-1.png"
      document.querySelector(`[tromoSM="weather-w"]`).style.background="linear-gradient(50deg, var( --element-1-night-background-color) 10%, var(--element-1-background-color) 50%)"
      function visible_st(){
         weather$$str.style.transform=`translate(${Math.floor(Math.random()*(100-1))+1}px,${Math.floor(Math.random()*(70-1))+1}px)`
         weather$$str.style.animation=`none`
         weather$$str.offsetHeight
         weather$$str.style.animation=`open-star 1s 1 forwards`
         weather$$str.style.display="block"
      }
      visible_st()
      setInterval(visible_st,2000)
}
    if(dih.current.cloud_cover>=50){
      weather$$clouds=document.createElement(`img`)
      weather$$clouds.setAttribute(`tromoSM`,`clouds-a`)
      document.querySelector(`[tromoSM="weather-w"]`).appendChild(weather$$clouds)
      weather$$clouds.src="visual/UI/img/clouds-1.png"
    } 
    
    document.querySelectorAll(`[tromoSM="fill-location"]`).forEach(loc=>{
      loc.innerHTML=`<img src="visual/UI/icons/location.svg" tromoSM="location-ic">${lat},${long}`
    })
   })
})
})
})
