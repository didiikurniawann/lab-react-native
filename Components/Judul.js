import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return(
			<Text style={stylee.judul}>Biodata</Text>
			)
}

}
const stylee = {
	judul:{
		color:'white',
		fontSize: 50,
		fontWeight:'bold',	
		backgroundColor: 'maroon',

	}
}

