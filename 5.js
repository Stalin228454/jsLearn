//Сумма всех элементов: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов массива.

function arraySum(myArray){
    let sum = 0
    for(i = 0; i < myArray.length;i++){
        sum +=myArray[i]
    }  
    return sum
}

oneArray = [10, 20 ,30, 30]
console.log(arraySum(oneArray))