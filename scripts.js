var currentIndex = 0;
var images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image5.jpeg',
    'images/image6.jpeg',
    'images/image7.jpeg',
    'images/image8.jpeg',
    'images/image9.jpeg',
    'images/image10.jpeg',
    'images/image11.jpeg',
    'images/image12.jpeg',
    'images/image13.jpeg',
    'images/image14.jpeg',
    'images/image15.jpeg',
    'images/image16.jpeg'
];

function showImage(src, index) {
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("largeImage");
    img.src = src;
    modal.style.display = "flex";
    currentIndex = index;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    var img = document.getElementById("largeImage");
    img.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    var img = document.getElementById("largeImage");
    img.src = images[currentIndex];
}

window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
