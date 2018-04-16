import React, { Component } from 'react';

class ViewAllButton extends Component {
  constructor(props) {
    super(props);
  }
	
  render() {
    return (
			<a className='ripple colorBlue' href={this.props.viewAllLink}>View All</a>
    );
  }

}

export default ViewAllButton;