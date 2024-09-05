const perguntas = [
    {
        enunciado: "Assim que você termina o ensino médio se depara com uma oportunidade de trabalho. Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Vou trabalhar!", pontuacao: 1 },
            { texto: "Quero descansar!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Vocẽ vai começar a faculdade e está em duvida de qual turno fazer. Poŕem você analisa e acaba escolhendo...?",
        alternativas: [
            { texto: " Turno da manhã.", pontuacao: 2 },
            { texto: " Turno da noite", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Após o primeiro período de faculdade surge uma opotunidade de empreender. O que você faz??",
        alternativas: [
            { texto: "Vou me arriscar e vou ter sucesso.", pontuacao: 2 },
            { texto: " Estou com medo, não vou.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Ao final da faculdade você está super bem. O que vai fazer agora?",
        alternativas: [
            { texto: "Tirar umas férias.", pontuacao: 1 },
            { texto: "Fazer outra faculdade.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você tem uma empresa e está muito rico(a). Quais seus próximos planos?",
        alternativas: [
            { texto: "Ir para um reality", pontuacao: 1 },
            { texto: "Abrir outra embresa.", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
