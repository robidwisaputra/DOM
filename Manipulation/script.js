const judul = document.getElementById('judul');
judul.innerHTML = 'Ini adalah judul 1';
judul.style.backgroundColor = 'lightgreen';

const judul2 = document.createElement('h1');
const text = document.createTextNode('Ini adalah judul 2');
judul2.appendChild(text);

const b = document.querySelector('section#b');
const p = b.querySelector('p');

b.replaceChild(judul2, p);


const p1 = document.querySelector('p.p1');
p1.remove();