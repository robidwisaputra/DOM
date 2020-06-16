// EVENT HENDLER
// let p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
// 	p3.style.backgroundColor = 'lightblue';
// }


// let p2 = document.querySelector('.p2');

// function ubahWarnaP2(){
// 	p2.style.backgroundColor = 'lightblue';
// }

// p2.onclick = ubahWarnaP2;


// ADDEVENTLISTENER
// let p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
// 	let ul = document.querySelector('section#b ul');
// 	let liBaru = document.createElement('li');
// 	let textLi = document.createTextNode('item baru');
// 	liBaru.append(textLi);
// 	ul.append(liBaru);
// });


/*
perbedaan even handler dengan addeventlistener adalah :
event handler menimpa event lama dengan event baru
addeventlistener menambah event baru

*/


let p1 = document.querySelector('.p1');

// p1.onclick = function(){
// 	p1.style.backgroundColor = 'yellow';
// }

// p1.onclick = function(){
// 	p1.style.color = 'red';
// }

p1.addEventListener('click', function(){
	p1.style.backgroundColor = 'yellow';
});

p1.addEventListener('click', function(){
	p1.style.color = 'red';
});
