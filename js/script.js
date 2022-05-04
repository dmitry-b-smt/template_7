"use strict"

const swiper1 = new Swiper('.hero__swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,

    pagination: {
        el: '.hero__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    grabCursor: true,

    slidesPerView: 1,

    spaceBetween: 10,

    centeredSlides: true,
});

const swiper2 = new Swiper('.spaces__swiper', {
    loop: false,

    breakpoints: {

    },

    navigation: {
        nextEl: '.spaces__swiper-button-next',
        prevEl: '.spaces__swiper-button-prev',
    },

    pagination: {
        el: '.spaces__swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="swiper-pagination-current-custom">' + '0' + '</span><span class="' + currentClass + '"></span>' + '<span class="swiper-pagination-current-custom-small">' + '/' + '</span>' + '<span class="swiper-pagination-total-custom">' + '0' + '</span><span class="' + totalClass + '" ></ > ';
        },
        clickable: true,
    },

    scrollbar: {
        el: '.spaces__swiper-scrollbar',
        draggable: true,
    },

    grabCursor: true,

    slidesPerView: 1,

    spaceBetween: 10,

    centeredSlides: true,
});

const swiper3 = new Swiper('.gallery__swiper', {
    loop: false,
    freeMode: true,

    breakpoints: {
        350: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: '.gallery__swiper-button-next',
        prevEl: '.gallery__swiper-button-prev',
    },

    slidesPerView: 3,

    grabCursor: true,

    initialSlide: 1,

    spaceBetween: 30,

    centeredSlides: false,
});

const swiper4 = new Swiper('.reviews__swiper', {
    loop: false,
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },

    scrollbar: {
        el: '.reviews__swiper-scrollbar',
    },

    initialSlide: 1,

    slidesPerView: 'auto',

    spaceBetween: 30,

    centeredSlides: true,
});


const burgerButtonWrapper = document.querySelector('.menu__burger-button-wrapper');
const burgerMenu = document.querySelector('.menu__burger-wrapper');


burgerButtonWrapper.addEventListener('click', function (e) {
    const burgerMenu = document.querySelector('.menu__burger-wrapper');
    burgerMenu.classList.remove('menu__burger-wrapper-hidden');
    burgerMenu.classList.add('menu__burger-wrapper-show');
});

burgerMenu.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('menu__burger-wrapper')) {
        burgerMenu.classList.add('menu__burger-wrapper-hidden');
        burgerMenu.classList.remove('menu__burger-wrapper-show');
    };
});


// ------------------SPACES-SLIDER-ARROWS------------------------

const spacesPrevArrow = document.querySelector('.spaces__swiper-button-prev');
const spacesPrevArrowGray = document.querySelector('.spaces__swiper-button-prev-gray');
const spacesPrevArrowOrange = document.querySelector('.spaces__swiper-button-prev-orange');

function leftDisableCheck() {
    if (spacesPrevArrow.classList.contains('swiper-button-disabled')) {
        spacesPrevArrowGray.classList.remove('arrowDisabled');
        spacesPrevArrowOrange.classList.add('arrowDisabled');
    } else {
        spacesPrevArrowGray.classList.add('arrowDisabled');
        spacesPrevArrowOrange.classList.remove('arrowDisabled');
    };
}

const spacesNextArrow = document.querySelector('.spaces__swiper-button-next');
const spacesNextArrowGray = document.querySelector('.spaces__swiper-button-next-gray');
const spacesNextArrowOrange = document.querySelector('.spaces__swiper-button-next-orange');

function rightDisableCheck() {
    if (spacesNextArrow.classList.contains('swiper-button-disabled')) {
        spacesNextArrowGray.classList.remove('arrowDisabled');
        spacesNextArrowOrange.classList.add('arrowDisabled');
    } else {
        spacesNextArrowGray.classList.add('arrowDisabled');
        spacesNextArrowOrange.classList.remove('arrowDisabled');
    };
}

spacesPrevArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        spacesPrevArrowGray.classList.add('arrowDisabled');
        spacesPrevArrowOrange.classList.remove('arrowDisabled');
    }
    leftDisableCheck();
    rightDisableCheck();
});


spacesNextArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        spacesNextArrowGray.classList.add('arrowDisabled');
        spacesNextArrowOrange.classList.remove('arrowDisabled');
    }
    leftDisableCheck();
    rightDisableCheck();
});

// ------------------/SPACES-SLIDER-ARROWS------------------------

// -------------------TABS----------------------------------------


const tabs = document.querySelectorAll(".facilities__tab-image");
const tabButtons = document.querySelectorAll(".facilities__tab")

tabs.forEach(function (item, i) {
    let tabIndex = i;
    item.setAttribute("data-index", tabIndex);
});

tabButtons.forEach(function (item, i) {
    let buttonIndex = i;
    item.setAttribute("data-index", buttonIndex);
})

let activeTab = 0;
tabs.forEach(function (item) {
    if (Number(item.dataset.index) === activeTab) {
        item.classList.add('facilities__tab-image-active');
        item.classList.remove('facilities__tab-image-unactive');
    } else {
        item.classList.remove('facilities__tab-image-active');
        item.classList.add('facilities__tab-image-unactive');
    };
});
tabButtons.forEach(function (item) {
    if (Number(item.dataset.index) === activeTab) {
        item.classList.add('facilities__tab-active');
    } else {
        item.classList.remove('facilities__tab-active');
    };
});

const tabButtonsContainer = document.querySelector('.facilities__tabs');

tabButtonsContainer.addEventListener("click", function (e) {
    tabButtons.forEach(function (item) {
        item.classList.remove('facilities__tab-active');
    });
    let target = e.target;
    let compareIndex = target.dataset.index;
    tabs.forEach(function (item) {
        if ((item.dataset.index === compareIndex)) {
            item.classList.add('facilities__tab-image-active');
            item.classList.remove('facilities__tab-image-unactive');
            item.classList.add('tab-fade');
            target.classList.add('facilities__tab-active');
        } else {
            item.classList.remove('facilities__tab-image-active');
            item.classList.add('facilities__tab-image-unactive');
            item.classList.remove('tab-fade');
            // target.classList.remove('facilities__tab-active');
        };
    });
});


// -------------------/TABS---------------------------------------


// ------------------GALLERY-SLIDER-ARROWS------------------------

const galleryPrevArrow = document.querySelector('.gallery__swiper-button-prev');
const galleryPrevArrowGray = document.querySelector('.gallery__swiper-button-prev-gray');
const galleryPrevArrowOrange = document.querySelector('.gallery__swiper-button-prev-orange');

function galleryleftDisableCheck() {
    if (galleryPrevArrow.classList.contains('swiper-button-disabled')) {
        galleryPrevArrowGray.classList.remove('arrowDisabled');
        galleryPrevArrowOrange.classList.add('arrowDisabled');
    } else {
        galleryPrevArrowGray.classList.add('arrowDisabled');
        galleryPrevArrowOrange.classList.remove('arrowDisabled');
    };
}

const galleryNextArrow = document.querySelector('.gallery__swiper-button-next');
const galleryNextArrowGray = document.querySelector('.gallery__swiper-button-next-gray');
const galleryNextArrowOrange = document.querySelector('.gallery__swiper-button-next-orange');

function galleryrightDisableCheck() {
    if (galleryNextArrow.classList.contains('swiper-button-disabled')) {
        galleryNextArrowGray.classList.remove('arrowDisabled');
        galleryNextArrowOrange.classList.add('arrowDisabled');
    } else {
        galleryNextArrowGray.classList.add('arrowDisabled');
        galleryNextArrowOrange.classList.remove('arrowDisabled');
    };
}

galleryPrevArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        galleryPrevArrowGray.classList.add('arrowDisabled');
        galleryPrevArrowOrange.classList.remove('arrowDisabled');
    }
    galleryleftDisableCheck();
    galleryrightDisableCheck();
});


galleryNextArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        galleryNextArrowGray.classList.add('arrowDisabled');
        galleryNextArrowOrange.classList.remove('arrowDisabled');
    }
    galleryleftDisableCheck();
    galleryrightDisableCheck();
});

// ------------------/GALLERY-SLIDER-ARROWS------------------------

