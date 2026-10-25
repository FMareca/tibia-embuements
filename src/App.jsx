import { useMemo, useState } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import SettingsPanel from './components/SettingsPanel';
import SummaryCards from './components/SummaryCards';
import ImbuementCard from './components/ImbuementCard';
import { createEmptyPrices, DEFAULT_NPC_FEE, STORAGE_KEY, imbuements } from './data/imbuements';
import { calculateImbuement, calculateTotals } from './utils/calculations';
import { usePersistentState } from './hooks/usePersistentState';

const initialState = {
  tokenPrice: '',
  npcFee: DEFAULT_NPC_FEE,
  prices: createEmptyPrices(),
};

export default function App() {
  const { value: state, setValue: setState, storageAvailable } = usePersistentState(STORAGE_KEY, initialState);
  const [savedAt, setSavedAt] = useState(null);

  const updateState = (updater) => {
    setState((current) => {
      const next = typeof updater === 'function' ? updater(current) : updater;
      setSavedAt(new Date());
      return next;
    });
  };

  const results = useMemo(
    () => imbuements.map((imbuement) => calculateImbuement(imbuement, state)),
    [state],
  );
  const totals = useMemo(() => calculateTotals(results), [results]);

  const updateItemPrice = (itemId, value) => {
    updateState((current) => ({
      ...current,
      prices: { ...current.prices, [itemId]: value },
    }));
  };

  const resetItemPrices = () => {
    if (!window.confirm('Limpar todos os preços dos itens? O preço do Gold Token e a taxa serão mantidos.')) return;
    updateState((current) => ({ ...current, prices: createEmptyPrices() }));
  };

  const resetAll = () => {
    if (!window.confirm('Apagar todos os valores salvos, incluindo Gold Token e taxa?')) return;
    updateState({ ...initialState, prices: createEmptyPrices() });
  };

  return (
    <main className="app-shell">
      <AppHeader storageAvailable={storageAvailable} />
      <SettingsPanel
        tokenPrice={state.tokenPrice}
        npcFee={state.npcFee}
        onTokenPriceChange={(tokenPrice) => updateState((current) => ({ ...current, tokenPrice }))}
        onNpcFeeChange={(npcFee) => updateState((current) => ({ ...current, npcFee }))}
      />
      <SummaryCards totals={totals} />
      <div className="category-list">
        {results.map((result) => (
          <ImbuementCard
            key={result.id}
            result={result}
            prices={state.prices}
            onPriceChange={updateItemPrice}
          />
        ))}
      </div>
      <AppFooter
        savedAt={savedAt}
        onResetPrices={resetItemPrices}
        onResetAll={resetAll}
      />
    </main>
  );
}
