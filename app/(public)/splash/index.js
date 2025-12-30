import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Splash() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    ArchivoBlack: require('../../../assets/fonts/ArchivoBlack-Regular.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(public)/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ImageBackground
      source={require('../../../assets/splash-bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Image
        source={require('../../../assets/logo-wuzz.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>WuZZ</Text>
        <Text style={styles.subtitle}>
          mau healing ? wuzz aja dulu
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: '35%',
  },

  textContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'ArchivoBlack',
    fontSize: 48,
    color: '#000000',
    letterSpacing: 1.2,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '700',
    opacity: 0.9,
  },
});
