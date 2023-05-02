import './style.css' // Import del css nel main, si puo anche importare dentro index 
import { Dog } from './dog'; // come importare al posto di script nell'index
import confetti from 'canvas-confetti';
// npm run dev per lanciare in locale
// npm run build per pubblicare

console.log('hello vite')

const ariel = new Dog('Ariel', 'border-collie', 18, 'male', ['black', 'white'], 'carrot', 'veg');

console.log(ariel);


ariel.sayHallo()

function fire(){
  console.log('>:c')
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })
}

const fireBtn = document.getElementById('fire-btn');

fireBtn.addEventListener('click', fire)