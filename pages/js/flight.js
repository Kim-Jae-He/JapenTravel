let swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup:2,

    navigation: {
        nextEl : '.slideNext',
        prevEl : '.slidePrev',
    }
});


let moreBtn = document.querySelector('.item-container1-container');
let more = document.querySelector('.item-container1 ul');
moreBtn.addEventListener('mouseover', function(){
    more.style.opacity = '1';
})
moreBtn.addEventListener('mouseleave', function(){
    more.style.opacity = '0';
});
