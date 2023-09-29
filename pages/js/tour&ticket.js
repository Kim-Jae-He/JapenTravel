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
let moreBtn = document.querySelector('.item-container1-container');
let more = document.querySelector('.item-container1 ul');
moreBtn.addEventListener('mouseover', function(){
    more.style.opacity = '1';
})
moreBtn.addEventListener('mouseleave', function(){
    more.style.opacity = '0';
})
