import Glide, { Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

// eslint-disable-next-line no-unused-vars
export default Carousel => {

  const first_carousel = '[data-module=Carousel]';
  const second_carousel = '[data-carousel=Carousel_bis]';

  for (let item of [first_carousel, second_carousel]) {

    new Glide(item, {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 12000,
      animationTimingFunc: 'linear',
      startAt: 0,
      perView: 2,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
      gap: 8,
    }).mount({ Breakpoints, Autoplay });

  }
};