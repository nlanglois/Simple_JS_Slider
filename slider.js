/**
 * Created by nlangloi10 on 7/19/16.
 */

window.onload = function() {

    // Declare app variables
    var slider = document.getElementsByClassName('slider')[0],
        title = document.getElementsByClassName('title')[0],
        images = slider.getElementsByTagName('img'),
        counter = 0,
        nextBtn = slider.getElementsByClassName('next')[0],
        prevBtn = slider.getElementsByClassName('prev')[0];


    // Hides all images and then shows the image at the index of the passed-in value (index)
    function showImage(index) {
        // Set class name on the image-elements (hide them)
        for (var i = 0; i < images.length; i += 1) {
            images[i].className = 'hideImage';
        }
        // Add the showImage class name to the img-element you want
        images[index].className = 'showImage';

        // Take the content of the alt tag and write it inside the title div element
        title.innerHTML = images[index].alt;
    }


    // Gets next image, invoked on nextBtn press
    function nextImg() {
        // Counter variable gets the current img selected
        // If we have the last img, we switch back to the first one again
        if (counter < images.length -1) {
            counter += 1;
        } else {
            counter = 0;
        }
        showImage(counter);
    }


    // Gets previous image, invoked on prevBtn press
    function prevImg() {
        // Counter variable gets the current img selected
        // If we have the first img, we switch back to the last one again
        if (counter > 0) {
            counter -= 1;
        } else {
            counter = images.length - 1;
        }
        showImage(counter);
    }


    // Give the buttons an onclick event
    nextBtn.onclick = nextImg;
    prevBtn.onclick = prevImg;


    // Says for the nextImg method to be called automatically every 10000 milliseconds (10 seconds)
    window.setInterval(nextImg, 10000);


    // Start the slider
    showImage(counter);

};