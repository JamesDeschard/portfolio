import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    ScrollToPlugin
} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// eslint-disable-next-line no-unused-vars
export default ScrollAnimation => {


    gsap.timeline({
        scrollTrigger: {
            trigger: '.ipad__ipad',
            start: 'top 100%',
            toggleActions: 'play reset play reset'
        },
    }).fromTo('.ipad__ipad', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 4,
    });

const images = document.querySelectorAll('.iphone__image-box');

function getDistanceToExit(element) {
    return element == images[0] ? 200 : -200;
}

function getClass(element) {
    return `.${element.classList[1]}`;
}

images.forEach((image) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: getClass(image),
            start: 'top 75%',
            toggleActions: 'play reset play reset'
        },
    }).fromTo(getClass(image), {
        x: getDistanceToExit(image),
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 2
    });
});
};