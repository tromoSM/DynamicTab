function timeahh(){
    const $time$$updated= new Date()
    let $time$$hours=$time$$updated.getHours()
    let $time$$mins=$time$$updated.getMinutes()

$time$$mins=$time$$mins<10?`0`+$time$$mins:$time$$mins
console.log($time$$hours,$time$$mins)


document.querySelectorAll(`[tromoSM=fill-time]`).forEach(fill=>{
    fill.textContent=`${$time$$hours}:${$time$$mins}`
})
}
timeahh()
setInterval(timeahh,100)
