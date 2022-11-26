import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addParaApi } from '../../redux/actions/parapharmacie';



function AddPara() {
    //state
    const dispatch = useDispatch();
    const [input,setInput]=useState({nom:"",description:"",adresse:"",tel:"",image:""})
        
     const handleChange=(e)=>{
        const{name,value}=e.target
        setInput({
            ...input,
            [name]:value
        })
    console.log("input",input)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    //add para
    const AddParaa=()=>{
        dispatch( addParaApi(input.nom,input.description,input.adresse,input.tel,input.image))
        console.log("input",input)
        setShow(false)
    }
        

  return (
    <div className='New'>

<Button variant="primary" onClick={handleShow}>
      <h5 className='titre'> Ajoutez Nouvelle Parapharmacie</h5>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle Parapharmacie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label> Nom</Form.Label>
    <Form.Control type="text" placeholder="entrer nom" name='nom' onChange={handleChange} />
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" name='description' onChange={handleChange} />
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="text" placeholder="entrer adresse" name='adresse' onChange={handleChange} />
    <Form.Label>Tel</Form.Label>
    <Form.Control type="text" placeholder="Enter tel" name='tel' onChange={handleChange} />
    <Form.Label>Image</Form.Label>
    <Form.Control type="img" placeholder="Enter image" name='image' onChange={handleChange} />
  </Form.Group>
  </Form>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={AddParaa}>
            Enregistrez
          </Button>
        </Modal.Footer>
        
      </Modal>
    </div>
  )
}

export default  AddPara