console.log("Welcome to spotify")
//Initialize variables

let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('play'); 
let myProgressBar = document.getElementById("customRange1")
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("musicList"));
let playPause = document.getElementById("play-pause");

let songs = [
    {songName: "Cheques-Shubh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Saadi Galli Aaja", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bahara", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Saiyaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Mehrama", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "O rangrez", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Soniyo", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Chaleya", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Kukkad", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Nainowale X people", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]


// handle play pause

masterPlay.addEventListener("click", ()=> {
    if(audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        gif.style.opacity = 1;
        document.getElementById('playPause').setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z");
    
    }else {
        audioElement.pause();
        gif.style.opacity = 0;  
        document.getElementById('playPause').setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z");
    }
});

//listen to events

audioElement.addEventListener('timeupdate', () => {
    // update seek bar
    let progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
} );

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
});

//audio name list update 

songItem.forEach( (element, i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.addEventListener("click", (e)=> {
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('playPause').setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z");

    })
});

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <= 1) {
        songIndex = 10;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1; 
    document.getElementById('playPause').setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"); 
    
})
document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >= 10) {
        songIndex = 1;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    document.getElementById('playPause').setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z");  
    
})