import { TOKENS_PER_IMBUEMENT } from '../data/imbuements';
import { hasPrice, toNumber } from './formatters';

export function calculateImbuement(imbuement, state) {
  const ingredientsCost = imbuement.items.reduce(
    (total, item) => total + toNumber(state.prices[item.id]) * item.quantity,
    0,
  );

  const npcFee = toNumber(state.npcFee);
  const marketCost = ingredientsCost + npcFee;
  const tokensCost = toNumber(state.tokenPrice) * TOKENS_PER_IMBUEMENT + npcFee;

  const isComplete =
    state.tokenPrice !== '' &&
    hasPrice(state.tokenPrice) &&
    imbuement.items.every(({ id }) => state.prices[id] !== '' && hasPrice(state.prices[id]));

  let winner = 'incomplete';
  if (isComplete) {
    if (marketCost === tokensCost) winner = 'tie';
    else winner = marketCost < tokensCost ? 'market' : 'tokens';
  }

  return {
    ...imbuement,
    ingredientsCost,
    npcFee,
    marketCost,
    tokensCost,
    isComplete,
    winner,
    savings: Math.abs(marketCost - tokensCost),
  };
}

export function calculateTotals(results) {
  const marketCost = results.reduce((total, result) => total + result.marketCost, 0);
  const tokensCost = results.reduce((total, result) => total + result.tokensCost, 0);
  const isComplete = results.every((result) => result.isComplete);

  return {
    marketCost,
    tokensCost,
    isComplete,
    winner: marketCost === tokensCost ? 'tie' : marketCost < tokensCost ? 'market' : 'tokens',
    savings: Math.abs(marketCost - tokensCost),
  };
}
