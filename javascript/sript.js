document.addEventListener('DOMContentLoaded', () => {
const squeres = docuement.querySelectorAll('.grid div');
const scoreDisplay =docuement.querySelector('span');
const srartBtn = document.querySelector('.start');

const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2,1,0];
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let ineterval = 0;

// доступ к функции нажатие кода
function control(e) {
	squeres[currentIndex].classList.remove('snake');
	//  кнопки управления на клаве стрелочками
	if (e.keyCode === 39) {
		direction = 1;
	} else if (e.keyCode === 38) {
		direction = -width;
	} else if (e.keyCode === 37) {
		direction = -1;
	} else if (e.keyCode === 40) {
		direction = +width;
	}
}
})