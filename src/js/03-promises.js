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

  for (let i = 0; i < amountValue; i++) {
    const position = i + 1;
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

// createPromise(refs.amountInput.value, refs.delayInput.value).then(
//   ({ position, delay }) => {
//     // counterPosition();
//     // position = 0;
//     position += 1;
//     delay = refs.delayInput.value;
//     delay += refs.stepInput.value;

//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   }
// );
//   .catch(({ position, delay }) => {
//     // position = 0;
//     // position += 1;
//     // delay = refs.delayInput.value;
//     // delay += refs.stepInput.value;
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function counterPosition() {
//   let position = 0;
//   return (position += 1);
// }

// const form = document.querySelector('.form');
// form.addEventListener('submit', event => {
//   event.preventDefault(); // перешкоджає формі відправити дані на сервер

//   // отримуємо значення з полів форми
//   const delay = Number(form.delay.value);
//   const step = Number(form.step.value);
//   const amount = Number(form.amount.value);

//   // функція для створення промісу з вказаною затримкою
//   function createPromise(position, delay) {
//     return new Promise((resolve, reject) => {
//       const shouldResolve = Math.random() > 0.3;
//       setTimeout(() => {
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//   }

//   // створюємо вказану кількість промісів
//   for (let i = 0; i < amount; i++) {
//     const position = i + 1;
//     const promiseDelay = delay + i * step; // збільшуємо затримку для кожного наступного промісу
//     createPromise(position, promiseDelay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// });
