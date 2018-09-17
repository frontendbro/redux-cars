import React, { Component } from "react";
import { connect } from 'react-redux';

class Details extends Component {
	render(){
		if(!this.props.car){
			return(
				<p>Выберите автомобиль</p>
			)
		}
		return(
			<div>
				<p>{this.props.car.speed}</p>
				<p>{this.props.car.weight}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    car: state.active
  };
}

export default connect(mapStateToProps)(Details);