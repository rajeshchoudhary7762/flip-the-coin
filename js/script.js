function flipCoin() {
    document.getElementById('coinAudio').play(); // Play sound effect
    document.querySelector('.trigger-btn').disabled = true;
    var flipResult = Math.random();
    var coinElement = document.querySelector('#coin');

    if (flipResult <= 0.5) {
        coinElement.classList.add('heads');
        // console.log('it is head');
    } else {
        coinElement.classList.add('tails');
        // console.log('it is tails');
    }

    setTimeout(function() {
        document.querySelector('.trigger-btn').disabled = false;
        coinElement.classList.value = '';
    }, 3000);
}
