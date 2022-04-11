import {
    gsap
} from "gsap";

// eslint-disable-next-line no-unused-vars
export default NavigationIndicator => {

    function flip(elements, changeFunc, vars) {
        elements = gsap.utils.toArray(elements);
        vars = vars || {};
        let tl = gsap.timeline({
                onComplete: vars.onComplete,
                delay: vars.delay || 0
            }),
            bounds = elements.map(el => el.getBoundingClientRect()),
            copy = {},
            p;
        elements.forEach(el => {
            el._flip && el._flip.progress(1);
            el._flip = tl;
        });
        changeFunc();
        for (p in vars) {
            p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
        }
        copy.x = (i, element) => "+=" + (bounds[i].left - element.getBoundingClientRect().left);
        copy.y = (i, element) => "+=" + (bounds[i].top - element.getBoundingClientRect().top);
        return tl.from(elements, copy);
    }



    class CardAnimations {
        constructor(cards) {

            this.cards = [...cards];
            this.current = this.cards[0];

            this.emojiTrue = document.querySelector('.cards__container__right');
            this.emojiFalse = document.querySelector('.cards__container__left');
            this.showAllCards = document.querySelector('.cards-outro__show-all');

            this.flipped = document.querySelector('.cards__flipped');
            this.standard = document.querySelector('.cards__container__center');

            this.tracker = false;
            this.indexCounter = -1;
            this.indexState = {};

            this.bindEvents();
        }


        bindEvents() {


            for (let emoji of [this.emojiTrue, this.emojiFalse]) {

                emoji.addEventListener('click', () => {

                    this.animateCardToExitAndReEnterContainer(this.current);

                });
            }

            this.showAllCards.addEventListener('click', () => {
                if (! this.tracker ) {
                    this.tracker = true;
                    this.moveSmileyFaces();
                    this.cardsContainerToFlippedContainer(1000);
                    this.changeHoverOnFlexCards();
                    this.changeTransitionPropertyAndRemoveRotation();
                    this.controllerButtonModifications();
                } else {
                    this.tracker = false;
                    this.cardsContainerToFlippedContainer();

                    setTimeout(() => {
                        this.changeTransitionPropertyAndRemoveRotation(true);
                        this.changeHoverOnFlexCards();
                        this.moveSmileyFaces();
                        this.controllerButtonModifications();
                    }, 1400);
                }
            });
        }

        // Flip Transition

        // Flip Transition Main Functions

        cardsContainerToFlippedContainer(timer) {
            setTimeout(() => {

                this.cards.forEach((card) => {
                    card.classList.add('notransition');
                    flip([this.cards], this.swapPosition.bind(this, card), {
                        duration: 1.3
                    });
                });

                this.changeMainContainerHeight();

            }, timer);
        }

        swapPosition(card) {
            let parent = this.tracker === true ? this.flipped : this.standard;
            card.classList.toggle('prepare-card');
            parent.appendChild(this.incrementIndexState(card));
        }

        // Flip Transition Utils

        changeTransitionPropertyAndRemoveRotation(reset = false) {
            let counter = 0;

            this.cards.forEach((card) => {
                card.classList.remove('notransition');
                card.style.transform = 'rotate(0deg)';
                if (reset === true) {
                    card.style.transform = `rotate(-${counter}deg)`;
                    counter += 10;

                }
            });
        }

        incrementIndexState(item) {
            if (this.tracker) {
                this.indexState[this.indexCounter] = item;
                this.indexCounter -= 1;
                item.style.zIndex = 0;
            } else {
                for (const [key, value] of Object.entries(this.indexState)) {
                    if (item == value) {
                        item.style.zIndex = key;
                    }
                }
            }

            return item;
        }

        changeHoverOnFlexCards() {
            for (let card of this.cards) {
                let front = card.firstElementChild;
                let back = front.nextElementSibling;
                front.classList.toggle('activate-hover-1');
                back.classList.toggle('activate-hover-2');

            }
        }

        changeMainContainerHeight() {
            let container = document.querySelector('.cards');
            container.classList.toggle('adjust-height');
        }

        moveSmileyFaces() {
            if (this.tracker) {
                this.emojiTrue.classList.remove('move-in-right');
                this.emojiFalse.classList.remove('move-in-left');
                this.emojiTrue.classList.add('move-out-right');
                this.emojiFalse.classList.add('move-out-left');
            } else {
                this.emojiTrue.classList.remove('move-out-right');
                this.emojiFalse.classList.remove('move-out-left');
                this.emojiTrue.classList.add('move-in-right');
                this.emojiFalse.classList.add('move-in-left');
            }
        }

        // Flip Transition Changes On Controller Button

        controllerButtonModifications() {

            let textChange = (text) => {
                this.showAllCards.firstElementChild.innerHTML = text;
            };

            setTimeout(() => {

                if (this.tracker) {
                    textChange('Let me guess! &nbsp; &#128640;');
                } else {
                    textChange('Just show all! &nbsp; &#128640;');
                }

            }, 1000);

            this.showAllCards.classList.toggle('fade-in-last-moment');

        }

        // Basic Animation 

        setZIndexToMinimumAndRemoveAnimationClass(moved_item) {
            moved_item.style.zIndex = -4;
            moved_item.style.transform = `rotate(-30deg)`;
            moved_item.classList.remove('animate');
        }

        flipCardInMiddleOfAnimation(card){
            let front = card.firstElementChild;
            let back = front.nextElementSibling;

            front.classList.toggle('activate-flip-1');
            back.classList.toggle('activate-flip-2');
        }

        animateCardToExitAndReEnterContainer(card) {
            card.classList.add('animate');
            var moved_item = this.cards.shift();

            let rotate = 0,
                zIndex = 0;

            for (let card of this.cards) {
                card.style.transform = `rotate(${rotate}deg)`;
                card.style.zIndex = `${zIndex}`;
                rotate -= 10, zIndex -= 1;
            }

            setTimeout(this.setZIndexToMinimumAndRemoveAnimationClass.bind(this, moved_item), 5000);
            setTimeout(this.flipCardInMiddleOfAnimation.bind(this, moved_item), 1000);
            setTimeout(this.flipCardInMiddleOfAnimation.bind(this, moved_item), 3500);
            this.cards.push(moved_item);
            this.current = this.cards[0];
        }

    }

    const cards = document.querySelectorAll('.cards__container__center__card');
    new CardAnimations(cards);
};