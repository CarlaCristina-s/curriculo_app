import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationProp } from "@react-navigation/native";

interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (email === "email@email.com" && senha === "12345") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Email e/ou senha incorretos");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.containerLogin}>
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          placeholderTextColor="#00ab90"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.inputLogin}
          placeholder="Senha"
          placeholderTextColor="#00ab90"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  containerLogin: {
    justifyContent: "center",
    marginHorizontal: 20,
  },
  inputLogin: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ace0d9'
  },
  loginButton: {
    backgroundColor: '#00AB78',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#ace0d9',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
