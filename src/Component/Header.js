import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header id="header" className="header-wrapper home-parallax home-fade dark-bg bg-01">
      <div className="color-overlay" />
      <div className="header-wrapper-inner">
        <div className="container">
          <div className="intro">
            <h1>To Begin, Begin</h1>
            <p>Thats How My Life Rolls</p><a href="#services" className="btn btn-default-o onPageNav">Our Feature</a></div>
        </div>
        <div className="arrow-down"><a href="#about-us" className="onPageNav"><i className="ion-ios-arrow-down" /></a></div>
      </div>
    </header>
    );
  }
}

export default Header;
