import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.minhaTela}>
      <StatusBar backgroundColor="red" />
      <Text style={styles.title}>The Walking Dead</Text>

      <Image
        source={require("./assets/twd2.jpg")}
        // style={{ width: 50, height: 50, borderRadius: 50 }}
        style={styles.minhaImagem}
      />

      <Text style={{ color: "grey", fontSize: 22, textAlign: "center" }}>
        Conheça mais sobre a série
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "grey",
    fontSize: 28,
    textAlign: "center",
    marginTop: 40,
  },
  minhaImagem: {
    width: 300,
    height: 150,
    margin: 50,
  },
  minhaTela: {
    backgroundColor: "#000",
    flex: 1,
  },
});
