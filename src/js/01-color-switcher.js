const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `${`#${Math.floor(Math.random() * 16777215).toString(16)}`}`;
}

function changeBodyColor() {
  refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}

function onBtnStartClick() {
  refs.btnStart.setAttribute('disabled', 'true');
  changeBodyColor();

  timerId = setInterval(() => {
    changeBodyColor();
  }, 1000);
}

function onBtnStopClick() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
}
