//menu.js
import Menu from './MENU.jpg'
export function renderMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const img2 = document.createElement('img');
    img2.classList.add('img2');
    img2.src = Menu;
    menu.appendChild(img2);
    return menu;

}

