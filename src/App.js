import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App" style={{backgroundImage:'url(/imagens/background.jpg)'}}>
      <h1>CONVERSOR DE MOEDAS!</h1>
      
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        
      </div>
  
    </div>
  );
}

export default App;
