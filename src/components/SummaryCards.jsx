import { formatGold } from '../utils/formatters';

export default function SummaryCards({ totals }) {
  const winnerLabel = !totals.isComplete
    ? '—'
    : totals.winner === 'tie'
      ? 'Empate'
      : totals.winner === 'market'
        ? 'Market'
        : 'Gold Tokens';

  const summaryText = !totals.isComplete
    ? 'Preencha todos os preços para comparar.'
    : totals.winner === 'tie'
      ? 'As opções têm o mesmo custo.'
      : `Economia de ${formatGold(totals.savings)} no total.`;

  return (
    <section className="summary-grid" aria-label="Resumo geral">
      <article className="summary-card featured">
        <div className="summary-label">Mais barato no total</div>
        <div className="summary-value">{winnerLabel}</div>
        <p>{summaryText}</p>
      </article>
      <article className="summary-card">
        <div className="summary-label">Total pelo Market</div>
        <div className="summary-value">{totals.isComplete ? formatGold(totals.marketCost) : '—'}</div>
        <p>Ingredientes das 3 categorias + taxas</p>
      </article>
      <article className="summary-card">
        <div className="summary-label">Total por Gold Tokens</div>
        <div className="summary-value">{totals.isComplete ? formatGold(totals.tokensCost) : '—'}</div>
        <p>6 tokens por categoria + taxas</p>
      </article>
    </section>
  );
}
