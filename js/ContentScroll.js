// Add a scroll event listener
let lastScroll = 0;
let newScroll = 0;
  export function updateContent(content, bars, offset) {
    // Get the position and dimensions of the content in the viewport
    var rect = content.getBoundingClientRect();

    // Get the current scroll position
    var scrollPosition = window.scrollY;
    // Calculate the distance of the content from the center of the viewport
    var location = rect.top + scrollPosition - offset;
    var top = rect.top - offset;
    var distance = scrollPosition - (top) - window.innerHeight + offset;
    var isInactive = Math.abs(newScroll - lastScroll) < 5;
    window.addEventListener("scroll", function() {
        
        newScroll = window.scrollY;
        // Get the position and dimensions of the content in the viewport
        rect = content.getBoundingClientRect();
        // Get the current scroll position
        scrollPosition = window.scrollY;
        // Calculate the distance of the content from the center of the viewport
        location = rect.top + scrollPosition - offset;
        top = rect.top - offset;
        distance = scrollPosition - (top) - window.innerHeight + offset;
        var scaleVal = (distance >= 0) ? 'scaleX(0.4)' : 'scaleX(0.2)';
        bars.forEach(bar => {
            bar.style.transform = scaleVal;
        });
        console.log("distance: " + distance);
    });
    
    setInterval(function() {
        isInactive = Math.abs(newScroll - lastScroll) < 0.1;
        if(Math.abs(distance) <= 100 && isInactive) { 
            setTimeout(autoScroll, 100, location);
        }
        lastScroll = newScroll;
    }, 1000);
}
function autoScroll(location) {
    window.scrollTo({
        top: location,
        behavior: 'smooth',
    });
}