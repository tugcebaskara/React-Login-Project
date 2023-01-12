
import React from 'react'

function Button() {
  return (
    <div>
    <form id="signupForm" novalidate  onsubmit="return false" >
    <div className="form-group">
     <input type="text" name="name" placeholder="ADSOYAD" required="" className="form-group "/>
    </div>
    <div className="form-group">
      <input type="text" name="phone" placeholder="TELEFON" required="" className="form-group "/>
    </div>	
    <div className="form-group">
            <input type="email" name="email" placeholder="EMAIL" required="" className="form-group "/>
    </div>					
    <div className="g-recaptcha" data-sitekey="6LcB-_EjAAAAACiVaTv90gDDfezGvxIYvpoEnaD6"></div>
    <button  type="submit" name="submit-form">GÖNDER </button>
    </form>
    </div>
  )
}

export default Button;
