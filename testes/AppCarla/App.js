import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/pfundo.jpg")}
        style={{ width: "100%", height: "100%", opacity: "0.5" }}
      />
      <View>
        {/* <Image
      source={require("./assets/twd5.jpg")}
      style={styles.logo}
      /> */}

        <Text style={styles.title}>The Walking Dead</Text>

        <Text style={styles.subtitle}>Conheça mais sobre a série</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
    alignItems: "center",
    // justifyContent: 'center',
  },
  plano: {
    //  position: 'relative',
    //  activeOpacity: 0.8,
  },
  title: {
    // position: 'absolute',
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    position: "",
    fontSize: 26,
  },
  // logo: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 200,
  //   position: 'absolute',
  // }
});
