import { createStackNavigator } from "react-navigation";
import React from "react";
import Main from "./pages/main";
import Page2 from "./pages/page2";
import { View, Text, TouchableOpacity  } from "react-native";


export default createStackNavigator({
	Main,
	Page2
},{   
	navigationOptions:{
		headerStyle:{
		backgroundColor:"#FFF",
		borderBottomWidth:1,
		borderBottomColor:"grey",
		},
		
		headerTintColor:"black",
			
		headerTitleStyle:{
			fontWeight:"bold",
			textAlign:"center",
			flex:1,
		
		},
		
	}
});