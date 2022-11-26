import React,{useState} from 'react'
import { Modal,Button, Form   } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { UpdateRestoo } from '../../redux/actions/restaurants';



const UpdateResto=({el,id}) =>{ 
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [update,setUpdate]=useState({nom:el.nom,description:el.description,adresse:el.adresse,tel:el.tel,image:el.image})
  //handelinput
  const handleChange=(e)=>{
      const{name,value}=e.target
      setUpdate({
          ...update,
          [name]:value
      })
      console.log("input",update)
  }
  //updateresto
  const updateRESTO=()=>{
      dispatch( UpdateRestoo(id,update.nom,update.description,update.adresse,update.tel,update.image))
  console.log("update",update)
  setShow(false)
    }
  
    return (
    <div>
        <>
      <Button className='me-5' variant="warning" onClick={handleShow}><ion-icon name="build"></ion-icon>modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Restaurant </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="entrer nom" name='nom'defaultValue={el.nom} onChange={handleChange} />
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" name='description'defaultValue={el.description} onChange={handleChange} />
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="text" placeholder="entrer adresse" name='adresse' defaultValue={el.adresse} onChange={handleChange}/>
    <Form.Label>Tel</Form.Label>
    <Form.Control type="text" placeholder="entrer tel" name='tel' defaultValue={el.tel} onChange={handleChange}/>
    <Form.Label>Image</Form.Label>
    <Form.Control type="img" placeholder="Enter image" name='image' defaultValue={el.image}  onChange={handleChange}/>
  </Form.Group>
  </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
           Fermez
          </Button>
          <Button variant="primary" onClick={updateRESTO}>
            Enregistrez
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default  UpdateResto