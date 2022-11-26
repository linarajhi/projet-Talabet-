import { Link } from 'react-router-dom'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button} from "react-bootstrap";
import { deleteRestoApi, getRestoApi } from '../../redux/actions/restaurants';
import AddResto from './addResto';
import UpdateResto from './updateResto';

const RestoAdmin =()=> {
  const [search,setSearch]=useState("")
    const tabs=useSelector(state=>state. restoReducers.tab)
    console.log('tabs', tabs)
    const dispatch=useDispatch();
    //get
    useEffect(()=>{
        dispatch(getRestoApi())
    }, [dispatch]);
// -------------handleChange
const handleChangee=(e)=>{
  setSearch(
    e.target.value
  )
}
//---------------delete
const deleteRestaurant=(id)=>{
  dispatch(deleteRestoApi(id))
}
return  (
        
    <div className='container'>
      < AddResto />
      <br/>
    <form class="d-flex mb-5">
    <input class="form-control me-2" type="search" value={search} onChange={handleChangee} placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
    <div className='adm-resto' >
    <h3 className="titre-contact-admin"> Liste des Restaurants</h3><Link className="btn btn-warning" to="/admin" button>Page Admin</Link> 
    </div>
    <div className='row'>
     
    <div className="table-responsive">
                    {<table className="table table-hover">
                      <thead>
                        <tr>
                          <th className='tab-img'>Image</th>
                          <th className='tab-nom'>Nom</th>
                          <th className='tab-desc'>Description</th>
                          <th className='tab-adr'>Adresse</th>
                          <th className='tab-tel'>Tel</th>
                          <th className='tab-act'>Action</th>
                     
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
    <Button className="button-admin me-2" variant="primary1"onClick={() =>deleteRestaurant(el._id)}><ion-icon name="trash-outline"></ion-icon>Suprimer</Button>
        <UpdateResto id={el._id}el={el}/>
      </label></td>
                          </tr>
                        
                         
                        </tbody>
                     ))} 
                    </table>}
                  </div>
  </div>
  </div>

  )}

export default RestoAdmin