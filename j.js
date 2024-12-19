// Задание 1: Приветствие
const userName = prompt("Введите ваше имя:"); // Запрашиваем имя
const userAge = prompt("Введите ваш возраст:"); // Запрашиваем возраст

alert(`Привет, ${userName}! Тебе ${userAge} лет.`); // Выводим сообщение в alert
console.log(`Привет, ${userName}! Тебе ${userAge} лет.`); // Выводим сообщение в консоль

// Задание 2: Проверка возраста
if (Number(userAge) >= 18) {
    alert("Вы совершеннолетний."); // Сообщение для совершеннолетнего
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний."); // Сообщение для несовершеннолетнего
    console.log("Вы несовершеннолетний.");
}

// Задание 3: Угадай число
const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерируем случайное число от 1 до 10
const userGuess = prompt("Угадайте число от 1 до 10:"); // Запрашиваем ввод пользователя

if (Number(userGuess) === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (Number(userGuess) < 5) {
        alert("Не угадали! Ваше число меньше 5.");
        console.log("Не угадали! Ваше число меньше 5.");
    } else {
        alert("Не угадали! Ваше число больше 5.");
        console.log("Не угадали! Ваше число больше 5.");
    }
    alert(`Загаданное число было: ${randomNumber}`);
    console.log(`Загаданное число было: ${randomNumber}`);
}

// Задание 4: Проверка пароля
const correctPassword = "12345"; // Заданный пароль
const userPassword = prompt("Введите пароль:"); // Запрашиваем пароль

if (userPassword && userPassword === correctPassword) {
    alert("Доступ разрешен."); // Если пароль верный
    console.log("Доступ разрешен.");
} else if (!userPassword) {
    alert("Пароль не может быть пустым."); // Если пароль пустой
    console.log("Пароль не может быть пустым.");
} else {
    alert("Доступ запрещен."); // Если пароль неверный
    console.log("Доступ запрещен.");
}

// Задание 5: Простой калькулятор
const firstNumber = parseFloat(prompt("Введите первое число:")); // Первое число
const secondNumber = parseFloat(prompt("Введите второе число:")); // Второе число
const operator = prompt("Введите оператор (+, -, *, /):"); // Оператор

if (operator === "+") {
    alert(`Результат: ${firstNumber + secondNumber}`);
    console.log(`Результат: ${firstNumber + secondNumber}`);
} else if (operator === "-") {
    alert(`Результат: ${firstNumber - secondNumber}`);
    console.log(`Результат: ${firstNumber - secondNumber}`);
} else if (operator === "*") {
    alert(`Результат: ${firstNumber * secondNumber}`);
    console.log(`Результат: ${firstNumber * secondNumber}`);
} else if (operator === "/") {
    if (secondNumber !== 0) {
        alert(`Результат: ${firstNumber / secondNumber}`);
        console.log(`Результат: ${firstNumber / secondNumber}`);
    } else {
        alert("Деление на ноль невозможно.");
        console.log("Деление на ноль невозможно.");
    }
} else {
    alert("Неверный оператор.");
    console.log("Неверный оператор.");
}
