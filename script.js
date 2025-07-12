while(operacion!=0){

    var operacion = parseInt(prompt("Escriba la operacion:\n Suma = 1 \n Resta = 2 \n Multiplicacion = 3 \n Division = 4 \n Salir = 0"))

    if (operacion != 0){
        let num1 = parseFloat(prompt("Escriba el numero 1: "))
        let num2 = parseFloat(prompt("Escriba el numero 2: "))

        resultado = realizarOperacion(num1, num2, operacion)
        console.log(resultado)
    }
}

console.log("La operacion ha terminado")

function realizarOperacion(num1,num2,operacion) {

    if (operacion==1) return num1+num2;
    if (operacion==2) return num1-num2;
    if (operacion==3) return num1*num2;
    if (operacion==4){
        if (num2==0) return "error";
        else return num1/num2;
    }
     

}
