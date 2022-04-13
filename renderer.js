// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const statusButton = document.getElementById('statusButton')
const feeAmountInput = document.getElementById('feeAmount')
const apiKeyInput = document.getElementById('apiKey')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
statusButton.addEventListener('click', () => {
    const isOpened = statusButton.dataset.value == 'false' ? true : false
    statusButton.dataset.value = isOpened;
    window.electronAPI.setStatus(isOpened)
    playButton.classList.toggle('d-none');
    pauseButton.classList.toggle('d-none');
});
feeAmountInput.addEventListener('change', () => {
    const amount = feeAmountInput.value
    window.electronAPI.setFeeAmount(amount)
});
apiKeyInput.addEventListener('change', () => {
    const key = apiKeyInput.value
    window.electronAPI.setApiKey(key)
});

var intervalID = window.setInterval(getGasFee, 10000);

Audio.prototype.play = (function(play) {
    return function() {
        var audio = this,
            args = arguments,
            promise = play.apply(audio, args);
        if (promise !== undefined) {
            promise.catch(_ => {
                // Autoplay was prevented. This is optional, but add a button to start playing.
                var el = document.createElement("button");
                el.setAttribute('id', 'playButton');
                el.innerHTML = "Play";
                el.addEventListener("click", function() {
                    play.apply(audio, args);
                });
                this.parentNode.insertBefore(el, this.nextSibling)
            });
        }
    };
})(Audio.prototype.play);

function getGasFee() {
    const target = feeAmountInput.value;
    const apiKey = apiKeyInput.value ?? 'yourApiKey';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch('https://api.snowtrace.io/api', {
            method: 'post',
            headers: myHeaders,
            body: 'module=proxy&action=eth_gasPrice&apikey=' + apiKey
        })
        .then(r => r.json())
        .then(res => {
            var result = parseInt(res.result, 16) / 1000000000;
            document.getElementById('result').innerText = result.toFixed(3);
            intResult = parseInt(result);
            if (parseInt(intResult) < target) {
                console.log(statusButton.dataset.value);
                if(statusButton.dataset.value == 'true') {
                alarm = document.getElementById('alarm');
                if (document.getElementById('playButton')) {
                    document.getElementById('playButton').click();
                } else {
                    alarm.muted = false;
                    alarm.play();
                }
            }

            }
        });
}
