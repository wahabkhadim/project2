import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const allReducers=combineReducers({
    users:usersReducer,
    productList:productReducer,
    cart:cartReducer

})

export default allReducers