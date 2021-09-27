const inputs = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-btn');
const areaOutput = document.querySelector('#area-output');

function calculateArea() {
	const area = inputs[0].value*inputs[1].value/ 2;
	areaOutput.innerText = `The area of the triangle is ${area} cm²`;
}

areaBtn.addEventListener('click', calculateArea);
