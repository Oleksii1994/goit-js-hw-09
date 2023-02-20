import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const delayValue = Number(formEl.delay.value);
  const stepValue = Number(formEl.step.value);
  const amountValue = Number(formEl.amount.value);

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  for (let i = 0; i < amountValue; i += 1) {
    const position = i;
    const promiseDelay = delayValue + i * stepValue;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
