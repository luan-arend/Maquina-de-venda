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
    {name: "Pastelina", price: 0.30, stock: 10}
]

let saldo = 0
saldo = parseFloat(saldo.toFixed(2))

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
            checaTroco()
        break
        default:
            alert("Opção Inválida, digite uma das opções mencionadas")
        break
        }
    } while (opcao !== "4")
}

function exibirMenu(){
    return prompt(
        "Seja bem-vindo a máquina de fornecedor\n" +
        "\nSeu saldo atual é R$ " + (saldo.toFixed(2)) +
        "\nEscolha uma opção abaixo:\n" +
        "\n1. Inserir moedas" + 
        "\n2. Escolher produtos" +
        "\n3. Receber troco" +
        "\n4. Sair"
    )
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
            compraCocaCola(produtosComprados)
        }
        else if (produtosComprados === "agua" && "água" && "Agua" && "Água"){
            compraAgua(produtosComprados)
        }
        else if (produtosComprados === "pastelina" && "Pastelina"){
            compraPastelina(produtosComprados)
        }
        else if (saldo <= 0){
            alert("Saldo insuficiente, insira mais moedas")
        }
        else {
            alert("Produto inválido, tente novamente/Entrada inválida")
        } 
}

function compraCocaCola(){
    if(products[0].stock > 0){
        saldo -= products[0].price
        products[0].stock --
        alert(`Obrigado pela compra da ${products[0].name}.`)
        alert("Total de stock do item na máquina: " + products[0].stock + "uns.")
    } else {
        alert("NO_PRODUCT")
    }
}

function compraAgua(){
    if(products[1].stock > 0){
        saldo -= products[1].price
        products[1].stock --
        alert(`Obrigado pela compra da ${products[1].name}.`)
        alert("Total de stock do item na máquina: " + products[1].stock + "uns.")
    } else {
        alert("NO_PRODUCT")
    }
}

function compraPastelina(){
    if(products[2].stock > 0){
        saldo -= products[2].price
        products[2].stock --
        alert(`Obrigado pela compra da ${products[2].name}.`)
        alert("Total de stock do item na máquina: " + products[2].stock + "uns.")
    } else {
        alert("NO_PRODUCT")
    }
}

let moedasTroco = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
function calcularTroco(){
    const trocoTotal = []
 	
    for (x in moedasTroco) {
        if (moedasTroco[x] > saldo) continue
            let quantidadeMoedas = parseInt(saldo.toFixed(2) / moedasTroco[x])
            trocoTotal.push([quantidadeMoedas, moedasTroco[x]])
            saldo -= (quantidadeMoedas * moedasTroco[x])
    }

    for (let i = 0; i < trocoTotal.length; i++) {
        alert("Troco: \n" + trocoTotal[i].join(" Moeda(s) de R$ "))
    } return
}

function checaTroco(){
    if (saldo > 0){
        calcularTroco()
    }
    else if (saldo == 0){
        alert("NO_CHANGE")
    }
    else {
        alert("Opção inválida")
    }
}

let moedasEmEstoque = coins.filter(function (value){
    return value.stock > 0
})

executar()

/* function comprarProd() {
    for (let i = 0 ; i < products.length; i++) {
        if(products[i].stock > 0){
            saldo -= products[i].price
            products[i].stock --
            alert(`Obrigado pela compra da ${products[i].name}.`)
            alert("Total de stock do item na máquina: " + products[i].stock + "uns.")
        } else {
            alert("NO_PRODUCT")
    } 
} 
} */


