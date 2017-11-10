import React, { Component } from 'react';
import { SectionWrapper, SingleFeature } from './Utility';
let serviceJson = require('./Services.json');

export default class Services extends Component {
  render() {
    const details = {
      id: "services",
      classname: "services",
      mainHeading: "Our Feature",
      subHeading: "We plan, design, build and market high quality websites"
    }
    return (
      <SectionWrapper {...details}>
        { serviceJson.map(obj => <SingleFeature key={obj.id} {...obj} />) }
      </SectionWrapper>
    )
  }
}