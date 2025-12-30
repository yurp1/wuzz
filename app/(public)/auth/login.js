import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />

        <ImageBackground
          source={require("../../../assets/login.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            style={styles.keyboard}
          >
            {/* FORM DI BAWAH */}
            <View style={styles.form}>
              {/* HEADER */}
              <View style={styles.header}>
                <Text style={styles.title}>Selamat Datang Kembali</Text>
                <Text style={styles.subtitle}>Masuk untuk melanjutkan</Text>
              </View>

              {/* INPUT */}
              <View style={styles.inputGroup}>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholder="Nama"
                    placeholderTextColor="#999"
                    style={styles.input}
                  />
                </View>

                <View style={styles.inputBox}>
                  <TextInput
                    placeholder="Kata Sandi"
                    placeholderTextColor="#999"
                    secureTextEntry={!isPasswordVisible}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setPasswordVisible(!isPasswordVisible)
                    }
                  >
                    <Ionicons
                      name={isPasswordVisible ? "eye-off" : "eye"}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>

                {/* REMEMBER */}
                <TouchableOpacity
                  style={styles.remember}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <Ionicons
                    name={
                      rememberMe ? "checkbox" : "square-outline"
                    }
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.rememberText}>Ingat Saya</Text>
                </TouchableOpacity>
              </View>

              {/* BUTTON */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/(user)")}
              >
                <Text style={styles.buttonText}>Masuk</Text>
              </TouchableOpacity>

              {/* FOOTER */}
              <View style={styles.footer}>
                <View style={styles.registerRow}>
                  <Text style={styles.footerText}>
                    Belum punya akun?
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      router.push("/(public)/auth/register")
                    }
                  >
                    <Text style={styles.link}> Buat Sekarang!</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.googleButton}>
                  <Image
                    source={{
                      uri:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
                    }}
                    style={{ width: 22, height: 22 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  keyboard: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "rgba(0,0,0,0.65)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingBottom: 30,
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1CD6CE",
  },

  subtitle: {
    fontSize: 13,
    color: "#fff",
  },

  inputGroup: {
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },

  inputBox: {
    width: "85%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  remember: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  rememberText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 13,
  },

  button: {
    width: 160,
    height: 45,
    backgroundColor: "#1CD6CE",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    alignItems: "center",
  },

  registerRow: {
    flexDirection: "row",
    marginBottom: 12,
  },

  footerText: {
    color: "#ccc",
    fontSize: 12,
  },

  link: {
    color: "#F2C94C",
    fontWeight: "bold",
    fontSize: 12,
  },

  googleButton: {
    width: 42,
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
