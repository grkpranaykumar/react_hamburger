import React, { Component } from 'react';

class AuthenticationLinks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className={this.props.showLoginBox ? 'in __loginLyr lognOpt' : '__loginLyr lognOpt'}>
        <li><a className="ripple colorBlue" href={this.props.link1}>{this.props.name1}</a></li>
        <li><a className="ripple colorBlue" href={this.props.link2}>{this.props.name2}</a></li>
      </ul>
    );
  }
}

export default AuthenticationLinks;