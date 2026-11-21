export const metadata = { icons: { icon: '/marca/simbolo.svg' }, title: "Instinto | Avaliação comportamental", description: "Descubra seus quatro perfis em um baralho de 25 perguntas." };
export default function Layout({ children }) {
  return <html lang="pt-BR"><body><header className="mast"><img src="/marca/instinto.svg" alt="Instinto" width="134" height="36" /><span>Avaliação comportamental</span></header>{children}</body></html>;
}
