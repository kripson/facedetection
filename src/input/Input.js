import React,{Component} from 'react';
import "./Input.css";
import Tilt from 'react-tilt';
class Input extends Component
{
	
	render(){
		return(
			<Tilt className="Tilt input w-50" options={{ max : 35 }} style={{  }} >
 				<div className = "Tilt-inner inputBox shadow-5 bg-red w-100 h4">
				<input onChange = {this.props.onInputChange} className = "w-70 h2" type="text" placeholder="Enter your URL and get the faces detected"/>
				<button onClick =  {this.props.onButtonClick} className = "link w-30 grow pointer subbutton"> Detect</button>
			</div>
 			</Tilt>

			


			)
	}
}


export default Input;