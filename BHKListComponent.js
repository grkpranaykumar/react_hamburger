import React, { Component } from 'react';

class BHKListComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
			<ul id={this.props.id} className='__bhkLyr'>
				<li><a className="ripple colorBlue" href={this.props.roomtype['1'].url}>1 BHK</a></li>
				<li><a className="ripple colorBlue" href={this.props.roomtype['2'].url}>2 BHK</a></li>
				<li><a className="ripple colorBlue" href={this.props.roomtype['3'].url}>3 BHK</a></li>
				<li><a className="ripple colorBlue" href={this.props.roomtype['4'].url}>4 BHK</a></li>
			</ul>
    );
  }
}

export default BHKListComponent;