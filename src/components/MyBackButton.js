import React, { Component } from "react";
import { View, Text , StyleSheet, TouchableOpacity, Button } from "react-native";
import { withNavigation } from "react-navigation";

class MyBackButton extends Component{
	render(){
		const { params }= this.props.navigation.state;
		return(
		
		<Button title="Back" onPress={()=>{if(!params.mainState.modalVisible){
		alert("true");
		}else alert("nao");
		} } />
		
		);
	}
}

export default withNavigation(MyBackButton);