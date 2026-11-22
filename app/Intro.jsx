export function Landing({ onInstructions }) {
  return <main className="landing">
      <div className="hero">
      <div className="intro-copy">
      <h1 tabIndex="-1">Como você costuma <em>agir?</em>
      </h1>
      <p>Descubra quais comportamentos aparecem com mais frequência nas suas escolhas. São 25 perguntas para refletir sobre como você decide, se relaciona e coloca ideias em prática.</p>
      <button className="intro-primary" onClick={onInstructions}>Começar teste</button>
      </div>
      <div className="portraits">
      <figure>
      <img src="/profiles/aguia.jpg" alt="" />
      <figcaption>Águia</figcaption>
      </figure>
      <figure>
      <img src="/profiles/gato.jpg" alt="" />
      <figcaption>Gato</figcaption>
      </figure>
      <figure>
      <img src="/profiles/lobo.jpg" alt="" />
      <figcaption>Lobo</figcaption>
      </figure>
      <figure>
      <img src="/profiles/tubarao.jpg" alt="" />
      <figcaption>Tubarão</figcaption>
      </figure>
      </div>
      </div>
      <section className="purpose">
      <h2>Para que serve?</h2>
      <p>Use o resultado para pensar em situações reais. Em um trabalho em grupo, por exemplo, o que você costuma fazer primeiro: propor uma ideia, ouvir os colegas, organizar as etapas ou começar a tarefa?</p>
      <p>Ao terminar, você verá como suas respostas se distribuem pelos quatro perfis e poderá explorar a roda para entender cada direção.</p>
      </section>
  </main>;
}
export function Instructions({ onHome, onStart }) {
  return <main className="instructions">
      <small>Antes de começar</small>
      <h1 tabIndex="-1">Instruções</h1>
      <p>Em cada pergunta, escolha uma das quatro alternativas. Você pode voltar para rever uma escolha.</p>
      <p>Não tente “acertar” as respostas que parecem mais “adequadas” ou “socialmente corretas”. Para não distorcer o resultado, procure ser bem verdadeiro e escolher a resposta mais adequada <strong>“para você”!</strong>
      </p>
      <nav>
      <button onClick={onHome}>Voltar</button>
      <button className="next" onClick={onStart}>Começar avaliação</button>
      </nav>
  </main>;
}
