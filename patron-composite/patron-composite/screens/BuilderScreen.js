import React, { useState } from 'react';
import {
  View, Text, ScrollView,
  StyleSheet, StatusBar, Alert,
} from 'react-native';
 
import { catalog }  from '../data/catalog';
import Config       from '../config/tierConfig';
import TierCard     from '../components/TierCard';
import SummaryBar   from '../components/SummaryBar';
import FinalSummary from '../components/FinalSummary';
 
const { CATEGORY_ORDER } = Config;
const TOTAL_CATEGORIES   = CATEGORY_ORDER.length; // 13
 
export default function BuilderScreen() {
  const [activeTier, setActiveTier]     = useState(null);
  const [selected, setSelected]         = useState({});
  const [expandedTier, setExpandedTier] = useState(null);
 
  const totalPrice    = Object.values(selected).reduce((s, p) => s + p.getPrice(), 0);
  const selectedCount = Object.keys(selected).length;
  const isComplete    = selectedCount === TOTAL_CATEGORIES;
 
  const handleSelectPart = (part) => {
    if (activeTier && activeTier !== part.getTier()) {
      Alert.alert(
        '⚠️ Gama bloqueada',
        `Ya tienes componentes de gama "${activeTier}".\n\n` +
        `Solo puedes seleccionar piezas de la misma gama.\n` +
        `Pulsa "Reset" para cambiar de gama.`,
        [{ text: 'Entendido', style: 'cancel' }]
      );
      return;
    }
 
    const cat     = part.getCategory();
    const current = selected[cat];
 
    if (current && current.getName() === part.getName()) {
      const next = { ...selected };
      delete next[cat];
      setSelected(next);
      if (Object.keys(next).length === 0) setActiveTier(null);
    } else {
      setSelected({ ...selected, [cat]: part });
      setActiveTier(part.getTier());
    }
  };
 
  const handleReset = () => {
    setSelected({});
    setActiveTier(null);
  };
 
  const handleToggleTier = (tierKey) =>
    setExpandedTier(expandedTier === tierKey ? null : tierKey);
 
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#050508" />
 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🖥️ PC GAMER BUILDER</Text>
        <Text style={styles.headerSub}>
          Patrón Composite · {TOTAL_CATEGORIES} categorías · Elige tu gama
        </Text>
      </View>
 
      <SummaryBar
        activeTier={activeTier}
        selectedCount={selectedCount}
        totalPrice={totalPrice}
        onReset={handleReset}
      />
 
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(catalog).map(([tierKey, build]) => (
          <TierCard
            key={tierKey}
            tierKey={tierKey}
            build={build}
            isExpanded={expandedTier === tierKey}
            isLocked={activeTier !== null && activeTier !== tierKey}
            activeTier={activeTier}
            selected={selected}
            onToggle={() => handleToggleTier(tierKey)}
            onSelectPart={handleSelectPart}
          />
        ))}
 
        {isComplete && (
          <FinalSummary
            activeTier={activeTier}
            selected={selected}
            totalPrice={totalPrice}
          />
        )}
 
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#050508' },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#111',
    backgroundColor: '#080810',
  },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', letterSpacing: 2 },
  headerSub:   { fontSize: 11, color: '#555', marginTop: 4, letterSpacing: 0.8 },
  scroll:      { padding: 16 },
});