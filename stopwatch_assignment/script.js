let timer = [0,0,0,0];
let interval;
let timeStoped = true;
const theTimer = document.querySelector('#time');
const recordedTime = document.querySelector('#recordedTime');

setUp();

function setUp() {
	const startStopButton = document.querySelector('#startStop');
	const resetButton = document.querySelector('#reset');
	const recordButton = document.querySelector('#record');


	document.addEventListener('keydown', (event) => {
		if(event.key === 's'){
			startStopTimer();
		}else if(event.key === 't'){
			recordTime();
		}else if(event.key === 'r'){
			resetStopWatch();
		}
	})

	startStopButton.addEventListener('click', startStopTimer);
	resetButton.addEventListener('click', resetStopWatch);
	recordButton.addEventListener('click', recordTime);
}

function leadingZero(time) {
  if (time <= 9) {
      time = "0" + time;
  }
  return time;
}

function startStopTimer(){
	if(timeStoped){
		interval = setInterval(()=>{
			let currentTime = `${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
			theTimer.innerHTML = currentTime;
			
			timer[3]++;
			timer[0] = Math.floor((timer[3]/100)/60);
			timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
			timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000) );
		},10)
		timeStoped = false;
	} else {
		clearInterval(interval);
		timeStoped = true;
	}
}

function resetStopWatch() {
	clearInterval(interval);

	interval = null;
	record = [];
	timer = [0, 0, 0, 0];

	theTimer.innerHTML = "00:00:00";
	recordedTime.innerHTML = null;
}

let record = [];
function recordTime() {
	let text = document.createElement('p');
	let timeRecorded =`${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
	record.push(timeRecorded);
	for(let i = 0; i < record.length; i++){
		text.innerHTML = record[i];
	}
	recordedTime.appendChild(text);
}
