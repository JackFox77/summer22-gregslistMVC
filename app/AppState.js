import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make:'Honda', model:'CRV3-XL PLUS', year:2023, price:100000, img:'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future'}),
    new Car({make:'Tesla', model:'Cyber truck', year:3000, price:5, img:'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description:'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.'})
  ]
  houses = [
    new House({ type: 'Condo', area:'1150', price: 255000, year: 1996, img:' https://images.unsplash.com/photo-1606074280798-2dabb75ce10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', description: 'null' }),
    new House({type:'Townhouse',area:1650,price:400000,year:2011,img:'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93biUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',description:'null'})
  ]
}

// class AppState extends EventEmitter{
//   /**@type {import('./Models/Value').Value[]} */
//   values = []
  
//   /**@type {import('./Models/House').House[]} */

// }

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
