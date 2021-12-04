const btn = document.getElementById('changer')
const color = document.querySelector('.color')
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

//get random number for array
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
//assign function to constants, assign array to background color and html
const randomNumber = () =>{
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]    
}
//use function exprassion in event... when button is clicked
btn.addEventListener('click', randomNumber)
