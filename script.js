function loadingAnimation() {
    
const tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.4,
    delay: .3
})

tl.from("#line1-part1",{
    opacity: 0,
    onStart: function () {
        h5 = document.querySelector("#line1-part1 h5");
var grow = 0;
setInterval(() => {
    if (grow < 100) {
        h5.innerHTML = grow++;
    } else {
        h5.innerHTML = 100;
    }
}, 30);
    }
})

tl.to(".line h2",{
    animationName: "anime",
    opacity: 1
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3
})

tl.from("#page1",{
    opacity:0,
    y:1300,
    delay:0.2,
    ease:Power4

})

tl.to("#loader",{
    display: "none",
})


};

loadingAnimation() ;