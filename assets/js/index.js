const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.reviews-btn');
    const reviewsList = document.querySelector('.reviews-list');

    button.addEventListener('click', function() {
        reviewsList.classList.toggle('active');
    });
});



function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.often-asks-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.often-asks-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.asks-list-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});


document.querySelectorAll('.hero-video-block').forEach(block => {
    const gif = block.getAttribute('data-gif');
    const defaultImage = block.getAttribute('data-img');



    function playGif() {
        if (block) {
            block.style.backgroundImage = `url('${gif}')`;
            block.classList.add('active');
        }

    }

    function endGif() {
        block.classList.remove('active');
        block.style.backgroundImage = `url('${defaultImage}')`;

    }

    block.addEventListener('mouseenter', playGif);
    block.addEventListener('mouseleave', endGif);

});




document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.reviews-btn');
    const reviewsList = document.querySelector('.reviews-list');

    button.addEventListener('click', function() {
        reviewsList.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".reviews-btn");
    const row2 = document.querySelectorAll(".reviews-row-2");
    const row3 = document.querySelectorAll(".reviews-row-3");
    let clickCount = 0;

    button.addEventListener("click", () => {
        clickCount++;

        if (clickCount === 1) {
            row2.forEach(row => row.classList.add("active"));
        } else if (clickCount === 2) {
            row3.forEach(row => row.classList.add("active"));
            button.classList.add("active");
            button.querySelector("span").textContent = "Свернуть";
        } else {

            row2.forEach(row => row.classList.remove("active"));
            row3.forEach(row => row.classList.remove("active"));
            button.classList.remove("active");
            button.querySelector("span").textContent = "Показать еще";
            clickCount = 0;
        }
    });
});

