const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já fez uso de drogas ilícitas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você não segue as normas da sociedade. Isso é problemático"
            },
            {
                texto: "Não",
                afirmacao: "Você segue as normas da sociedade. Isso é positivo."
            }
        ]
    },
    {
        enunciado: "Você considera importante seguir a lei à risca?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você pode ter um senso de justiça muito rígido e bem definido."
            },
            {
                texto: "Não",
                afirmacao: "Você pode ser cético com a lei e suas possíveis falhas."
            }
        ]
    },
    {
        enunciado: "Você já foi abordado por alguma autoridade policial?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Isso é comum, faz parte da rotina das autoridades."
            },
            {
                texto: "Não",
                afirmacao: "Isso não é incomum, mas ao mesmo tempo não é tão normal assim."
            }
        ]
    },
   
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
