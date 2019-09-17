import React, { Component }from "react";
import { AsyncStorage, View, Text , StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ModalEdicao from "../components/modalDeEdicao";
import MyBackButton from "../components/MyBackButton";

class Page2 extends Component{
static navigationOptions=({navigation})=>({
	
	title:navigation.state.params.product.data,
	
	headerRight:<TouchableOpacity onPress={()=> navigation.navigate("ModalEdicao",{ product: navigation.state.params.product, mainState:navigation.state.params.mainState})} style={{marginRight:10}}><Text >Edit</Text></TouchableOpacity>,
	
	
});
	constructor(props){
		super(props);
		
		this.state={
			
		precoCalabresa:this.props.navigation.state.params.product.precoCalabresa,
        precoCarne:this.props.navigation.state.params.product.precoCarne,
        precoQueijo:this.props.navigation.state.params.product.precoQueijo,
        precoMassa :this.props.navigation.state.params.product.precoMassa,
        precoIngredientesPizza:this.props.navigation.state.params.product.precoIngredientesPizza,
        precoBanana:this.props.navigation.state.params.product.precoBanana,
        precoTotal:this.props.navigation.state.params.product.precoTotal,
        
		modalStatus:false,
		dismiss:this.closeModalEdicao,
		openModalEdicao:this.openModalEdicao,
		
		storage:this.try(),
		
		};
	};
	
	componentDidMount(){
		this.try();
	};
	
	
	try=async()=>{
		const user=await AsyncStorage.getItem("0");
		const parsed=JSON.parse(user);
		return parsed;
		
	};
	
	
	
	
	render(){
		
	const { navigation }= this.props;
	const compra= this.try();
		return(
	<ScrollView>
	<View style={styles.container}>
		<Text style={styles.label}>Gastos</Text>
		
		<Text style={styles.title}>Preço Massa: R${storage.precoMassa}</Text>
		
		<Text style={styles.title}>Preço Calabresa: R${this.state.precoCalabresa}</Text>
		
		<Text style={styles.title}>Preço queijo: R${this.state.precoQueijo}</Text>
		
		<Text style={styles.title}>Carne:R${this.state.precoCarne}</Text>
		
		<Text style={styles.title}>Preço Banana🍌:R${this.state.precoBanana}</Text>
		
		<Text style={styles.title}>Preço ingredientes 🍕:R${this.state.precoIngredientesPizza}</Text>
		
		<Text style={styles.title}>Total: R${this.state.precoTotal}</Text>
		
		<Text style={styles.label}>Produção</Text>
		
		<ModalEdicao dismiss={this.dismiss} modalStatus={this.state.modalStatus}/>
		
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