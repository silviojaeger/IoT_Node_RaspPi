var camPic = document.getElementById("camPic");
var camPicUrl = camPic.src;

function turnOnOff(on){
    if(on){
        fetch('./api/on');
    }else{
        fetch('./api/off');
    }
}

function wakePC(){
    fetch('./api/wakepc');
}

setInterval(function updateCam(){
    camPic.src = camPicUrl + '?r=' +Math.random();
}, 1000);