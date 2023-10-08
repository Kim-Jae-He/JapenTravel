/*  */
// 이미지 요소를 선택합니다.
const image = document.querySelector('.slide-banner-img');

// 버튼 요소를 선택합니다.
const navButtonPrev = document.querySelector('.nav-but');
const navButtonNext = document.querySelector('.nav-but2');

// 이미지에 마우스 오버 이벤트를 추가합니다.
image.addEventListener('mouseover', () => {
  // 버튼을 표시합니다.
  navButtonPrev.style.display = 'block';
  navButtonNext.style.display = 'block';
});

// 이미지에서 마우스를 떼면 버튼을 숨깁니다.
image.addEventListener('mouseout', () => {
  // 버튼을 숨깁니다.
  navButtonPrev.style.display = 'none';
  navButtonNext.style.display = 'none';
});

// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.slider');
  const sliderImages = document.querySelectorAll('.slide-banner-img');
  const prevButtons = document.querySelector('.nav-but');
  const nextButtons = document.querySelector('.nav-but2');

  let currentIndex = 0; // 현재 이미지의 인덱스를 추적

  // 이전 버튼 클릭 시
  prevButtons.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  });

  // 다음 버튼 클릭 시
  nextButtons.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % sliderImages.length;
  });

  // 슬라이더 업데이트 함수
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
/*  */

/*  */
///시간이 지나면 자동으로 옆으로가는 슬라이드
const slideWrapper = document.querySelector('.slide-container');
console.log(slideWrapper);
const slidess = document.querySelectorAll('.swiper-slide');
const slideWidth = slidess[0].clientWidth;
let currentIndex = 0;

const nextSlide = () => {
  currentIndex++;
  if (currentIndex >= slidess.length) {
    currentIndex = 0;
  }
  updateSlider();
};

const updateSlider = () => {
  slideWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// 자동슬라이드
setInterval(nextSlide, 3000); // 3초후에 변경
/*  */
