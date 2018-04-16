import React, { Component } from 'react';

class HamburgerListItem extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return(
			<li>
				<a className="ripple colorBlue" id={this.props.id} href={this.props.link}
          onClick={this.props.click}>
          {this.props.name}
        </a>
			</li>
    );
  }
}

export default HamburgerListItem;