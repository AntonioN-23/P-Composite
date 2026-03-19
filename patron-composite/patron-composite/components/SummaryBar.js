import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Config from '../config/tierConfig';
 
const { TIER_CONFIG, CATEGORY_ORDER } = Config;
 
export default function SummaryBar({ activeTier, selectedCount, totalPrice, onReset }) {
  if (!activeTier || selectedCount === 0) return null;
 
  const cfg            = TIER_CONFIG[activeTier];
  const totalCategories = CATEGORY_ORDER.length;
  const progress        = selectedCount / totalCategories;
 
  return (
    <View style={[styles.bar, { borderColor: cfg.color }]}>
      <View style={styles.left}>
        <Text style={styles.label}>
          {cfg.label}  ·  {selectedCount}/{totalCategories} componentes
        </Text>
        <Text style={[styles.price, { color: cfg.accent }]}>
          ${totalPrice.toLocaleString()}
        </Text>
        <View style={styles.progressTrack}>
          <View style={[
            styles.progressFill,
            { width: `${progress * 100}%`, backgroundColor: cfg.color },
          ]} />
        </View>
      </View>
 
      <TouchableOpacity onPress={onReset} style={styles.resetBtn}>
        <Text style={styles.resetText}>↺{'\n'}Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    padding: 14,
    backgroundColor: '#0D0D0D',
    borderRadius: 12,
    borderWidth: 1,
  },
  left:  { flex: 1, marginRight: 12 },
  label: { color: '#AAA', fontSize: 12, fontWeight: '600', letterSpacing: 0.4 },
  price: { fontSize: 20, fontWeight: '900', marginTop: 2 },
  progressTrack: {
    height: 4,
    backgroundColor: '#1E1E1E',
    borderRadius: 2,
    marginTop: 8,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 2 },
  resetBtn: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  resetText: { color: '#FF4444', fontWeight: '700', fontSize: 12, textAlign: 'center' },
});
 