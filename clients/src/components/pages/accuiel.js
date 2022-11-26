import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Accuiel() {
  return <div> 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://restaurant-lecarrousel.com/clients/_1/_1/17738/images/backgrounds/clients_backgrounds591a9ef68871f.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='carrousel'>
    <h3 className='titre-carousel'>Bienvenue Sur Notre  Site Talabet</h3>
    <Link className="btn btn-warning" to="/contact" button>Rejoignez-nous</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://restaurant-lecarrousel.com/clients/_1/_1/17738/images/backgrounds/clients_backgrounds591a9ef7eb6d1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className='carrousel'>
    <h3 className='titre-carousel'>Bienvenue Sur Notre  Site Talabet</h3>
    <Link className="btn btn-warning" to="/contact" button>Rejoignez-nous</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://restaurant-lecarrousel.com/clients/_1/_1/17738/images/backgrounds/clients_backgrounds591a9f2c32e21.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='carrousel'>
     <h3 className='titre-carousel'>Bienvenue Sur Notre Site Talabet</h3>
     <Link className="btn btn-warning" to="/contact" button>Rejoignez-nous</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br></br>

<div className="cardddd mb-3">
  <div className="row g-0-video">
    <div className="col-md-12">
    <iframe width="600" height="355" src="/video-talabet.mp4" frameborder="0" allowfullscreen className='videos'></iframe>
    </div>
  </div>
</div>

<br/>
<div className='separations-accueil'>
<pre><h3 className="separation-accueil"> Ne perds pas votre temps..trouvez vos choix</h3></pre>
</div>
<div className="row">
<div className='col-sm-6  col-md-5  col-lg-6'>
  <div className='cardoud'>
    <div className="card-m h-60">
      <img src="https://www.au-cheval-noir.restaurant/wp-content/uploads/2018/12/Restaurant-Au-Cheval-Noir-Herrlisheim_Photos-9.jpg" className="card-img-tops"/>
      <div className="card-body-ts">
     <h5 className="card-titlee">Restaurants</h5>
      <p className="card-textss">Trouvez des offres, une livraison gratuite et bien plus encore auprés de nos restaurants partenaires</p>
                    <Link className="btn btn-primary me-md-2" to="/RESTO" button><ion-icon name="heart-outline"></ion-icon> Decouvrir</Link>
      </div>
    </div>
  </div>
  </div>
  <div className='col-sm-6   col-md-4  col-lg-6'>
  <div className='cardouds'>
    <div className="card-m h-60">
      <img src="https://www.leparisien.fr/resizer/nFIulqT-KQM6-x0QvEtC2ulUSmE=/1280x800/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/FYRRT57OH2QHYNVYVF75DV2Y44.jpg" class="card-img-tops"/>
      <div className="card-body-ts">
     <h5 className="card-titlee">Parapharmacies</h5>
        <p className="card-textss">Nous sommes là pour vous aider,Obtenez vos traitements,vos produits  rapidement et facilement.</p>
             <Link className="btn btn-primary me-md-2" to="/para" button><ion-icon name="heart-outline"></ion-icon> Decouvrir</Link>
      </div>
    </div>
  </div>
  </div>
</div>

  <br></br>
<div className='separations-accueil'>
<pre><h3 className='separation-accueil'>Manger est un vrai bonheur...</h3></pre>
</div>
<br></br>
<div className="car">
<div className="cards bg-dark text-white">
<img src="https://www.au-cheval-noir.restaurant/wp-content/uploads/2018/12/Restaurant-Au-Cheval-Noir-Herrlisheim_Photos-17.jpg" class="cardd-accueil-3" />
</div>
    </div>

</div>

  
}

export default Accuiel