import React , { Component } from "react";
import { AsyncStorage, View, Text , StyleSheet, TouchableOpacity, FlatList, TextInput, TouchableHighlight } from "react-native";
import ModalCompra from "../components/modal";


export default class Main extends Component{
	
	static navigationOptions={
		title:"FormData",
	};
	
constructor(props){
	super(props);
	
	
	
	this.state={
		item:[],
		today:"",
		precoCalabresa:0,
        precoCarne:0,
        precoQueijo:0,
        precoMassa :0,
        precoIngredientesPizza:0,
        precoBanana:0,
        
        storage:"",
      
		modalVisible:false,
		
		// modalFunctions
			openModalEdicao:this.openModalEdicao,
			modalStatus:false,
			dismiss:this.closeModalEdicao,
			adicionarItem:this.adicionarItem,
	
			editedItem:"",
			handleEditItem:(editedItem)=>{
		const NewItem=this.state.item.map(item=>{
		if(item.id==editedItem){
			
			item.precoMassa="FOIII";
			
			return item;
			}
			return item;
		});
		this.setState({item:NewItem});
	},
 }
} ;
	
	
	adicionarItem= async ( ) =>{
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();

		today = dd + '/' + mm+ '/' + yyyy;
		await this.setState({today});

		 let novoItem={
			data: this.state.today,
		precoCalabresa:Number(this.state.precoCalabresa),
		precoQueijo:Number(this.state.precoQueijo),
		precoCarne:Number(this.state.precoCarne),
		precoMassa:Number(this.state.precoMassa),
		precoBanana:Number(this.state.precoBanana),
		precoIngredientesPizza:Number(this.state.precoIngredientesPizza),
		
		precoTotal:Number(this.state.precoQueijo)+Number(this.state.precoCarne)+Number(this.state.precoBanana)+Number(this.state.precoMassa)+Number(this.state.precoIngredientesPizza)+Number(this.state.precoCalabresa),
		
		id:String(this.state.item.length),
		};
		
		this.saveItemInStorage(novoItem);
		
		this.setState({item:[ ...this.state.item , novoItem]});
	
	};
	
	renderItem= ({item}=this.state) =>(
	
	<View style={styles.productView}>
			
		<TouchableOpacity onPress={()=>{ this.setEditedItem(item.id); this.props.navigation.navigate("Page2", { product:item, mainState:this.state });} }>
			<Text style={styles.productTitle}>
				{item.data}
			</Text>
		</TouchableOpacity> 
			
	</View>
	);
	
	
	saveItemInStorage= async (novoItem)=>{
	try{
		await AsyncStorage.setItem(novoItem.id , JSON.stringify(novoItem));
		
		}catch(error){
			alert(error);
		}
		
	};
	
	setEditedItem=(item)=>this.setState({editedItem: item});
	
	saveTroxa=async()=>{
			try{
		await AsyncStorage.setItem("user", "Troxa");
		
    		 }catch(error){
		alert("deu ruim");
			}  
		
		};
	
	openModal=()=>{
		this.setState({modalVisible:true})
		
	};
	

	closeModal= ()=>(
		this.setState({modalVisible:false})
	);
	
	
	setPrecoCarne= precoCarne =>( this.setState({precoCarne}));
		
	setPrecoQueijo= precoQueijo =>( this.setState({precoQueijo}));
	
	setPrecoMassa= precoMassa =>( this.setState({precoMassa}));
		
	setPrecoIngredientesPizza= precoIngredientesPizza =>(this.setState({precoIngredientesPizza}));
	
	setPrecoBanana= precoBanana  =>( this.setState({precoBanana}));
		
	setPrecoCalabresa= precoCalabresa=>(this.setState({precoCalabresa}));
	
	
	
	render(){
		return(
		<View style={ styles.container }>
			
			<FlatList contentContainerStyle={styles.list} renderItem={ this.renderItem } data={ this.state.item} keyExtractor={ item => item.id }/>
			
			<ModalCompra modalStatus={this.state.modalVisible} dismiss={this.closeModal} adicionarItem={this.adicionarItem} 
precoCalabresa={this.setPrecoCalabresa} precoCarne={this.setPrecoCarne} precoBanana={this.setPrecoBanana} precoQueijo={this.setPrecoQueijo}
precoMassa={this.setPrecoMassa}
precoIngredientesPizza={this.setPrecoIngredientesPizza}/>

	

			<TouchableOpacity onPress={this.openModal} style={styles.button}><Text style={{color:"#56D6FF",fontSize:25}}>+</Text></TouchableOpacity>
			
		</View>
			
		);
	}
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#F3F3F3",
		color:"grey",
	},
	
	button:{
		alignSelf:"flex-end",
		marginRight:5,
		marginBottom:5,
		backgroundColor:"white",
		width:"20%",
		marginTop:10,
		padding:20,
		justifyContent:"center",
		alignItems:"center",
		borderRadius:20,
		
		shadowColor:"black",
		shadowOpacity:0.20,
		shadowOffset:{
			width:0,
			height:3,
		},
		shadowRadius:3,
		elevation:5,
		
		
	},
	text:{
		color:"white",
	},
	productView:{
		padding:20,
		marginBottom:10,
		backgroundColor:"white",
		
		justifyContent:"center",
		alignItems:"center",
		
		shadowColor:"black",
		shadowOpacity:0.20,
		shadowOffset:{
			width:0,
			height:3,
		},
		shadowRadius:3,
		elevation:5,
		
	},
	list:{
		padding:20,
	},
	
	productTitle:{
		color:"black",
		fontWeight:"bold",
	},
});