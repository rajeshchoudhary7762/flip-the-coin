var coinAudio = new Audio('audio/coin-flip.mp3');
var coinButton = document.getElementById('flipCoin');
var coinElement = document.getElementById('coin');

function flipCoin() {
    coinButton.disabled = true;
    coinElement.classList = '';

    coinAudio.play();

    setTimeout(function () {
        coinElement.classList.add(Math.random() <= 0.5 ? 'heads' : 'tails');
        console.log('It is ' + (coinElement.classList.contains('heads') ? 'heads' : 'tails'));

        setTimeout(function () {
            coinButton.disabled = false;
        }, 3000);
    }, 100);
}
