import Home from './home.jpg';
export function loadH1(){
const h1 = document.createElement('h1');
h1.textContent = "Welcome to Restaurant Lonai";
h1.style.cssText = "margin-left: 50px"
h1.classList.add('content');
return h1;
}

export function renderHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.src = Home;
    home.appendChild(img1);
    return home;

}

