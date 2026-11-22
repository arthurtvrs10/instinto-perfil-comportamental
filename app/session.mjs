const key = 'instinto.tentativa.v1';

export function saveSession(questions, index, answers) {
  const orders = questions.map(q => q.a.map(([profile]) => profile));
  try { localStorage.setItem(key, JSON.stringify({ orders, index, answers })); } catch {}
}

export function readSession(source) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    if (!data) return null;
    const {orders, index, answers} = data;
    if (!Array.isArray(orders) || orders.length !== source.length ||
        !Array.isArray(answers) || answers.length > source.length ||
        !Number.isInteger(index) || index < 0 || index > answers.length) return null;
    const questions = source.map((q,i) => {
      const order = orders[i];
      if (!Array.isArray(order) || order.length !== q.a.length || new Set(order).size !== order.length) throw Error();
      const a = order.map(id => q.a.find(([profile]) => profile === id));
      if (a.includes(undefined)) throw Error();
      return {...q,a};
    });
    if (answers.some((v,i) => !Number.isInteger(v) || !questions[i].a[v])) return null;
    return { questions, index, answers };
  } catch { return null; }
}
