console.log("início da execução")
function somar3segundos(a, b){
    /**
     * A promisse espera receber dois parâmetros
     * que serão duas funções:
     * - resolve - usar para retornar sucesso
     * - reject - usar para retornar erro
     */
    return new Promise((resolve, reject) => {
        let resultado = a + b

        if(typeof a != 'number' || typeof b != 'number'){
            reject('O valor dos parâmetros precisa ser um número!')
        }

        resolve(resultado)
    })
}

let soma = 0

somar3segundos(2, 'a')
.then(resposta => {
    soma = resposta
    console.log("then " + soma)
})
.catch(erro => console.log(erro))

console.log("linha 21 " + soma)
console.log("fim da execução")