// ------------------REVIEWS-SLIDER-ARROWS------------------------

const reviewsPrevArrow = document.querySelector('.reviews__swiper-button-prev');
const reviewsPrevArrowGray = document.querySelector('.reviews__swiper-button-prev-gray');
const reviewsPrevArrowOrange = document.querySelector('.reviews__swiper-button-prev-orange');

function reviewsleftDisableCheck() {
    if (reviewsPrevArrow.classList.contains('swiper-button-disabled')) {
        reviewsPrevArrowGray.classList.remove('arrowDisabled');
        reviewsPrevArrowOrange.classList.add('arrowDisabled');
    } else {
        reviewsPrevArrowGray.classList.add('arrowDisabled');
        reviewsPrevArrowOrange.classList.remove('arrowDisabled');
    };
}

const reviewsNextArrow = document.querySelector('.reviews__swiper-button-next');
const reviewsNextArrowGray = document.querySelector('.reviews__swiper-button-next-gray');
const reviewsNextArrowOrange = document.querySelector('.reviews__swiper-button-next-orange');

function reviewsrightDisableCheck() {
    if (reviewsNextArrow.classList.contains('swiper-button-disabled')) {
        reviewsNextArrowGray.classList.remove('arrowDisabled');
        reviewsNextArrowOrange.classList.add('arrowDisabled');
    } else {
        reviewsNextArrowGray.classList.add('arrowDisabled');
        reviewsNextArrowOrange.classList.remove('arrowDisabled');
    };
}

reviewsPrevArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        reviewsPrevArrowGray.classList.add('arrowDisabled');
        reviewsPrevArrowOrange.classList.remove('arrowDisabled');
    }
    reviewsleftDisableCheck();
    reviewsrightDisableCheck();
});


reviewsNextArrow.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('.swiper-button-disabled') == false) {
        reviewsNextArrowGray.classList.add('arrowDisabled');
        reviewsNextArrowOrange.classList.remove('arrowDisabled');
    }
    reviewsleftDisableCheck();
    reviewsrightDisableCheck();
});

// ------------------/REVIEWS-SLIDER-ARROWS------------------------

// ------------------MENU-SCROLL-----------------------------------

let scrollpos = window.scrollY

const menuRow = document.querySelector('.header__menu-row');
const scrollChange = 37;

const add_class_on_scroll = () => menuRow.classList.add("header__menu-row-active")
const remove_class_on_scroll = () => menuRow.classList.remove("header__menu-row-active")
const add_blur_class_on_return = () => menuRow.classList.add("header__menu-row-default")
const remove_blur_class_on_return = () => menuRow.classList.remove("header__menu-row-default")

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll();
        remove_blur_class_on_return();
    }
    else {
        remove_class_on_scroll();
        add_blur_class_on_return();
    }

});


// -----------------/MENU-SCROLL-----------------------------------

// ------------------------SCROLL TO-----------------------------

const home = document.querySelectorAll('[data-section="home"]');
const workspace = document.querySelectorAll('[data-section="workspace"]');
const service = document.querySelectorAll('[data-section="service"]');
const events = document.querySelectorAll('[data-section="events"]');
const reviews = document.querySelectorAll('[data-section="reviews"]');
const contact = document.querySelectorAll('[data-section="contact"]');

const heroSection = document.querySelector('.hero');
const spacesSection = document.querySelector('.spaces');
const whySection = document.querySelector('.why');
const newsSection = document.querySelector('.news');
const reviewsSection = document.querySelector('.reviews');
const footerSection = document.querySelector('.contact');

home.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        heroSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

workspace.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        spacesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

service.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        whySection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

events.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        newsSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

reviews.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        reviewsSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

contact.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        footerSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// -------------------------GO TO HELL, SLIDER-SWIPER, I'M GOD HERE-----------------------------

let galleryActiveSlide = document.querySelector('.swiper-slide-active');

// galleryActiveSlide = '<div class="swiper-slide-active-wrapper">' + galleryActiveSlide + '</div>';
console.log(galleryActiveSlide);

let innerGalleryActiveSlide = galleryActiveSlide.innerHTML;
console.log(innerGalleryActiveSlide);