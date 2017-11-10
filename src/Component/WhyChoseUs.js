import React, { Component } from 'react';
import { SectionWrapper, SingleFeature, ChoseFeature } from './Utility';
let choseJson = require('./WhyChoseUs.json');

export default class WhyChoseUs extends Component {
  render() {
    const details={id:"why-choose-us",classname:"why-choose-us",mainHeading:"Get a Better Understanding",subHeading:"We plan, design, build and market high quality websites"};
    return <SectionWrapper {...details}>{ choseJson.map(obj => <ChoseFeature key={obj.id} {...obj} />) } </SectionWrapper>
  }
}