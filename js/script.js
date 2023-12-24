function flipCoin() {
    document.querySelector('.trigger-btn').disabled = true; //Disable btn

    document.getElementById('coin').innerText = "Wait..";

    document.querySelector("#myAudio").play(); //Play sound effect

    setTimeout(gettingRes, 2000);
}

function gettingRes() {
    // Generate a random number (0 or 1)
    const randomNumber = Math.floor(Math.random() * 2);

    // Determine if it's heads or tails based on the random number
    const result = randomNumber === 0 ? 'Heads' : 'Tails';

    // Display the result
    document.getElementById('coin').innerText = result;

    document.querySelector('.trigger-btn').disabled = false;
}

