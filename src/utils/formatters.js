export const toNumber = (value) => Math.max(0, Number(value) || 0);

export const hasPrice = (value) =>
  value !== '' && Number.isFinite(Number(value)) && Number(value) >= 0;

export const formatGold = (value) =>
  `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(Math.round(value))} gp`;
