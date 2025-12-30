import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useRef, useState } from 'react';
import { useRouter } from 'expo-router';

const slides = [
  {
    id: '1',
    image: require('../../../assets/onboard1.jpg'),
    title: 'Buka Mata, Jelajahi Dunia.',
    subtitle: 'Gili Trawangan, Bali',
  },
  {
    id: '2',
    image: require('../../../assets/onboard2.jpg'),
    title: 'Nikmati Perjalanan Anda.',
    subtitle: 'Gunung Bromo, Jawa Timur',
  },
  {
    id: '3',
    image: require('../../../assets/onboard3.jpg'),
    title: 'Bersama WuZZ',
    subtitle: 'Istano  Baso Pagaruyung, Sumatera Barat',
  },
];

export default function Onboarding() {
  const { width, height } = useWindowDimensions();
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (index < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: index + 1 });
    } else {
      router.replace('/(public)/auth');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
        onMomentumScrollEnd={(e) => {
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item }) => (
          <View style={{ width, flex: 1 }}>
            {/* BACKGROUND FULL LAYAR */}
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={StyleSheet.absoluteFillObject}
            />

            {/* overlay */}
            <View style={styles.overlay} />

            {/* TEXT */}
            <View style={[styles.textArea, { paddingBottom: height * 0.05 }]}>
              {/* TITLE */}
              <Text style={[styles.title, { marginBottom: height * 0.02 }]}>
                {item.title}
              </Text>

              {/* ===== INDICATOR ===== */}
              <View style={styles.indicatorContainer}>
                {slides.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.indicator,
                      index === i && styles.activeIndicator,
                    ]}
                  />
                ))}
              </View>

              {/* BOTTOM ROW */}
              <View style={styles.bottomRow}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>

                <TouchableOpacity style={styles.button} onPress={nextSlide}>
                  <Text style={styles.buttonText}>
                    {index === slides.length - 1 ? 'Mulai' : 'Next'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

/* ================= STYLE ================= */

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  textArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: '8%',
  },

  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '900',
  },

  /* ===== INDICATOR ===== */
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: '5%',
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginRight: 8,
  },

  activeIndicator: {
    width: 28,
    backgroundColor: '#ffffff',
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
    marginRight: 16,
  },

  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },

  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
