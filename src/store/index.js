import { createStore } from "redux";
import { AsyncStorage } from "react-native";

const INITIAL_STATE= {
		item:["carnificina"],
		today:"",
		precoCalabresa:"",
        precoCarne:"",
        precoQueijo:"",
        precoMassa :"10000000",
        precoIngredientesPizza:"",
        precoBanana:"",
        
        storage:{},
        
      
}

function reducer(state=INITIAL_STATE, action){
	if(action.type =="GET_STORAGE"){
		return { ...state, storage: action.storage }
	};
	return state
	
};

const store= createStore(reducer);

export default store;
