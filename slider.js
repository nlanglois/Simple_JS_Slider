/**
 * Created by nlangloi10 on 7/19/16.
 */

window.onload = function () {

    // Declare app variables
    var slider = document.getElementsByClassName('slider')[0],
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
        // Add the showImage classname to the img-element you want
        images[index].className = 'showImage';
    }


    // Gets next image, invoked on nextBtn press
    function nextImg() {
        // counter variable gets the current img selected
        // if we have the last img, we switch back to the first one again
        if (counter < images.length -1) {
            counter += 1;
        } else {
            counter = 0;
        }
        showImage(counter);
    }


    // Gets previous image, invoked on prevBtn press
    function prevImg() {
        // counter variable gets the current img selected
        // if we have the first img, we switch back to the last one again
        if (counter > 0) {
            counter -= 1;
        } else {
            counter = images.length - 1;
        }
        showImage(counter);
    }


    // give the buttons an onClick event
    nextBtn.onclick = nextImg;
    prevBtn.onclick = prevImg;


    // start the slider
    showImage(counter);

};