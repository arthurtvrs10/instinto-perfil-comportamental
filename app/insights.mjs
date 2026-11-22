const actions = { I:'imaginar novos caminhos', C:'ouvir as pessoas', O:'organizar os passos', A:'partir para a ação' };
const names = { I:'Águia', C:'Gato', O:'Lobo', A:'Tubarão' };
const list = words => new Intl.ListFormat('pt-BR').format(words);
export function insight(totals) {
  const ranked = Object.keys(actions).sort((a,b) => totals[b]-totals[a]);
  const leaders = ranked.filter(k => totals[k] === totals[ranked[0]]);
  const top = leaders.map(k=>names[k]);
  let text = 'Suas escolhas deram mais espaço a ' + list(leaders.map(k=>actions[k])) + '.';
  if (leaders.length > 1) text += ' Esses perfis tiveram a mesma pontuação.';
  else {
    const next = ranked.filter(k => totals[k] === totals[ranked[1]] && totals[k] > 0 && k !== leaders[0]);
    if (next.length) text += ' Em seguida, apareceram escolhas ligadas a ' + list(next.map(k=>actions[k])) + '.';
  }
  return {title:list(top), text};
}
export const cards = [
  'Seu grupo tem pouco tempo e ainda não chegou a um acordo. Qual seria seu primeiro passo?',
  'O plano de uma viagem mudou na última hora. Como você decidiria o que fazer agora?',
  'Alguém sugere uma ideia que você nunca tentou. O que ajudaria você a dar uma chance a ela?',
  'Você e um colega preferem caminhos diferentes para a mesma tarefa. Como combinariam os próximos passos?'
];
