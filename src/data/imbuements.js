import { HeartPulse, Swords, Zap } from 'lucide-react';

export const imbuements = [
  {
    id: 'mana',
    name: 'Mana Leech',
    description: 'Ingredientes para o imbuement de mana.',
    icon: Zap,
    items: [
      { id: 'rope-belt', name: 'Rope Belt', quantity: 25 },
      { id: 'silencer-claws', name: 'Silencer Claws', quantity: 25 },
      { id: 'grimeleech-wings', name: 'Some Grimeleech Wings', quantity: 5 },
    ],
  },
  {
    id: 'vida',
    name: 'Life Leech',
    description: 'Ingredientes para o imbuement de vida.',
    icon: HeartPulse,
    items: [
      { id: 'vampire-teeth', name: 'Vampire Teeth', quantity: 25 },
      { id: 'bloody-pincers', name: 'Bloody Pincers', quantity: 15 },
      { id: 'dead-brain', name: 'Piece of Dead Brain', quantity: 5 },
    ],
  },
  {
    id: 'critico',
    name: 'Critical',
    description: 'Ingredientes para o imbuement crítico.',
    icon: Swords,
    items: [
      { id: 'protective-charm', name: 'Protective Charm', quantity: 20 },
      { id: 'sabretooth', name: 'Sabretooth', quantity: 25 },
      { id: 'vexclaw-talon', name: 'Vexclaw Talon', quantity: 5 },
    ],
  },
];

export const DEFAULT_NPC_FEE = '250000';
export const TOKENS_PER_IMBUEMENT = 6;
export const STORAGE_KEY = 'tibia-imbuement-calculator-v1';

export const createEmptyPrices = () =>
  Object.fromEntries(imbuements.flatMap(({ items }) => items.map(({ id }) => [id, ''])));
