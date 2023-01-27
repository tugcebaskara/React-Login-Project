import React from 'react';
 

//6LcB-_EjAAAAAMLHJTT2RUl5XWCAq3zWBvbX8fTi
//6LcB-_EjAAAAACiVaTv90gDDfezGvxIYvpoEnaD6

//function clear(){
  //localStorage.clear();{


//let yonlendırme = document.getElementById("p");
//yonlendırme.innerHTML="MERHABA"

//let fullName = prompt("Lütfen Adınızı Giriniz : ")
//let kullanıcı = document.querySelector("#kullanıcı")

//function istek()
//{
  //var kelime = prompt("Bir değer giriniz","lütfen sadece 9 numaralı öğrenci numaranızı giriniz..")
 // document.write(kelime)
//} 

//function uyari(){
  //alert('9 Haneli Öğrenci Numaranızı Giriniz')

//

function Login() {
 return (
    <div className='login'>
      <form id='kullanici'>
        <input type='text'
         maxLength="9"
         minLength="9"
         //value={this.state.id1}
         placeholder='Öğrenci Numarası'
         //onClick={uyari()}
         required={""}
         //onLoad={istek()}
         >
         </input>
      </form >
      <br/>
      <form>
        <input type='password'
        value={this.state.id2}
        placeholder='ÖBS Şifreniz'
        maxLength="20"
        required={""}
        >
        </input>
      </form>
      <br/> 
       <form>
      <button type='submit'
      className='still'
      //onClick={() => this.setState({ enter: this.state.durum})}
      >
        Giriş
        </button>
        <form>
        <button type='submit'
        id='şifremiunuttum'
        className='still2'
        >
          Şifremi Unuttum
        </button>
        </form>
        <br/>
        <br/>
        <br/>
        </form>
        <p className='instruction'
        id='yonlendırme'> UZEM anasayfasına erişmek için aşağıdaki butona tıklayınız...</p>
        <form>
        <button>
          UZEM ANASAYFA
        </button>
        </form>
    </div>

  )}

  export default Login;
 
