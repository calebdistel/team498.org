// Select all elements with the class "my-class"
const elements = document.querySelectorAll('.page-container');

//set initial offsets
var range = 140; //space between pages in percent
const scrollFactor = 500;
const scrollSpace = scrollFactor * range / 100;
updatePose();

// Listen for the scroll event on the window object
window.addEventListener('scroll', () => {
  updatePose();
  // Calculate the distance that the user has scrolled
  
});

function updatePose() {
  elements.forEach((element, index)  => {
    var offset = index * range;
    // Calculate the distance that the user has scrolled
    const scrollTop = document.documentElement.scrollTop;

    // Calculate the new x-axis position of the element
    const xPos = offset - (scrollTop / (scrollFactor / 100));

    // Apply the transformation to the element
    element.style.transform = `translateX(${xPos}%)`;

    const scrollMod = scrollTop % scrollSpace;
    var desiredScrollValue = (scrollMod <= scrollSpace / 2) ? (scrollTop - scrollMod) : (scrollTop + scrollMod);
    // Check if the scroll position is within a certain range of the desired value
    if (scrollTop >= desiredScrollValue - scrollSpace && scrollTop <= desiredScrollValue + scrollSpace) {
      // Set the scroll position to the desired value
      window.scrollTo(0, desiredScrollValue);
    }
});
}
