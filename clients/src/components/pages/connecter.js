import React from 'react'

const Connecter =()=> {
  return (
<div className='seConnecter'>
<div className='contact'>
<pre><h3 className="titre-connecter"> Bienvenue Sur Talabet</h3> </pre> 
<br></br> 

<form>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" >Adresse mail</label>
  <input type="email" class="form-control" name="adresseMail" placeholder="name@example.com" />
</div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Mot de passe</label>
    <input type="password" className="form-control"name="nomPrenom" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Envoyez</button>
 <div><br></br> </div>
 <div> <br></br> </div>
 <div> <br></br> </div>
 <div><br></br>  </div>
 <br></br> 
</form>
<br></br>
</div>
<br></br>
  </div>
  )
}

export default Connecter