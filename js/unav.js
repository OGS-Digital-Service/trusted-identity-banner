document.addEventListener('DOMContentLoaded', () => {
    const unavbanner = document.getElementById('unav-banner');
    const unavbutton = document.getElementById('trust-disclose');
    const disclosure = document.getElementById('offical-site-disclosure');
    const unavarrow = document.getElementById('unav-arrow');

    unavbutton.addEventListener("click", showdisclouse) 
    
    if (window.innerWidth < 768){
        unavbanner.addEventListener("click", showdisclouse) 
    }

    function showdisclouse () {
        disclosure.classList.toggle('unav-hidden');
        disclosure.classList.toggle('unav-flex');
        unavarrow.classList.toggle('unav-rotate-180');

    }
})