import React, { useEffect, useState } from "react";
import { AsyncStorage, View, Text , StyleSheet, TouchableOpacity, Modal, Button, TextInput} from "react-native";
import Input from "./input";
import { connect } from "react-redux";

const ModalEdicao = ({modules,navigation})=>{
	const [edit, setEdit ]= useState({});				const [storage, setStorage] = useState([]);
	const [ precoMassa,setMassa]= useState("");
	const [precoQueijo,setQueijo]=useState("");
	const [precoIngredientesPizza,setIngredientes]=useState("");
	const [precoBanana, setBanana]=useState("");
	const [precoCalabresa, setCalabresa]=useState("");
	const [precoCarne, setCarne]=useState("");
	
	const { params }= navigation.state;
	const { product }= params;
	
	useEffect( ( )=>{

		getStorage(product.id);
		passStorageValuesToState();
		
	}, [ ] );
	
	const getStorage=async(id)=>{
		try{
		const item=await AsyncStorage.getItem(id);
		const parsed=JSON.parse(item);
		setStorage(parsed);
		
		}catch(error){
			alert("sacooo");
		}
	};
	
	function passStorageValuesToState(){
		setCarne(storage.precoCarne);
		setCalabresa(storage.precoCalabresa);
		setBanana(storage.precoBanana);
		setMassa(storage.precoMassa);
		setIngredientes(storage.precoIngredientesPizza);
		setQueijo(storage.precoQueijo);
		
	}; 
	
	const save=async()=>{
		
		await saveEditedItem();
		//await params.save(edit);
		navigation.goBack();
		
	};
	
	const saveEditedItem=()=>{
		let edited={
			data: storage.data,
			id: storage.id,
			precoMassa,
			precoCalabresa,
			precoIngredientesPizza,
			precoQueijo,
			precoCarne,
			precoBanana,
			
			precoTotal:Number(precoQueijo)+Number(precoCarne)+Number(precoBanana)+Number(precoMassa)+Number(precoIngredientesPizza)+Number(precoCalabresa),
			
		};
		setEdit(edited);
		alert(product.data); 
	};
	
	
	return(
		<Modal  onRequestClose={()=>navigation.goBack() } animationType="slide">
		<View style={styles.containerMaster}>
			<Text style={styles.listTitle}>Gatos</Text>
			<View style={{flexDirection:"row"}}>
				<Input title="Massa" />
				<Input title="Carne" />
				<Input title="Calabresa" />
			</View>
			
			<View style={{flexDirection:"row"}}>
				<Input title="Massa" />
				<Input title="Carne" />
				<Input title="Calabresa" />
			</View>
			
			<View style={{flexDirection:"row"}}>
				<Input title="Massa" />
				<Input title="Carne" />
				<Input title="Calabresa" />
			</View>
		</View>
		
	</Modal>
	);
}
		
		
		export default connect(state=>({modules:state}) )(ModalEdicao);
		
		
		
		
		
		
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
	
	button:{
		padding:20,
		width:"30%",
		borderRadius:4,
		backgroundColor:"white",
		top:190,
		marginHorizontal:5,
		
		
	},
	listTitle:{
		marginVertical:10,
		marginLeft:5,
		fontSize:25,
		fontWeight:"bold",
		color:"grey",
	},
	
});