import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Importa los íconos
import appFirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Iniciando Sesión", "Accediendo...");
      props.navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Credenciales incorrectas o problema al iniciar sesión.");
    }
  };

  return (
    <View style={styles.padre}>
      <View>
        <Image source={require("../assets/logoia.png")} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Correo@gmail.com"
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.cajaTexto}>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Contraseña"
              style={{ flex: 1, paddingHorizontal: 15 }}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword} // Control de visibilidad
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "eye-off" : "eye"} // Cambia entre íconos
                size={24}
                color="#59e152"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
            <Text style={styles.TextoBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
  },
  tarjeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#cccccc30",
    borderRadius: 50,
    marginVertical: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  PadreBoton: {
    alignItems: "center",
  },
  cajaBoton: {
    backgroundColor: "#37e823",
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: "center",
    color: "white",
  },
});
