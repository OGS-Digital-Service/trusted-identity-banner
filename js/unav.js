document.addEventListener('DOMContentLoaded', () => {
    const unavBanner = document.getElementById('unav-banner');
    const unavButton = document.getElementById('trust-disclose');
    const disclosure = document.getElementById('site-disclosure');
    const unavArrow = document.getElementById('unav-arrow');
    const translateButton = document.getElementById('translate-button');
    const translateList = document.getElementById('translate-list');
    const translateArrow = document.getElementById('translate-arrow');
    const search = document.getElementById('unav-search-input');
    const searchClear = document.getElementById('unav-search-clear')

    translateButton.addEventListener("click",showTranslate) 
    unavButton.addEventListener("click", showDisclouse) 
    document.addEventListener("click", clickOutside)
    
    search.addEventListener("focusin", searchFocus)
    search.addEventListener("focusout", searchFocus)

    searchClear.addEventListener("click", clearSearch)


    function clickOutside (evt) {
        var target = evt.target;
            if (target === unavBanner || unavBanner.contains(target) || target === disclosure || disclosure.contains(target)) {
            }
            else {
                disclosure.classList.add('unav-hidden');
                disclosure.classList.remove('unav-flex');
                unavArrow.classList.remove('fa-rotate-180');
                disclosure.setAttribute('aria-hidden', true)
                unavButton.setAttribute('aria-expanded', false)
            }
    }

    function showDisclouse () {
            disclosure.classList.toggle('unav-hidden');
            disclosure.classList.toggle('unav-flex');
            unavArrow.classList.toggle('fa-rotate-180');
            unavAria();
    }

    function showTranslate () {
        translateList.classList.toggle('unav-hidden');
        translateList.classList.toggle('unav-flex');
        translateArrow.classList.toggle('fa-rotate-180');
        translateAria();
}

    function unavAria () {
        if (disclosure.getAttribute('aria-hidden') === "true" && unavButton.getAttribute('aria-expanded') === "false"){
            disclosure.setAttribute('aria-hidden', false)
            unavButton.setAttribute('aria-expanded', true)
        }
        else {
            disclosure.setAttribute('aria-hidden', true)
            unavButton.setAttribute('aria-expanded', false)
        }
    }

    function translateAria () {
        if (translateList.getAttribute('aria-hidden') === "true" && translateButton.getAttribute('aria-expanded') === "false"){
            translateList.setAttribute('aria-hidden', false)
            translateButton.setAttribute('aria-expanded', true)
        }
        else {
            translateList.setAttribute('aria-hidden', true)
            translateButton.setAttribute('aria-expanded', false)
        }
    }

    function searchFocus () {
        if (search === document.activeElement) {
            searchClear.classList.toggle('unav-hidden')
        }
       
        


    }

    function clearSearch (){
        search.value = ''
    }

})
