 function calcularIdade() {
            const anoNascimento = document.getElementById("ano").value;
            const anoAtual = new Date().getFullYear();

            if (anoNascimento === "" || anoNascimento > anoAtual) {
                document.getElementById("resultado").innerText = "Por favor, digite um ano válido.";
                return;
            }

            const idade = anoAtual - anoNascimento;
            document.getElementById("resultado").innerText = `Você tem ${idade} anos.`;
        }