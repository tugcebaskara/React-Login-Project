import React from 'react';
 
//var uyarı=0
//if(uyarı < 0){
  //alert("9 numaralı öğrenci numaranızı girin")
//}
 
//6LcB-_EjAAAAAMLHJTT2RUl5XWCAq3zWBvbX8fTi
//6LcB-_EjAAAAACiVaTv90gDDfezGvxIYvpoEnaD6

function Login() {
 return (
    <div>
      <form>

        <input type='text'
        maxLength="9"
        minLength="9"
        //value={this.state.id1}
        placeholder='Öğrenci Numarası'
        onClick="uyarı()"
        required=""
        />

      </form>
      <form>

        <input type='password'
        //value={this.state.id2}
        placeholder='ÖBS Şifreniz'
        />

      </form>

      <button type='submit'
      className='still'>
        Giriş
        </button>

        <button type='text'
        className='still2'>
          Şifremi Unuttum
        </button>
    </div>

  )}

  export default Login;
 
