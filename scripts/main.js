const angles = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const isTriangleOutput = document.querySelector('#is-triangle-output');

function calculateSumOfAngles() {
	const sumOfAngles =
		Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	return sumOfAngles;
}

function isTriangle() {
	if (calculateSumOfAngles() === 180) {
		isTriangleOutput.innerText = 'Yes!! These angles form a triangle!';
	} else {
		isTriangleOutput.innerText = 'Oh no, you can not form a triangle with these angles!';
	}
}
isTriangleBtn.addEventListener('click', isTriangle);
