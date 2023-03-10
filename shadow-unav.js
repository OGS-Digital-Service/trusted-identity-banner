document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('universal-navigation');
  document.body.appendChild(div);
}, false);

class universalNavigation extends HTMLElement {
constructor() {
  super();
}
connectedCallback() {
  this.render();
}
render() {
  this.innerHTML = `
<section aria-label="An official website of the state of new york" id="unav-banner">
<header class="unav-flex unav-flex-col md:unav-flex-row unav-items-center unav-text-12 unav-p-2 unav-pl-8">
<img src="https://static-assets.ny.gov/sites/all/themes/ny_gov/images/nygov-logo.png"  class="unav-h-6 unav-hidden md:unav-block" alt="logo of the state of new york" />
<span class="unav-mx-4">
  An Official Website of the State of New York.
</span>
<div class="unav-flex unav-flex-row">
  <button class="unav-text-ny-links unav-underline hover:unav-text-blue-900 focus:unav-text-blue-900" id="trust-disclose">
    Here's how you know  
  </button>
  <div class="unav-mx-2" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="unav-arrow" class="unav-rotate-180" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>
  </div>
</div>
</header>
</section>
<div class="unav-hidden unav-flex-col md:unav-flex-row unav-items-center unav-gap-8 md:unav-gap-16 unav-py-6 unav-px-8 md:unav-px-16 unav-bg-gray-50 unav-text-sm" id="offical-site-disclosure">
<div class="unav-flex unav-flex-col unav-items-center md:unav-items-baseline unav-text-center md:unav-text-left unav-w-1/3">
<div class="">
  <img src="https://static-assets.ny.gov/sites/all/themes/ny_gov/images/nygov-logo.png"  class="unav-h-12 -unav-mt-4" alt="logo of the state of new york" />
</div>
<h2 class="unav-font-bold unav-py-2">New York State Agency websites use ny.gov</h2>
<p class="">Official state websites are in a ny.gov domain or use this trusted identity banner. </p>
</div>
<div class="unav-flex unav-flex-col unav-items-center md:unav-items-baseline unav-text-center md:unav-text-left unav-w-1/3">
<div class="">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="" viewBox="0 0 16 16">
    <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0z"/>
    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
  </svg>
</div>
<h2 class="unav-font-bold unav-py-2">State websites are secured with HTTPS</h2>
<p class="">A lock symbol or https:// means that you are safely connected to a .gov website. Never share information without a secure connection.</p>
</div>
<div class="unav-flex unav-flex-col unav-items-center md:unav-items-baseline unav-text-center md:unav-text-left unav-w-1/3">
<div class="unav-h-12 ">
  <img src="https://my.ny.gov/LoginV4/resources/images/NY.GOV-ID-Logo.png"  class="" alt="ny.gov ID logo" />
</div>
<h2 class="unav-font-bold unav-py-2">Trusted applications are secured with NY.GOV ID</h2>
<p class="">If you are asked to login with a NY.GOV ID, your privacy, data, and are all protected by industry leading security guidelines.</p>
</div>
</div>


    `;
}
}
customElements.define("universal-navigation", universalNavigation);


   
document.addEventListener('DOMContentLoaded', () => {
const unavbanner = document.getElementById('unav-banner');
const unavbutton = document.getElementById('trust-disclose');
const disclosure = document.getElementById('offical-site-disclosure');
const unavarrow = document.getElementById('unav-arrow');

unavbutton.addEventListener("click", showdisclouse) 
unavbanner.addEventListener("click", clickdisclouse) 

function clickdisclouse (event) {
    var target = event.target;
        if (target === unavbutton || unavbutton.contains(target)) {
    return;
    }
    showdisclouse();
}

function showdisclouse () {
    disclosure.classList.toggle('unav-hidden');
    disclosure.classList.toggle('unav-flex');
    unavarrow.classList.toggle('unav-rotate-180');
}
})


