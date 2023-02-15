const saveMenu = document.querySelector('.menu__list_col');
const openMenu = document.querySelector('.collections__menu');

// обьявила переменную к классу (коллекция меню)) в меню, КУДА Я НАЖИМАЮ

//переменая КУДА ДОБАВЛЯЕТСЯ КЛАСС

saveMenu.addEventListener('mouseover', funMenu);

//прослушка клика и запуск функции

function funMenu (event) {
    event.preventDefault();
// когда нажимаешь на класс (коллекция меню) срабатывает функция с е првент дефаульт, когда не на ссылку нажимается а как кнопка?

openMenu.classList.toggle('block');
};

// и на коллекшн меню добавляется или убирается новый класс c дисплей блок



// 2 скрипт
// клик на логин, добавление класса

const openRegist = document.querySelector('.menu__list_link_but');
const addRegist = document.querySelector('.popup__form')

// обьявляю две переменные, куда буду нажимать и на что будет добавляться класс

openRegist.addEventListener('click', (event) => {
event.preventDefault();
addRegist.classList.toggle('popup__show');
});

// стрелочная функция, тоже как в 1 функции
