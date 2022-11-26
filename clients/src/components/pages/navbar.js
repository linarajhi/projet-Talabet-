
import {Link} from  "react-router-dom"

const Navbar=()=> {
  
  return (
    <div className='nav'>
  <div className="promoo">
  <pre><h5 className="promo"><marquee>LIVRAISON GRATUITE A PARTIR DE 100DT D'ACHAT </marquee>                    Tel:+216 71 400 577</h5></pre>
      </div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ms-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="logo"><img src="/logo-site.png" className="img-thumbnail"/></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/accuiel">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/RESTO">Restaurants</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/para">Parapharmacies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/evenements">Evenements</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link className="btn btn-warning" to="/connecter" button>
  Se connecter
</Link>
</div>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar