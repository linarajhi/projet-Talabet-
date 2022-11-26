import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  addContactApi} from '../redux/actions/contacts';


const Contact = () => {
//state
const dispatch = useDispatch();
const [input,setInput]=useState({nomPrenom:"",adresseMail:"",tel:"",commentaire:""})
    
 const handleChange=(e)=>{
    const{name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
console.log("input",input)
}

//add Contact
const AddContact=()=>{
  dispatch( addContactApi(input.nomPrenom,input.adresseMail,input.tel,input.commentaire))
  console.log("input",input)

}
  return (
<div className='gg'>
<div className='contact'>
<pre><h3 className="titre-contact"> Au plaisir de vous accueillir</h3> </pre> 
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nom et Prenom</label>
    <input type="text" className="form-control"name="nomPrenom" aria-describedby="emailHelp"onChange={handleChange}/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" >Adresse mail</label>
  <input type="email" class="form-control" name="adresseMail" placeholder="name@example.com" onChange={handleChange}/>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Numero de Tel</label>
    <input type="text" className="form-control" name="tel" onChange={handleChange}/>
  </div>
  
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Commentaire</label>
  <textarea className="form-control" name="commentaire" rows="3" onChange={handleChange}></textarea>
  <p></p>
  <input className='forms' type="file" class="fichier" placeholder="entrez votre fichier"></input>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">coche </label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={AddContact} >Envoyez</button>
</form>
</div>

</div>



  )}

export default Contact