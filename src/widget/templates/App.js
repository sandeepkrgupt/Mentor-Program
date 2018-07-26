import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../style/App.css';
import AppHeader from './components/comp-header';
import ProductContainer from './components/comp-product-container';
import SideNavBar from './components/comp-side-nav';
import Footer from './components/comp-footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <AppHeader />
        </div>
        
        {/* <div className="Side-nav">
          <SideNavBar />
        </div> */}

        <div className="container">
          <ProductContainer />
        </div>

        <div className="Footer">
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
