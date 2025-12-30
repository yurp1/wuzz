import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function AuthIndex() {
  const router = useRouter();
  const { height, width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    ArchivoBlack: require('../../../assets/fonts/ArchivoBlack-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ImageBackground
      source={require('../../../assets/splash-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      <View style={{ flex: 1 }}>
        {/* ===== 40% ATAS ===== */}
        <View style={{ height: height * 0.3 }} />

        {/* ===== 60% BAWAH ===== */}
        <View
          style={[
            styles.bottomContainer,
            {
              height: height * 0.7,
              paddingBottom: height * 0.06,
            },
          ]}
        >
          {/* LOGO */}
          <Image
            source={require('../../../assets/logo-wuzz.png')}
            resizeMode="contain"
            style={{
              width: width * 0.48,
              height: width * 0.48,
              maxWidth: 250,
              maxHeight: 250,
            }}
          />

          {/* TEXT */}
          <Text style={[styles.title, { marginTop: height * 0.05 }]}>
            WuZZ
          </Text>

          {/* BUTTON */}
          <View style={{ width: '55%', marginTop: height * 0.05 }}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push('/(public)/auth/login')}
            >
              <Text style={styles.buttonPrimaryText}>Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push('/(public)/auth/register')}
            >
              <Text style={styles.buttonSecondaryText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },

  bottomContainer: {
    alignItems: 'center',
    paddingHorizontal: '10%',
  },

  title: {
    fontFamily: 'ArchivoBlack',
    fontSize: 42,
    color: '#000000',
    letterSpacing: 1,
  },

  buttonPrimary: {
    backgroundColor: '#27D4AC',
    paddingVertical: 14,
    borderRadius: 20,
    marginBottom: 14,
  },

  buttonPrimaryText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonSecondary: {
    backgroundColor: '#A4F6DB',
    paddingVertical: 14,
    borderRadius: 20,
  },

  buttonSecondaryText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
