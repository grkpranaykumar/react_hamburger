import React, { Component } from 'react';

class SideMenuHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
			<div id="login-regiter" onClick={this.props.operation}>
				{this.props.name}
			</div>
    );
  }
}

export default SideMenuHeader;