import React, { Component }from "react";
import { AsyncStorage, View, Text , StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ModalEdicao from "../components/modalDeEdicao";
import MyBackButton from "../components/MyBackButton";

class Page2 extends Component{
static navigationOptions=({navigation})=>({
	
	title:navigation.state.params.product.data,
	
	headerRight:<TouchableOpacity onPress={ ()=> navigation.navigate("ModalEdicao",{ product: navigation.state.params.product, mainState:navigation.state.params.mainState, save:navigation.state.params.save }) } style={{marginRight:10}}><Text >Edit</Text></TouchableOpacity>,
	
	
});
	constructor(props){
		super(props);
		
		this.state={
		storage:"",
		
		};
	};
	
	
	componentDidMount(){
		this.getStorage(this.props.navigation.state.params.product.id);
	};
	
	getStorage=async(id)=>{
		try{
		const item=await AsyncStorage.getItem(id);
		const parsed=JSON.parse(item);
		this.setState({storage:parsed});
		
		}catch(error){
			alert("sacooo");
		}
	};
	
	
	
	
	render(){
		
	const { navigation }= this.props;

		return(
	<ScrollView>
	<View style={styles.container}>
		<Text style={styles.label}>Gastos</Text>
		
		<Text style={styles.title}>Preço Massa: R${this.state.storage.precoMassa}</Text>
		
		<Text style={styles.title}>Preço Calabresa: R${this.state.storage.precoCalabresa}</Text>
		
		<Text style={styles.title}>Preço queijo: R${this.state.storage.precoQueijo}</Text>
		
		<Text style={styles.title}>Carne:R${this.state.storage.precoCarne}</Text>
		
		<Text style={styles.title}>Preço Banana🍌:R${this.state.storage.precoBanana}</Text>
		
		<Text style={styles.title}>Preço ingredientes 🍕:R${this.state.storage.precoIngredientesPizza}</Text>
		
		<Text style={styles.title}>Total: R${this.state.storage.precoTotal}</Text>
		
		<Text style={styles.label}>Produção</Text>
		
	
	</View>
	
	</ScrollView>
		);
	}
}


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