import { throttle } from "lodash";

const formRef = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const keyOfLocalStorage = 'feedbback-form-state'

formRef.addEventListener('input', throttle(textReader, 500));
formRef.addEventListener('submit', handSubmit);

function textReader(event) {
    const data = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem(keyOfLocalStorage, JSON.stringify(data));
};

function handSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(keyOfLocalStorage)));
    localStorage.removeItem(keyOfLocalStorage);
    formRef.reset()
}
upForm()

function upForm() {
    try {
        const startText = JSON.parse(localStorage.getItem(keyOfLocalStorage)) || '';
        if (startText) {
            console.log(startText.email);
            console.log(email.value);
            email.value = startText.email || '';
            message.value = startText.message || '';
        }
    }
    catch {
        console.log("error");
    }
   
}