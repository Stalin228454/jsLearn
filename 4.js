//Поиск максимального числа: Создайте функцию, которая принимает массив чисел и возвращает наибольшее число в этом массиве.

function findMaxNumber(numbers){
    let maxNumber = numbers[0];

    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i]
        }
    }
    return maxNumber
}

const numbers = [10, 15, 20, 33, 45, 100, 456, 102]
console.log(findMaxNumber(numbers))