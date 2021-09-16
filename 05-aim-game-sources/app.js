const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
const colors = [
  '#a83232', '#a87f32', '#85a832', '#32a855',
  '#32a8a8', '#3265a8', '#a8328e', '#a83255'
]

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if(event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
})
board.addEventListener('click', event => {
  // console.log(event)
  if (event.target.classList.contains('target')) {
    score++;
    event.target.remove();
    createRandomTarget();
  }
})

function startGame() { 
  setInterval(decreaseTime, 1000)
  createRandomTarget()
  setTime(time)
}
function decreaseTime() {  
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
  
}

function setTime(value) {  
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  board.innerHTML = `<h1>Счет: <span class="primary>${score}</span></h1>`
  timeEl.parentNode.remove()
}
function createRandomTarget () {
  const {width, height} = board.getBoundingClientRect()
  let target = document.createElement('div')
  let size = getRandomNumber(20, 60)
  let x = getRandomNumber(0, width - size)
  let y = getRandomNumber(0, height - size)

  target.classList.add('target')
  target.style.width = `${size}px`
  target.style.height = `${size}px`
  target.style.left = `${x}px`
  target.style.top = `${y}px`

  board.append(target)



  target.addEventListener('mouseover', function moveTarget(x, y){
    target.remove()
    createRandomTarget()
  })
}

function getRandomNumber(min, max) {  
  return Math.round((Math.random() * (max - min) + min))
}
// ===================================================================

