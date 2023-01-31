let scrollVal = window.scrollY;
let windowVal = scrollVal;
let lastScroll = 0;
let newScroll = 0;

window.addEventListener("scroll", function() {
  newScroll = window.scrollY;
  // Calculate the difference between the current and last scroll positions
  let change = newScroll - lastScroll;
  // Do something with the change, such as update an element's position or size
  lastScroll = newScroll;

  scrollVal += change;
    if (scrollVal < 0 && scrollVal > -window.innerHeight) {
        windowVal = -window.innerHeight/2;
    } else {
        windowVal = scrollVal;
    }
  autoScroll(windowVal)
  console.log("window: " + windowVal + " scroll: " + scrollVal);
});
function autoScroll(location) {
    window.scrollTo({
        top: location,
        behavior: 'smooth',
    });
}