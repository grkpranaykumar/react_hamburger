import React, { Component } from 'react';
import ProjectHandlerComponent from './ProjectHandlerComponent';
import { connect } from 'react-redux';

class ProjectLinks extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const projects = [];
    var hotProjectsInCity = this.props.hotProjects;
    Object.keys(hotProjectsInCity).map((key)=>{
      if(hotProjectsInCity[key].Location[0] === this.props.name) {
        hotProjectsInCity[key].ProjectDetails.map((item)=>{
          projects.push(
						<ProjectHandlerComponent url={item.URL} project={item.LABEL} id={item.LABEL}/>
					);
        });
      }
    });
    return(
			<div>
				<div className="catName">Quick Links</div>
				<ul>
					{projects}
				</ul>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotProjects: state.citiesAndCards.hotProjects,
  };
};

export default connect(mapStateToProps)(ProjectLinks);