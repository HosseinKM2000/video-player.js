'use strict'

let container = document.querySelector('.container');
let video = document.querySelector('.file-video');
let boxControls = container.querySelector('.contorols');
let PNGS = document.querySelector('.PNG');

let play1 = boxControls.querySelector('.icon1');
let stoping = boxControls.querySelector('.icon2');
let forward = boxControls.querySelector('.icon4');
let backing = boxControls.querySelector('.icon5');
let restart = boxControls.querySelector('.restarticon');
let fullScreen = boxControls.querySelector('.fullscreen');
let volume1 = boxControls.querySelector('.voice');
let progres_bar = document.querySelector('.progres-bar');
let stepnext = boxControls.querySelector('.icon6');
let stepago = boxControls.querySelector('.icon7');
let boxTimer = boxControls.querySelector('.timer');
let timenow = boxTimer.querySelector('.curent-time');
let fulltimevideo = boxTimer.querySelector('.video-time');
let progres_volume=document.querySelector('.volum-value')



video.addEventListener('timeupdate',function(){
   timenow.textContent = gettime(video.currentTime)

   let timelenght = (video.currentTime / video.duration)* 100

   progres_bar.style = `background : linear-gradient(90deg,rgb(0, 204, 255) ${timelenght}% ,grey 0%)`

})

progres_bar.addEventListener('input', function(){
    
    video.currentTime = (this.value / 100) * video.duration
})


play1.addEventListener('click', function(){
    play1.classList.add('displaynone')
    stoping.classList.add('displayon')
    if(video.paused){
        video.play()
    }
    fulltimevideo.textContent = gettime(video.duration)
})


stoping.addEventListener('click',function(){
    stoping.classList.remove('displayon')
    play1.classList.remove('displaynone')
    if(video.play){
        video.pause()
    }
})

stepnext.addEventListener('click',function(){
    video.currentTime = video.currentTime + 5
})

stepago.addEventListener('click',function(){
    video.currentTime = video.currentTime - 5
})

volume1.addEventListener('click',function(){
     progres_volume.classList.toggle('displayblock');
     progres_volume.style = 'opacity : 1'
})


video.addEventListener('mouseout', function(){
    progres_volume.style = 'display : none'
})

video.addEventListener('click', function(){
    progres_volume.style = 'display : none'
})

progres_volume.addEventListener('input', function(){

    video.volume = this.value / 100 ;
    this.style = `background : linear-gradient(90deg,rgb(0, 204, 255) ${this.value}% ,grey 0%)`
})

fullScreen.addEventListener('click',function(){
    if(!video.fullScreenElement){
        video.requestFullscreen()
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
    }
})

fullScreen.addEventListener('click',function(){
    if(!boxControls.fullScreenElement){
        boxControls.requestFullscreen()
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
    }
})

function gettime(time){
    let minutes = Math.floor(time / 60 )
    let seconds = Math.floor(time - ( minutes * 60))
    let minutesvalue;
    let secondsvalue;

    if(seconds < 10){
        secondsvalue = '0' + seconds
    }else{
     secondsvalue = seconds
    }

    if(minutes < 10){
        minutesvalue = '0' + minutes
    }else{
        minutesvalue = minutes
    }

   return  timenow.textContent = minutesvalue + ':' + secondsvalue
}

