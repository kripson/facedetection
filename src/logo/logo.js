import React,{Component} from 'react';
import Tilt from 'react-tilt';
import "./logo.css";



class Logo extends Component
{
	render()
	{
		return(

		<Tilt className="Tilt" options={{ max : 60 }} style={{ height: 130, width: 150 }} >
 			<div className="Tilt-inner"><img alt ="logo" src = "https://img.pngio.com/butterfly-png-black-1-png-image-butterfly-png-black-2000_2000.png"/></div></Tilt>



			)
	}
}

export default Logo;