const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma jogar futebol com frequência?",
        alternativas: [
            {
                texto: "Sim, jogo toda semana com amigos.",
                afirmacao: "Mantém uma rotina ativa e usa o futebol como forma de se divertir e manter a saúde."
            },
            {
                texto: "Não, raramente jogo futebol.",
                afirmacao: "Prefere acompanhar futebol de forma mais tranquila, sem praticar com frequência."
            }
        ]
    },
    {
        enunciado: "Qual sua posição preferida em campo?",
        alternativas: [
            {
                texto: "Goleiro ou zagueiro.",
                afirmacao: "Gosta de proteger o time e manter a defesa segura, sendo uma peça-chave na retaguarda."
            },
            {
                texto: "Atacante ou meio-campista.",
                afirmacao: "Prefere estar no centro da ação, criando jogadas e buscando o gol a todo momento."
            }
        ]
    },
    {
        enunciado: "Você costuma assistir aos jogos de futebol?",
        alternativas: [
            {
                texto: "Sim, acompanho campeonatos e jogos da seleção.",
                afirmacao: "É apaixonado por futebol e está sempre ligado nas competições e nos grandes momentos do esporte."
            },
            {
                texto: "Não assisto muito, só quando alguém me chama.",
                afirmacao: "Assiste casualmente, mais para interagir com os amigos e a família."
            }
        ]
    },
    {
        enunciado: "O que você acha do uso da tecnologia no futebol (como o VAR)?",
        alternativas: [
            {
                texto: "Acho importante, ajuda a tornar o jogo mais justo.",
                afirmacao: "Acredita que a tecnologia contribui para decisões mais corretas e jogos mais equilibrados."
            },
            {
                texto: "Tira a emoção do jogo e atrasa demais.",
                afirmacao: "Prefere um futebol mais tradicional, mesmo com possíveis erros, em nome da emoção e fluidez do jogo."
            }
        ]
    },
    {
        enunciado: "Se você pudesse ser um jogador profissional, qual seria seu maior sonho?",
        alternativas: [
            {
                texto: "Jogar pela seleção e disputar uma Copa do Mundo.",
                afirmacao: "Tem um espírito patriota e sonha em representar o país no maior palco do futebol mundial."
            },
            {
                texto: "Jogar em um grande clube europeu e ganhar a Champions League.",
                afirmacao: "Sonha alto e deseja alcançar o sucesso nos maiores clubes do mundo."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil no mundo do futebol:";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}
