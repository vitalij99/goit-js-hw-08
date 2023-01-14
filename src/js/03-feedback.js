import { throttle } from 'lodash';

const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const LocalStorage_Key = 'feedback-form-state';

form.addEventListener('input',
  throttle(e => {   
    const data = { email: email.value, message: message.value };
    localStorage.setItem(LocalStorage_Key, JSON.stringify(data))
  }, 500)  
);

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(LocalStorage_Key);
});

function load(key) {
  try {
    const readData = localStorage.getItem(key);
    return readData === null ? undefined : JSON.parse(readData);
  } catch (err) {
    console.error(err);
  }
};

const dataSave = load(LocalStorage_Key);
if (dataSave) {
  email.value = dataSave.email;
  message.value = dataSave.message
}

