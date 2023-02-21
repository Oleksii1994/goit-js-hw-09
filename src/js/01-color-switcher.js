const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;
setDisabledAttribute(refs.btnStop);

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `${`#${Math.floor(Math.random() * 16777215).toString(16)}`}`;
}

function onBtnStartClick() {
  changeBodyColor();
  removeAttributeDisabled(refs.btnStop);
  setDisabledAttribute(refs.btnStart);

  timerId = setInterval(() => {
    changeBodyColor();
  }, 1000);
}

function onBtnStopClick() {
  setDisabledAttribute(refs.btnStop);
  removeAttributeDisabled(refs.btnStart);
  clearInterval(timerId);
}

function changeBodyColor() {
  refs.bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}

function setDisabledAttribute(btn) {
  btn.setAttribute('disabled', 'true');
}

function removeAttributeDisabled(btn) {
  btn.removeAttribute('disabled');
}
