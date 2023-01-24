import { render } from '@testing-library/react';
import React from 'react';
 
 
//6LcB-_EjAAAAAMLHJTT2RUl5XWCAq3zWBvbX8fTi
//6LcB-_EjAAAAACiVaTv90gDDfezGvxIYvpoEnaD6

function clear(){
  localStorage.clear();
}

function uyari(){
  alert('9 Haneli Öğrenci Numaranızı Giriniz')
} 


function Login() {
 return (
    <div className='login'>
      <form>
        <input type='text'
         maxLength="9"
         minLength="9"
         //value={this.state.id1}
         placeholder='Öğrenci Numarası'
         onClick={uyari}
         required>
         </input>
      </form >
      <br/>
      <form>
        <input type='password'
        //value={this.state.id2}
        placeholder='ÖBS Şifreniz'
        maxLength="20">
        </input>
      </form>
      <br/> 
       <form>
      <button type='submit'
      className='still'>
        Giriş
        </button>
        <form>
        <button type='submit'
        id='şifremiunuttum'
        className='still2'
        required>
          Şifremi Unuttum
        </button>
        </form>
        <br/>
        <br/>
        <br/>
        </form>
        <p className='instruction'> UZEM anasayfasına erişmek için aşağıdaki butona tıklayınız...</p>
        <form>
        <button>
          UZEM ANASAYFA
        </button>
        </form>
    </div>

  )}

  export default Login;
 
