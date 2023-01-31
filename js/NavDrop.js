const element = document.querySelector("nav");
update();
window.addEventListener("scroll", function() {
    update();
});
function update() {
    var isTop = (window.scrollY < 10);
    var border = (isTop) ? "#979CA5f7 solid 3px" : "#979CA5b3 solid 1px";
    element.style.borderBottom = border;
}