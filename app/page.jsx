'use client';
import { useState, useEffect, useRef } from 'react';
import sourceQuestions from './questions.json';
import './style.css';
import { Landing, Instructions } from './Intro';
import Results from './Results';

import { shuffledQuestions } from './shuffle.mjs';

export default function Page() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState(null);
  const [screen, setScreen] = useState("home");
  function start() {
    setAnswers([]);
    setIndex(0);
    setQuestions(shuffledQuestions(sourceQuestions));
    setScreen("quiz");
  }
  const heading = useRef(null);
  useEffect(() => { heading.current?.focus(); }, [index, questions]);
  useEffect(() => { document.querySelector("main h1")?.focus(); }, [screen]);
  if (screen === "home") return <Landing onInstructions={() => setScreen("instructions")} />;
  if (screen === "instructions") return <Instructions onHome={() => setScreen("home")} onStart={start} />;
  const q = questions[index];
  const totals = { I: 0, C: 0, A: 0, O: 0 };
  answers.forEach((choice, i) => { totals[questions[i].a[choice][0]] += 4; });
  function choose(i) {
    const next = answers.slice();
    next[index] = i;
    setAnswers(next);
  }
  return <main>
    {q && <small>Pergunta {index + 1} de {questions.length}</small>}
    <h1 ref={heading} tabIndex={-1}>{q?.t ?? 'Seu resultado'}</h1>
    {!q && <p className="result-note">Os percentuais mostram a distribuição das suas 25 escolhas.</p>}
    <section>{q ? q.a.map(([, label], i) =>
      <button key={i} className="choice" aria-pressed={answers[index] === i} onClick={() => choose(i)}>{label}</button>
    ) : <Results totals={totals} />}</section>
    <nav aria-label="Navegação">
      {index > 0 && <button onClick={() => setIndex(index - 1)}>Voltar</button>}
      {q ? <button className="next" disabled={answers[index] === undefined} onClick={() => setIndex(index + 1)}>{index === 24 ? 'Ver resultado' : 'Continuar'}</button>
        : <button className="next" onClick={() => { setScreen("instructions"); }}>Refazer</button>}
    </nav>
  </main>;
}
