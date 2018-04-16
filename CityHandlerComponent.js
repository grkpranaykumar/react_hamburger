import React, { Component } from 'react';
import BHKListComponent from './BHKListComponent';
import ViewAllButton from './ViewAllButton';

class CityHandlerComponent extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      this.props.title === 'Hot Projects' ?
      <li>
        <a className='ripple colorBlue __showHpCityHandler' onClick={()=>this.props.showProjects(this.props.id)}
          href='javascript:void(0)' id={this.props.id}>
          {this.props.city}
        </a>
        <ViewAllButton  viewAllLink={this.props.viewAllLink}/>
      </li> :
        (this.props.type === 'R_S' || this.props.type === 'R_R') ?
        <li>
          <a className='ripple colorBlue __showbhkHandler' id={this.props.id}
           onClick={()=>this.props.showBHK(this.props.id)}>
            {this.props.city}
          </a>
          <ViewAllButton  viewAllLink={this.props.viewAllLink}/>
          <BHKListComponent id={this.props.city + '-city'} roomtype={this.props.roomtype}/>
        </li> :
        <li>
          <a className='ripple colorBlue' href={this.props.viewAllLink} id={this.props.id}>
            {this.props.city}
          </a>
        </li>
    );
  }
}

export default CityHandlerComponent;
