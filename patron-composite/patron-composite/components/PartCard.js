import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Config from '../config/tierConfig';
 
const { CATEGORY_ICONS } = Config;
 
export default function PartCard({ part, cfg, isSelected, isDisabled, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.partCard,
        { borderColor: isSelected ? cfg.color : '#1E1E1E' },
        isSelected && { backgroundColor: cfg.bg },
        isDisabled && styles.partDisabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.75}
    >
      <View style={styles.partRow}>
        <View style={[styles.catBadge, { backgroundColor: isSelected ? cfg.badge : '#1A1A1A' }]}>
          <Text style={styles.catIcon}>{CATEGORY_ICONS[part.getCategory()]}</Text>
          <Text style={[styles.catLabel, { color: isSelected ? cfg.accent : '#555' }]}>
            {part.getCategory()}
          </Text>
        </View>
 
        <View style={styles.partInfo}>
          <Text style={[styles.partName, { color: isDisabled ? '#333' : '#F0F0F0' }]}>
            {part.getName()}
          </Text>
          <Text style={[styles.partDesc, { color: isDisabled ? '#222' : '#666' }]}>
            {part.getDescription()}
          </Text>
        </View>
      </View>

      <View style={styles.partFooter}>
        <Text style={[styles.partPrice, {
          color: isSelected ? cfg.accent : (isDisabled ? '#333' : '#AAA'),
        }]}>
          ${part.getPrice().toLocaleString()}
        </Text>
 
        <View style={[
          styles.selectBtn,
          {
            backgroundColor: isSelected ? cfg.color : '#1A1A1A',
            borderColor:     isSelected ? cfg.color : '#333',
          },
        ]}>
          <Text style={[styles.selectBtnText, { color: isSelected ? '#000' : '#555' }]}>
            {isSelected ? '✓ Seleccionado' : 'Seleccionar'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  partCard: {
    margin: 8,
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#0C0C0C',
    padding: 14,
  },
  partDisabled: { opacity: 0.25 },
  partRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  catBadge: {
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    marginRight: 12,
    minWidth: 52,
  },
  catIcon:  { fontSize: 20 },
  catLabel: { fontSize: 10, fontWeight: '700', letterSpacing: 1, marginTop: 2 },
  partInfo: { flex: 1 },
  partName: { fontSize: 14, fontWeight: '700' },
  partDesc: { fontSize: 12, marginTop: 4, lineHeight: 17 },
  partFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  partPrice:      { fontSize: 16, fontWeight: '800' },
  selectBtn:      { paddingVertical: 7, paddingHorizontal: 14, borderRadius: 8, borderWidth: 1 },
  selectBtnText:  { fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
});