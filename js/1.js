var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var randomNumberElement = document.getElementById('randomNumber');
var intervalId = null;
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGeneratingRandomNumbers() {
startButton.disabled = true;
stopButton.disabled = false;

intervalId = setInterval(function() {
randomNumberElement.textContent = getRandomInt(1, 60);
}, 60);
}

// 停止生成随机数的函数
function stopGeneratingRandomNumbers() {
// 清除定时器
clearInterval(intervalId);
intervalId = null; 
startButton.disabled = false;
stopButton.disabled = true;
}

startButton.addEventListener('click', startGeneratingRandomNumbers);

stopButton.addEventListener('click', stopGeneratingRandomNumbers);