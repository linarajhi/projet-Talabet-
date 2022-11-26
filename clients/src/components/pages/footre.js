import React from 'react'
import { Link } from 'react-router-dom'

const Footre = () => {
  return (
    
  <footer>


    <div className='row total-footer'>
  
    <div className="col-4 lg-3 mt-5 ">
    <p className='t-footre'>Restaurants</p>
    <pre>                         <Link to='/RESTO'><ion-icon name="restaurant-outline"></ion-icon></Link>  </pre>  
    </div>
   < div className="col-4 lg-3 mt-5 ">
       <p className='t-footre'>Parapharmacies</p>  
       <pre>                            <Link to='/para'><ion-icon name="gift-outline"> </ion-icon></Link> </pre>  
      </div>
      <div div className="col-4 lg-3 mt-5 ">
    <p className='t-footre'>Suivez-nous sur</p> 
     <pre>                   <a className='a' href="http://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a>    < a className='a' href="http://www.youtube.com"><ion-icon name="logo-youtube"></ion-icon></a>    <a className='a' href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>   < a className='a' href="https://twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a></pre>
     </div>
      <div className="col-12 lg-9 mt-5"> 
       
    <div className='footre'>
      <pre><p className='par'>Copyright © 2022-2023 - Talabet.com - Tous droits réservés. Tel:+216 25 868 577</p> <img src="/logo-site-footer.png"/></pre>  
    </div>
    </div>




  </div>


</footer>
    
  )
}

export default Footre