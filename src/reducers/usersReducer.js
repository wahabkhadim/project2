const initialState={
    userList:[],
    loggedInUser:{}

}

export const usersReducer=(state=initialState, action) => {
        switch (action.type) {
            case "ADD_USER":
                console.log(action.payload)
                return {
                    ...state,
                    userList: [...state.userList, action.payload]

                }
            case "LOGGED_IN":
                console.log(action.payload)
                return{
                    ...state,
                    loggedInUser:action.payload
                }
            

                

            default:
                return state;
        }




    
}