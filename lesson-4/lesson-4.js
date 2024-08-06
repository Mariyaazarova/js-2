//1.Получите список пользователей с помощью $.ajax() c ресурса https://jsonplaceholder.typicode.com/users. Выведите имена полученных пользователей в список.
//2.По клику на элемент списка выводите следующую информацию о пользователе: имя, телефон, email, город проживания.
//3. Добавьте текстовое поле. При вводе 3 и более символов список фильтруется: в нём остаются только имена, начинающиеся с этих символов.
$.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  dataType: "json",
})
  .done((data, status, xhr) => {
    for (let i = 0; i < data.length; i++) {
      console.log(xhr.status, data[i].name, data[i].id);

      $("ul").append("<li><a>" + data[i].name + "</a></li>");
      $("li").addClass("string");
      $("li").eq(0).addClass(`${data[0].id}`);
      $("li").eq(1).addClass(`${data[1].id}`);
      $("li").eq(2).addClass(`${data[2].id}`);
      $("li").eq(3).addClass(`${data[3].id}`);
      $("li").eq(4).addClass(`${data[4].id}`);
      $("li").eq(5).addClass(`${data[5].id}`);
      $("li").eq(6).addClass(`${data[6].id}`);
      $("li").eq(7).addClass(`${data[7].id}`);
      $("li").eq(8).addClass(`${data[8].id}`);
      $("li").eq(9).addClass(`${data[9].id}`);

      $(".string.1").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[0].name,
              data[0].phone,
              data[0].email,
              data[0].address.city
            );
          });
        });
      });
      $(".string.2").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[1].name,
              data[1].phone,
              data[1].email,
              data[1].address.city
            );
          });
        });
      });
      $(".string.3").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[2].name,
              data[2].phone,
              data[2].email,
              data[2].address.city
            );
          });
        });
      });
      $(".string.4").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[3].name,
              data[3].phone,
              data[3].email,
              data[3].address.city
            );
          });
        });
      });
      $(".string.5").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[4].name,
              data[4].phone,
              data[4].email,
              data[4].address.city
            );
          });
        });
      });
      $(".string.6").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[5].name,
              data[5].phone,
              data[5].email,
              data[5].address.city
            );
          });
        });
      });
      $(".string.7").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[6].name,
              data[6].phone,
              data[6].email,
              data[6].address.city
            );
          });
        });
      });
      $(".string.8").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[7].name,
              data[7].phone,
              data[7].email,
              data[7].address.city
            );
          });
        });
      });
      $(".string.9").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[8].name,
              data[8].phone,
              data[8].email,
              data[8].address.city
            );
          });
        });
      });
      $(".string.10").on("click", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          $(data[0]).each(function (index, name, phone, email, address) {
            console.log(
              index,
              data[9].name,
              data[9].phone,
              data[9].email,
              data[9].address.city
            );
          });
        });
      });

      $(".filter").on("keydown", function (data) {
        $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: "json",
        }).done((data) => {
          let value = $(this).val().toLowerCase();
          $(".main li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
        });
      });
    }
  })
  .fail((xhr) => {
    console.log(xhr.status);
  });
