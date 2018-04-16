import React, { Component } from 'react';
import '../../../../assets/css/header.css';
import Hamburger from './Hamburger';
class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }
    
  hamToggleIn =() =>{
    this.createBgLayer();
    this.setState({
      toggle: true, 
    });
    document.body.querySelector('.bg00').addEventListener('click', this.hamToggleOut);
  }
  
  hamToggleOut =() =>{
    this.setState({
      toggle: false, 
    });
    this.destroyBgLayer();
  }
  createBgLayer =(id) =>{
    var bg00, getId;
    if(document.getElementById('bg00')) {
      getId = document.getElementById(id);
      bg00 = document.getElementById('bg00');
      document.getElementById('bg00').remove();
      bg00.style.display = 'block';
      if(id !== undefined) {
        getId.parentElement.appendChild(bg00);
      }
      else{
        document.body.appendChild(bg00);
      }
    }
    else{
      bg00 = document.createElement('div');
      bg00.className = 'bg00';
      bg00.id = 'bg00';
      if(id !== undefined) {
        getId.parentElement.appendChild(bg00);
      }
      else{
        document.body.appendChild(bg00);
      }
    }
  }

  destroyBgLayer =() =>{
    if(document.getElementById('bg00')) {
      document.getElementById('bg00').style.display = 'none'; 
    }
  }
  
  render() {
    return (
      <header className={this.props.headerTransform}>
        <div className="hamIcon" id="hamburger" onClick={this.hamToggleIn}>
          <i data-imgCommon='true' className="_99commonSp icn_ham"></i>
        </div>
        <div className="logo99">
          <img width="80" src="../images/logo-icon.png" />
        </div>
        <Hamburger showInClass={this.state.toggle}/>
      </header>

    );
  }
}

export default Header;
