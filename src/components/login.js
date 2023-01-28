import React from "react";
import Logo from './assets/koü.png'

//import Logo from '../assets/koü.png'

function Login(){
 // const [ data, setData]= useState()

//clear = (e) => {
  //localStorage.clear();
//};

//number = (e) => {
    //if (this.state.number.lenght > 8) this.setStatenumber(e.target.value);
//}

    return (
      <div className="number"
       align= 'center'>
       <form>
        <form
        className="login"
          method="POST"
          //onSubmit={this.add}
          // onSubmit={handleSubmit(e)}
          >
            <form>
           <img src={Logo} alt="Logo"
           width="150" height="75"/>
           </form>
           <br/>
          <h1>
          ÖĞRENCİ BİLGİ SİSTEMİ
          </h1>

          <input
            type="text"
            //onChange={(e) => this.setState({ number: e.target.value })}
            //value={this.state.number}
            maxLength="9"
            minLength="9"
            placeholder="Öğrenci Numarası"
            //onClick={istek()}
            required={""}
          />
          <input
            type="password"
            //onChange={(e) => this.setState.number({ forgot: e.target.value })}
            //value={this.state.forgot}
            placeholder="ÖBS Şifreniz"
            maxLength="20"
            required={""}
          />
        <br />

        <form>
          <button type="submit" className="still"
          // onClick={this.number}
          >
            GİRİŞ
          </button>
            <button
              type="submit"
              placeholder="Şifremi Unuttum"
              className="still2">
               ŞİFREMİ UNUTTUM
            </button>
            </form>
            </form>
            
        <center>
        <p 
        className="instruction" id="yonlendırme" >
          UZEM anasayfasına erişmek için aşağıdaki butona tıklayınız...
        </p>
        </center>
      
        <form>
          <button className="still3">UZEM ANASAYFA</button>
        </form>
        </form>
      </div>
    );
  }



export default Login;