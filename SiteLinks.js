import React, { Component } from 'react';
import HamburgerMenuTitle from './HamburgerMenuTitle.js';
import HamburgerListItem from './HamburgerListItem.js';
import HotProjects from './HotProjects';
import HotAreas from './HotAreas';
import HomeNavigationComponent from './HomeNavigationComponent';
import ErrorBoundary from '../../../widget/common/ErrorBoundary';

class SiteLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteLinksLeft: '0%',
      hotProjectsLeft: '-100%',
      hotAreasLeft: '-100%',
    };
  }

  hpShow =() =>{
    document.body.querySelector('.hamContent').scrollTop = 0;
    this.setState({
      siteLinksLeft: '-100%',
      hotProjectsLeft: '0%',
      hotAreasLeft: '-100%',
    });
  }

  haShow =() =>{
    document.body.querySelector('.hamContent').scrollTop = 0;
    this.setState({
      siteLinksLeft: '-100%',
      hotProjectsLeft: '-100%',
      hotAreasLeft: '0%',
    });
  };

  siteLinksShow = () =>{
    document.body.querySelector('.hamContent').scrollTop = 0;
    this.setState({
      siteLinksLeft: '0%',
      hotProjectsLeft: '-100%',
      hotAreasLeft: '-100%',
    });
  }

  render() {
    const siteLinks = [];
    let heading = null;
    this.props.links.map((link) => {
      if(link.category !== heading) {
        siteLinks.push(<HamburgerMenuTitle category={link.category}/>);
      }
      siteLinks.push(
        <ul>
          <HamburgerListItem link={link.link} name={link.name} id={link.id} click={link.id === 'HotAreas-Link' ? this.haShow : this.hpShow}/>
        </ul>
      );
      heading = link.category;
    });

    return (
      <div>
        <div id="siteLinks" className="siteLinks" style={{
          'left': this.state.siteLinksLeft, 
        }}>
          <ErrorBoundary>
            <HomeNavigationComponent/>
          </ErrorBoundary>
          <ErrorBoundary>
            {siteLinks}
          </ErrorBoundary>
        </div>
        <HotProjects id={'hotProjects'} backId={'hotProjects-siteLinks'} hotProjectsLeft={this.state.hotProjectsLeft} siteLinksShow={this.siteLinksShow}/>
        <HotAreas id={'hotAreas'} backId={'hotAreas-siteLinks'} hotAreasLeft={this.state.hotAreasLeft} siteLinksShow={this.siteLinksShow}/>
      </div>
    );
  }
}

export default SiteLinks;