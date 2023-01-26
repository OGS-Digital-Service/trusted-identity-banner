document.addEventListener('DOMContentLoaded', () => {
    const unavbanner = document.getElementById('unav-banner');
    const unavbutton = document.getElementById('trust-disclose');
    const disclosure = document.getElementById('offical-site-disclosure');
    const unavarrow = document.getElementById('unav-arrow');

    unavbutton.addEventListener("click", showdisclouse) 
    unavbanner.addEventListener("click", clickdisclouse) 
    document.addEventListener("click", clickoutside)

    function clickoutside (evt) {
        var target = evt.target;
            if (target === unavbanner || unavbanner.contains(target) || target === disclosure || disclosure.contains(target)) {
            }
            else {
                disclosure.classList.add('unav-hidden');
                disclosure.classList.remove('unav-flex');
                unavarrow.classList.add('unav-rotate-180');
                disclosure.setAttribute('aria-hidden', true)
                unavbutton.setAttribute('aria-expanded', false)
            }
    }

    function clickdisclouse (evt) {
        var target = evt.target;
            if (target === unavbutton || unavbutton.contains(target)) {
        return;
        }
        showdisclouse();
        unavAria();
    }

    function showdisclouse () {
        disclosure.classList.toggle('unav-hidden');
        disclosure.classList.toggle('unav-flex');
        unavarrow.classList.toggle('unav-rotate-180');
    }

    function unavAria () {
        if (disclosure.getAttribute('aria-hidden') == "true" && unavbutton.getAttribute('aria-expanded') == "false"){
            disclosure.setAttribute('aria-hidden', false)
            unavbutton.setAttribute('aria-expanded', true)
        }
        else {
            disclosure.setAttribute('aria-hidden', true)
            unavbutton.setAttribute('aria-expanded', false)
        }

    }
})


// setAttribute('aria-expanded', false)