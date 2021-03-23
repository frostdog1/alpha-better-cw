import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from 'react'; // useState is required to set the logic of the side drawer

// ######## import all the screens ######## 55 min
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// ######### import the components #########
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Navdrawer from './components/Navdrawer';


// routing screens 
function App() {

  // when user clicks backdrop, sideDrawer closes
  // when user clicks nav bar icon it should open
  const [toggleNavdrawer, setToggleNavdrawer] = useState(false);

  return (
    <Router>
      {/* pass a click event function to the navbar so when clicked the side drawer will show */}
      <Navbar click={() => setToggleNavdrawer(true)} />

      {/* pass in the value of show to Backdrop and Navdrawer equal to whatever toggleNavbar is*/}
      <Backdrop show={toggleNavdrawer}  click={() => setToggleNavdrawer(false)}/> {/* if false it will be hidden, otherwise will show */}
      <Navdrawer show={toggleNavdrawer} click={() => setToggleNavdrawer(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />

          {/* each product will have id */}
          <Route exact path="/product/:id" component={ProductScreen} />

          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>

        
      
      </Router>
  );



}

export default App;
