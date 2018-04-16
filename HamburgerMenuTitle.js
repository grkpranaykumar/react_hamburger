import React, { Component } from 'react';

class HamburgerMenuTitle extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return(
			<div className="catName">
				{this.props.category}
			</div>
    );
  }
}

export default HamburgerMenuTitle;