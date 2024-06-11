// gsap.from(".aboutsection .dic", {
//     duration: 2,
//     scrollTrigger: ".aboutsection .dic"
// })

// gsap.from(".aboutsection .aboutcntn", {
//     duration: 2,
//     scrollTrigger: ".aboutsection .dic"
// })

gsap.from("aboutcvg", {
    scale:0,
    duration:2,
    rotate: 360,
    backgroundColor:"blue",
    // scrollTrigger:"#page3 #box",
    scrollTrigger:{
        trigger:"aboutcvg",
        scroller:"body"
    }
}) 
gsap.from(".abouttxt h3 p", {
    scale:0,
    duration:2,
    rotate: 360,
    backgroundColor:"royalblue",
    // scrollTrigger:"#page3 #box",
    scrollTrigger:{
        trigger:".abouttxt h3 p",
        scroller:"body",
    }
}) 
