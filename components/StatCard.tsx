import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerButton}>←</Text>
        <Text style={styles.headerTitle}>Bike Tracker</Text>
        <Text style={styles.headerButton}>⟳</Text>
      </View>

      {/* 지도 영역 (지금은 임시 회색 박스) */}
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: 'gray' }}>Google Maps Placeholder</Text>
      </View>

      {/* 2x2 카드 영역 */}
      <View style={styles.cardGrid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Duration</Text>
          <Text style={styles.cardValue}>0:00</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Distance</Text>
          <Text style={styles.cardValue}>0 m</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Speed</Text>
          <Text style={styles.cardValue}>0.0 km/h</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>0</Text>
        </View>
      </View>

      {/* Start Workout 버튼 */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>▶ Start Workout</Text>
      </TouchableOpacity>

      {/* 하단 탭은 React Navigation BottomTabs 사용 권장 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerButton: { fontSize: 20, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: { fontSize: 14, color: 'gray' },
  cardValue: { fontSize: 20, fontWeight: 'bold' },
  startButton: {
    marginTop: 'auto',
    backgroundColor: 'green',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  startButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
