import { create } from "zustand";

type Store = {
    headerShown : boolean,
    setHeaderShown : (incomingBoolean : boolean)=>void,
}

export const useRestaurantScreenHeaderStore = create<Store>((set,get)=>{
    return{
        headerShown : false,
        setHeaderShown : (incomingBoolean : boolean)=>{
            set({
                headerShown : incomingBoolean
            })
        }
    }
})