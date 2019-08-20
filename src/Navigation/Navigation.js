import React,{Component} from 'react';
import './Navigation.css';
import Tilt from 'react-tilt';


class Nav extends Component
{
	render()
	{
		return(
			<nav className ="f4">
				<ul>		
					<Tilt className="Tilt" options={{ max : 60 }} style={{  }} >
 			<div className="Tilt-inner">
 				<li className = "pointer">Sign Out</li>
 			</div>
 			</Tilt>
				</ul>
			</nav>


			)
	}
}


export default Nav;
