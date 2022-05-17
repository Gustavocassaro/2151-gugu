function calculapreco (){
    
     //entrada
     corte = document.getElementById("corte").value;
     barba = document.getElementById("barba").value;
     depilacao = document.getElementById("depilacao").value;

      //processamento
      if (corte == "tesoura"){
        precocorte = 60.00
    }
    else if (corte == "maquina"){
        imagem = "img/maquina.jpg"
        precocorte = 45.00
    }
    else {
        imagem = "img/tesouraMaquina.jpg"
        precocorte = 52.00
    }
    if (barba == "simples"){
        precobarba = 30.00
    }
    else if (barba == "modelada"){
        precobarba = 45.00
    }
    if (depilacao == "ceraquente"){
        precodepilacao = 300.00
    }
    else if (depilacao == "cerafria"){
        precodepilacao = 250.00
    }
    else {
        precodepilacao = 800.00
    }

    total = (precocorte) + (precobarba) + (precodepilacao);
    
        //saída
        document.getElementById("res").value = total.toFixed(2);
    
        
    function finalizar(){
        total = document.getElementById('total').value;
        if (total == 0.00){  
          msg = "Selecione pelo menos 1!";
        }
        else{
              msg =  "Pedido Cadastrado com Sucesso! ";
              msg += "Seu Pedido é R$ ";
              msg += total;
        }
          document.getElementById('msg').value = msg;
        }
}