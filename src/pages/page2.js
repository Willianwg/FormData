import React, { Component }from "react";
import { View, Text , StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ModalEdicao from "../components/modalDeEdicao";

const Page2=({ navigation })=>(
	<ScrollView>
	<View style={styles.container}>
		<Text style={styles.label}>Gastos</Text>
		
		<Text style={styles.title}>Preço Massa: R${navigation.state.params.product.precoMassa}</Text>
		
		<Text style={styles.title}>Preço Calabresa: R${navigation.state.params.product.precoCalabresa}</Text>
		
		<Text style={styles.title}>Preço queijo: R${navigation.state.params.product.precoQueijo}</Text>
		
		<Text style={styles.title}>Carne:R${navigation.state.params.product.precoCarne}</Text>
		
		<Text style={styles.title}>Preço Banana🍌:R${navigation.state.params.product.precoBanana}</Text>
		
		<Text style={styles.title}>Preço ingredientes 🍕:R${navigation.state.params.product.precoIngredientesPizza}</Text>
		
		<Text style={styles.title}>Total: R${navigation.state.params.product.precoTotal}</Text>
		
		<Text style={styles.label}>Produção</Text>
		
		
		
	</View>
	
	<ModalEdicao modalFunctions={navigation.state.params.modalFunctions} />
	
	</ScrollView>
);

Page2.navigationOptions=({navigation})=>({
	title:navigation.state.params.product.data,
	headerRight:<TouchableOpacity onPress={navigation.state.params.modalFunctions.openModal} style={{marginRight:10}}><Text >Alterar</Text></TouchableOpacity>,
	
	
});

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#F3F3F3",
	},
	label:{
		marginLeft:5,
		fontSize:25,
		fontWeight:"bold",
		color:"grey",
		marginBottom:20,
	},
	title:{
	backgroundColor:"#FFF",
	marginBottom:7,
	fontSize:15,
	color:"grey",
	fontWeight:"bold",
	marginLeft:5,
	padding:10,
	borderRadius:2,
	},
	
});

export default Page2;