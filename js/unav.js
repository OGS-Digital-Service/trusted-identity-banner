document.addEventListener('DOMContentLoaded', () => {
    const unavbutton = document.getElementById('trust-disclose');
    const disclosure = document.getElementById('offical-site-disclosure');
    const unavarrow = document.getElementById('unav-arrow');

    unavbutton.addEventListener("click", showdisclouse) 
    function showdisclouse () {
        disclosure.classList.toggle('unav-hidden');
        disclosure.classList.toggle('unav-flex');
        unavarrow.classList.toggle('unav-rotate-180');

    }
    return console.log(unavbutton,disclosure)
})