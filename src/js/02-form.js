const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', onformRefInput);
const localStorageKey = 'feedback-form-state';

const inputData = {
  email: '',
  message: '',
};

function onformRefInput(e) {
  if (e.target.type === 'email') {
    inputData.email = e.target.value;
  } else if (e.target.type === 'textarea') {
    inputData.message = e.target.value;
  }

  // console.log(inputData);

  const inputDataJSON = JSON.stringify(inputData);

  localStorage.setItem(localStorageKey, inputDataJSON);
}

const savedInputData = localStorage.getItem(localStorageKey);
const parsedInputData = JSON.parse(savedInputData);

console.log(parsedInputData);

const textarea = formRef.elements.message;
const email = formRef.elements.email;

window.addEventListener('load', e => {
  if (parsedInputData) {

    textarea.value = parsedInputData.message;
    email.value = parsedInputData.email;
    inputData.email = parsedInputData.email;
    inputData.message = parsedInputData.message;
  }
});


  formRef.addEventListener('submit', onformRefSubmit);

  function onformRefSubmit(e) {
    e.preventDefault();
   inputData.message = inputData.message.trim();
    if (inputData.email.trim() === '' || inputData.message.trim() === '') return alert("Please fill in all the fields!");

    console.log(inputData);
    localStorage.removeItem(localStorageKey);
    inputData.email = '';
    inputData.message = '';
    formRef.reset();
  }