import React from 'react';
 
//var uyarı=0
//if(uyarı < 0){
  //alert("9 numaralı öğrenci numaranızı girin")
//}
 
//6LcB-_EjAAAAAMLHJTT2RUl5XWCAq3zWBvbX8fTi
//6LcB-_EjAAAAACiVaTv90gDDfezGvxIYvpoEnaD6


function Login() {
 return (
    <div className='login'>
      <form>
        <input type='text'
         maxLength="9"
         minLength="9"
         required=""
         //value={this.state.id1}
         placeholder='Öğrenci Numarası'
         >
        </input>
      </form>
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
        className='still2'>
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
 
