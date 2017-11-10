import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Contact from './Component/Contact';
import Cta from './Component/Cta';
import Feature from './Component/Feature';
import Footer from './Component/Footer';
import FooterWidgets from './Component/FooterWidgets';
import Nav from './Component/Nav';
import Services from './Component/Services';
import Testimonial from './Component/Testimonial';
import WhyChoseUs from './Component/WhyChoseUs';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Header />
      <Services />
      <Cta />
      <WhyChoseUs />
      <Testimonial/>
      {/* <Feature /> */}
      <Contact/>
      <FooterWidgets/>
      <Footer/>
      

      </div>
    );
  }
}

export default App;
