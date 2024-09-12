const numeros = [5, 10, 3, 2, 34, 42, 36, 8, 37, 13]

numeros.sort()

console.log(numeros.sort((a,b) => a - b)) // função ordenando na ordem crescente
console.log(numeros.sort((a,b) => b - a)) // ordena decrescente