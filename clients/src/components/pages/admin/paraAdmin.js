import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button} from "react-bootstrap";
import { deleteParaApi, getParaApi } from '../../redux/actions/parapharmacie';
import AddPara from './addPara';
import UpdatePara from './updatePara';
import { Link } from 'react-router-dom';

const ParaAdmin =() => {
  const [search,setSearch]=useState("")
    const tabs=useSelector(state=>state.paraReducers.tab)
    console.log('tabs', tabs)
    const dispatch=useDispatch();
    //get
    useEffect(()=>{
        dispatch(getParaApi())
    }, [dispatch]);
// -------------handleChange
const handleChangee=(e)=>{
  setSearch(
    e.target.value
  )
}
const deleteParapharmacie=(id)=>{
  dispatch(deleteParaApi(id))
}
return  (
        
    <div className='container'>
      <AddPara/>
      <br/>
    <form class="d-flex mb-5">
    <input class="form-control me-2" type="search" value={search} onChange={handleChangee} placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
    <div className='adm-resto' >
    <h3 className="titre-contact-admin"> Liste des Parapharmacies</h3><Link className="btn btn-warning" to="/admin" button>Page Admin</Link>
    </div>
    <div className='row'>
       
    <div className="table-responsive">
                    {<table className="table table-hover">
                      <thead>
                        <tr>
                          <th  className='tab-imgs'>Image</th>
                          <th className='tab-noms'>Nom</th>
                          <th className='tab-descs'>Description</th>
                          <th className='tab-adrs'>Adresse</th>
                          <th className='tab-tels'>Tel</th>
                          <th className='tab-acts'>Action</th>
                        
                     
                        </tr>
                      </thead>
                      {tabs.filter(el=>
                           el.nom.toLowerCase().includes(search.toLowerCase())).map((el,key)=>(
                          <tbody key={key._id}>
                          <tr>
                          <td><img src={el.image} className="img-admin"/></td>
                            <td>{el.nom}</td>
                            <td><label >{el.description}</label></td>
                            <td > {el.adresse}<i className="ti-arrow-down"></i></td>
                            <td>{el.tel}</td>
                      
                  
                            <td><label className="badge badge-danger"> 
    <Button className="me-2" variant="primary1"onClick={() =>deleteParapharmacie(el._id)}><ion-icon name="trash-outline"></ion-icon>Suprimer</Button>
        <UpdatePara id={el._id}el={el}/>
      </label></td>
                          </tr>
                        
                         
                        </tbody>
                     ))} 
                    </table>}
                  </div>
  </div>
  </div>

  )}

export default ParaAdmin