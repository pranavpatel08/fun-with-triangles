const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const hypotenuseOutput = document.querySelector('#hypotenuse-output');
function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

function calculateHypotenuse() {
	if(Number(sides[0].value)<=0 || Number(sides[1].value)<=0){
		hypotenuseOutput.innerText = `Enter valid input!`;
	}
	else {
		const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
		const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
		hypotenuseOutput.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
	}
	
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);
