import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../actions/type";



//get contact bech n3abiw tablou bel donnes contacts bel get n affiuchiweh 
const initialState={
    tab: []
}
const contactReducers =(state = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case GET_CONTACT:
return{
    ...state,
    tab:payload
}
//addContact
case ADD_CONTACT:
    return{
        ...state,
        tab:[...state.tab,payload]

    }
    //delteContact
    case DELETE_CONTACT:
        return{
            ...state,
            tab:state.tab.filter(
            el=>el._id !==payload
            )
        }
        //updateContact ken data kima el id eli masitou badalheli kima nheb sinon n5ali leblea fi bleh
        case UPDATE_CONTACT:
            return{
                ...state,
                tab:state.tab.map(el=>el._id===payload._id ? payload:el
                    )
            }

    

}
return state

}

export default contactReducers