//selects image attribute
let myImage = document.querySelector('img');

//changes between images when user clicks on current image
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png'); 
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

//selects button and header

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//prompts user to enter their name when page is loaded. 
//If a user name is already stored, the stored name is used instead. 
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

//Stores user's entered name as a variable in localStorage
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  //Prompts user to enter new user name when button is clicked
  myButton.onclick = function() {
    setUserName();
  }
  