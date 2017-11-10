import React, { Component } from 'react';

const SectionWrapper = (props) => (
    <section id={props.id} className={`section ${props.classname}`}>
      <div className="container">
        <header className="section-heading">
          <h2>{props.mainHeading}</h2>
          <span>{props.subHeading}</span>
        </header>
        <div className="section-content">
          <div className="row">
            {props.children}
          </div>
        </div>
      </div>
    </section>
);

const SingleFeature = (props) => (
    <div className="col-sm-4">
    <div className="service">
      <div className="service-icon text-center"><span className={props.icon} /></div>
      <div className="about-service">
        <h4 className="text-center">{props.title}</h4>
        <p className="text-center">{props.desc}</p>
      </div>
    </div>
  </div>
  )

  const ChoseFeature = (props) => {
   let dir = (props.id > 3)?'bottom':'top';
   return (props.id === "figure")? <figure className="why-us-image"><img className="img-responsive center-block hidden-xs" src="assets/images/why-choose-us/1.png" alt="Alternative Text" /></figure> : 
        <div class="col-sm-4 why-explain-wrap">
            <h4>{props.htest}</h4>
            <div class={`why-explain ${dir} ${dir}-${(props.id>3?props.id-3:props.id)}`}>
                <p>{props.test}</p>
            </div>
        </div>
  }


  

export {
    SectionWrapper, SingleFeature , ChoseFeature
}
