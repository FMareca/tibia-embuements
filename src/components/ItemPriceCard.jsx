import PriceInput from './PriceInput';
import { formatGold, toNumber } from '../utils/formatters';

export default function ItemPriceCard({ item, value, onChange }) {
  return (
    <article className="item-card">
      <div className="item-title">
        {item.name}
        <span>× {item.quantity}</span>
      </div>
      <PriceInput
        label="Preço unitário (gp)"
        value={value}
        onChange={onChange}
      />
      <div className="item-total">
        <span>Total do item</span>
        <strong>{formatGold(toNumber(value) * item.quantity)}</strong>
      </div>
    </article>
  );
}
