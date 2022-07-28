import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { House } from "../Models/House.js";



export function saveState(){
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
  
}

export function saveState2() {
  console.log('saving2');
  let houseData = JSON.stringify(ProxyState.houses)
  localStorage.setItem('houses',houseData)
}

export function loadState(){
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  let rawHouses=localStorage.getItem('houses')
  if(rawCars){
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
  }
}