import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './component/Header';

import { CategoryChips } from './component/CategoryChips';
import { BookGrid } from './component/BookGrid';

import { FloatingCart } from './component/FloatingCard';

const HEADER_HEIGHT = 60;

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
     
        <View style={styles.header}>
          <Header />
        </View>

   
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
        >
          <View style={styles.category}>
            <Text style={styles.heading}>Category Chips</Text>
            <CategoryChips />
            <BookGrid />
          </View>

     
        </ScrollView>

      
        <View style={styles.cart}>
          <FloatingCart />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    zIndex: 10,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 100, 
  },
  heading: {
    width: '100%',
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  category: {
    width: '100%',
    alignItems: 'center',
  },
  cart: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});