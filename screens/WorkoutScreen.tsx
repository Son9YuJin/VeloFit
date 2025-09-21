import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function WorkoutScreen() {
  const [seconds, setSeconds] = useState(0);     // 운동 시간(초)
  const [calories, setCalories] = useState(0);   // 칼로리
  const timerRef = useRef<NodeJS.Timer | null>(null);

  // 시간 포맷 (분:초)
  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // 운동 시작
  const startWorkout = () => {
    if (timerRef.current) return; // 이미 실행중이면 무시
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
      setCalories(prev => prev + 0.2); // 초당 0.2kcal 소모 (예시)
    }, 1000);
  };

  // 운동 중지
  const stopWorkout = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // 운동 리셋
  const resetWorkout = () => {
    stopWorkout();
    setSeconds(0);
    setCalories(0);
  };

  return (
    <View style={styles.container}>
      {/* 지도 대신 회색 박스 */}
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: 'gray' }}>Map Placeholder</Text>
      </View>

      {/* 2×2 박스 */}
      <View style={styles.cardGrid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Duration</Text>
          <Text style={styles.cardValue}>{formatTime(seconds)}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Distance</Text>
          <Text style={styles.cardValue}>-</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Speed</Text>
          <Text style={styles.cardValue}>-</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>{calories.toFixed(1)} kcal</Text>
        </View>
      </View>

      {/* 버튼 3개 */}
      <TouchableOpacity style={styles.startButton} onPress={startWorkout}>
        <Text style={styles.startButtonText}>▶ Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.startButton, { backgroundColor: 'red', marginTop: 10 }]} onPress={stopWorkout}>
        <Text style={styles.startButtonText}>■ Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.startButton, { backgroundColor: 'gray', marginTop: 10 }]} onPress={resetWorkout}>
        <Text style={styles.startButtonText}>↺ Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF', padding: 16 },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
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
    backgroundColor: 'green',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  startButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
