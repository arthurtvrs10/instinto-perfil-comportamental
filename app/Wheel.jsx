import axes from './wheel-axes.json';

function wheelScores({ I, C, O, A }) {
  return [O + I, I + C, C + A, O + A];
}
function wheelPoints([top, right, bottom, left]) {
  return [[200,200-1.94*top],[200+1.94*right,200],[200,200+1.94*bottom],[200-1.94*left,200]];
}
export default function Wheel({totals}) {
  const scores = wheelScores(totals);
  const points = wheelPoints(scores);
  return <figure className="wheel"><h2>Roda do perfil</h2>
    <figcaption>Comece pelo centro (0%) e siga em direção a cada palavra na borda (100%). Quanto mais longe do centro estiver o ponto azul, mais respostas suas entraram naquela direção.</figcaption>
    <div className="diagram"><span>Pensante</span><small>Razão</small><svg viewBox="0 0 400 400" role="img" aria-label="Roda com quatro eixos de zero a cem por cento">
      <image href="/profiles/roda.png" width="400" height="400"/>
      <polygon points={points.map(p=>p.join(',')).join(' ')} />
      {points.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5"/>)}
    </svg><small>Emoção</small><span>Atuante</span></div>
    <div className="axis-list">{axes.map((axis, i) => (
      <details key={axis.name}>
        <summary>{axis.name}<b>{scores[i]}%</b></summary>
        <div><p>{axis.meaning}</p><p><strong>Por exemplo</strong> — {axis.example}</p><small>Perfis somados · {axis.pair}</small></div>
      </details>
    ))}</div>
  </figure>;
}
