// Declaração das variáveis do cronômetro
let timer;          // Variável para armazenar o ID do temporizador
let isRunning = false; // Indicador se o cronômetro está em execução
let seconds = 0;    // Contador de segundos
let minutes = 0;    // Contador de minutos
let hours = 0;      // Contador de horas

// Função para iniciar o cronômetro
function start() {
    // Verifica se o cronômetro não está em execução
    if (!isRunning) {
        // Inicia o temporizador, chamando a função updateDisplay a cada segundo
        timer = setInterval(updateDisplay, 1000);
        // Atualiza o indicador para mostrar que o cronômetro está em execução
        isRunning = true;
    }
}

// Função para parar o cronômetro
function stop() {
    // Limpa o temporizador, parando a contagem do cronômetro
    clearInterval(timer);
    // Atualiza o indicador para mostrar que o cronômetro está parado
    isRunning = false;
}

// Função para resetar o cronômetro
function reset() {
    // Limpa o temporizador, parando a contagem do cronômetro
    clearInterval(timer);
    // Atualiza o indicador para mostrar que o cronômetro está parado
    isRunning = false;
    // Zera os contadores de horas, minutos e segundos
    seconds = 0;
    minutes = 0;
    hours = 0;
    // Atualiza a exibição do cronômetro
    updateDisplay();
}

// Função para atualizar a exibição do cronômetro
function updateDisplay() {
    // Incrementa o contador de segundos
    seconds++;
    // Verifica se os segundos alcançaram 60
    if (seconds === 60) {
        // Zera os segundos e incrementa o contador de minutos
        seconds = 0;
        minutes++;
    }
    // Verifica se os minutos alcançaram 60
    if (minutes === 60) {
        // Zera os minutos e incrementa o contador de horas
        minutes = 0;
        hours++;
    }
    // Seleciona o elemento com a classe 'display' para exibir o tempo
    const display = document.querySelector('.display');
    // Atualiza o conteúdo do elemento com o tempo formatado
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Função para formatar o tempo (adiciona um zero à esquerda se for menor que 10)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}