const senha = document.getElementById("senha");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const valorCaracteres = document.getElementById("valorCaracteres");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const nivel = document.getElementById("nivel");
const textoForca = document.getElementById("textoForca");

let tamanho = 12;

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numerosLista = "0123456789";
const simbolosLista = "!@#$%&*()_-+=<>?/{}[]";

valorCaracteres.textContent = tamanho;

function gerarSenha() {

    let caracteres = "";

    if (maiusculas.checked)
        caracteres += letrasMaiusculas;

    if (minusculas.checked)
        caracteres += letrasMinusculas;

    if (numeros.checked)
        caracteres += numerosLista;

    if (simbolos.checked)
        caracteres += simbolosLista;

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let novaSenha = "";

    for (let i = 0; i < tamanho; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);

        novaSenha += caracteres[indice];

    }

    senha.value = novaSenha;

    verificarForca();
}

function verificarForca() {

    let pontos = 0;

    if (tamanho >= 8) pontos++;
    if (tamanho >= 12) pontos++;
    if (tamanho >= 16) pontos++;

    if (maiusculas.checked) pontos++;
    if (minusculas.checked) pontos++;
    if (numeros.checked) pontos++;
    if (simbolos.checked) pontos++;

    if (pontos <= 3) {

        nivel.style.width = "33%";
        nivel.style.background = "#ef4444";
        textoForca.textContent = "Fraca";

    }

    else if (pontos <= 5) {

        nivel.style.width = "66%";
        nivel.style.background = "#f59e0b";
        textoForca.textContent = "Média";

    }

    else {

        nivel.style.width = "100%";
        nivel.style.background = "#22c55e";
        textoForca.textContent = "Forte";

    }

}

aumentar.addEventListener("click", () => {

    if (tamanho < 30) {

        tamanho++;
        valorCaracteres.textContent = tamanho;
        gerarSenha();

    }

});

diminuir.addEventListener("click", () => {

    if (tamanho > 4) {

        tamanho--;
        valorCaracteres.textContent = tamanho;
        gerarSenha();

    }

});

gerar.addEventListener("click", gerarSenha);

copiar.addEventListener("click", () => {

    if (senha.value === "") return;

    navigator.clipboard.writeText(senha.value);

    copiar.textContent = "Copiado!";

    setTimeout(() => {

        copiar.textContent = "Copiar";

    }, 2000);

});

maiusculas.addEventListener("change", gerarSenha);
minusculas.addEventListener("change", gerarSenha);
numeros.addEventListener("change", gerarSenha);
simbolos.addEventListener("change", gerarSenha);

gerarSenha();
