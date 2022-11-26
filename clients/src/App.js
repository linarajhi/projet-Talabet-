import React from "react";
import {BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css';
import RESTO from './components/pages/RESTO';
import Navbar from './components/pages/navbar';
import Accuiel from './components/pages/accuiel';
import Contact from './components/pages/contact';
import Evenements from './components/pages/evenements';
import Footre from './components/pages/footre';
import PARA from "./components/pages/para";
import Dashboard from "./components/pages/admin/dashboard";
import RestoAdmin from "./components/pages/admin/restoAdmin";
import ParaAdmin from "./components/pages/admin/paraAdmin";
import ContactAdmin from "./components/pages/admin/contactAdmin";
import Connecter from "./components/pages/connecter";



function App() {
  return <div>
    <BrowserRouter className="App">
    <Navbar/>
    <Switch>
      <Route  path="/accuiel" exact> <Accuiel/></Route>
      <Route  path="/RESTO" exact> <RESTO/></Route>
      <Route  path="/para" exact> <PARA/></Route>
      <Route  path="/evenements" exact> <Evenements/></Route>
      <Route  path="/contact" exact> < Contact/></Route>
      <Route  path="/admin" exact> < Dashboard/></Route>
      <Route  path="/restoAdmin" exact> < RestoAdmin/></Route>
      <Route  path="/paraAdmin" exact> < ParaAdmin/></Route>
      <Route  path="/contactAdmin" exact> < ContactAdmin/></Route>
      <Route  path="/connecter" exact> < Connecter/></Route>
      </Switch>
    < Footre/>
    </BrowserRouter>
    </div>
  
  
}
export default App;
