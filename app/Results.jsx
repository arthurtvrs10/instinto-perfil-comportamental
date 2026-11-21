import profiles from './profiles.json';

import Wheel from './Wheel';

export default function Results({ totals }) {
  const ranked = Object.entries(profiles).sort(([a], [b]) => totals[b] - totals[a]);
  return <><Wheel totals={totals}/>{ranked.map(([key, p]) => (
    <article className={'profile ' + p.slug} key={key}>
      <img src={'/profiles/' + p.slug + '.jpg'} alt={p.name} width="310" height="186" />
      <div className="copy">
        <div className="title"><h2>{p.name}</h2><strong>{totals[key]}%</strong></div>
        <p className="motto">{p.motto}</p><p>{p.summary}</p>
        <details><summary>Entender este perfil</summary><dl>
          <dt>Ponto forte</dt><dd>{p.strength}</dd>
          <dt>Ponto de melhoria</dt><dd>{p.growth}</dd>
          <dt>Motivações</dt><dd>{p.motivation}</dd>
          <dt>Valores</dt><dd>{p.values}</dd>
        </dl></details>
      </div>
    </article>
  ))}</>;
}
