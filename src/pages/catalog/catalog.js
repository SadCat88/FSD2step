// подключение стилей
import './catalog.scss';
import 'normalize.css';

// вызов функции для создания меню и передача ей значений для генерации меню для страницы index.js
import createMenu from '../../components/menu/menu.js';
var menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('test index.js');