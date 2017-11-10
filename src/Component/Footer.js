import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <p className="copyright text-xs-center">© 2017 Codeke.io</p>
            </div>
            <div className="col-md-5 col-sm-4">
              <ul className="footer-social-block">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="footer-menu text-xs-center"><a href="#">Privacy Policy</a> | <a>Terms &amp; Conditions</a></div>
            </div>
          </div>
        </div>
      </footer><a id="totop" href="#totop"><i className="fa fa-angle-double-up" /></a>
    </div>
    );
  }
}

export default Footer;
