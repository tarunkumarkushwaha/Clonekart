import {url,items} from './items.js';
// console.log(items)
items.forEach(
  (i)=>{
   let card = document.createElement("div")
    // console.log(i)
card.innerHTML= i
card.setAttribute("id","item")
container.appendChild(card) 
  }
)
