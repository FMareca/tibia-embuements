import { Calculator, Save } from 'lucide-react';

export default function AppHeader({ storageAvailable }) {
  return (
    <header className="hero">
      <div className="eyebrow"><Calculator size={15} /> TIBIA · CALCULADORA DE CUSTOS</div>
      <h1>Market ou <span>Gold Token?</span></h1>
      <p className="intro">
        Compare o custo dos ingredientes com o uso de 6 Gold Tokens em cada imbuement.
        Seus valores ficam salvos neste navegador automaticamente.
      </p>
      <div className={`save-status ${storageAvailable ? '' : 'error'}`}>
        <Save size={15} />
        {storageAvailable
          ? 'Salvamento automático ativado neste navegador'
          : 'Não foi possível salvar neste navegador'}
      </div>
    </header>
  );
}
