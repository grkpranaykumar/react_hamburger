import React, { Component } from 'react';

class HomeNavigationComponent extends Component {
  constructor(props) {
    super(props);
  }
	
  render() {
    return(
			<div className='homeNav'>
				<ul>
					<li>
						<i data-imgCommon='true' className="bgSize24_c icn_99"></i>
						<a className="ripple colorBlue" href="/">Home</a>
					</li>
					<li>
						<i data-imgCommon='true' className="bgSize24_c icn_shortlistHm"></i>
						<a className="ripple colorBlue" href="/shortlisted-properties">Shortlist</a>
					</li>
				</ul>
			</div>
    );
  }
}

export default HomeNavigationComponent;