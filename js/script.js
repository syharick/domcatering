function up() {
    var e = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    return e > 0 ? (window.scrollBy(0, (e + 100) / -10), t = setTimeout("up()", 20)) : clearTimeout(t), !1;
}
window.onscroll = function myScroll() {
    var toTop = document.querySelector(".to-top");
   (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) ? toTop.style.display='block' : toTop.removeAttribute('style');
}