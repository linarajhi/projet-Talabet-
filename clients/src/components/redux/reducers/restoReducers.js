const {GET_RESTAURANTS,ADD_RESTAURANTS,DELETE_RESTAURANTS,UPDATE_RESTAURANTS}=require("../actions/type")

//get restaurants bech n3abiw tablou bel card resto bel get n affiuchiweh 
const initialState={
    tab: []
}
const restoReducers =(state = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case GET_RESTAURANTS:
return{
    ...state,
    tab:payload
}
//addResto
case ADD_RESTAURANTS:
    return{
        ...state,
        tab:[...state.tab,payload]

    }
    //delteResto
    case DELETE_RESTAURANTS:
        return{
            ...state,
            tab:state.tab.filter(
            el=>el._id !==payload
            )
        }
        //updateResto ken data kima el id eli masitou badalheli kima nheb sinon n5ali leblea fi bleh
        case UPDATE_RESTAURANTS:
            return{
                ...state,
                tab:state.tab.map(el=>el._id===payload._id ? payload:el
                    )
            }

    

}
return state

}

export default restoReducers