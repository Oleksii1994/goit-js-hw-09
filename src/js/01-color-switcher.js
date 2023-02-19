const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `${`#${Math.floor(Math.random() * 16777215).toString(16)}`}`;
}

function onBtnStartClick() {
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    refs.btnStart.setAttribute('disabled', 'true');
  }, 1000);
}

function onBtnStopClick() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
}

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);
