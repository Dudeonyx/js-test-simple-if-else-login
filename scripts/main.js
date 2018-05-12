let login = document.querySelector('button#login');
let logout = document.querySelector('button#logout');
let para = document.querySelector('p')
login.onclick = function () {
    if (para.textContent !== 'Welcome, Admin.'){
  userName = prompt('Enter your username:');
  if (userName === 'Admin') {
    password = prompt("Enter your password:");
    if (password === 'TheMaster') {
      alert('Welcome!');
      para.textContent = 'Welcome, ' + userName + '.';
    } else if (password === 'Cancel' || !password) {
      alert('Cancelled');

    } else {
      alert('Wrong password!');
    }
  } else if (userName === '' || userName === 'Esc') {
    alert('Cancelled');
  } else {
    alert('Who the heck are you? \nIf you are you try again!');
  }
logout.onclick = function () {
  if (para.textContent !== 'You have been logged out!' && para.textContent) {
    para.textContent = 'You have been logged out!';
  } else {
    para.textContent = '';
  }
}
} else {
    alert('You are already logged in!');
}
}