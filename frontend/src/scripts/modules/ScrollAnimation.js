import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    ScrollToPlugin
} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, );

// eslint-disable-next-line no-unused-vars
export default ScrollAnimation => {

    // Greeting and Email paragraphs

    const animation_targets = [".greeting__box-left", ".email__left-box"];

    for (let item of animation_targets) {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                toggleActions: 'play none none none'
            },
        }).fromTo(item, {
            opacity: 0,
            y: -20,
            x: -20,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
        });
    }

    // Ipad

    gsap.timeline({
        scrollTrigger: {
            trigger: '.ipad__ipad',
            start: 'top 100%',
            toggleActions: 'play none none none'
        },
    }).fromTo('.ipad__ipad', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
    });

    const images = document.querySelectorAll('.iphone__image-box');

    function getDistanceToExit(element) {
        return element == images[0] ? 200 : -200;
    }

    function getClass(element) {
        return `.${element.classList[1]}`;
    }

    // Iphones
    
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

    // Cards 

    const cards = document.querySelectorAll('.cards__container__center__card');
    var mydelay = 0;

    for (let item of cards) {

        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                toggleActions: 'play none none none'
            },
        }).fromTo(item, {
            opacity: 0,
            y: -100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: mydelay,
            clearProps: "scale"
        });

        mydelay += 0.5;
    }

    // Project Detail

    gsap.timeline({
        scrollTrigger: {
            trigger: ".project__container__right",
            start: 'top 75%',
            toggleActions: 'play reset play reset'
        },
    }).fromTo(".project__container__right", {
        x: 200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 2
    });

    // Goal

    const goal = document.querySelector('.goal__left');

    gsap.timeline({
        scrollTrigger: {
            trigger: goal,
            start: 'top 100%',
            toggleActions: 'play none none none'
        },
    }).fromTo(goal, {
        opacity: 0,
        y: -20,
        x: -20,
    }, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
    });



    // Framing cards

    const framing_cards = document.querySelectorAll('.framing__cards__card, .insights__table__right__point');
    var delay = 0;
    var counter = 0;

    for (let item of framing_cards) {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                toggleActions: 'play none none none'
            },
        }).fromTo(item, {
            opacity: 0,
            y: -100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: delay,
            clearProps: "scale"
        });

        counter += 1;
        if (counter == 4) {
            delay = 0;
        }
        delay += 0.5;
    }


};