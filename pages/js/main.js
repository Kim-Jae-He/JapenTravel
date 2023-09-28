// 오른쪽 버튼을 누르면 옆으로 이동
const makeRight = () => {
  const listJapans = document.querySelectorAll('.japan-osaka'); // 이미지를 갖고 있는 div 태그
  const listContainer = document.querySelector('.list-wrap'); // 전체 컨테이너
  listContainer.style.transition = '0.0000001s'; // 전체 컨테이너에 0.0000001초 시간을 넣어서 화면이 옆으로 이동하는 것처럼 보여짐
  listContainer.append(listJapans[0].cloneNode(true)); // 이미지를 가지고 있는 div 태그를 cloneNode(true)로 복사 후 append()로 복사하기
  listContainer.prepend(listJapans[1].cloneNode(true));
  listContainer.prepend(listJapans[2].cloneNode(true));
  listContainer.prepend(listJapans[3].cloneNode(true));
  listContainer.style.transform = 'translateX(-270px)'; // 이미지 컨테이너의 px 값이 -270이기 때문에 X 좌표만큼 270px 만큼 이동
};

document.querySelector('.list-wrap').addEventListener('transitionend', () => {
  // transitionend => 트랜지션 끝날 때 addEventListener를 통해 이벤트 추가
  const listContainer = document.querySelector('.list-wrap');
  listContainer.style.transition = 'all'; // 0.0000001s -> none
  listContainer.style.transform = 'translateX(0px)'; // 다시 원래의 화면으로 보여지기
  listContainer.firstElementChild.remove(); // append()로 복사한 이미지들을 remove로 삭제
  listContainer.firstElementChild.remove();
  listContainer.firstElementChild.remove();
  listContainer.firstElementChild.remove();
});

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
