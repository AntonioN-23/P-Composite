import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Config from '../config/tierConfig';
import PartCard from './PartCard';
 
const { TIER_CONFIG, CATEGORY_ICONS, CATEGORY_ORDER } = Config;
 
export default function TierCard({
  tierKey, build, isExpanded, isLocked,
  activeTier, selected, onToggle, onSelectPart,
}) {
  const cfg = TIER_CONFIG[tierKey];

  const byCategory = {};
  build.getChildren().forEach((part) => {
    const cat = part.getCategory();
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(part);
  });
 
  const orderedCategories = CATEGORY_ORDER.filter((cat) => byCategory[cat]);
 
  const selectedInTier = Object.values(selected).filter(
    (p) => p.getTier() === tierKey
  ).length;
 
  return (
    <View style={[
      styles.tierCard,
      { borderColor: isLocked ? '#1A1A1A' : cfg.color },
      isLocked && styles.tierCardLocked,
    ]}>
      {/* CABECERA */}
      <TouchableOpacity
        style={[styles.tierHeader, { backgroundColor: isLocked ? '#0A0A0A' : cfg.bg }]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <View style={styles.tierLeft}>
          <Text style={[styles.tierName, { color: isLocked ? '#333' : cfg.color }]}>
            {cfg.label}
          </Text>
          <Text style={[styles.tierDesc, { color: isLocked ? '#2A2A2A' : '#777' }]}>
            {build.getDescription()}
          </Text>
          <View style={styles.tierMeta}>
            <Text style={[styles.tierTotal, { color: isLocked ? '#2A2A2A' : cfg.accent }]}>
              Desde ${build.getPrice().toLocaleString()}
            </Text>
            {selectedInTier > 0 && (
              <View style={[styles.progressBadge, { backgroundColor: cfg.badge }]}>
                <Text style={[styles.progressBadgeText, { color: cfg.accent }]}>
                  {selectedInTier}/13
                </Text>
              </View>
            )}
          </View>
        </View>
        <Text style={[styles.tierArrow, { color: isLocked ? '#333' : cfg.color }]}>
          {isExpanded ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      {isExpanded && orderedCategories.map((cat) => (
        <View key={cat} style={styles.categorySection}>
          <View style={[styles.catHeader, { borderLeftColor: cfg.color }]}>
            <Text style={styles.catHeaderIcon}>{CATEGORY_ICONS[cat]}</Text>
            <Text style={[styles.catHeaderText, { color: cfg.accent }]}>{cat}</Text>
            {selected[cat] && selected[cat].getTier() === tierKey && (
              <View style={[styles.selectedBadge, { backgroundColor: cfg.badge }]}>
                <Text style={[styles.selectedBadgeText, { color: cfg.accent }]}>✓</Text>
              </View>
            )}
          </View>
 
          {byCategory[cat].map((part) => (
            <PartCard
              key={part.getName()}
              part={part}
              cfg={cfg}
              isSelected={
                selected[part.getCategory()] !== undefined &&
                selected[part.getCategory()].getName() === part.getName()
              }
              isDisabled={activeTier !== null && activeTier !== part.getTier()}
              onPress={() => onSelectPart(part)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
 
const styles = StyleSheet.create({
  tierCard: {
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 16,
    overflow: 'hidden',
  },
  tierCardLocked: { opacity: 0.35 },
  tierHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  tierLeft:   { flex: 1, marginRight: 10 },
  tierName:   { fontSize: 18, fontWeight: '900', letterSpacing: 0.5 },
  tierDesc:   { fontSize: 12, marginTop: 3 },
  tierMeta:   { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 8 },
  tierTotal:  { fontSize: 13, fontWeight: '700' },
  progressBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  progressBadgeText: { fontSize: 11, fontWeight: '800' },
  tierArrow:  { fontSize: 14, fontWeight: '700' },
  categorySection: { marginBottom: 4 },
  catHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderLeftWidth: 3,
    marginHorizontal: 8,
    marginTop: 8,
    backgroundColor: '#0F0F0F',
    borderRadius: 4,
    gap: 6,
  },
  catHeaderIcon: { fontSize: 14 },
  catHeaderText: { fontSize: 12, fontWeight: '800', letterSpacing: 1.5, flex: 1 },
  selectedBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  selectedBadgeText: { fontSize: 10, fontWeight: '700' },
});