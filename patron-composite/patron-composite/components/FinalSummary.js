import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from '../config/tierConfig';
 
const { TIER_CONFIG, CATEGORY_ICONS, CATEGORY_ORDER } = Config;
 
export default function FinalSummary({ activeTier, selected, totalPrice }) {
  if (!activeTier || Object.keys(selected).length < CATEGORY_ORDER.length) return null;
 
  const cfg = TIER_CONFIG[activeTier];
 
  return (
    <View style={[styles.card, { borderColor: cfg.color }]}>
      <View style={[styles.cardHeader, { backgroundColor: cfg.bg }]}>
        <Text style={[styles.title, { color: cfg.color }]}>🎉 ¡PC Completa!</Text>
        <Text style={styles.sub}>{cfg.label}</Text>
      </View>
 
      {CATEGORY_ORDER.map((cat) => {
        const part = selected[cat];
        if (!part) return null;
        return (
          <View key={cat} style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowIcon}>{CATEGORY_ICONS[cat]}</Text>
              <View>
                <Text style={styles.rowCat}>{cat}</Text>
                <Text style={styles.rowName}>{part.getName()}</Text>
              </View>
            </View>
            <Text style={[styles.rowPrice, { color: cfg.accent }]}>
              ${part.getPrice().toLocaleString()}
            </Text>
          </View>
        );
      })}
 
      <View style={[styles.totalRow, { borderTopColor: cfg.color }]}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={[styles.totalPrice, { color: cfg.accent }]}>
          ${totalPrice.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: '#0D0D0D',
    marginTop: 8,
    overflow: 'hidden',
  },
  cardHeader: { padding: 20, alignItems: 'center' },
  title:  { fontSize: 24, fontWeight: '900', letterSpacing: 1 },
  sub:    { color: '#666', fontSize: 13, marginTop: 4 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
  },
  rowLeft:  { flexDirection: 'row', alignItems: 'center', flex: 1, gap: 10 },
  rowIcon:  { fontSize: 18, width: 28, textAlign: 'center' },
  rowCat:   { color: '#555', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  rowName:  { color: '#CCCCCC', fontSize: 13, fontWeight: '600', marginTop: 1 },
  rowPrice: { fontSize: 14, fontWeight: '800' },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 2,
  },
  totalLabel: { color: '#FFF', fontSize: 16, fontWeight: '900', letterSpacing: 3 },
  totalPrice: { fontSize: 28, fontWeight: '900' },
});