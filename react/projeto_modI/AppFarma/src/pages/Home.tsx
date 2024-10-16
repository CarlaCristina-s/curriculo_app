import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

interface HomeProps {
  navigation: NavigationProp<any>;
}

export default function Home({ navigation }: HomeProps) {
  function navigateLoginButton() {
    navigation.navigate("Login");
  }

  function navigateEstoqueButton() {
    navigation.navigate("Produtos");
  }

  function navigateUsuariosButton() {
    navigation.navigate("Usuarios");
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerUsuarioHome}>
        <Image
          style={styles.imageUsuarioHome}
          source={require("../../assets/elvis.jpg")}
        />
        <Text style={styles.textUsuarioHome}>Olá, Elvis!</Text>
      </View>

      <View style={styles.gerenciar}>
        <View style={styles.box}>
          <FontAwesome5 name="box-open" size={36} color="#00AB78" />
          <Text style={styles.textBox}>Estoque</Text>
        </View>

      <View style={styles.buttonsHome}>
      <TouchableOpacity
          style={styles.gerenciarButton}
          onPress={navigateEstoqueButton}
        >
          <Text style={styles.textGerenciarButton}>Estoque</Text>
        </TouchableOpacity>
      </View>
        
      </View>

      <View style={styles.gerenciar}>
        <View style={styles.box}>
          <FontAwesome5 name="user-alt" size={36} color="#00AB78" />
          <Text style={styles.textBox}>Usuários</Text>
        </View>

      <View style={styles.buttonsHome}>
      <TouchableOpacity
          style={styles.gerenciarButton}
          onPress={navigateUsuariosButton}
        >
          <Text style={styles.textGerenciarButton}>
            Usuários
          </Text>
        </TouchableOpacity>
      </View>
      
      </View>

      <TouchableOpacity
        style={styles.homeLoginButton}
        onPress={navigateLoginButton}
      >
        <Text style={styles.textHomeLoginButton}>Entrar/Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerUsuarioHome: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "center",
    gap: 50,
    backgroundColor: "#00AB78",
    width: "90%",
    padding: 5,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ace0d9",
  },
  imageUsuarioHome: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ace0d9",
  },
  textUsuarioHome: {
    fontSize: 24,
    color: "#ace0d9",
  },
  gerenciar: {
    justifyContent: "space-around",
    alignSelf: "center",
    width: "80%",
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ace0d9",
    borderRadius: 5,
  },
  box: {
    flexDirection: "row",
    gap: 10,
  },
  textBox: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AB78'
  },
  buttonsHome: {
    alignItems: 'flex-end'
  },
  gerenciarButton: {
    backgroundColor: '#00AB78',
    width: 100,
    padding: 10,
    borderRadius: 5
  },
  textGerenciarButton: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ace0d9'
  },
  homeLoginButton: {},
  textHomeLoginButton: {},
});
