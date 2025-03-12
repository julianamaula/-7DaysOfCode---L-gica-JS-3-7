class CareerGame {
    constructor() {
        this.output = document.getElementById('output');
        this.userInput = document.getElementById('user-input');
        this.submitBtn = document.getElementById('submit-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.area = null;
        this.technology = null;
        this.specialization = null;
        this.technologies = [];
        this.step = 1;
        this.init();
    }

    init() {
        this.submitBtn.addEventListener('click', () => this.nextStep());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.nextStep();
        });
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.startGame();
    }

    startGame() {
        this.output.innerHTML = `<p>Você quer seguir para área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')</p>`;
        this.userInput.value = '';
        this.userInput.focus();
    }

    nextStep() {
        const inputValue = this.userInput.value.trim();

        switch (this.step) {
            case 1:
                this.handleAreaChoice(inputValue);
                break;
            case 2:
                this.handleTechnologyChoice(inputValue);
                break;
            case 3:
                this.handleSpecializationChoice(inputValue);
                break;
            case 4:
                this.handleTechnologyAddition(inputValue);
                break;
            case 5:
                this.handleMoreTechnologies(inputValue);
                break;
            default:
                this.showError("Erro inesperado. Reinicie o jogo.");
        }

        this.userInput.value = '';
    }

    handleAreaChoice(inputValue) {
        if (inputValue === "Front-End" || inputValue === "Back-End") {
            this.area = inputValue;
            this.step = 2;
            this.output.innerHTML += `<p>Você escolheu ${this.area}.</p>`;
            if (this.area === "Front-End") {
                this.output.innerHTML += `<p>Você quer aprender React ou Vue?</p>`;
            } else {
                this.output.innerHTML += `<p>Você quer aprender C# ou Java?</p>`;
            }
        } else {
            this.showError("Escolha inválida. Digite 'Front-End' ou 'Back-End'.");
        }
    }

    handleTechnologyChoice(inputValue) {
        const validTechnologies = this.area === "Front-End" ? ["React", "Vue"] : ["C#", "Java"];
        if (validTechnologies.includes(inputValue)) {
            this.technology = inputValue;
            this.step = 3;
            this.output.innerHTML += `<p>Você escolheu ${this.technology}.</p>`;
            this.output.innerHTML += `<p>Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')</p>`;
        } else {
            this.showError(`Escolha inválida. Digite uma tecnologia válida: ${validTechnologies.join(' ou ')}.`);
        }
    }

    handleSpecializationChoice(inputValue) {
        if (inputValue === "Especializar" || inputValue === "Fullstack") {
            this.specialization = inputValue;
            this.step = 4;
            this.output.innerHTML += `<p>Você escolheu ${this.specialization}.</p>`;
            this.output.innerHTML += `<p>Qual tecnologia você gostaria de aprender? (Digite o nome da tecnologia)</p>`;
        } else {
            this.showError("Escolha inválida. Digite 'Especializar' ou 'Fullstack'.");
        }
    }

    handleTechnologyAddition(inputValue) {
        if (inputValue) {
            this.technologies.push(inputValue);
            this.step = 5;
            this.output.innerHTML += `<p>Você adicionou ${inputValue} à sua lista de tecnologias.</p>`;
            this.output.innerHTML += `<p>Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'sim' ou 'não')</p>`;
        } else {
            this.showError("Por favor, insira uma tecnologia válida.");
        }
    }

    handleMoreTechnologies(inputValue) {
        if (inputValue.toLowerCase() === "não") {
            this.finishGame();
        } else if (inputValue.toLowerCase() === "sim") {
            this.step = 4;
            this.output.innerHTML += `<p>Qual tecnologia você gostaria de aprender? (Digite o nome da tecnologia)</p>`;
        } else {
            this.showError("Escolha inválida. Digite 'sim' ou 'não'.");
        }
    }

    showError(message) {
        this.output.innerHTML += `<p class="error">${message}</p>`;
    }

    finishGame() {
        this.output.innerHTML += `<p>Você escolheu aprender as seguintes tecnologias:</p>`;
        this.technologies.forEach(tech => {
            this.output.innerHTML += `<p>- ${tech}</p>`;
        });
        this.output.innerHTML += `<p>Boa sorte nos seus estudos! 🚀</p>`;

        this.restartBtn.style.display = 'inline-block';
        this.celebrate();
    }

    celebrate() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, i * 500);
        }
    }

    restartGame() {
        this.step = 1;
        this.area = null;
        this.technology = null;
        this.specialization = null;
        this.technologies = [];
        this.restartBtn.style.display = 'none';
        this.startGame();
    }
}

// Iniciar o jogo quando a página carregar
window.onload = () => new CareerGame();