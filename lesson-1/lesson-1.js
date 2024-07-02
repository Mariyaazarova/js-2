function Container() {
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}
Container.prototype.render = function () {
  return this.htmlCode;
};

//*********************************** */
Container.prototype.remove = function () {
  this.htmlCode = "";
};

Container.prototype.log = function () {
  if (this.id) {
    console.log(this.id);
  } else {
    console.log(this.className);
  }
};

//************************************ */
function Menu(myId, myClass, myItems) {
  Container.call(this);
  this.id = myId;
  this.className = myClass;
  this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
  let menuList = "";
  for (let i in this.items) {
    if (this.items[i] instanceof MenuItem) {
      menuList += this.items[i].render();
    }
  }
  return "<ul>" + menuList + "</ul>";
};

/******************************** */
function MenuWithSubitems(myId, myClass, myItems) {
  Menu.call(this, myId, myClass, myItems);
}
MenuWithSubitems.prototype = Object.create(Container.prototype);
MenuWithSubitems.prototype.render = function () {
  let menuList = "";
  for (let i in this.items) {
    if (this.items[i] instanceof MenuItem) {
      menuList += this.items[i].render();
    } else {
      let submenu = new MenuWithSubitems("", "", this.items[i]);
      menuList += submenu.render();
    }
  }
  return "<ul>" + menuList + "</ul>";
};

//***********************************//
function MenuItem(myHref, myTitle) {
  Container.call(this);
  this.className = "menu_class";
  this.href = myHref;
  this.title = myTitle;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
  return (
    "<li class='" +
    this.className +
    "'><a href='" +
    this.href +
    "'> - " +
    this.title +
    " - </a></li>"
  );
};

const item1 = new MenuItem("/", "Главная");
const item2 = new MenuItem("/cart", "Корзина");
const item3 = new MenuItem("/goods", "Карточки товаров");
const item4 = new MenuItem("/contacts", "Контакты");
const item5 = new MenuItem("/about", "О нас");
const item6 = new MenuItem("/telephone", "Номер телефона");
const item7 = new MenuItem("/address", "Адрес");

let items = {
  0: item1,
  1: item2,
  2: item3,
  3: {
    0: item4,
    1: {
      0: item6,
      1: item7,
    },
  },
  4: item5,
};

/************************* */
let menu = new MenuWithSubitems("my_menu", "menu_class", items);
document.write(menu.render());
