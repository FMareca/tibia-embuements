import { formatGold } from '../utils/formatters';
import ItemPriceCard from './ItemPriceCard';
import CostComparison from './CostComparison';

function getWinnerLabel(winner) {
  if (winner === 'market') return 'Market compensa';
  if (winner === 'tokens') return 'Gold Token compensa';
  if (winner === 'tie') return 'Empate';
  return 'Preencha os preços';
}

function getSavingsMessage(result) {
  if (!result.isComplete) return 'Informe o preço de cada item e do Gold Token para comparar.';
  if (result.winner === 'tie') return 'As duas opções custam o mesmo valor.';
  const option = result.winner === 'market' ? 'Comprar no Market' : 'Usar Gold Tokens';
  return <>{option} economiza <strong>{formatGold(result.savings)}</strong> neste imbuement.</>;
}

export default function ImbuementCard({ result, prices, onPriceChange }) {
  const Icon = result.icon;

  return (
    <section className="category panel" aria-labelledby={`${result.id}-title`}>
      <div className="category-header">
        <div className="category-heading">
          <div className="icon-box"><Icon size={20} /></div>
          <div>
            <h2 id={`${result.id}-title`}>{result.name}</h2>
            <p>{result.description}</p>
          </div>
        </div>
        <span className={`winner ${result.winner}`}>{getWinnerLabel(result.winner)}</span>
      </div>

      <div className="items-grid">
        {result.items.map((item) => (
          <ItemPriceCard
            key={item.id}
            item={item}
            value={prices[item.id]}
            onChange={(value) => onPriceChange(item.id, value)}
          />
        ))}
      </div>

      <CostComparison result={result} />
      <div className="saving-note">{getSavingsMessage(result)}</div>
    </section>
  );
}
