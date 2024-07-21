//1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные кавычки. Придумать шаблон, который меняет одинарные кавычки на двойные.
//2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную кавычку на двойную.
let text =
  "As the proverb goes, 'Health is wealth.  It's important for every player to bat the ball over the net using their hands effectively. 'Health is the key benefit provided ' by 'sports activities. People who exercise 'tend' to be well-disciplined and stress-resistant.";
let doubleQuotes = text.replace(/[']/g, '"');
alert(doubleQuotes.replace(/(?<=\S)\"(?=\S)/g, "'"));

//3. Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
/* 
При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
 - Имя содержит только буквы;
 - Телефон подчиняется шаблону +7(000)000-0000;**
 - E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru**
 - Текст произвольный;**
 - В случае не прохождения валидации одним из полей необходимо выделять это поле красной рамкой и сообщать пользователю об ошибке.*/

function ValidNames() {
  let a = /^[а-яА-ЯёЁa-zA-Z]*$/;
  let myNAme = document.getElementById("name").value;
  let valid = a.test(myNAme);
  console.log(valid);

  if (valid) {
    console.log("Данные введены корректно!");
  } else {
    output = alert("Вы ввели неверное имя пользователя!");
    document.getElementById("name").style.borderColor = "red";
    return valid;
  }
}

function ValidPhone() {
  let b = /^\+7\(\d{3}\)\d{3}\-\d{4}/gm;
  let myPhone = document.getElementById("telephone").value;
  let valid = b.test(myPhone);
  console.log(valid);

  if (valid) {
    console.log((output = "Номер телефона введен корректно!"));
  } else {
    output = alert("Номер телефона введен неправильно!");
    document.getElementById("telephone").style.borderColor = "red";
    return valid;
  }
}

function ValidMail() {
  let c = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gm;
  let myMail = document.getElementById("email").value;
  let valid = c.test(myMail);
  console.log(valid);

  if (valid) {
    console.log((output = "Адрес эл. почты введен корректно!"));
  } else {
    output = alert("Адрес электронной почты введен неправильно!");
    document.getElementById("telephone").style.borderColor = "red";
    return valid;
  }
}

/* let names = "Mariya";
let a = /^[а-яА-ЯёЁa-zA-Z]*$/;
alert(a.test(names));

let telephone = "+7(000)000-0000";
let b = /^\+7\(\d{3}\)\d{3}\-\d{4}/gm;
alert(b.test(telephone)); */

/* let email = "mymail@mail.ru";
let c = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gm;
alert(c.test(email)); */
