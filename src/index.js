import React from "react";
import { Text } from "react-native";
import Routes from "./routes";
import RootStack from "./RootStack";
import { Provider } from "react-redux";
import store from "./store";

const App = ()=>(
<Provider store={store}>
 	<RootStack />
 </Provider>
 )

export default App;