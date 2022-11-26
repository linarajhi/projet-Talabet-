import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>

<pre><h1 className="page">Page Admin</h1></pre>
<div class="row row-cols-1 row-cols-md-2 g-4">
<div className='col-6'>
<img src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?t=st=1650677093~exp=1650677693~hmac=63caac53ff44dadf04f8450024a02379cf74a5b2c54546a0ccae34d56407eb02&w=740" class="img-fluid" />
</div>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col-6">
    <div class="card-admin">
    <div class="col-3">
      <div class="card-body">
      <Link class="card-titles"  to="/accuiel"> Accuiel </Link>
      <img src="https://img.freepik.com/vecteurs-libre/webinaire-ecoute-etudiante-ligne_74855-6461.jpg?t=st=1651107951~exp=1651108551~hmac=636f384ffa8bded8d355499aa9516f6d5ff643d8f3fccc9ba5298b82540d2c5d&w=1060" class="img-top"/>
      </div>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card-admin">
      <div class="card-body">
        <Link class="card-titles"  to="/contactAdmin"> Contact </Link>
        <img src="https://img.freepik.com/vecteurs-libre/marketing-par-e-mail-discussion-internet-assistance-24-heures-24_335657-3009.jpg?t=st=1651107865~exp=1651108465~hmac=ae9524e942ebdd31a00e8417948109b2dcf569bb32166fe39e73b26c9795efaa&w=996" class="img-top"/>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card-admins">
      <div class="card-body">
      <Link class="card-titles"  to="/restoAdmin">Restaurants</Link >
      <img src="https://img.freepik.com/vecteurs-libre/table-restaurant-servie-pour-diner-romantique-pour-saint-valentin_33099-2441.jpg?t=st=1651106826~exp=1651107426~hmac=9bc0333463bf6e854c1627a94e629ece635b936a635fa3bf3474c743aec13a7a&w=1380" class="img-top"/>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card-admins">
     
      <div class="card-body">
      <Link class="card-titles" to="/paraAdmin">Parapharmacies</Link >
      <img src="https://img.freepik.com/vecteurs-libre/concept-pharmacie-magasin-medical_74855-7815.jpg?t=st=1651107359~exp=1651107959~hmac=28197ba2cf8e477cb2f0716737c638d3494d879d7aa2fd3e65df81879bf233dc&w=1060" class="img-top"/>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  
  )
}

export default Dashboard