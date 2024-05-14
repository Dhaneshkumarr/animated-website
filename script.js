function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation();

function navbarAnimation() {
    gsap.to("#nav-part1 img", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
    document.querySelector("i")
}
navbarAnimation();

function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 40
        })
    })
}
videoconAnimation();
function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0,
        duration: 1.3,
        stagger: 0.2,
    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 0.7,
        duration: 0.5,
    })
}
loadingAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}
cursorAnimation();

function hoverDets1() {
    var detsElements = document.querySelectorAll('.dets');
    detsElements.forEach(function (detsElement) {
        var proElem1 = detsElement.querySelector('.productList1');
        var proElem2 = detsElement.querySelector('.productList2');
        var proElem3 = detsElement.querySelector('.productList3');
        detsElement.addEventListener('mouseenter', function () {
            detsElement.style.height = '250px';
            if (proElem1) {
                proElem1.innerHTML = `
            <div class="p1">
                <img src="assets/p2.webp"
                    alt="">
                    <p>Tranquility Sofa<br>GREY/RUST</p>

            </div>
            <div class="p1">
                <img src="assets/front2.webp" alt="">
                    <p>Relaxation Reading<br>Nook</p>

            </div>
            `;
            }
            if (proElem2) {
                proElem2.innerHTML = `
            <div class="p1">
                <img src="assets/p5.webp" alt="">
                    <p>Leisure Lounge Chair</p>

            </div>
            <div class="p2">
                <img src="assets/p6.webp" alt="">
                    <p>Serenity Armchair - skyblue/RUST</p>

            </div>
            `;
            }
            if (proElem3) {
                proElem3.innerHTML = `
            <div class="p2">
                <img src="assets/p3.webp"
                    alt="">
                    <p>Respite Rocking<br>Chair</p>

            </div>
            <div class="p2">
                <img src="assets/p8.webp" alt="">
                    <p>Respite Rocking<br>Chair</p>

            </div>
            `;
            }
        })
        detsElement.addEventListener('mouseleave', function () {
            detsElement.style.height = '40px';
            if (proElem1) proElem1.innerHTML = '';
            if (proElem2) proElem2.innerHTML = '';
            if (proElem3) proElem3.innerHTML = '';
        })
    })
}
hoverDets1();