//Таблица умножения: Напишите программу, которая выводит на экран таблицу умножения для заданного числа от 1 до 10.

function multiplicationTable(num){
    for(i = 1; i < 11;i++){
        let result = num * i
        console.log(num + " * " + i + " = " + result);
    }
}

multiplicationTable(9)