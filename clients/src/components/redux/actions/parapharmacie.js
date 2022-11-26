import axios from "axios";
import { getAllPara,addNewPara,deletePara } from "../../../services/api";
import { ADD_PARA, DELETE_PARA, GET_PARA, UPDATE_PARA } from "./type";

//getPARA
export const getParaApi=()=> async(dispatch)=>{
    try{
const res=await getAllPara();
dispatch({
    type:GET_PARA,
    payload:res.data
})
    }
    catch(error){
    console.log(error)
    }
}

//addPARA
export const addParaApi=(nom,description,adresse,tel,image)=> async(dispatch)=>{
    try{
        const res=await addNewPara(nom,description,adresse,tel,image);
        dispatch({
            type:ADD_PARA,
            payload:res.data
        })
        console.log("payload")

    }
    catch(error){
        console.log(error);
    }
}
//deletePARA
export const deleteParaApi=(id)=>async(dispatch)=>{
    try{
        await deletePara(id)
        dispatch({
            type:DELETE_PARA,
            payload:id,
        })
        console.log("delete")
        dispatch(getParaApi)

    }
    catch(error){
        console.log(error);
    }
}

//updatePara
export const UpdateParaa=(id,nom,description,adresse,tel,image) => async dispatch=>{

    try{
        const res=await axios.put(`http://localhost:7000/para/updatePara/${id}`,{id,nom,description,adresse,tel,image})
        dispatch({
            type:UPDATE_PARA,
            payload:res.data
        });
        console.log("super")  

    }
    catch(error){
        console.log(error);}
}


