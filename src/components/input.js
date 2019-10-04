import React, { Component } from "react";
import { View, Text , StyleSheet, TouchableOpacity, TextInput} from "react-native";

export default function Input ({title}){
	
	return(
	
	<View >
	
		<Text style={styles.text}>{title}</Text>
		<TextInput keyboardType="numeric" style={styles.input} onChangeText={ text=> alert(text) }/>
		
	</View>
		
		
		);
		
}


const styles=StyleSheet.create({
	container:{
		marginBottom:15,
		flex:1,
		flexDirection:"row",
		justifyContent:"space-around",
	},
	text:{
		marginLeft:5,
		color:"grey",
		fontSize:14,
	},
	input:{
		flex:1,
		color:"#474747",
		marginLeft:5,
		backgroundColor:"white",
		borderWidth:1,
		borderRadius:3,
		borderColor:"#CCC",
		width:"100%",
		height:40,
	},
	
});