import axios from "axios";
import { getAllResto,addNewResto,deleteResto } from "../../../services/api";
import { GET_RESTAURANTS,ADD_RESTAURANTS,DELETE_RESTAURANTS,UPDATE_RESTAURANTS } from "./type";

//getResto
export const getRestoApi=()=> async(dispatch)=>{
    try{
const res=await getAllResto();
dispatch({
    type:GET_RESTAURANTS,
    payload:res.data
})
    }
    catch(error){
    console.log(error)
    }
}

//addResto
export const addRestoApi=(nom,description,adresse,tel,image)=> async(dispatch)=>{
    try{
        const res=await addNewResto(nom,description,adresse,tel,image);
        dispatch({
            type:ADD_RESTAURANTS,
            payload:res.data
        })
        console.log("payload")

    }
    catch(error){
        console.log(error);
    }
}
//deleteResto
export const deleteRestoApi=(id)=>async(dispatch)=>{
    try{
        await deleteResto(id)
        dispatch({
            type:DELETE_RESTAURANTS,
            payload:id,
        })
        console.log("delete")
        dispatch(getRestoApi)

    }
    catch(error){
        console.log(error);
    }
}

//updateResto
export const UpdateRestoo=(id,nom,description,adresse,tel,image) => async dispatch=>{

    try{
        const res=await axios.put(`http://localhost:7000/resto/updateResto/${id}`,{id,nom,description,adresse,tel,image})
        dispatch({
            type:UPDATE_RESTAURANTS,
            payload:res.data
        });
        console.log("super")  

    }
    catch(error){
        console.log(error);}
}


