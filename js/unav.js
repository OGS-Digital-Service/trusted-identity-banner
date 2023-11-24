document.addEventListener('DOMContentLoaded', () => {
    const unavbanner = document.getElementById('unav-banner');
    const unavbutton = document.getElementById('trust-disclose');
    const disclosure = document.getElementById('site-disclosure');
    const unavarrow = document.getElementById('unav-arrow');

    unavbutton.addEventListener("click", showdisclouse) 
    document.addEventListener("click", clickoutside)

    function clickoutside (evt) {
        var target = evt.target;
            if (target === unavbanner || unavbanner.contains(target) || target === disclosure || disclosure.contains(target)) {
            }
            else {
                disclosure.classList.add('unav-hidden');
                disclosure.classList.remove('unav-flex');
                unavarrow.classList.add('fa-rotate-180');
                disclosure.setAttribute('aria-hidden', true)
                unavbutton.setAttribute('aria-expanded', false)
            }
    }

    function showdisclouse () {
        disclosure.classList.toggle('unav-hidden');
        disclosure.classList.toggle('unav-flex');
        unavarrow.classList.toggle('fa-rotate-180');
        unavAria();
    }

    function unavAria () {
        if (disclosure.getAttribute('aria-hidden') === "true" && unavbutton.getAttribute('aria-expanded') === "false"){
            disclosure.setAttribute('aria-hidden', false)
            unavbutton.setAttribute('aria-expanded', true)
        }
        else {
            disclosure.setAttribute('aria-hidden', true)
            unavbutton.setAttribute('aria-expanded', false)
        }
    }
})
