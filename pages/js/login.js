const idCheck = document.querySelector('#idCheck');
const pwcheck = document.querySelector('#pwcheck');
const loginButton = document.querySelector('.loginbutton1');


idCheck.addEventListener('keyup', () => {
  if (!isEmpty(idCheck.value) && !isEmpty(pwcheck.value)) {
    loginButton.style.cursor = 'pointer';
    loginButton.style.backgroundColor = 'rgb(43, 150, 237)';
  } else if (isEmpty(idCheck.value) || isEmpty(pwcheck.value)) {
    loginButton.style.cursor = 'not-allowed';
    loginButton.style.backgroundColor = '#a7d4f9';
  }
});

pwcheck.addEventListener('keyup', () => {
  if (!isEmpty(idCheck.value) && !isEmpty(pwcheck.value)) {
    loginButton.style.cursor = 'pointer';
    loginButton.style.backgroundColor = 'rgb(43, 150, 237)';
  } else if (isEmpty(idCheck.value) || isEmpty(pwcheck.value)) {
    loginButton.style.cursor = 'not-allowed';
    loginButton.style.backgroundColor = '#a7d4f9';
  }
});

function isEmpty(value) {
  return value == null || value == undefined || value == '';
}
