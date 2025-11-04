window.addEventListener(`DOMContentLoaded`,function(){
fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,visibility&current=is_day,temperature_2m,apparent_temperature,weather_code,rain,wind_speed_10m&timezone=auto&forecast_days=1&forecast%3Flatitude=52.52`).then(yo => yo.json()).then(dih =>{
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
   })
})
})
