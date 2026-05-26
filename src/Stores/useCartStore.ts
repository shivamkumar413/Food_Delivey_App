import { create } from "zustand";

type CartItem = {
    [key : string] : number
}

type CartStore = {
    itemCartCount : CartItem,
    setItemCartCount : (incomingCartCout : CartItem)=>void,
    restaurantName : string,
    setRestaurantName : (incomingName : string)=>void,
    totalItemCount: number,
    setTotalItemCount : (incomingCount : number)=>void,
}

export const useCartStore = create<CartStore>((set,get)=>{
    return{
        restaurantName : '',
        totalItemCount : 0,
        setRestaurantName : (incomingName)=>{
            set({
                restaurantName : incomingName,
            })
        },
        setTotalItemCount : (incomingCount : number)=>{
            set({
                totalItemCount : incomingCount
            })
            
        },
        itemCartCount : {},
        setItemCartCount : (incomingCartCount : CartItem)=>{
            set({
                itemCartCount : {...get().itemCartCount,...incomingCartCount}
            })
        }
    }
})