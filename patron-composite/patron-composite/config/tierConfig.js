const TIER_CONFIG = {
  economica: {
    label:  ' Económica',
    color:  '#00C853',
    bg:     '#0A1A0A',
    accent: '#69F0AE',
    badge:  '#1B5E20',
  },
  media: {
    label:  ' Media',
    color:  '#2979FF',
    bg:     '#0A0E1A',
    accent: '#82B1FF',
    badge:  '#0D47A1',
  },
  alta: {
    label:  ' Alta',
    color:  '#FF6D00',
    bg:     '#1A0D00',
    accent: '#FFAB40',
    badge:  '#E65100',
  },
};
 
const CATEGORY_ICONS = {
  CPU:         '🧠',
  GPU:         '🎮',
  RAM:         '⚡',
  Motherboard: '🔌',
  Storage:     '💾',
  PSU:         '🔋',
  Case:        '🖥️',
  Cooling:     '❄️',
  Monitor:     '🖵',
  Keyboard:    '⌨️',
  Mouse:       '🖱️',
  Headset:     '🎧',
  Mousepad:    '🟫',
};
 
const CATEGORY_ORDER = [
  'CPU', 'GPU', 'RAM', 'Motherboard', 'Storage',
  'PSU', 'Case', 'Cooling', 'Monitor',
  'Keyboard', 'Mouse', 'Headset', 'Mousepad',
];
 
export default { TIER_CONFIG, CATEGORY_ICONS, CATEGORY_ORDER };
 