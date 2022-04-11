// eslint-disable-next-line no-unused-vars
export default MagneticEffect => {

    var boxes = document.querySelectorAll('.greeting__box-right');

    boxes.forEach((element) => {
        const magneticEffect = e => {
            const inner = element.children[0];
            const {offsetX: x, offsetY: y } = e;
            const { offsetWidth: width, offsetHeight: height } = element;
            const move = 15;
        
            const xMove = x / width * (move * 2) - move;
            const yMove = y / height * (move * 2) - move;
        
            inner.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
            if (e.type === 'mouseleave') inner.style.transform = '';
          };
        
          element.addEventListener('mousemove', magneticEffect);
          element.addEventListener('mouseleave', magneticEffect);
        
          return () => {
            element.removeEventListener('mousemove', magneticEffect);
            element.removeEventListener('mouseleave', magneticEffect);
          };
    });
};