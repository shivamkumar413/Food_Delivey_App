import { create } from "zustand";

// How to store all order details
// can store in array , what should be better two different array 
// for food and instamart

interface Order  {
    restaurantName ?: string;
    itemName : string;
    itemImage : string;
    restaurantAddress ?: string;
    price : number;
}


type Store = {
    foodOrders : Order[],
    instmartOrders : Order[],
    setFoodOrders : (incomingOrder : Order)=>void,
    setInstamartOrders : (incomingInstamartOrder : Order)=>void,

}

export const useOrderStore = create<Store>((set,get)=>{
    return{
        foodOrders : [],
        instmartOrders : [],
        setFoodOrders : (incomingOrder : Order)=>{
            set({
                foodOrders : [...get().foodOrders,incomingOrder]
            })
        },
        setInstamartOrders : (incomingInstamartOrder : Order)=>{
            set({
                instmartOrders : [...get().instmartOrders,incomingInstamartOrder]
            })
        }
    }
})