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

interface ProdutosProps {
  navigation: NavigationProp<any>;
}

export default function Produtos({ navigation }: ProdutosProps) {

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View>
       <Text>Tela Produtos</Text>
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
