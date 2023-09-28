//헤더부분 카테고리 마우스올리면 텍스트 색상변경

var itemEvent = document.querySelector('.mainpage-container');

itemEvent.addEventListener(
  'mouseover',
  function (event) {
    event.target.style.color = 'rgb(121, 190, 245)';
  },
  false
);

itemEvent.addEventListener(
  'mouseout',
  function (event) {
    event.target.style.color = 'black';
  },
  false
);

//헤더부분 로그인 마우스올리면 배경색 변경

const lgEvent = document.querySelector('.login-container');
const joEvent = document.querySelector('.login-join-container');

function setBackgroundColor(event, color) {
  event.target.style.backgroundColor = color;
}

lgEvent.addEventListener('mouseover', (event) => setBackgroundColor(event, 'rgb(222, 226, 230)'));
lgEvent.addEventListener('mouseout', (event) => setBackgroundColor(event, 'white'));
joEvent.addEventListener('mouseover', (event) => setBackgroundColor(event, '#F5FBFF'));
joEvent.addEventListener('mouseout', (event) => setBackgroundColor(event, 'white'));
