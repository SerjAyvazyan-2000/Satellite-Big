const links = document.querySelectorAll(".link");

// Массив значений прозрачности
const opacitySteps = [0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25];

// Переменные для управления
let currentIndex = 0; // Начальный индекс для первой змейки
let secondSnakeIndex = 13; // Начальный индекс для второй змейки

// Функция для обновления прозрачности
function updateSnake(startIndex, snakeLength) {
    // Сначала сбрасываем opacity для всех звеньев
    links.forEach((link) => {
        link.style.opacity = 0;
    });

    // Устанавливаем прозрачности для "змейки"
    for (let i = 0; i < snakeLength; i++) {
        const currentOpacity = opacitySteps[i % opacitySteps.length];
        const elementIndex = (startIndex + i) % links.length;
        links[elementIndex].style.opacity = currentOpacity;
    }
}

// Запускаем анимацию с помощью setInterval
setInterval(() => {
    // Обновляем первую змейку
    updateSnake(currentIndex, opacitySteps.length);

    // Обновляем вторую змейку
    updateSnake(secondSnakeIndex, opacitySteps.length);

    // Смещаем индексы
    currentIndex = (currentIndex + 1) % links.length;
    secondSnakeIndex = (secondSnakeIndex + 1) % links.length;
}, 200); // Интервал 0.2 секунды