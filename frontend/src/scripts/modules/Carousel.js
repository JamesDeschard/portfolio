import Glide, {
  Breakpoints,
  Autoplay
} from '@glidejs/glide/dist/glide.modular.esm';

// eslint-disable-next-line no-unused-vars
export default Carousel => {

  var carousels = [];
  carousels.push('[data-module=Carousel]');

  const check_url = (str) => {
    if (window.location.href.includes(str)){
      return true;
    }
  };

  if (check_url('/projects/') || check_url('/projets/')) {
    carousels.push('[data-carousel=Carousel_bis]');
  }

  for (let item of carousels) {

    new Glide(item, {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 12000,
      animationTimingFunc: 'linear',
      startAt: 0,
      perView: 2,
      gap: 50,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    }).mount({
      Breakpoints,
      Autoplay
    });

  }
};