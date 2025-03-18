import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const index = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.logoContainer}>
        <Image
          source={require("../../assets/images/Dwp11.png")}
          style={Styles.logo}
        />
        <Text style={Styles.logoText}>DWP CARE</Text>
      </View>
      <View style={Styles.Form}>
        {/* Username input */}
        <View style={Styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="white" />
          <TextInput
            style={Styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        {/* Password input */}
        <View style={Styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="white" />
          <TextInput
            style={Styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Feather
              name={passwordVisible ? "eye-off" : "eye"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={{alignSelf:"flex-end"}}>
            <Text style={{ color: "white", fontSize: 12 }}>Forgot Password?</Text>
          </TouchableOpacity>
        <TouchableOpacity style={Styles.submitButton}>
          <Text style={{color:"#fff",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#175690d9",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '100%',
    height: 50,
  },
  input: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  Form:{
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton:{
    backgroundColor: '#1787c9',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 35,
    justifyContent: 'center',
    height: 50,
    width: 120,
  }
});