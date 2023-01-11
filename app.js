let coins = [
    {name: "R$ 0.01", value: 0.01, stock: 10},
    {name: "R$ 0.05", value: 0.05, stock: 10},
    {name: "R$ 0.10", value: 0.10, stock: 10},
    {name: "R$ 0.25", value: 0.25, stock: 10},
    {name: "R$ 0.50", value: 0.50, stock: 10},
    {name: "R$ 1.00", value: 1.00, stock: 10}
]

let products = [
    {name: "Coca-Cola", price: 1.50, stock: 10},
    {name: "Água", price: 1.00, stock: 10},
    {name: "pastelina", price: 0.30, stock: 10}
]

let saldo = 0.00
saldo = parseFloat(saldo.toFixed(2))
let listaDeProdutos = []

function exibirMenu(){
    return prompt(
        "Seja bem-vindo a máquina de fornecedor\n" +
        "\nSeu saldo atual é R$ " + saldo +
        "\nEscolha uma opção abaixo:\n" +
        "\n1. Inserir moedas" + 
        "\n2. Escolher produtos" +
        "\n3. Receber troco" +
        "\n4. Finalizar"
    )
}

function executar(){
    let opcao = ""
    do {
        opcao = exibirMenu()
    switch (opcao) {
        case "1":
            adicionarMoedas()
        break
        case "2":
            comprarProdutos()
        break
        case "3":
            calcularTroco(saldo)
            alert("Seu troco é ")
        break
        default:
            alert("Opção Inválida, digite uma das opções mencionadas")
        }
    } while (opcao !== "4") {
        alert("Finalizando...")
    }
}

function verificarMoedas(value) {
    let index = coins.findIndex(val => val.value == value)
        if (index >= 0) {
            return true
        } else {
    return false }
}

function adicionarMoedas(){
    let moeda1 = parseFloat (prompt ("Insira uma das moedas válidas abaixo:" + "\nR$0.01, R$0.05, R$0.10, R$0.25, R$0.50, R$1.00"))
        if (verificarMoedas(moeda1)){
            saldo += moeda1
            alert(`Você inseriu a moeda: R$ ${moeda1}`)
        } else {
            alert("Moeda inválida, tente novamente.")
            }
}

function comprarProdutos(){
    let produtosComprados = prompt("Escolha um dos produtos disponíveis abaixo:" +
        "\nCoca-Cola - R$ 1.50" +
        "\nÁgua - R$ 1.00" +
        "\nPastelina - R$ 0.30"
        )

        if (produtosComprados === "coca-cola" && "Coca-Cola" && "Coca-cola"){
            saldo -= products[0].price
            alert(`Obrigado pela compra da ${produtosComprados}.`)
        }
        else if (produtosComprados === "agua" && "água" && "Agua" && "Água"){
            saldo -= products[1].price
            alert(`Obrigado pela compra da ${produtosComprados}.`)
        }
        else if (produtosComprados === "pastelina" && "Pastelina"){
            saldo -= products[2].price
            alert(`Obrigado pela compra da ${produtosComprados}.`)
        }
        else if (saldo >= 0.00){
            alert("Saldo insuficiente, insira mais moedas")
        }
        else {
            alert("Produto inválido, tente novamente/Entrada inválida")
        } 
}

let notas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
let troco = ""
function calcularTroco(){
    arr = new Array();	
 	
   for (x in notas) {
       if (notas[x] > troco) continue;
       
       let quantidadeCedula = parseInt(troco / notas[x]);
       arr.push([quantidadeCedula, notas[x]]);
       
       troco = troco - (quantidadeCedula * notas[x]);
   }
   
   return arr;
}

executar()
