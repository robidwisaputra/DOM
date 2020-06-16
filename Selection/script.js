// DOM
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.fontFamily = 'tahoma';
judul.style.color = 'blue';


// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
	p[i].style.backgroundColor = 'violet';
}


// document.getElementsByClass() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini dirubah dari javascirpt';



// document.querySelector()
const sectionB = document.getElementById('b');
let p4 = sectionB.querySelector('#b p');
p4.style.backgroundColor = 'red';



// document.querySelectorAll()
const li = document.querySelectorAll('section#b ul li');
for(let i = 0; i < li.length; i++){
	li[i].style.backgroundColor = 'gray';
}