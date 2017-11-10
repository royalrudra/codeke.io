import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav id="fixedTopNav" className="navbar navbar-fixed-top main-navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse"><span className="sr-only">Toggle navigation</span> <span className="ion-drag" /></button>
          <div className="navbar-brand" itemScope itemType="https://schema.org/Organization"><span itemProp="name" className="sr-only">Codeke</span> <a itemProp="url" href="index.html">Codeke</a></div>
        </div>
        <div className="collapse navbar-collapse" id="main-nav-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="about-us.html" itemProp="url"><span itemProp="name">About</span></a></li>
            <li><a href="services.html" itemProp="url"><span itemProp="name">Services</span></a></li>
            <li><a href="Plans.html" itemProp="url"><span itemProp="name">Plans</span></a></li>
            <li><a href="contact.html" itemProp="url"><span itemProp="name">Contact</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Nav;
