let btn = document.getElementById('ganti');
btn.addEventListener('click', function(){
	// document.body.style.backgroundColor = 'lightblue';
	document.body.classList.toggle('biru-muda');
});


const tAcakWarna = document.createElement('button');
const textAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.append(textAcakWarna);
tAcakWarna.setAttribute('type', 'button');
btn.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
	let r = Math.round(Math.random() * 255 + 1);
	let g = Math.round(Math.random() * 255 + 1);
	let b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function(e) {
	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',0)';
});