import React, { Component } from 'react';


class FooterWidgets extends Component {
  render() {
    return (
      <section id="footer-widgets" className="section footer-widgets dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="content-wrap widget-text">
              <h4>About the reign</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum eius libero nihil. Fugiat ipsum officia reprehenderit rerum saepe. Assumenda distinctio, voluptatibus. At consectetur cumque enim error laudantium mollitia obcaecati!</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-wrap widget-contact">
              <h4>Contact info</h4>
              <ul>
                <li><i className="ion-home" /> 13005 Greenville California.</li>
                <li><i className="ion-android-call" /> (303) 674-7750</li>
                <li><i className="ion-email" /> info@yoursite.com</li>
                <li><i className="ion-ios-location" /> Map and Direction</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-wrap widget-recent-posts">
              <h4>Recent Posts</h4>
              <ul>
                <li><a href="#" className="post-title">Lorem ipsum dolor sit amet</a> by <a href="#" className="author">Jhon Smith</a></li>
                <li><a href="#" className="post-title">Lorem ipsum dolor sit amet</a> by <a href="#" className="author">Jhon Smith</a></li>
                <li><a href="#" className="post-title">Lorem ipsum dolor sit amet</a> by <a href="#" className="author">Jhon Smith</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-wrap widget-gallery">
              <h4>Photo Gallery</h4>
              <div className="lightbox-gallery">
                <a href="assets/images/work/01.jpg"><img src="assets/images/work/01.jpg" alt="Alternative Text" /></a>
                <a href="assets/images/work/02.jpg"><img src="assets/images/work/02.jpg" alt="Alternative Text" /></a>
                <a href="assets/images/work/03.jpg"><img src="assets/images/work/03.jpg" alt="Alternative Text" /></a>
                <a href="assets/images/work/04.jpg"><img src="assets/images/work/04.jpg" alt="Alternative Text" /></a>
                <a href="assets/images/work/05.jpg"><img src="assets/images/work/05.jpg" alt="Alternative Text" /></a>
                <a href="assets/images/work/06.jpg"><img src="assets/images/work/06.jpg" alt="Alternative Text" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default FooterWidgets;
