import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityHandlerComponent from './CityHandlerComponent';

class QuickLinks extends Component {
  constructor (props) {
    super(props);
  }

  showProjectsInCity = (id) =>{
    document.getElementById('siteLinks').style.left = '-100%';
    document.getElementById('hotProjects').style.left = '-100%';
    document.getElementById('hotAreas').style.left = '-100%';
    var hotProjectsInCity = document.body.querySelectorAll('.hotProjectsInCity');
    hotProjectsInCity.forEach (function(element) {
      element.style = '';
    });
    document.getElementById('hotProjectsInCity' + id).style.left = '0%';
  }

  showBHK = (city) => {
    let id = city + '-city';
    this.createBgLayer();
    let getId = document.getElementById(id);
    getId.classList.add('in');
    document.body.querySelector('.bg01').addEventListener('click', function() {
      document.getElementById('bg01').remove();
      this.removeBHK(id);
    }.bind(this));
    document.body.querySelector('.bg00').addEventListener('click',function() {
      this.removeBHK(id);
    }.bind(this));
  }

  removeBHK = (id) => {
    document.getElementById(id).classList.remove('in');
    document.getElementById('bg01').style.display = 'none';
  }

  createBgLayer = () => {
    let bg01;
    bg01 = document.createElement('div');
    bg01.className = 'bg01';
    bg01.id = 'bg01';
    document.getElementById('ham').appendChild(bg01);
  }

  render() {
    const hotCities = [];
    if(this.props.title === 'Hot Projects' && this.props.hotProjects !== undefined) {
      var hotProjects = this.props.hotProjects;
      Object.keys(hotProjects).map((index) => {
        hotCities.push(
          <CityHandlerComponent title={this.props.title} city={hotProjects[index].Location[0]} 
          id={hotProjects[index].Location[0]} viewAllLink={hotProjects[index].Location[1]} 
          showProjects={this.showProjectsInCity}/>
        );
      });
    }
    else {
      const type = this.props.type;
      if(this.props.hotAreas !== undefined) {
        var hotAreas = this.props.hotAreas;
        Object.keys(hotAreas[type].Location).map((index)=>{
          hotCities.push(
            <CityHandlerComponent title={this.props.title} city={hotAreas[type].Location[index].Label}
            id={hotAreas[type].Location[index].Label} viewAllLink={hotAreas[type].Location[index].url}
            type={this.props.type} roomtype={hotAreas[type].Location[index].Bedroom}
            showBHK={this.showBHK}/>
          );
        });
      }
    }

    return(
			<div>
				<div className="catName">Quick Links</div>
				<ul>
          {hotCities}
				</ul>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotProjects: state.citiesAndCards.hotProjects,
    hotAreas: state.citiesAndCards.hotAreas,
  };
};

export default connect(mapStateToProps)(QuickLinks);