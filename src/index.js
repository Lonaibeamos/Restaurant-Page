import './style.css';
import { loadH1,renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';
const body = document.querySelector('body');
const content = document.getElementById('content');
const h1 = loadH1();
content.appendChild(h1);


function clear(){
    content.textContent = "";
}


const nav = document.querySelector('nav');

nav.querySelector("#home").addEventListener('click',() => {
    clear();
    content.appendChild(renderHome())
})

nav.querySelector('#menu').addEventListener('click',() => {
    clear();
    content.appendChild(renderMenu())
})

nav.querySelector("#about").addEventListener('click',() => {
    clear();
    content.appendChild(renderAbout());
})