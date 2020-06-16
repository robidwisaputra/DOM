// DOM Manipulation 

// MANIPULATION ELEMENT
// innerHTML -> mengubah isi dari HTML
const judul = document.getElementById('judul');
judul.innerHTML = 'Ini diubah dari javascript';


// element.style.property -> mengubah style element
judul.style.backgroundColor = 'lightgreen';


//element.setAttribure('attributname', value)
judul.setAttribute('class', 'judul');

// element.addAttrubute('attribut', value);
console.log(judul.getAttribute('class'));

// element.removeAttribute()
judul.removeAttribute('id');


// element.classList.... -> untuk memanipulasi class
const p1 = document.querySelector('p.p1');
const p2 = document.querySelector('p.p2');
const p3 = document.querySelector('p.p3');

// untuk menambah class
p1.classList.add('paragraf1');

// untuk menghapus class
p2.classList.remove('p2');

// untuk menambah class jika tidak ada dan menghapus class jika ada
p2.classList.toggle('paragraf2');

// untuk melihat class berdasarkan index
console.log(p3.classList.item(0));

// untuk memastikan ada tidak class
console.log(p3.classList.contains('p4'));

// untuk mengganti class
p3.classList.replace('p3', 'paragraf3');



// MANIPULATION NODE

// menambah elemen baru
// merangkai elemen
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// menggabungkan elemen
pBaru.appendChild(textPBaru);

// menyimpan elemen
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// insertBefore
const liBaru = document.createElement('li');
const textLi = document.createTextNode('item baru');

liBaru.appendChild(textLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// menghapus node
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

p1.remove();











