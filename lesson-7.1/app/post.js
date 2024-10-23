function Post(id, userId, title, body) {
  this.id = id;
  this.userId = userId;
  this.title = title;
  this.body = body;
}

Post.prototype.render = function () {
  return " <h3>" + this.title + " </h3><div ><p>" + this.body + "</p></div>";
};
