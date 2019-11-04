// подключение стилей
import './menu.scss';

// функция, которая будет создавать список пунктов меню. 
// Эта функция принимает 2 параметра: 
// первый — массив пунктов меню, 
// второй — класс, который нужно присвоить тегу ˂ul˃. 
// После вызова данная функция будет возвращать html-элемент, а именно ненумерованный список.

export default function(array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
}

// export - экспортирует данную функцию в остальную часть приложения
// default -  экспортирует только одно значение, по умолчанию