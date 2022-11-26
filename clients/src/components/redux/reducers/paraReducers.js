import { ADD_PARA, DELETE_PARA, GET_PARA, UPDATE_PARA } from "../actions/type";


//get PARA bech n3abiw tablou bel card para bel get n affiuchiweh 
const initialState={
    tab: []
}
const paraReducers =(state = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case GET_PARA:
return{
    ...state,
    tab:payload
}
//addPARA
case ADD_PARA:
    return{
        ...state,
        tab:[...state.tab,payload]

    }
    //deltePARA
    case DELETE_PARA:
        return{
            ...state,
            tab:state.tab.filter(
            el=>el._id !==payload
            )
        }
        //updatePARA ken data kima el id eli masitou badalheli kima nheb sinon n5ali leblea fi bleh
        case UPDATE_PARA:
            return{
                ...state,
                tab:state.tab.map(el=>el._id===payload._id ? payload:el
                    )
            }

    

}
return state

}

export default paraReducers