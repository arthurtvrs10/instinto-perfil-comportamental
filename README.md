<p align="center"><img src="./public/marca/instinto.svg" width="200" alt="Instinto"></p>

# Instinto — Avaliação de Perfil Comportamental

O Instinto é uma experiência de autoconhecimento em português. Em 25 perguntas, a pessoa escolhe a alternativa que melhor descreve como costuma agir. Ao final, pode explorar os perfis Águia, Gato, Tubarão e Lobo e relacionar suas escolhas a situações do dia a dia.

## Como funciona

1. A página inicial apresenta a proposta. **Começar teste** abre as instruções.
2. Cada pergunta traz quatro alternativas. É possível voltar e revisar uma escolha. Ao refazer a avaliação, as alternativas mudam de posição.
3. O resultado apresenta os percentuais dos quatro animais e uma roda interativa. Ao clicar em uma direção, a pessoa vê o significado, um exemplo e os perfis usados no cálculo.

O navegador guarda localmente a última tentativa, incluindo respostas, posição e ordem das alternativas. Ao voltar, a pessoa pode continuar ou começar de novo. O resultado traz uma devolutiva, uma carta opcional de reflexão e uma versão para imprimir ou salvar como PDF. A anotação da carta fica somente na tela atual. O feedback pode ser copiado e compartilhado manualmente.

## Executar no computador

Requisitos: Node.js 20.9 ou superior e npm. Na pasta que contém o arquivo `package.json`, execute:

```bash
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000). O projeto funciona inteiramente no navegador e dispensa configuração de banco, chaves e variáveis de ambiente.

## Gerar a versão para publicação

```bash
npm run build
```

O Next.js exporta o site para **out/**. Publique o conteúdo dessa pasta na raiz de uma hospedagem estática. Os caminhos das imagens e da marca partem da raiz do domínio. Para conferir a exportação localmente, sirva a pasta por HTTP. Por exemplo, se tiver Python instalado:

```bash
python -m http.server 3000 --directory out
```

## Entender a pontuação

Cada resposta soma **4 pontos percentuais** a um dos quatro perfis. As 25 respostas totalizam 100%. A letra associada à alternativa determina seu perfil, independentemente da ordem exibida.

| Perfil | Chave | Lema |
| --- | --- | --- |
| Águia | I | Fazer diferente |
| Gato | C | Fazer junto |
| Tubarão | A | Fazer rápido |
| Lobo | O | Fazer certo |

A roda apresenta duas leituras complementares das mesmas respostas. **Pensante** (Lobo + Águia) e **Atuante** (Gato + Tubarão) somam 100%. **Emoção** (Águia + Gato) e **Razão** (Lobo + Tubarão) também somam 100%.

## Onde editar

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `app/Intro.jsx` | Página inicial e instruções |
| `app/page.jsx` | Navegação, respostas e pontuação |
| `app/questions.json` e `app/shuffle.mjs` | Perguntas e embaralhamento |
| `app/Results.jsx` e `app/profiles.json` | Cartões e descrições dos perfis |
| `app/Wheel.jsx` e `app/wheel-axes.json` | Gráfico, somas e explicações |
| `app/style.css` | Layout responsivo, cores e animações |
| `public/profiles/` e `public/marca/` | Fotografias, gráfico e identidade visual |

O [guia da marca](public/marca/guia.html) acompanha o projeto. Com o site em execução, acesse `/marca/guia.html` para visualizá-lo.
