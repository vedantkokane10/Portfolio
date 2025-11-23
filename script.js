function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


function openVideoPopup(videoSrc) {
    // geting the video  modal 
    var videoModal = document.getElementById("videoModal");

    // setting the video source dynamically
    var videoIframe = document.createElement("iframe");
    videoIframe.width = "600";
    videoIframe.height = "375";
    videoIframe.src = videoSrc;
    videoIframe.frameBorder = "0";
    videoIframe.allowFullscreen = true;

    // appending the iframe to the video container in  the modal
    document.getElementById("videoContainer").innerHTML = "";
    document.getElementById("videoContainer").appendChild(videoIframe);

    // modal display
    videoModal.style.display = "flex";
}

function closeVideoPopup() {
    // Hiding the modal
    document.getElementById("videoModal").style.display = "none";
}