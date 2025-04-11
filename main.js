let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let button = document.querySelector('button')
let i = document.querySelector('i')

let dice = ["fa-solid fa-dice-one","fa-solid fa-dice-two","fa-solid fa-dice-three","fa-solid fa-dice-four","fa-solid fa-dice-five","fa-solid fa-dice-six"]

const fetchQuotes = async ()=>{
    // i.className="fa-solid fa-dice-two"
    i.className= dice[Math.floor(Math.random()*5)]
    button.style.transform="rotate(150deg)"
const response = await fetch('https://dummyjson.com/quotes/random')
const data = await response.json();
h1.innerText= data.quote;
p.innerText= data.author;
setInterval(() => {
    button.style.transform="rotate(0deg)"
}, 700);
}
// fetchQuetos();

button.addEventListener("click",fetchQuotes)