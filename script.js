function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


function openVideoPopup(videoSrc) {
    // Get the video modal
    var videoModal = document.getElementById("videoModal");

    // Set the video source dynamically
    var videoIframe = document.createElement("iframe");
    videoIframe.width = "600";
    videoIframe.height = "375";
    videoIframe.src = videoSrc;
    videoIframe.frameBorder = "0";
    videoIframe.allowFullscreen = true;

    // Append the iframe to the video container in the modal
    document.getElementById("videoContainer").innerHTML = "";
    document.getElementById("videoContainer").appendChild(videoIframe);

    // Display the modal
    videoModal.style.display = "flex";
}

function closeVideoPopup() {
    // Hide the modal
    document.getElementById("videoModal").style.display = "none";
}