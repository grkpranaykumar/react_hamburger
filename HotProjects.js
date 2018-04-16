import React, { Component } from 'react';
import QuickLinksTitle from './QuickLinksTitile';
import QuickLinks from './QuickLinks';
import HotProjectsInCity from './HotProjectsInCity';
import { connect } from 'react-redux';

class HotProjects extends Component {
  constructor (props) {
    super (props);
  }

  render() {
    const cities = [];
    var hotProjectsInHomePage = this.props.hotProjects;
    if(this.props.hotProjects !== undefined) {
      Object.keys(hotProjectsInHomePage).map((index)=>{
        cities.push(<HotProjectsInCity city={hotProjectsInHomePage[index].Location[0]} backId={'hotProjectsInCity' + hotProjectsInHomePage[index].Location[0] + '-hotProjects'}/>);
      });
    }
    return(
      <div>
        <div id={this.props.id} className="hotProjects" style={{
          'left': this.props.hotProjectsLeft, 
        }}>
          <QuickLinksTitle title={'Hot Projects'} backId={this.props.backId} click={this.props.siteLinksShow}/>
          <QuickLinks title={'Hot Projects'}/>
        </div>
        {cities}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotProjects: state.citiesAndCards.hotProjects,
  };
};

export default connect(mapStateToProps)(HotProjects);