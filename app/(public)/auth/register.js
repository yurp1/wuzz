import React, { useState } from 'react';
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
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const { height, width } = useWindowDimensions();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <ImageBackground
          source={require('../../../assets/register.jpg')}
          style={styles.background}
          resizeMode="cover"
        >
          {/* FORM DI BAWAH */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            style={styles.keyboard}
          >
            <View style={styles.formContainer}>
              {/* TITLE */}
              <Text style={[styles.title, { marginBottom: height * 0.04 }]}>
                Daftar Sekarang!
              </Text>

              {/* INPUT */}
              <View style={styles.inputs}>
                <View style={[styles.inputBox, { width: width * 0.85 }]}>
                  <TextInput
                    placeholder="Nama"
                    placeholderTextColor="#999"
                    style={styles.input}
                  />
                </View>

                <View style={[styles.inputBox, { width: width * 0.85 }]}>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    style={styles.input}
                  />
                </View>

                <View style={[styles.inputBox, { width: width * 0.85 }]}>
                  <TextInput
                    placeholder="Kata Sandi"
                    placeholderTextColor="#999"
                    secureTextEntry={!isPasswordVisible}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                  >
                    <Ionicons
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>

                <View style={[styles.inputBox, { width: width * 0.85 }]}>
                  <TextInput
                    placeholder="Ulang Kata Sandi"
                    placeholderTextColor="#999"
                    secureTextEntry={!isConfirmPasswordVisible}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                  >
                    <Ionicons
                      name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* BUTTON */}
              <TouchableOpacity
                style={[styles.button, { width: width * 0.5 }]}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              {/* FOOTER */}
              <View style={styles.footer}>
                <View style={styles.loginRow}>
                  <Text style={styles.loginText}>Sudah punya akun? </Text>
                  <TouchableOpacity
                    onPress={() =>
                      router.replace('/(public)/auth/login')
                    }
                  >
                    <Text style={styles.loginLink}>Login</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.googleButton}>
                  <FontAwesome name="google" size={18} color="#EA4335" />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.45)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00C4B4',
  },

  inputs: {
    width: '100%',
    alignItems: 'center',
  },

  inputBox: {
    height: 44,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },

  button: {
    marginTop: 15,
    height: 44,
    backgroundColor: '#1CD6CE',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 10,
    alignItems: 'center',
  },

  loginRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },

  loginText: {
    fontSize: 12,
    color: '#444',
  },

  loginLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E65100',
  },

  googleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});
