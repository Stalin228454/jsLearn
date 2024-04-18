//Генератор случайных чисел: Напишите программу, которая генерирует случайное число в заданном диапазоне и выводит его на экран.
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomInt(101, 10))