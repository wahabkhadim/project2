export function getProductsList() {
    return async (dispatch, getState) => {
        try {
            dispatch({type: "FETCH_PRODUCTS_START"})
            const producs = 
            await fetch('getProducts'
                // "https://fakestoreapi.com/products"
                )
            .then((res) => res.json())
            dispatch(getProductsData(producs))
        } catch (error) {
            dispatch({type: "FETCH_PRODUCTS_ERROR"})

        }
    }
  }