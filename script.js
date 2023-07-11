console.log('spotify');
let songIndex=0;
let audioElement=new Audio('1.mp3')
let MasterPlay = document.getElementById('masterPlay')
let myProgressBar=document.getElementById("myProgressBar")
let songs=[
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"}, 

]
//handle play P ause
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play')
        MasterPlay.classList.add('fa-circle-pause')
    }
    else
    {
        audioElement.pause();
        MasterPlay.classList.remove('fa-circle-pause')
        MasterPlay.classList.add('fa-circle-play')
    }
})
//Listen events 
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})
