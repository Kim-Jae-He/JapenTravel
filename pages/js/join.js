//회원가입코드 
const onRegister = () => {
  let username = document.querySelector('#joininput1');
  let userid = document.querySelector('#joininput2');
  let userpw = document.querySelector('#joininput3');
  let userpwcheck = document.querySelector('#joininput4');
  console.log(username.value);
  console.log(userid.value);
  

  let check = true;

  if (username.value === '') {
    nameErr.style.color = 'red';
    document.getElementById('nameErr').innerHTML = '이름을 입력해주세요';
    check = false;
  } else {
    nameErr.style.color = 'gray';
    document.getElementById('nameErr').innerHTML = '멋진이름이네요';
  }
  
  if (userid.value === '') {
    idErr.style.color = 'red';
    document.getElementById('idErr').innerHTML = '아이디를 입력해주세요';
    check = false;
  } else {
    idErr.style.color = 'gray';
    document.getElementById('idErr').innerHTML = '훌륭한 아이디입니다!';
  }

  
  
}