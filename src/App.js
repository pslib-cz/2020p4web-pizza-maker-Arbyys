import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Ingredients from "./components/Ingredients";
import Calzone from "./components/Calzone";
import Pizza from "./components/Pizza";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {PizzaProvider} from "./providers/PizzaContextProvider"

function App() {
  return (
    <>
      <Router>
        <PizzaProvider>
          <Nav/>

          <Switch>
           <Route exact path="/order/pizza">
             <Pizza/>
           </Route>
           <Route exact path="/order/calzone">
             <Calzone/>
           </Route>
           <Route exact path="/ingredients">
             <Ingredients/>
           </Route>
           <Route exact path="/">
             <div>úvodní pizza</div>
           </Route>
           <Route>
             <div>404</div>
           </Route>
         </Switch>

        </PizzaProvider>
      </Router>
    </>
  );
}

export default App;
