//initiliaze the variables
let songIndex = 0;
let audio= new Audio("./songs/0.mp3")
let play = document.getElementById("play")
let songName = Array.from(document.querySelectorAll(".songName"));
let currentSong = document.getElementById("currentSong");
let progressBar = document.getElementById("progressBar") 
let songs =[
    { id:0, song:"Dil cheez tujhe dedi",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id: 1,song:"2 many girls",filepath:"./songs/2_Many_Girls_.mp3"},
    {id:2,song:"Ladki Ki Party",filepath:"./songs/02.Ladki Ki Party .mp3"},
    {id:3, song:"right now",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:4, song:"All Black ",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:5, song:"BAPU_Z~1.mp3",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:6, song:" Mombatiye",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:7, song:"Proper Patola",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:8, song:"Swag_Mera_Desi",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"},
    {id:9, song:"Wakhra Swag",filepath:"./songs/02 Dil Cheez Tujhe Dedi .mp3"}
    
];
// songs.forEach((element,i)=>{
//    element.addEventListener()
// })
//handle play/pause click
play.addEventListener("click",function(){
    if(audio.paused || audio.currentTime<=0){
        audio.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
    else{
        audio.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
       }
})

 //listen to events

audio.addEventListener("timeupdate",function(e){
    //update input range
    let progress= parseInt((audio.currentTime/audio.duration)*100)
    progressBar.value = progress;
})
progressBar.addEventListener("change",function(){
    audio.currentTime= progressBar.value * audio.duration/100;
})

songName.forEach((song)=>{
    song.addEventListener("click",function(e){
     let songIndex = (e.target.id);
        audio.src= `songs/${songIndex}.mp3`; 
        currentSong.innerHTML = songs[songIndex].song
        audio.currentTime=0;
       audio.play();
       play.classList.remove("fa-play")
       play.classList.add("fa-pause")
    })
})
document.getElementById("Next").addEventListener("click",function(){
if(songIndex==9){
    songIndex=0;
}
else{
    songIndex+=1;
}
audio.src= `songs/${songIndex}.mp3`; 
currentSong.innerHTML = songs[songIndex].song
audio.currentTime=0;
audio.play();
play.classList.remove("fa-play")
play.classList.add("fa-pause")
})
document.getElementById("Prev").addEventListener("click",function(){
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audio.src= `songs/${songIndex}.mp3`; 
    currentSong.innerHTML = songs[songIndex].song
    audio.currentTime=0;
    audio.play();
    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
    })
    window.addEventListener("load",function(){
        progressBar.value=0;
    })