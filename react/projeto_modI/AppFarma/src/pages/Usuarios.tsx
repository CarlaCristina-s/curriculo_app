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

interface UsuariosProps {
  navigation: NavigationProp<any>;
}

export default function Usuarios({ navigation }: UsuariosProps) {

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View>
       <Text>Tela Usuarios</Text>
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 
});
