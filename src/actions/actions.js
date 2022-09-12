import { getProducts } from '../api'
export const addUser=(users)=>{
    return {
        type:"ADD_USER",
        payload:users
    }
}
export const loggedIn=(item)=>{
    return {
        type:"LOGGED_IN",
        payload:item
    }
}
export const loggedOut=()=>{
    return {
        type:"LOGGED_Out"
    }
}

export const addToCart =(product)=>{
    return {
        type:"ADD_ITEM_TO_CART",
        payload:product
    }
}
export const removeItemFromCart =(id)=>{
    return {
        type:'REMOVE_ITEM_FROM_CART',
        payload:id
    }
}
export const increaseQuantity=(id)=>{
    return {
        type:"INCREASE_QUANTITY",
        payload:id
    }
}
export const decreaseQuantity=(id)=>{
    return {
        type:"DECREASE_QUANTITY",
        payload:id
    }
}

export const getProductsData=(producs)=>{
    return {
        type:"FETCH_PRODUCTS",
        payload: producs
    }
}
export const caltotalQuantity=()=>{
    return {
        type:"TOTAL_QUANTITY"
    }
}
export const clearAll=()=>{
    return {
        type:"CLEAR_ALL"
    }
}



export const getProductsList=()=> {
    return async (dispatch, getState) => {
        try {
            dispatch({type: "FETCH_PRODUCTS_START"})
            const producs = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            dispatch(getProductsData(producs))
        } catch (error) {
            dispatch({type: "FETCH_PRODUCTS_ERROR"})

        }
    }
  }