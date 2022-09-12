const initialState={
    productList:[],
    isLoading: false,
    error: ""
}

export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                productList: action.payload,
                isLoading: false
            }
            case "FETCH_PRODUCTS_START":
                return {
                    ...state,
                   isLoading: true
                }
                
                case "FETCH_PRODUCTS_ERROR":
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload
                    }
            
    
        default:
            return state
    }
   
}