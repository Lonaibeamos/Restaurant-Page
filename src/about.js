import about from './About.jpg';

export function renderAbout(){
    const About = document.createElement('div');
    const img3 = document.createElement('img');
    img3.src = about;
    About.appendChild(img3);
    return About;
}