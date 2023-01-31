// Add a scroll event listener
let lastScroll = 0;
let newScroll = 0;
  export function updateContent(content, bars) {
    // Get the position and dimensions of the content in the viewport
    var rect = content.getBoundingClientRect();

    // Get the current scroll position
    var scrollPosition = window.scrollY;
    // Calculate the distance of the content from the center of the viewport
    var location = rect.top + scrollPosition - 66;
    var top = rect.top - 66;
    var distance = scrollPosition - (top) - window.innerHeight + 66;
    //var isInactive = Math.abs(newScroll - lastScroll) < 1;
    window.addEventListener("scroll", function() {
        
        newScroll = window.scrollY;
        // Get the position and dimensions of the content in the viewport
        rect = content.getBoundingClientRect();
        // Get the current scroll position
        scrollPosition = window.scrollY;
        // Calculate the distance of the content from the center of the viewport
        location = rect.top + scrollPosition - 66;
        top = rect.top - 66;
        distance = scrollPosition - (top) - window.innerHeight + 66;
        var scaleVal = (distance >= 0) ? 'scaleX(0.4)' : 'scaleX(0.2)';
        bars.forEach(bar => {
            bar.style.transform = scaleVal;
        });
    });
    
    setInterval(function() {
        checkScroll();
    }, 200);
    // Add an event listener for the "scrollinactive" event
  window.addEventListener("scrollinactive", function(event) {
        if(Math.abs(distance) <= 50) { 
            autoScroll(location);
            //setTimeout(autoScroll, 100, location);
        }

  });
}
function autoScroll(location) {
    window.scrollTo({
        top: location,
        behavior: 'smooth',
    });
}
let previousScrollX = 0;
let previousScrollY = 0;
function checkScroll() {
    // Check the current scroll position
    const currentScrollX = window.scrollX;
    const currentScrollY = window.scrollY;
  
    // Check if the scroll position has changed since the last check
    if (Math.abs(currentScrollX - previousScrollX) <= 1 && Math.abs(currentScrollY - previousScrollY) <= 1) {
      // The scroll is not active, trigger an event
      const event = new Event("scrollinactive");
      window.dispatchEvent(event);
    }
  
    // Update the previous scroll position
    previousScrollX = currentScrollX;
    previousScrollY = currentScrollY;
  
    // Schedule the next check
    requestAnimationFrame(checkScroll);
  }
