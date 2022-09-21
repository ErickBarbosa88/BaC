import React, { useState } from "react";
import EstaCorreto from "./component/EstaCorreto";
import NumberList from "./component/tentativas";

function getInput(secret, guess) {
  var bulls = 0;
  var cows = 0;
  var numbers = new Array(10);
  for (var i = 0; i < 10; i++) {
    numbers[i] = 0;
  }
  for (var i = 0; i < secret.length; i++) {
    var s = secret.charCodeAt(i) - 48;
    var g = guess.charCodeAt(i) - 48;
    if (s == g) bulls++;
    else {
      if (numbers[s] < 0) cows++;
      if (numbers[g] > 0) cows++;
      numbers[s]++;
      numbers[g]--;
    }
  }
  return bulls + "A" + cows + "B";
}
function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");

  const [mostrardiv, setMostrarDiv] = useState(false);
  const [esconderdiv, setEsconderDiv] = useState(true);
  const [correto, setCorreto] = useState(false);

  const handleClickBtInserir = () => {
    if (texto && texto2) {
      const tentativa = getInput(texto, texto2);
      const addList = texto2 + " " + tentativa;
      setTextos([...textos, addList]);
      if (texto == texto2) {
        setCorreto(true);
      }
    }
    setEsconderDiv(false);
    setMostrarDiv(true);
  };
  const handleChange = (event) => {
    setTexto(event.target.value);
  };
  const handleChange2 = (event) => {
    setTexto2(event.target.value);
  }
  return (
    <div className="App-container d-flex flex-column justify-content-center align-self-center">
      {esconderdiv && (
        <div className="App1 d-flex flex-column justify-content-center align-self-center">
          <label>Insira a senha</label>
          <input type="text" value={texto} onChange={handleChange} />
          <button onClick={handleClickBtInserir} type="button" class="btn btn-primary">Inserir</button>
        </div>
      )}
      {mostrardiv && (
        <div className="App0 d-flex flex-column justify-content-center align-self-center">
        <div className="App2 d-flex flex-column justify-content-center align-self-center">
          <label>Tente acertar a senha</label>
          <input type="text" value={texto2} onChange={handleChange2} />
          <button onClick={handleClickBtInserir} type="button" class="btn btn-primary">Inserir</button>
        </div>
        <div className="App3">
        <NumberList textos={textos} texto={texto2} />
        </div>
        </div>
      )}
      {correto && (
        <EstaCorreto />
      )}
    </div>
  );
}

export default App;
