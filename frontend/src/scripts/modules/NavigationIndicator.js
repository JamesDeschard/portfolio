// eslint-disable-next-line no-unused-vars
export default NavigationIndicator => {
  
    function activateNavigationIndicator(){
        let links = document.querySelector('[data-module=NavigationIndicator]');
        links = links.querySelectorAll('li');

        for (let item of links){
            if (window.location.href == item.firstChild.href){
                item.classList.add('navigation__selected');
            }    
        }
    }

    activateNavigationIndicator();
  };