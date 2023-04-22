import { AppRoutes } from "./src/routes/app.routes";
import { StatusBar } from "react-native";


export default function App() {
  return (
    
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AppRoutes/>
    </>
  );
}

