import Home from "./src/screens/Home";
import { NavigationContainer } from '@react-navigation/native'
import Settings from "./src/screens/Settings";
import ContextProvider from "./src/contexts/context";
import Routes from "./src/routes";


export default function App() {

  

  return (
    <NavigationContainer>
      <ContextProvider>
        <Routes/>
      </ContextProvider>
    </NavigationContainer>
  );
}
