import React, { Component } from 'react';
import '../../../../assets/css/hamburger.css';
import '../../../../assets/css/commonIcons.css';
import HamburgerProps from '../../appConfig/HamburgerProps';
import SiteLinks from './hamburger/SiteLinks.js';
import AuthenticationLinks from './hamburger/AuthenticationLinks.js';
import SideMenuHeader from './hamburger/SideMenuHeader';
import Common from '../../helper/Common';
import ErrorBoundary from '../../widget/common/ErrorBoundary';

function Footer() {
  return (
		<div className="footer">
			<a href='https://play.google.com/store/apps/details?id=com.nnacres.app&utm_source=mobile_pwa&utm_campaign=pwa_ham&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width='135' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
		</div>
  );
}

class Hamburger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoginBox: false,
    };
  }
  
  componentDidMount() {
    if (Common.getCookie('DISP_NAME')) {
      this.setState({
        isLoggedIn: true, 
      });
    }
    else {
      this.setState({
        isLoggedIn: false, 
      });
    }
  }

  // handleLoginClick=()=> {
  //   this.setState({
  //     isLoggedIn: true,
  //   });
  // }

  // handleLogoutClick=()=> {
  //   this.setState({
  //     isLoggedIn: false, 
  //   });
  // }

  showLoginOptn =() =>{
    document.getElementById('ham').classList.remove('in');
    this.setState({
      showLoginBox: true,
    });
    document.body.querySelector('.bg00').addEventListener('click', this.hideLoginOptn);
  }

  hideLoginOptn = () => {
    this.setState({
      showLoginBox: false,
    });
  }

  render() {
    let button = null;
    button = this.state.isLoggedIn ? <AuthenticationLinks name1={'Profile'} name2={'Logout'} link1={'/do/99mobile/profileMob/showView'} link2={'/do/99mobile/logout99Mobile'} showLoginBox={this.state.showLoginBox}/> 
                                    : <AuthenticationLinks name1={'Login'} name2={'Register'} link1={'/do/99mobile/login99Mobile/loginForm'} link2={'/register.html'} showLoginBox={this.state.showLoginBox}/>;
    return (
      <aside id="ham" className={this.props.showInClass ? 'in' : ''}>
        <div className="head">
          <div data-imgCommon='true' className="userIconBox bgSize24_c icn_userLog"></div>
          <ErrorBoundary>
            <SideMenuHeader name = {this.state.isLoggedIn ? 'Profile' : 'Login/Register'} operation ={this.showLoginOptn}/>
          </ErrorBoundary>
        </div>
        <div className="hamContent">
          <ErrorBoundary>
            <SiteLinks links={HamburgerProps}/>
          </ErrorBoundary>
          <Footer/>
          {button}
        </div>
    </aside>
    );
  }
}

export default Hamburger;