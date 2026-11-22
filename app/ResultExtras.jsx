import { useState } from 'react';
import { insight, cards } from './insights.mjs';

export function Takeaway({totals}) {
  const {title,text} = insight(totals);
  const [card,setCard] = useState(-1);
  const [note,setNote] = useState('');
  return <div className="takeaway">
    <h2>{title}</h2><p>{text}</p>
    <button className="result-action" onClick={()=>window.print()}>Imprimir ou salvar em PDF</button>
    <small className="print-help">Para guardar o arquivo, escolha “Salvar como PDF” na janela de impressão.</small>
    {card < 0 ? <button className="result-action secondary" onClick={()=>setCard(Math.floor(Math.random()*cards.length))}>Abrir carta de reflexão</button> :
      <div className="reflection">
        <h3>Carta de reflexão</h3><p>{cards[card]}</p>
        <label htmlFor="reflection-note">Minha reflexão (opcional)</label>
        <textarea id="reflection-note" maxLength={400} rows={3} value={note} onChange={e=>setNote(e.target.value)}/>
        <p className="paper-note">{note}</p>
        {!note && <button className="result-action secondary" onClick={()=>setCard((card+1)%cards.length)}>Outra carta</button>}
      </div>}
  </div>;
}

export function Feedback() {
  const [value,setValue] = useState('');
  const [status,setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(value.trim()); setStatus('Copiado. Cole a mensagem para quem aplicou a avaliação.'); }
    catch { setStatus('Selecione o comentário e copie pelo menu do navegador.'); }
  }
  return <details className="feedback"><summary>Dar feedback</summary>
    <label htmlFor="feedback">O que ficou difícil de entender?</label>
    <textarea id="feedback" rows={3} maxLength={1000} value={value} onChange={e=>{setValue(e.target.value);setStatus('')}}/>
    <p>Copie seu comentário para compartilhar com quem aplicou a avaliação.</p>
    <button className="result-action" disabled={!value.trim()} onClick={copy}>Copiar feedback</button>
    <small role="status">{status}</small>
  </details>;
}
