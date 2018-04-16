import React, { Component } from 'react';
import QuickLinksTitle from './QuickLinksTitile';
import ProjectLinks from './ProjectLinks';

class HotProjectsInCity extends Component {
  constructor (props) {
    super (props);
  }
  
  render() {
    return(
        <div id={'hotProjectsInCity' + this.props.city} className="hotProjects hotProjectsInCity">
          <QuickLinksTitle title={this.props.city} backId={this.props.backId}/>
          <ProjectLinks name={this.props.city}/>
        </div>
    );
  }
}

export default HotProjectsInCity;