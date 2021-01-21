document.addEventListener('DOMContentLoaded', () => {
const squeres = docuement.querySelectorAll('.grid div');
const scoreDisplay = docuement.querySelector('span');
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

//  запуск и перезапуск игры 
function startGame() {
	currentSnake.forEach(index => squeres[index].classList.remove('snake'));
	squeres[appleIndex].classList.remove('apple');
	clearInterval(interval);
	score = 0;
	// случайное яблоко
	direction = 1;
	scoreDisplay.innerText = score;
	intervalTime = 1000;
	currentSnake = [2,1,0];
	currentIndex = 0;
	currentSnake.forEach(index => squeres[index].classList.add('snake'));
	interval = setInterval(moveOutcomes, intervalTime)


}	







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