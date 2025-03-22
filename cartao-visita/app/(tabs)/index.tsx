import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <LinearGradient colors={["#0f0c29", "#302b63", "#24243e"]} style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: "https://i.ibb.co/v4XGQZcT/IMG-5588.jpg" }} 
          style={styles.image} 
        />
        <Text style={styles.name}>Elias Pereira</Text>
        <Text style={styles.role}>Desenvolvedor Frontend | Estudante</Text>
        <View style={styles.divider} />

        <Text style={styles.contact}>📧 elias.pereira.adm@outlook.com</Text>
        <Text style={styles.contact}>📞 (81) 99697-3442</Text>

        {/* Botões de Redes Sociais */}
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.button} 
            onPress={() => Linking.openURL("https://www.instagram.com/eliaspeereira/")}
          >
            <FontAwesome name="instagram" size={20} color="#fff" />
            <Text style={styles.buttonText}>Instagram</Text>
          </Pressable>

          <Pressable 
            style={styles.button} 
            onPress={() => Linking.openURL("https://www.linkedin.com/in/elias-pereira-350519184/")}
          >
            <FontAwesome name="linkedin" size={20} color="#fff" />
            <Text style={styles.buttonText}>LinkedIn</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  role: {
    fontSize: 16,
    color: "#d1d1d1",
    marginBottom: 10,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 10,
    opacity: 0.3,
  },
  contact: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
});
