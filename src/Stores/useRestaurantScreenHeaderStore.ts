import { create } from "zustand";

type Store = {
    headerShown : boolean,
    setHeaderShown : (incomingBoolean : boolean)=>void,
    headerText : string,
    setHeaderText : (incomingString : string)=>void
}

export const useRestaurantScreenHeaderStore = create<Store>((set,get)=>{
    return{
        headerShown : false,
        headerText : '',
        setHeaderShown : (incomingBoolean : boolean)=>{
            set({
                headerShown : incomingBoolean
            })
        },
        setHeaderText : (incomingString : string)=>{
            set({
                headerText : incomingString
            })
        }
    }
})