console.log('spotify');
let songIndex=0;
let audioElement=new Audio('1.mp3')
let MasterPlayV =document.getElementById('masterPlay')
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
        console.log('clicked');
        audioElement.play();
        MasterPlayV.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else
    {
        audioElement.play();
        console.log('pause');
    }
})
//Listen events 
myProgressBar.addEventListener('time',()=>{
    console.log('timeupdate');
})