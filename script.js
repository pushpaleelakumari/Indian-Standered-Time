const secondHand=document.querySelector('.sec-hand')
const minHand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')
function setTime(){
    //To get present time
    const now=new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    //To get the time pointers rotate
    const secDegrees=((seconds/60)*360)+90
    secondHand.style.transform=`rotate(${secDegrees}deg)`
    
    const minDegrees=((minutes/60)*360)+90 +(seconds/60)*(360/60)
    minHand.style.transform=`rotate(${minDegrees}deg)`

    const hourDegrees=((hours/12)*360)+90 +(minutes/60)*(360/12)
    hourHand.style.transform=`rotate(${hourDegrees}deg)`
}
setInterval(setTime, 1000)
setTime()