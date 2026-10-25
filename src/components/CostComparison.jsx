import { formatGold } from '../utils/formatters';

function ComparisonOption({ title, price, detail, isBest }) {
  return (
    <div className={`comparison ${isBest ? 'best' : ''}`}>
      <div className="comparison-label">{title}</div>
      <div className="comparison-price">{formatGold(price)}</div>
      <div className="comparison-detail">{detail}</div>
    </div>
  );
}

export default function CostComparison({ result }) {
  const marketIsBest = result.winner === 'market' || result.winner === 'tie';
  const tokensAreBest = result.winner === 'tokens' || result.winner === 'tie';

  return (
    <div className="comparison-grid">
      <ComparisonOption
        title="Comprar ingredientes no Market"
        price={result.marketCost}
        detail={`Itens: ${formatGold(result.ingredientsCost)} + taxa: ${formatGold(result.npcFee)}`}
        isBest={marketIsBest}
      />
      <ComparisonOption
        title="Usar 6 Gold Tokens"
        price={result.tokensCost}
        detail={`6 × ${formatGold(Number(result.tokensCost - result.npcFee) / 6)} + taxa: ${formatGold(result.npcFee)}`}
        isBest={tokensAreBest}
      />
    </div>
  );
}
