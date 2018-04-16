import React, { Component } from 'react';

class ProjectHandlerComponent extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <li>
        <a className='ripple colorBlue' href={this.props.url} id={this.props.id}>
          {this.props.project}
        </a>
      </li>
    );
  }
}

export default ProjectHandlerComponent;
