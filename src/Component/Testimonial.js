import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonial" className="section overlay-1 testimonial bg-image dark-bg">
      <div className="color-overlay" />
      <div className="container">
        <header className="section-heading">
          <h2>Client Testimonials</h2><span>See what our customers have to say about us</span></header>
        <div className="section-content">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="carosel-wrapper">
                <div className="client-face-holder">
                  <div id="clientFace" />
                </div>
                <div className="quote left">“</div>
                <div className="quote right">”</div>
                <div id="testimonials-carousel" className="owl-carousel">
                  <div className="item">
                    <div className="review" data-client-image="assets/images/team/team-1.jpg">
                      <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>
                      <h4 className="reviewer">Bhond James</h4>
                      <p className="designation">Founder</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="review" data-client-image="assets/images/team/team-2.jpg">
                      <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>
                      <h4 className="reviewer">Bhond James</h4>
                      <p className="designation">Founder</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="review" data-client-image="assets/images/team/team-3.jpg">
                      <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>
                      <h4 className="reviewer">Bhond James</h4>
                      <p className="designation">Founder</p>
                    </div>
                  </div>
                </div>
                <div className="owl-controls"><a className="prev" role="button"><i className="ion-ios-arrow-left" /> <span className="sr-only">Previous</span></a> <a className="next" role="button" data-slide="next"><i className="ion-ios-arrow-right" /> <span className="sr-only">Next</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Testimonials;
