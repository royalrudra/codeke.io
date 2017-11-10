import React, { Component } from 'react';
import { SectionWrapper, SingleFeature } from './Utility';
let featureJSON = require('./Services.json');

export default class Feature extends Component {
  render() {
    const details={id:"feature",classname:"feature",mainHeading:"Our Feature",subHeading:"We plan, design, build and market high quality websites"};
    return <SectionWrapper {...details}> { featureJSON.map(obj => <SingleFeature {...obj} key={obj.id} />)}</SectionWrapper>
  }
}
