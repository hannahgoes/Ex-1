//variavél de escopo global
let num = 10;

function multiplica(num){
    //variável de escopo de função
    let result = 1;

    //variável de escopo de bloco
    for (let i =1; i <= num; i++){
        console.log("i=",i)
        result *= i
    }

    console.log("result=", num)
}

multiplica(num)

console.log("num = ", num)
