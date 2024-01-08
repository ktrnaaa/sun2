const sun1 = document.getElementById('sun1');
let isSecondImage = false;
const switcher = document.querySelector('.switcher');
const leftbtn = document.querySelector('.arrow-1');
const rightbtn = document.querySelector('.arrow-2');
let currentPosition = 0;


switcher.addEventListener('click', () => {
  if (!isSecondImage) {
    sun1.style.backgroundImage = "url('img/sun2.svg')"; 
    isSecondImage = true;
  } else {
    sun1.style.backgroundImage = "url('img/sun1.svg')"; 
  }
  
});

leftbtn.addEventListener('click', () =>{
  currentPosition -= 50; 
  sun1.style.left = currentPosition + 'px';
  console.log('left');
});
rightbtn.addEventListener('click', () =>{
  currentPosition += 50;
  sun1.style.left = currentPosition + 'px';
  console.log('right');
});