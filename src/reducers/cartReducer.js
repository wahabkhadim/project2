const initialState={
    cartItems:[],
    totalAmount:0,
    totalQuantity:0
}

const getTotal = (list) =>  {

    return list.reduce((prevVal, currVal)=> prevVal + Number(currVal.price)* currVal.quantity, 0)

}

export const cartReducer=( state=initialState,action )=>{
        switch (action.type) {
            case "ADD_ITEM_TO_CART":
                const updateCart = [
                    ...state.cartItems,
                    action.payload
                ]

                return {
                    ...state,
                    cartItems:updateCart,
                    totalAmount: getTotal(updateCart)
                }
            case "REMOVE_ITEM_FROM_CART":
                const updateItems=state.cartItems.filter((item)=>item.id !==action.payload)
                return {
                    ...state,
                    cartItems:updateItems,
                    totalAmount: getTotal(updateItems)

                }
            case "INCREASE_QUANTITY":
                const derivedItem=state.cartItems.map((item)=>{
                    if(item.id===action.payload){
                        return {...item, quantity: item.quantity + 1}
                    }

                    return item
                })
                return {
                    ...state,
                    cartItems: derivedItem,
                    totalAmount: getTotal(derivedItem),
                    totalQuantity:state.totalQuantity+1
                }
            case "DECREASE_QUANTITY":
                const updateCartItems=state.cartItems.map((item)=>{
                    if(item.id===action.payload){
                        return {...item, quantity: item.quantity - 1}
                    }

                    return item
                })
                return {
                    ...state,
                    cartItems: updateCartItems,
                    totalAmount: getTotal(updateCartItems),
                    totalQuantity:state.totalQuantity-1

                }
                case "TOTAL_QUANTITY":
                    let calQuantity=state.cartItems.reduce((prevVal,currentVal)=>prevVal+currentVal.quantity,0)
                    let updatedItemsCart=[...state.cartItems]
                    return {
                        ...state,
                        cartItems:updatedItemsCart,
                        totalQuantity:calQuantity
                    }
                case "CLEAR_ALL":
                    return{
                        ...state,
                        cartItems:[],
                        totalAmount:0,
                        totalQuantity:0
                    }
            default:
                return state
        }
    

}