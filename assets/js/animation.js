// Все звенья
const links = document.querySelectorAll(".animation-box");

const totalLinks = links.length; // Всего звеньев
const snakeLength = 7; // Длина одной змейки
const opacitySteps = [0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25]; // Значения прозрачности

let firstSnakeIndex = 0; // Начало первой змейки
let secondSnakeIndex = 13; // Начало второй змейки

function updateSnake(startIndex, snakeLength, colorClass) {
    // Сбрасываем все звенья
    links.forEach((link) => {
        // link.style.opacity = 0; // Прозрачность по умолчанию
        link.classList.remove(colorClass); // Убираем цвет
    });

    for (let i = 0; i < snakeLength; i++) {
        const opacity = opacitySteps[i % opacitySteps.length];
        const index = (startIndex + i) % totalLinks; // Цикличность
        links[index].style.opacity = opacity;
        links[index].classList.add(colorClass); // Добавляем цвет

    }
}

setInterval(() => {
    updateSnake(firstSnakeIndex, snakeLength, "purple");

    updateSnake(secondSnakeIndex, snakeLength, "white");

    // Смещаем индексы
    firstSnakeIndex = (firstSnakeIndex + 1) % totalLinks;
    secondSnakeIndex = (secondSnakeIndex + 1) % totalLinks;
}, 200);




document.querySelectorAll('.animation-another-box').forEach(box => {
    box.addEventListener('animationstart', () => {
        // Добавляем класс "active", чтобы элемент стал видимым
        box.classList.add('active');
    });
});

