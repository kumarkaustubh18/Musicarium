console.log('spotify');
let songIndex=0;
let audioElement=new Audio('songs/2.mp3')
let songItems=Array.from(document.getElementsByClassName('songItem'))

let MasterPlay = document.getElementById('masterPlay')
let myProgressBar=document.getElementById("myProgressBar")
let songs=[
    {songName:"Let Me Down ",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Night Changes ",filePath:"songs/2.mp3",coverPath: "covers/1.jpg"},
    {songName:"perfect",filePath:"songs/3.mp3",coverPath: "covers/1.jpg"},
    {songName:"old Town Road",filePath:"songs/4.mp3",coverPath: "covers/1.jpg"},
    {songName:"Faded",filePath:"songs/5.mp3",coverPath: "covers/1.jpg"},
    {songName:"Love Yourself",filePath:"songs/6.mp3",coverPath: "covers/1.jpg"}, 

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

const  makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-circle-pause') 
         element.classList.add('fa-circle-play') 
    
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play')
        MasterPlay.classList.add('fa-circle-pause')
    })
});