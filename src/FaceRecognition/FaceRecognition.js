import React,{Component} from 'react';
import "./FaceRecognition.css";

class FaceRecognition extends Component
{
	render()
	{
		return(
			<div className="absolute ma2 face">
				<img onLoad = {this.props.getImageData} className = "" src = {this.props.searchName} width ="500px" height = "auto" alt =""/>
				<div className = "bounding-boxes" style ={ {top: this.props.box.topRow, bottom: this.props.box.bottomRow, left: this.props.box.leftCol, right: this.props.box.rightCol}}></div>
			</div>
			)

	}
}

export default FaceRecognition;