import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Main />
         </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar dark color="primary">
                 <div className="container">
                   <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                 </div>
               </Navbar>
      </header>
    </div>
  );
}*/

export default App;
