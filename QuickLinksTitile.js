import React, { Component } from 'react';

class QuickLinksTitle extends Component {

  // backFunction = (id) =>{
  //   var a = id.split('-')[1];
  //   var b = id.split('-')[0];
  //   document.getElementById(a).style.left = '0%';
  //   document.getElementById(b).style.left = '-100%';
  // }

  render() {
    return (
			<div className="quickLinks active">
				<a className="ripple colorBlue" href="#">{this.props.title}</a>
				<a className="ripple colorBlue clickToback" href="javascript:void(0)" id={this.props.backId}
            onClick={this.props.click}>back</a>
			</div>
    );
  }
}
export default QuickLinksTitle;
