let videoContainer= document.querySelector(".video_container");
let video= document.querySelector("video");
let headingOne= document.querySelector("header h1");

video.playbackRate=1;

let windowSize=window.innerHeight;

window.addEventListener("scroll",appear);

function appear() {
    let videoContainerPosition=videoContainer.getBoundingClientRect().bottom * 1.25;
    console.log(`${videoContainerPosition}`);

    if(videoContainerPosition < windowSize){
        videoContainer.classList.add("active_video");
        console.log("The bottom of the  video is now less than the screen ow window");
    } else{
        videoContainer.classList.remove("active_video");
    }
}

window.addEventListener('load',()=>{
    setInterval(() => {
        getTimePersonal();
        console.log("The function getTimePersonal has been called");
    }, 100);
});

function getTimePersonal() {
    let time= new Date();
    let minute=time.getMinutes();
    console.log(minute);
    if (minute == 30 || minute == 00) {
        headingOne.classList.add("changeHueRotate");
    }
    else{
        headingOne.classList.remove("changeHueRotate");

    }
    return minute;
}