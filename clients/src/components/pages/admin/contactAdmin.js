import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {  deleteContactApi, getContactApi} from '../../redux/actions/contacts';
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';


const  ContactAdmin = () => {
//state
const [search,setSearch]=useState("")
const tabs=useSelector(state=>state.contactReducers.tab)
console.log('tabs', tabs)
const dispatch=useDispatch();
 //get
 useEffect(()=>{
  dispatch(getContactApi())
}, [dispatch]);
// -------------handleChange
const handleChangee=(e)=>{
  setSearch(
    e.target.value
  )
}

const deleteContact=(id)=>{
  dispatch(deleteContactApi(id))
}

  return (
    <div className='container'>
      <form class="d-flex mb-5">
    <input class="form-control me-2" type="search" value={search} onChange={handleChangee} placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
       <div className='adm-resto' >
      <h3 className="titre-contact-admin"> Liste des Contacts</h3><Link className="btn btn-warning" to="/admin" button>Page Admin</Link> 
      </div> 
   <div className='row'>
    
    <div className="table-responsive">
                    {<table className="table table-hover">
                      <thead>
                        <tr>
                        
                          <th className='tab-n'>Nom</th>
                          <th className='tab-a'>Adresse Email</th>
                          <th className='tab-t'>Tel</th>
                          <th className='tab-d'>Commentaire</th>
                          <th className='tab-d'>Action</th>
                          
                        
                     
                        </tr>
                      </thead>
                      {tabs.filter(el=>
                           el.nomPrenom.toLowerCase().includes(search.toLowerCase())).map((el,key)=>(
                          <tbody key={key._id}>
                          <tr>
                            <td>{el.nomPrenom}</td>
                             <td > {el.adresseMail}<i className="ti-arrow-down"></i></td>
                            <td>{el.tel}</td>
                      
                            <td><label >{el.commentaire}</label></td>
                           
                  
                            <td><label className="badge badge-danger"> 
    <Button className="me-2" variant="primary1"onClick={() =>deleteContact(el._id)}>Suprimer</Button>
      
      </label></td>
                          </tr>
                        
                         
                        </tbody>
                     ))} 
                    </table>}
                  </div>
  </div>


</div>


  )}

export default ContactAdmin