import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HouseService{



    createHouse(newHouse) {
        let createdHouse = new House(newHouse)
        ProxyState.houses = [...ProxyState.houses, createdHouse]
        console.log('creating new house', createdHouse)
        
    }
    deleteHouse(id) {
        ProxyState.houses= ProxyState.houses.filter(h => h.id !==id)
    }
}




export const houseService = new HouseService();