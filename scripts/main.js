// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/aikon.png') {
    myImage.setAttribute ('src','images/aikon.png');
  } else {
    myImage.setAttribute ('src','images/aikon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('名前を入力してね');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML =myName + 'さん、こんにちは！';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + 'さん、こんにちは！';
}

myButton.onclick = function() {
  setUserName();
}