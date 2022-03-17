function Fechar() {
    document.getElementById("popup").style.display = "none";
}

function Logar() {
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    if (login == "gugulindo" && senha == "gugulindo") {
        Fechar()
    } else {
        document.getElementById("mensagem").style.display = "block"
    }
}