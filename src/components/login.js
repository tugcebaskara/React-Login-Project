import React from 'react';
 
var uyarı=0
if(uyarı < 0){
  alert("9 numaralı öğrenci numaranızı girin")
}


function Login() {
 return (
    <div>
      <form>
        <input type='text'
        value={this.state.id1}
        placeholder='Öğrenci Numarası'
        onClick="uyarı()"
        />
      </form>
      <form>
        <input type='text'
        value={this.state.id2}
        placeholder='ÖBS Şifreniz'
        />
      </form>
    </div>
  )}

  export default Login;
 
