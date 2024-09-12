import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar backgroundColor="teal" />
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/v2/C5603AQHj4qx-raJGxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1565809999959?e=1731542400&v=beta&t=RxFiWEHMdIp-H_yhweKZS7ctubyJrghAz9gm8dInj80",
          }}
          style={styles.myImage}
        />
        <Text style={styles.myName}>Carla Cristina de Souza</Text>
        <Text style={styles.myPosition}>Desenvolvedora Front-end</Text>

        <Text style={styles.title}>Contato</Text>
        <View style={styles.separator}></View>

        <View style={styles.contactContainer}>
          <AntDesign
            name="mail"
            size={24}
            color="teal"
            style={{ marginTop: 8 }}
          />
          <Text style={{ color: "grey", margin: 8, fontSize: 16 }}>
            cacrisbio@gmail.com
          </Text>
        </View>

        <View style={styles.contactContainer}>
          <FontAwesome name="phone" size={24} color="teal" />
          <Text
            style={{
              color: "grey",
              margin: 8,
              fontSize: 16,
            }}
          >
            (41)99999-9999
          </Text>
        </View>

        <View style={styles.contactContainer}>
          <FontAwesome name="linkedin-square" size={24} color="teal" />
          <Text style={{ color: "grey", margin: 8, fontSize: 16 }}>
            linkedin.com/in/carlacrissouza/
          </Text>
        </View>

        <Text style={styles.title}>Resumo</Text>
        <View style={styles.separator}></View>
        <Text style={styles.summary}>
          Trabalhei 14 anos como professora de Ciências e Biologia no Estado do
          Paraná, experiência essa que me trouxe muita resiliência, habilidades
          pessoais e interpessoais, além de liderança e ótima comunicação.
          Atualmente me encontrei como Desenvolvedora Front-end. Estou
          estudando, fazendo projetos, participando de eventos e fóruns, e
          dedicada na formação das competências necessárias para meu primeiro
          emprego na área.
        </Text>

        <Text style={styles.title}>Experiência</Text>
        <View style={styles.separator}></View>
        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Professora de Ciências e Biologia
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          SEED-PR
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          Fev 2008 - mar 2022
        </Text>
        <View style={styles.listExperience}>
          <FlatList
            horizontal="true"
            data={[
              { key: "•	 Elaboração e cumprimento dos planos de aula." },
              {
                key: "•	Preparação e aplicação de testes trimestrais, usando as notas para melhorar os próprios métodos de ensino.",
              },
              {
                key: "•	Orientação dos alunos, esclarecendo dúvidas, auxiliando nas tarefas e desenvolvendo métodos de ensino adequados.",
              },
              {
                key: "•	Desenvolvimento de ações diversificadas de mediação para estimular a participação dos educandos.",
              },
              {
                key: "•	Planejamento e desenvolvimento de projetos interdisciplinares.",
              },
              {
                key: "•	Participação e contribuição nas ações educacionais propostas pela SEED-PR. ",
              },
              {
                key: "•	Realização e sistematização do processo socioeducativo, segundo instrumentos próprios e sistemas internos.",
              },
              {
                key: "•	Acompanhamento individual dos alunos e atendimento aos respectivos responsáveis.",
              },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>

        <Text style={styles.title}>Educação</Text>
        <View style={styles.separator}></View>
        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Análise e Desenvolvimento de Sistemas - Tecnólogo
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          UNIAMÉRICA
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2023 - 2025
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Desenvolvedor Full Stack/Mobile - Curso com certificado
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          SENAI/SC
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2024 - 2025
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Desenvolvedor Front-end - Curso com certificado
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          CodeBlue
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2022
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Pedagogia - Graduação
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          UNINTER
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2017 - 2019
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Ciências Biológicas - Graduação
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          FIES
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2007 - 2012
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Neuroaprendizagem - Pós-graduação
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          UNINA
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2017
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Distúrbios de Aprendizagem - Pós-graduação
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          UNINA
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2016
        </Text>

        <Text style={{ color: "teal", marginVertical: 8, fontSize: 16 }}>
          Educação de Jovens e Adultos - Pós-graduação
        </Text>
        <Text style={{ color: "grey", marginBottom: 2, fontSize: 16 }}>
          FAPI
        </Text>
        <Text style={{ color: "#ccc", marginBottom: 2, fontSize: 16 }}>
          2015
        </Text>

        <Text style={styles.title}>Habilidades</Text>
        <View style={styles.separator}></View>
        <View style={styles.skillsContainer}>
          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>HTML</Text>
          </View>

          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>Bootstrap</Text>
          </View>

          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>GitHub</Text>
          </View>

          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>Git</Text>
          </View>

          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>CSS</Text>
          </View>

          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>JavaScript</Text>
          </View>
          <View
            style={{
              backgroundColor: "#badada",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.skills}>React Native</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  myImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  container: {
    padding: 20,
  },
  myName: {
    textAlign: "center",
    fontSize: 22,
    color: "teal",
    fontFamily: "serif",
  },
  myPosition: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  title: {
    color: "teal",
    fontSize: 18,
    marginTop: 14,
  },
  separator: {
    backgroundColor: "teal",
    width: "100%",
    height: 1,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  summary: {
    fontSize: 16,
    color: "grey",
    lineHeight: 20,
    marginTop: 14,
  },
  item: {
    color: "grey",
    fontSize: 16,
    lineHeight: 20,
    margin: 5,
  },
  skillsContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 30,
    gap: 10,
  },
  skills: {
    color: "teal",
    fontSize: 16,
    padding: 10,
  },
});

//safeareaview é para IOS
