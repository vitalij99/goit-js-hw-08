import { throttle } from 'lodash';

const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const LocalStorage_Key = 'feedback-form-state';
// const submitBtn = document.querySelector('[type="submit"]');



form.addEventListener(
  'input',
  throttle(e => {
    e.preventDefault();
    const dataStorage = { email: email.value, message: message.value };
    localStorage.setItem(LocalStorage_Key, JSON.stringify(dataStorage))
  }, 500)
  
);

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(LocalStorage_Key);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const dataSave = load(LocalStorage_Key);
if (dataSave) {
  email.value = dataSave.email;
  message.value = dataSave.message
}

