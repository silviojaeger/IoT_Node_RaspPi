var camPic = document.getElementById("camPic");
var camPicUrl = camPic.src;
var lightStatus = document.getElementById("lightStatus");
var pcStatus = document.getElementById("isPcRunning");

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

function setLightStatus(){ 
  fetch('./api/lightInfo').then(function(response) {
    response.text().then(function (text) {
      lightStatus.innerHTML = text;
    });
  })
}

function setPCstatus(){
  fetch('./api/pcUp').then(function(response) {
    response.text().then(function (text) {
      if(text=='true'){
        pcStatus.innerHTML = 'PC running';
        pcStatus.style.backgroundColor = "green";
        pcStatus.style.width = "100px";
        pcStatus.style.margin = "20px";
        pcStatus.style.textAlign = "center";
      }else{
        pcStatus.innerHTML = 'PC offline';
        pcStatus.style.backgroundColor = "red";
        pcStatus.style.width = "100px";
        pcStatus.style.margin = "20px";
        pcStatus.style.textAlign = "center";
      };  
    });
  })
}
//------------------PiFace----------------------------------------
function faceOnOff(on){
  if(on){
      fetch('./api/faceOn');
  }else{
      fetch('./api/faecOff');
  }
}
//------------------PiFace----------------------------------------

setInterval(function updateCam(){
    camPic.src = camPicUrl + '?r=' +Math.random();
    setLightStatus();
    setPCstatus();
}, 1000);


// Get the Sidebar-------------------------------------------------------------------------------
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}
// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
//----------------------------------------------------------------------------------------------
