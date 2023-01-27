import React from "react";

function Login(){
 // const [ data, setData]= useState()

//clear = (e) => {
  //localStorage.clear();
//};

//number = (e) => {
    //if (this.state.number.lenght > 8) this.setStatenumber(e.target.value);
//}

    return (
      <div className="number">
        <form
          method="POST"
          //onSubmit={this.add}
          // onSubmit={handleSubmit(e)}
          id="kullanici">

          <input
            type="text"
            //onChange={(e) => this.setState({ number: e.target.value })}
            value={this.state.number}
            maxLength="9"
            minLength="9"
            placeholder="Öğrenci Numarası"
            //onClick={istek()}
            required={""}
          >
          </input>
        </form>
        <br />

        <form method="POST" onSubmit={this.add}>
          <input
            type="password"
            //onChange={(e) => this.setState.number({ forgot: e.target.value })}
            value={this.state.forgot}
            placeholder="ÖBS Şifreniz"
            maxLength="20"
            required={""}
          >

          </input>
        </form>
        <br />

        <form>
          <button type="submit" className="still"
          // onClick={this.number}
          >
            Giriş
          </button>

          <form>
            <button
              type="submit"
              placeholder="Şifremi Sıfırla"
              className="still2">
           
            </button>
          </form>
          <br />
          <br />
          <br />
        </form>
        <p className="instruction" id="yonlendırme">
          UZEM anasayfasına erişmek için aşağıdaki butona tıklayınız...
        </p>
        <form>
          <button>UZEM ANASAYFA</button>
        </form>
      </div>
    );
  }



export default Login;