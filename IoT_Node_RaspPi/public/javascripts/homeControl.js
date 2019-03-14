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
