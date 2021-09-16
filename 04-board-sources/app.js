const board = document.querySelector("#board")
const colors = ['#fcb37e', '#fc807e', '#f8fc7e', '#c2fc7e', '#91fc7e', '#7efcaf', '#7efcfa', '#7ed2fc', '#7e91fc', '#9c7efc', '#db7efc']
const SQUARES_NUMBER = 1539

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  
  
  square.addEventListener('mouseover', () => 
    setColor(square) )
  square.addEventListener('mouseleave', () => 
    removeColor(square) )
    
  
  board.append(square)
}

function setColor(element) {
const color = getColor()
	element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}`
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = null
}
function getColor() {
	const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}