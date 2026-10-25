import { CheckCircle2, RotateCcw } from 'lucide-react';

export default function AppFooter({ savedAt, onResetPrices, onResetAll }) {
  return (
    <footer className="footer">
      <div className="footer-note">
        <CheckCircle2 size={16} />
        <span>
          {savedAt
            ? `Última atualização salva: ${savedAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}. `
            : 'Os valores são salvos automaticamente. '}
          Os dados ficam apenas neste navegador e dispositivo.
        </span>
      </div>
      <div className="footer-actions">
        <button className="button secondary" onClick={onResetPrices}>
          <RotateCcw size={15} /> Limpar preços dos itens
        </button>
        <button className="button danger" onClick={onResetAll}>Limpar tudo</button>
      </div>
      <p className="disclaimer">
        Insira o preço de uma unidade de cada item, não o preço do lote inteiro.
        A calculadora não consulta o Market automaticamente. Se limpar os dados do
        navegador ou usar outro dispositivo/navegador, os valores não estarão disponíveis lá.
      </p>
    </footer>
  );
}
