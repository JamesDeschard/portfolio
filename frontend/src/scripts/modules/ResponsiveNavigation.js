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

    const languages = document.querySelector('.languages');
    const hamburger_languages = document.querySelector('.navigation__hamburger-content__languages');
    const fragment = document.createDocumentFragment();

    function moveLanguagesToHamburger(mediaquery) {
        if (mediaquery.matches) { 
          fragment.appendChild(languages.firstElementChild);
          hamburger_languages.appendChild(fragment);

        } else {
            fragment.appendChild(hamburger_languages.firstElementChild);
            languages.appendChild(fragment);
        }
      }
      
    var mediaquery = window.matchMedia("(max-width: 768px)");
    moveLanguagesToHamburger(mediaquery); 
    mediaquery.addListener(moveLanguagesToHamburger); 


};