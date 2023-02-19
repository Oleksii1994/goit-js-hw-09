import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDateEl: document.querySelector('#datetime-picker'),
  btnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minEl: document.querySelector('[data-minutes]'),
  secEl: document.querySelector('[data-seconds]'),
};

refs.btnEl.setAttribute('disabled', 'true');
refs.btnEl.addEventListener('click', start);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const currentTime = new Date().getTime();
    const deltaTime = selectedDate - currentTime;
    if (deltaTime < 0) {
      window.alert('Please choose a date in the future');
      return;
    }
    refs.btnEl.removeAttribute('disabled');
  },
};

flatpickr(refs.inputDateEl, options);

function start() {
  const startTime = new Date(refs.inputDateEl.value).getTime();

  setInterval(() => {
    const currentTime = new Date().getTime();
    const deltaTime = startTime - currentTime;

    if (deltaTime < 0) {
      return;
    }
    const timeComponents = convertMs(deltaTime);
    return updateClockFace(timeComponents);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minEl.textContent = minutes;
  refs.secEl.textContent = seconds;
}
