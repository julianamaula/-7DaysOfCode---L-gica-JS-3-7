// Função principal do jogo
function iniciarJogo() {
    const output = document.getElementById('output');

    // Passo 1: Escolher entre Front-End e Back-End
    const area = prompt("Você quer seguir para área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')");

    if (area === "Front-End") {
        // Passo 2: Escolher entre React e Vue
        const tecnologia = prompt("Você quer aprender React ou Vue?");
        output.innerHTML += `<p>Você escolheu Front-End com ${tecnologia}.</p>`;
    } else if (area === "Back-End") {
        // Passo 2: Escolher entre C# e Java
        const tecnologia = prompt("Você quer aprender C# ou Java?");
        output.innerHTML += `<p>Você escolheu Back-End com ${tecnologia}.</p>`;
    } else {
        output.innerHTML += `<p>Escolha inválida. Recarregue a página para tentar novamente.</p>`;
        return;
    }

    // Passo 3: Escolher entre se especializar ou se tornar Fullstack
    const especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')");

    if (especializacao === "Especializar") {
        output.innerHTML += `<p>Que legal! Foque em se tornar um expert em ${area}.</p>`;
    } else if (especializacao === "Fullstack") {
        output.innerHTML += `<p>Ótima escolha! Um Fullstack domina tanto Front-End quanto Back-End.</p>`;
    } else {
        output.innerHTML += `<p>Escolha inválida. Recarregue a página para tentar novamente.</p>`;
        return;
    }

    // Passo 4: Adicionar tecnologias de interesse
    let tecnologias = [];
    let continuar = true;

    while (continuar) {
        const tecnologia = prompt("Qual tecnologia você gostaria de aprender? (Digite o nome da tecnologia)");
        tecnologias.push(tecnologia);

        const resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'sim' ou 'não')");
        if (resposta.toLowerCase() !== "sim") {
            continuar = false;
        }
    }

    // Exibir tecnologias escolhidas
    output.innerHTML += `<p>Você escolheu aprender as seguintes tecnologias:</p>`;
    tecnologias.forEach(tech => {
        output.innerHTML += `<p>- ${tech}</p>`;
    });

    output.innerHTML += `<p>Boa sorte nos seus estudos! 🚀</p>`;

    // Disparar a animação de confetes
    confetti({
        particleCount: 150, // Quantidade de confetes
        spread: 70,         // Quão espalhados os confetes estarão
        origin: { y: 0.6 }  // Posição de origem (0.6 = 60% da altura da tela)
    });
}
// Disparar confetes múltiplas vezes
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, i * 500); // Disparar a cada 500ms
}


// Iniciar o jogo quando a página carregar
window.onload = iniciarJogo;