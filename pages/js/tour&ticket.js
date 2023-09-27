const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup:4,

    navigation: {
        nextEl : '.SlideNext',
        prevEl : '.SlidePrev',
    }
});
