import React, { Component } from "react";
import { View, Text , StyleSheet, TouchableOpacity, Modal, Button, TextInput} from "react-native";


export default class ModalCompra extends Component{ 
	
	
	render(){
		return(
	
		<Modal  onRequestClose={()=>this.props.changeModalVisibility(false)} animationType="slide" visible={this.props.modalStatus } >
		<View style={styles.containerMaster}>
		<Text style={styles.listTitle}>Gastos</Text>
		
			
			<View style={styles.container}>
			
			<TextInput placeholder="Massa" style={styles.input} keyboardType="numeric" onChangeText={title=> this.props.precoMassa(title)} />
			
				<TextInput placeholder="Carne" style={styles.input} keyboardType="numeric" onChangeText={title=> this.props.precoCarne(title)} />
				
		<TextInput keyboardType="numeric" placeholder="Queijo" style={styles.input} onChangeText={ quantidade=> this.props.precoQueijo(quantidade)} />	
		</View>
	
	<View style={styles.container}>
		
	<TextInput placeholder="Calabresa" style={styles.input} keyboardType="numeric" value={this.props.calabresa} onChangeText={ valor=> this.props.precoCalabresa(valor) } />		
	
	<TextInput placeholder="Banana" style={styles.input} keyboardType="numeric" onChangeText={title=> this.props.precoBanana(title)} />
	
	<TextInput placeholder="ingredientes Pizza" style={styles.input} keyboardType="numeric" onChangeText={title=> this.props.precoIngredientesPizza(title)} />
	</View>
	
	<Text style={styles.listTitle}>Produção</Text>
	<View style={styles.container}>
				<TextInput placeholder="Carne" style={styles.input} keyboardType="numeric" onChangeText={title=> this.props.setPrecoPizza(title)} />
		
	<TextInput placeholder="Calabresa" style={styles.input} keyboardType="numeric" onChangeText={ valor=> this.setState({valor}) } />		
	
	<TextInput placeholder="Banana" style={styles.input} keyboardType="numeric" onChangeText={()=>{}} />
	</View>
	
	<View style={styles.container}>
	
	<TextInput placeholder="Pizza" style={styles.input} keyboardType="numeric" onChangeText={()=>{}} />
	
		</View>
		<View style={{flexDirection:"row", justifyContent:"space-between"}}>
				<TouchableOpacity style={styles.buttonCancel} onPress={()=>(this.props.changeModalVisibility(false))}><Text style={{color:"#56D6FF"}}>Cancelar</Text></TouchableOpacity>
				
				<TouchableOpacity style={styles.buttonCancel} onPress={()=> this.props.adicionar() }><Text style={{color:"#56D6FF"}}>Adicionar</Text></TouchableOpacity>
				
				</View>
				
			</View>
			
		</Modal>
		

		
	 	);
		
	}

}


const styles=StyleSheet.create({
	containerMaster:{
		flex:1,
		backgroundColor:"#F3F3F3",
		
	},
	container:{
		 flexDirection:"row",
		
	
		
	},
	input:{
		color:"#474747",
		padding:10,
		marginTop:10,
		marginLeft:5,
		backgroundColor:"white",
		borderWidth:1,
		borderRadius:3,
		borderColor:"#CCC",
		width:"30%",
		
	
	},
	
	buttonCancel:{
		padding:20,
		width:"30%",
		borderRadius:4,
		backgroundColor:"white",
		top:190,
		marginHorizontal:5,
		
		
	},
	listTitle:{
		marginTop:10,
		alignSelf:"center",
		fontSize:20,
		color:"grey",
	},
	
});