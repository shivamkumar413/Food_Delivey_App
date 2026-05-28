import { create } from "zustand";

// What are the things i need to store on each add or minus click,
// Total item count : easy
// [ 
//  {
//      itemName : '',
//      numberOfItem : 1,
//      itemImage : ''
//  },
//  {
//      itemName : '',
//      numberOfItem : 1,
//      itemImage : ''
//  }
//  ]
// On adding any item , i will check if that item doesn;t exist then add it with its name , image and 

type cartObject = {
    itemName : string;
    itemImage : string;
    numberOfItem?: number;
}

type Store = {
    cart : cartObject[],
    addToCart : (incomingItem : cartObject)=>void,
    removeFromCart : (incomingItem : cartObject)=>void
}


export const useCartStore = create<Store>((set,get)=>{
    return{
        cart : [],
        addToCart : (incomingItem : cartObject)=>{
            set((state)=>{
                const existingItem = state.cart.find(
                    item => item.itemName === incomingItem.itemName
                )

                if(existingItem){
                    return {
                        cart : state.cart.map(item =>
                            item.itemName === incomingItem.itemName 
                            ? 
                                {
                                    ...item,
                                    numberOfItem : (item.numberOfItem ?? 0) + 1
                                }
                            : item
                        )
                    }
                }

                return {
                    cart : [
                        ...state.cart,
                        {
                            ...incomingItem,
                            numberOfItem : 1,
                        }
                    ]
                }

            })
        },
        removeFromCart : (incomingItem : cartObject)=>{
            set((state)=>{

                return{
                    cart : state.cart.map(item =>
                        item.itemName === incomingItem.itemName
                        ?
                        {
                            ...item,
                            numberOfItem : (item.numberOfItem ?? 0) - 1
                        }
                        : item
                    ).filter(item => (item.numberOfItem ?? 0) > 0),
                    
                }
            })
        }
    }
})