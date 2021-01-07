import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import {PizzaProvider} from "./providers/PizzaContextProvider"

function App() {
  return (
    <>
      <PizzaProvider>
        <Nav/>
      </PizzaProvider>
    </>
  );
}

export default App;
