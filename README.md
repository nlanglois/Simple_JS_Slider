# Simple_JS_Slider
<p>A simple image slider written in HTML, CSS and JS.<p>

<p>
Five variables:
  <ul>
    <li>slider: DOM node of the slider element</li>
    <li>images: array of all images in the slider</li>
    <li>counter: numeric variable used to keep track of which slider image to show</li>
    <li>nextBtn: DOM node of the element used to to to the next slider image</li>
    <li>prevBtn: DOM node of the element used to go to the previous slider image</li>
  </ul>
</p>

<p>
Three functions:
  <ul>
    <li>showImg(): hides all images; shows the one with the index passed in</li>
    <li>nextImg(): increments counter or resets to zero if at end of images array</li>
    <li>prevImg(): decrements counter or resets to last images array index</li>
  </ul>
</p>
