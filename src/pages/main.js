import React , { useEffect, useState } from "react";
import { AsyncStorage, View, Text , StyleSheet, TouchableOpacity, FlatList, TextInput, TouchableHighlight } from "react-native";
import ModalCompra from "../components/modal";
import { connect } from "react-redux";




function Main({navigation, reduxState , dispatch}) {
	
	const [product, setItem]=useState([] );
	const [today,setToday]=useState("");
	const [precoCalabresa,setCalabresa]=useState("");
    const [precoCarne,setCarne]=useState("");
    const[precoQueijo,setQueijo]=useState("");
    const [ precoMassa , setMassa]=useState("");
    const[precoIngredientesPizza,setPizza]=useState("");
    const[precoBanana,setBanana]=useState("");
      
	const[modalVisible, setModalVisibility]=useState(false);
		
		// modalFunctions
	const[modalStatus,setIModalStatus]=useState(false);
	const[editedItem,setEditedItem]=useState("");
			
			const handleEditItem=(editedItem)=>{
		const NewItem=product.map(item=>{
		if(item.id==editedItem.id){
			
			product.precoMassa="FOIII";
			
			return item;
			}
			return item;
		});
		setItem(NewItem);
	}

	const state={
	product,
	today,
	precoCalabresa,
    precoCarne,
	precoQueijo,
	 precoMassa,
    precoIngredientesPizza,
    precoBanana,
      
	modalVisible,
		// modalFunctions
	modalStatus,
	adicionarItem,
	editedItem,
			
	 handleEditItem,
		
	};
	
	
	function Render ({ item }){
	return(
	
	<View style={styles.productView}>
			
		<TouchableOpacity onPress={()=>{navigation.navigate("Page2", { product:item, mainState:state, save:saveItemInStorage});} }>
			<Text style={styles.productTitle}>
				{ item.data }
			</Text>
		</TouchableOpacity> 
			
	</View>
	);
};



	const sendToMain=()=>{
		return {
			type:"GET_STORAGE",
			storage:product
		}
	}
	
	
	useEffect(()=>{
		
		loadItems();
		
		navigation.setParams({remove:removeItems})
		
	}, [] );
	
	
	const loadItems=async()=>{
	try{
		
	let all=[];
	const keys=await AsyncStorage.getAllKeys();
	
const productLoaded=await AsyncStorage.multiGet(keys,(err, stores)=>{
	
	stores.map((result, i , store)=>{
		let key=store[i][0];
		let value=store[i][1];
		
		const parsed=JSON.parse(value);
	
		if(parsed !== null){
			all.push(parsed);
		}
	
	});
});
	
	setItem(all);
	
	}catch(error){
		console.warn(error);
	}
	
};


	
	const adicionarItem=async( ) =>{
		if( !preenchido() ) return alert("preencha todos os dados");
		
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();

		today = dd + '/' + mm+ '/' + yyyy;
		await setToday(today);

		 let novoItem={
			data: today,
		precoCalabresa:Number(precoCalabresa),
		precoQueijo:Number(precoQueijo),
		precoCarne:Number(precoCarne),
		precoMassa:Number(precoMassa),
		precoBanana:Number(precoBanana),
		precoIngredientesPizza:Number(precoIngredientesPizza),
		
		precoTotal:Number(precoQueijo)+Number(precoCarne)+Number(precoBanana)+Number(precoMassa)+Number(precoIngredientesPizza)+Number(precoCalabresa),
		
		id:String(product.length + 2),
		
		};
		
		saveItemInStorage(novoItem);
		
		console.log(novoItem);
		
		setItem( [...product, novoItem] );
		
		clearStatePrices();
		
		setModalVisibility(false);
		
	};
	
	
	
	
	const saveItemInStorage= async (novoItem)=>{
	try{
		await AsyncStorage.setItem(novoItem.id , JSON.stringify(novoItem));
		
		}catch(error){
			alert(error);
		}
		
	};
	
	const removeItems=()=> setItem([]);
	
	const preenchido=()=>{
		if(precoCalabresa && precoCarne && precoQueijo && precoMassa && precoIngredientesPizza && precoBanana)
		return true;
		
		else return false;
		};
		
	const clearStatePrices=()=>{
		
			setCalabresa("");
       	 setCarne("");
       	 setQueijo("");
    	    setMassa ("");
     	   setPizza("");
    	    setBanana("");
       
	};
	
		
	
		return(
		<View style={ styles.container }>
			
			<FlatList  
showsVerticalScrollIndicator={ false } contentContainerStyle={styles.list} 
renderItem={ ( { item } )=> <Render item={item } navigation={ navigation } /> } data={ product }
keyExtractor={ item =>item.id } 
			/>
			<ModalCompra 
changeModalVisibility={setModalVisibility}
modalStatus={modalVisible} adicionar={adicionarItem} precoCalabresa={setCalabresa} precoCarne={setCarne} precoBanana={setBanana} precoQueijo={setQueijo}
precoMassa={setMassa}
precoIngredientesPizza={setPizza}/>

	

			<TouchableOpacity onPress={()=>setModalVisibility(true)} style={styles.button}><Text style={{color:"#56D6FF",fontSize:25}}>+</Text></TouchableOpacity>
			
		</View>
			
		);
};


Main.navigationOptions=({navigation})=>({
		
		title:"FormData",
		
		headerRight:<View/>,
		headerLeft:<TouchableOpacity onPress={()=>{
	const removeAllItemsOfStorage=async()=>{
		try{
		await AsyncStorage.clear();
		}catch(error){
			alert("fail");
		}
	}
	removeAllItemsOfStorage();
	navigation.state.params.remove();
	
	}
} style={{marginLeft:10}}><Text>Clear</Text></TouchableOpacity>,

});





export default connect( state=>({reduxState:state}) )(Main);


const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#F3F3F3",
		color:"grey",
	},
	
	button:{
		position:"absolute",
		bottom:5,
		right:5,
		alignSelf:"flex-end",
		backgroundColor:"white",
		width:"20%",
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