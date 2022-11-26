
import axios from "axios";
import { addNewContact, deleteContact, getAllContact } from "../../../services/api";
import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "./type";

//getContact
export const getContactApi=()=> async(dispatch)=>{
    try{
const res=await getAllContact();
dispatch({
    type:GET_CONTACT,
    payload:res.data
})
    }
    catch(error){
    console.log(error)
    }
}

//addPARA
export const addContactApi=(nomPrenom,adresseMail,tel,commentaire)=> async(dispatch)=>{
    try{
        const res=await addNewContact(nomPrenom,adresseMail,tel,commentaire);
        dispatch({
            type:ADD_CONTACT,
            payload:res.data
        })
        console.log("payload")

    }
    catch(error){
        console.log(error);
    }
}
//deleteContact
export const deleteContactApi=(id)=>async(dispatch)=>{
    try{
        await deleteContact(id)
        dispatch({
            type:DELETE_CONTACT,
            payload:id,
        })
        console.log("delete")
        dispatch(getContactApi)

    }
    catch(error){
        console.log(error);
    }
}
//updateContact
export const UpdateContacts=(id,nomPrenom,adresseMail,tel,commentaire) => async dispatch=>{

    try{
        const res=await axios.put(`http://localhost:7000/contact/updateContact/${id}`,{id,nomPrenom,adresseMail,tel,commentaire})
        dispatch({
            type:UPDATE_CONTACT,
            payload:res.data
        });
        console.log("super")  

    }
    catch(error){
        console.log(error);}
}
