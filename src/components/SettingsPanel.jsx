import { Coins } from 'lucide-react';
import PriceInput from './PriceInput';

export default function SettingsPanel({ tokenPrice, npcFee, onTokenPriceChange, onNpcFeeChange }) {
  return (
    <section className="settings panel" aria-labelledby="settings-title">
      <div className="section-title">
        <div className="icon-box"><Coins size={20} /></div>
        <div>
          <h2 id="settings-title">Configurações</h2>
          <p>Valores usados em todas as categorias</p>
        </div>
      </div>

      <div className="settings-grid">
        <PriceInput
          label="Preço de 1 Gold Token (gp)"
          value={tokenPrice}
          onChange={onTokenPriceChange}
          hint="A calculadora considera sempre 6 tokens por imbuement."
        />
        <PriceInput
          label="Taxa do NPC por imbuement (gp)"
          value={npcFee}
          onChange={onNpcFeeChange}
          hint="Padrão: 250.000 gp, aplicada às duas opções."
          step={1000}
        />
      </div>
    </section>
  );
}
