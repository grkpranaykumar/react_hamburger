import React, { Component } from 'react';
import QuickLinksTitle from './QuickLinksTitile';
import QuickLinks from './QuickLinks';

class HotAreas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'R_S',
    };
  }

  selectType = (event) => {
    this.setState({
      option: event.target.value, 
    });
  }

  render() {
    return (
      <div id={this.props.id} className="hotProjects" style={{
        'left': this.props.hotAreasLeft, 
      }}>
        <QuickLinksTitle title={'Hot Areas'} backId={this.props.backId} click={this.props.siteLinksShow}/>
        <div className="quickLinksResidential">
          <select id="selectResidential" onChange={this.selectType}>
            <option value="R_S" defaultValue="R_S">Residential Buy</option>
            <option value="R_R">Residential Rent</option>
            <option value="C_S">Commercial Buy</option>
            <option value="C_R">Commercial Rent</option>
          </select>
        </div>
        <QuickLinks title={'Hot Areas'} type={this.state.option}/>
      </div>
    );
  }
}

export default HotAreas;