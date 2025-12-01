"use strict";
const dis = document.querySelector('#display')
const calculator = document.querySelector('.calculator')
const theme = document.querySelector('#shift')

console.log("Hello developers .-.")

calculator.addEventListener('click', (event) => {
	if (event.target.tagName !== 'BUTTON') return;
	let target = event.target.textContent;
	if (target === 'C') {
		dis.textContent = '0';
	} else if (target === '=') {
		try {
			dis.textContent = parseFloat(eval(dis.textContent).toFixed(5));
		} catch {
			dis.textContent = 'Error';
		}
	} else {
		if (dis.textContent === '0' ||
			dis.textContent.endsWith('-0') ||
			dis.textContent.endsWith('+0') ||
			dis.textContent.endsWith('/0') ||
			dis.textContent.endsWith('*0')) {
				
			dis.textContent = dis.textContent.slice(0, -1);
			
		}
		
		dis.textContent += target;
	}
});

theme.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');

});