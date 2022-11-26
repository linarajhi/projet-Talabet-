import axios from "axios";

const Api = axios.create({ baseURL:"http://localhost:7000"});

//getRestaurants
 export function getAllResto() {
    return Api.get("/resto/getResto")
}
//addRestaurants
export function addNewResto(nom,description,adresse,tel,image){
    return Api.post("/resto/addResto",{nom,description,adresse,tel,image})
}
//deleteRestaurants nhotou `` entre type string et dinamique($)
export function deleteResto(id){
    return Api.delete(`/resto/deleteResto/${id}`)
}

//getPARA
export function getAllPara() {
    return Api.get("/para/getPara")
}
//addPARA
export function addNewPara(nom,description,adresse,tel,image){
    return Api.post("/para/addPara",{nom,description,adresse,tel,image})
}
//deletePara nhotou `` entre type string et dinamique($)
export function deletePara(id){
    return Api.delete(`/para/deletePara/${id}`)
}
//getContact
export function getAllContact() {
    return Api.get("/contact/getContact")
}
//addContact
export function addNewContact(nomPrenom,adresseMail,tel,commentaire){
    return Api.post("/contact/addContact",{nomPrenom,adresseMail,tel,commentaire})
}
//deleteContact nhotou `` entre type string et dinamique($)
export function deleteContact(id){
    return Api.delete(`/contact/deleteContact/${id}`)
}