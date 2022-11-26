import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card ,Button} from "react-bootstrap";
import { getParaApi } from "../redux/actions/parapharmacie";
import { Link } from 'react-router-dom';

const PARA= () => {
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
return  (
        
    <div className='container'>
      <pre><h4 className="titre-contact">"Le pharmacien est un marchand d'espoir.. "</h4></pre>
    <br></br>
    <form class="d-flex mb-5">
    <input class="form-control me-2" type="search" value={search} onChange={handleChangee} placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
    <div className='row'>
        {
        tabs.filter(el=>
          el.nom.toLowerCase().includes(search.toLowerCase())
          ).map((el,key)=>
          
    <div className='col-4 text-align-center' key={key}>
              <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.image} className="img-cards"/><Card.Body>

    <pre><Card.Title className="titre-card"><ion-icon name="bag-add-outline"></ion-icon>{el.nom}</Card.Title></pre>

    <Card.Text className="description-card"><ion-icon name="reader-outline"></ion-icon>{el.description}</Card.Text>

    <Card.Text  className="adresse-card"><ion-icon name="location-outline"></ion-icon>{el.adresse}</Card.Text>

    <Card.Text className="tel-card"><ion-icon name="call-outline"></ion-icon> {el.tel}</Card.Text>
    <div className="d-flexx  ">
    <Link className="btn btn-primary-3 me-md-2" to="/contact"button><ion-icon name="cart-outline"></ion-icon>commandez</Link>
       </div>
  
   </Card.Body>
   </Card>
  </div>)}
  </div>
  </div>

  )}

export default PARA