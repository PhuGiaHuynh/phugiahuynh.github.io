
function scrolltoDiv(name) {
    var scrollDiv = document.getElementById(name).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}
document.onscroll = function () {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(scrollTop);

    if (scrollTop >= 350) {
        document.getElementsByClassName('about-box')[0].classList.add('about-box-active');
    }

    if (scrollTop >= 800) {
        document.getElementsByClassName('service-title')[0].classList.add('service-title-active');
        document.getElementsByClassName('service-item')[0].classList.add('service-item-active');
        document.getElementsByClassName('service-item')[1].classList.add('service-item-active');
        document.getElementsByClassName('service-item')[2].classList.add('service-item-active');
    }
    if (scrollTop >= 1330) {
        document.getElementsByClassName('skill-bounding')[0].classList.add('skill-bounding-active');
        document.getElementsByClassName('html-value')[0].classList.add('html-value-active');
        document.getElementsByClassName('css-value')[0].classList.add('css-value-active');
        document.getElementsByClassName('js-value')[0].classList.add('js-value-active');
        document.getElementsByClassName('php-value')[0].classList.add('php-value-active');
        document.getElementsByClassName('sql-value')[0].classList.add('sql-value-active');
        document.getElementsByClassName('python-value')[0].classList.add('python-value-active');
    }
    if (scrollTop >= 1820) {
        document.getElementsByClassName('contact-title')[0].classList.add('contact-title-active');
        document.getElementsByClassName('contact-box')[0].classList.add('contact-box-active');
    }
  };