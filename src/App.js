import React from 'react';
import './App.css';
import Nav from "./Navigation/Navigation";
import FaceRecognition from "./FaceRecognition/FaceRecognition";
import Logo from "./logo/logo";
import Input from "./input/Input";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const paraparticles = {

	particles:{
		number:{
			value:50,
			density:
			{
				enable:true,
				value_area:800
			}
		}
	}
}

const app = new Clarifai.App({
 apiKey: 'd594124ba6f74195aaf8982d7134ca75'
});

class App extends React.Component{

	constructor()
	{
		super();
		this.state =
		{
			input:"",
			searchName:"",
			box:{},
			boxWidth:0,
			boxHeight:0,
			faceBoxClass:""
		}
	}

	onFaceCalculate = (data,height,width) =>
	{
		const faceDetails = data.outputs[0].data.regions[0].region_info.bounding_box;
		this.setState({box:{
			rightCol: (width - faceDetails.right_col * width),
			leftCol:(width * faceDetails.left_col),
			topRow: (height * faceDetails.top_row),
			bottomRow: (height - height * faceDetails.bottom_row)
	}
})
	};


	getImageData = (event) =>
	{
		this.setState({boxWidth:event.target.width, boxHeight:event.target.height});
	}

	onInputChange = (event) =>
	{
		this.setState({input:event.target.value});
		
	}

	onButtonClick = (event) =>
	{
		this.setState({})
		this.setState({searchName:this.state.input});
		app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
		.then(response =>
		{
      		this.onFaceCalculate(response,this.state.boxHeight,this.state.boxWidth);
    	},
    function(err) {
      // there was an error
    }
  );
  }
	componentDidMount()
	{

	}


	render(){
  return (
    <div className="App">
        <Particles className="particles"
        params = {paraparticles} />
         <Nav/>
         <Logo/>
         <Input onInputChange = {this.onInputChange} onButtonClick = {this.onButtonClick}/>
         <FaceRecognition box = {this.state.box} searchName = {this.state.searchName} getImageData = {this.getImageData}/>
    </div>
  );
}
}
export default App;
