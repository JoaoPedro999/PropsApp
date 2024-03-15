import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/styles/styles";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation
        name="Cristo Redentor"
        adress="Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ"
        description="Uma das 7 maravilhas do mundo moderno"
        imagesource={require("./src/Images/Cristo-DePaula-2.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
