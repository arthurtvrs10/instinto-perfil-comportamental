const orderKey = 'instinto.alternativas.v1';
let lastOrders = [];
export function shuffledQuestions(source) {
  let previous = lastOrders;
  try { previous = JSON.parse(localStorage.getItem(orderKey)) || previous; } catch {}
  const orders = source.map((question, i) => {
    const original = question.a.map((_, j) => j);
    const before = previous?.[i] || original;
    // Four alternatives give 24 possible orders. Keep only those that move every option.
    function candidates(prefix, remaining) {
      if (!remaining.length) return [prefix];
      return remaining.filter(id => id !== before[prefix.length]).flatMap(id =>
        candidates([...prefix, id], remaining.filter(other => other !== id)));
    }
    const valid = candidates([], original);
    return valid[Math.floor(Math.random() * valid.length)];
  });
  lastOrders = orders;
  try { localStorage.setItem(orderKey, JSON.stringify(orders)); } catch {}
  return source.map((q, i) => ({ ...q, a: orders[i].map(id => q.a[id]) }));
}
