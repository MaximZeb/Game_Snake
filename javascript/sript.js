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
	interval = setInterval(moveOutcomes, intervalTime);
}	

// 
function moveOutcomes() {

	if (
		(currentSnake[0] + width >= (width * width) && direction === width) || //если змея ползет вниз
		(currentSnake[0] % width === width -1 && direction === 1) || // если змея ползет вправо
		(currentSnake[0] % width === 0 && direction === -1) || // если змея ползет в лево
		(currentSnake[0] - width < 0 && direction === -width) ||// усли змея ползет верх
		squeres[currentSnake[0]] + direction.classList.contains('snake')
		) {
			return clearInterval(interval);
	}

const tail = currentSnake.pop();
squeres[tail].classList.remove('snake');
currentSnake.unshift(currentSnake[0] + direction)

if(squeres[currentSnake[0]].classList.contains('apple')) {
	squeres[currentSnake[0]].classLsit.remove('apple');
	squeres[tail].classList.add('snake');
	currentSnake.push(tail);
	//  случайное яблоко
	score++;
	scoreDisplay.textContent = score;
	clearInterval(interval);
	intervalTime = intervalTime * speed;
	interval = setInterval(moveOutcomes, intervalTime);
}


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