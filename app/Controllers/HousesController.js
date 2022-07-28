import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js";
import { houseService }from "../Services/HouseService.js"
import { saveState2 } from "../Utils/LocalStorage.js";



function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  console.log(houses);
  houses.forEach(h => template += h.Template)
  // console.log('drawing house', template)
  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML= houses[0].FormTemplate
}



// function _drawCars(){
//   let template =''
//   let cars = ProxyState.cars
//   cars.forEach(c => template += c.Template)
//   // console.log('drawing cars', template)
//   document.getElementById('listings').innerHTML = template
// }

export class HousesController{

  constructor() {
    console.log('house controller loaded');
    ProxyState.on('houses', _drawHouses)
    ProxyState.on('houses',saveState2)
}

  viewHouses(){
    _drawHouses()

    // swap out car form with house form
  }




  createHouse(){
    console.log('house form submitted');
    // NOTE window.event.preventDefault grabs the submit event from the form submit and keeps the page from refreshing
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

   let newHouse ={
    type: form.type.value,
    area: form.area.value,
    price: form.price.value,
    year: form.year.value,
    img: form.img.value,
    description: form.description.value,
   }
    houseService.createHouse(newHouse)
    form.reset()
    // NOTE replaced by listeners in constructor
    // _drawCars()
  }

  deleteHouse(id){
    console.log('deleteing', id);
    houseService.deleteHouse(id)
    _drawHouses()
  }
}











