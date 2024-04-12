const audioClick = new Audio('./assets/click.wav');

function calculadora() {
  return {
    display: document.getElementById('display'),

    init() {
      document.addEventListener('click', ({ target }) => {
        if (target.classList.contains('number')) {
          this.display.value += target.innerHTML;
          audioClick.play();
        }
        if (target.classList.contains('equal')) {
          this.realizarCalculo();
          audioClick.play();
        }
        if (target.classList.contains('reset')) {
          this.display.value = '';
          audioClick.play();
        }
        if (target.classList.contains('back')) {
          this.display.value = this.display.value.slice(0, -1);
          audioClick.play();
        }
      });
    },

    realizarCalculo() {
      let conta = this.display.value || ' ';

      try {
        conta = eval(conta);
        if (!conta) {
          this.display.value = '';
          return;
        }
        this.display.value = conta;
      } catch (e) {
        this.display.value = '';
        alert('Erro, expressão inválida');
      }
    },
  };
}

const calculadoraAtual = calculadora();
calculadoraAtual.init();
