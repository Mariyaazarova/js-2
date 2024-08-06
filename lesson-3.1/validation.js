//1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные кавычки. Придумать шаблон, который меняет одинарные кавычки на двойные.
//2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную кавычку на двойную.
let text =
  "'As the proverb goes, 'Health is wealth.  It's important for every player to bat the ball over the net using their hands effectively. 'Health is the key benefit provided ' by 'sports activities. People who exercise 'tend' to be well-disciplined and stress-resistant.";
let doubleQuotes = text.replace(/^'|(\s)'|'(\s)|'$/g, ' " ');
alert(doubleQuotes);
/************************************* */

//3. Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».

window.onload = function () {
  const submitButton = document.querySelector("#submit");
  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      validateForm();
    });
  }

  const nameInput = document.querySelector("#name");
  if (nameInput) {
    nameInput.addEventListener("change", () => {
      nameInput.style.borderColor = "#ccc";
    });
  }

  const telephoneInput = document.querySelector("#telephone");
  if (telephoneInput) {
    telephoneInput.addEventListener("change", () => {
      telephoneInput.style.borderColor = "#ccc";
    });
  }

  const emailInput = document.querySelector("#email");
  if (emailInput) {
    emailInput.addEventListener("change", () => {
      emailInput.style.borderColor = "#ccc";
    });
  }
};

const validateForm = () => {
  const nameInput = document.querySelector("#name");
  if (nameInput) {
    const nameError = validateName(nameInput.value);
    if (nameError) {
      nameInput.style.borderColor = "red";
    }
  }

  const telephoneInput = document.querySelector("#telephone");
  if (telephoneInput) {
    const telephoneError = validatePhone(telephoneInput.value);
    if (telephoneError) {
      telephoneInput.style.borderColor = "red";
    }
  }

  const emailInput = document.querySelector("#email");
  if (emailInput) {
    const emailError = validateEmail(emailInput.value);
    if (emailError) {
      emailInput.style.borderColor = "red";
    }
  }
};

const validateName = (name) => {
  const nameRegExp = /^[а-яА-ЯёЁa-zA-Z]+$/;
  return nameRegExp.test(name)
    ? null
    : "Вы ввели некорректное имя пользователя";
};

const validatePhone = (phone) => {
  const phoneRegExp = /^\+7\(\d{3}\)\d{3}\-\d{4}/gm;
  return phoneRegExp.test(phone)
    ? null
    : "Вы ввели некорректное имя пользователя";
};

const validateEmail = (email) => {
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gm;
  return emailRegExp.test(email)
    ? null
    : "Вы ввели некорректное имя пользователя";
};
