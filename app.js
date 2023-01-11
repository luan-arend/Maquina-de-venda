let coins = [
    {name: "R$ 0.01", value: 0.01, stock: 10},
    {name: "R$ 0.05", value: 0.05, stock: 10},
    {name: "R$ 0.10", value: 0.10, stock: 10},
    {name: "R$ 0.25", value: 0.25, stock: 10},
    {name: "R$ 0.50", value: 0.50, stock: 10},
    {name: "R$ 1.00", value: 1.00, stock: 10}
]

let products = [
    {name: "coca-cola", price: 1.50, stock: 10},
    {name: "agua", price: 1.00, stock: 10},
    {name: "pastelina", price: 0.30, stock: 10}
]

let saldo = 0
saldo = parseFloat(saldo)
let listaDeProdutos = []

function exibirMenu(){
    return prompt(
        "Seja bem-vindo a máquina de fornecedor\n" +
        "\nSeu saldo atual é R$ " + saldo +
        "\nEscolha uma opção abaixo:\n" +
        "\n1. Inserir moedas" + 
        "\n2. Escolher produtos" +
        "\n3. Voltar"
    )
}

function executar(){
    let opcao = ""
    do {
        opcao = exibirMenu()
    switch (opcao) {
        case "1":

        break
        case "2":
            
        }
    } while (opcao !== "3") {
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

function adicionarMoedas(value) {
    let moeda1 = parseFloat ( prompt ("\nInsira uma das moedas válidas abaixo:" + "\nR$0.01, R$0.05, R$0.10, R$0.25, R$0.50, R$1.00"))
        if (verificarMoedas(moeda1)){
            saldo += moeda1
            alert(`Você inseriu a moeda: R$ ${moeda1}`)
            return alert()
        } else {
            alert("Moeda inválida, tente novamente.")
            }
}

function atualizarStockMoedas(){
    
}
