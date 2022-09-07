import React, { useState } from "react";
import NumberList from "./component/tentativas";



function getInput(secret, guess) {
  var bois = 0
  var vacas = 0
  var numeros = []
  for (let i = 0; i < guess.length; i++) {
    var s = secret.charAt(i) - '0'
    var g = guess.charAt(i) - '0'
      if (s === g) {
        bois++ 
      }
      else{
        if(numeros[s]++ < 0){
          vacas++
        }
        if(numeros[g]-- > 0){
          vacas++
        }
        
      }
    
  }
  return bois + "A" + vacas + "B" 
}

function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");

  const [mostrardiv, setMostrarDiv] = useState(false);
  const [esconderdiv, setEsconderDiv] = useState(true);
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {
    setEsconderDiv(false)
    setMostrarDiv(true)
    setTextos([...textos, texto2])
    console.log(texto)
    console.log(texto2)
    console.log(textos)
    if(texto.includes(textos)){
      console.log('oi')
    }
    
    
    
  }
  const handleChange = (event) => {
      setTexto(event.target.value)
  }
  const handleChange2 = (event) => {
    setTexto2(event.target.value)
  }
  
  
  return (
    <div className="App">
      
      {esconderdiv && (<div className="App1">
      <label>
        Insira a senha
      </label>
      <input type="text" value={texto} onChange={handleChange}/>
      <button onClick={handleClickBtInserir}>Inserir</button>
      </div>)
      }
      

      {mostrardiv && (<div className="App2">
      <label>
        Tente acertar a senha
      </label>
      <input type="text" value={texto2} onChange={handleChange2}/>
      <button onClick={handleClickBtInserir}>Inserir</button>
      
      <NumberList textos={textos} texto={texto2}/>
      </div>)
      }
    </div>
  );
}

export default App;
