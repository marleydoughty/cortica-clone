import React from 'react';
import "./utilitynav.css";

function UtilityNav() {
  return(
    <div className='utility-nav-bar'>
      <div className='cortica-logo-container'>
        <img src="https://media.glassdoor.com/sqll/2046178/cortica-squareLogo-1650392942581.png" alt="cortica-logo" className='cortica-logo' />
        <div>Cortica</div>
      </div>
      <div className='utility-nav-links'>
        <div>Locations</div>
        <div>Services</div>
        <div>Make A Referral</div>
        <div>Your Child's Path</div>
      </div>
      <div className='make-an-appointment'>
        <button className='button'>Make An Appointment</button>
      </div>
    </div>

  )
}
export default UtilityNav
