// eslint-disable-next-line no-unused-vars
export default ResponsiveNavigation => {

    const hamburger = document.querySelector('[data-module=ResponsiveNavigation]');
    const content = hamburger.nextElementSibling;

    hamburger.addEventListener('click', () => {
        content.classList.toggle('open');
    });

    window.addEventListener('click', (e) => {
        let plate = document.querySelector('.plate');
        if ( ! (e.composedPath().includes(content) || e.composedPath().includes(hamburger)) ){
            if (content.classList.contains('open')){
                content.classList.remove('open'); 
                plate.classList.toggle('active');
            }
        }
    });
};