import { createStackNavigator } from "react-navigation";
import Routes from "./routes";
import ModalEdicao from "./components/modalDeEdicao";

const RootStack = createStackNavigator({
	 Routes,
	ModalEdicao
	},
	{
		mode:"modal",
		headerMode: "none",
	}
);

export default RootStack;