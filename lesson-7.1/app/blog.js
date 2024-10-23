function Blog() {
  this.posts = [];
}

Blog.prototype.fetchPosts = function (cb) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    context: this,
  }).done(function (posts) {
    this.posts = posts;
    cb();
  });
};

Blog.prototype.renderPosts = function () {
  let self = this;
  $(".posts").html("");

  this.posts.forEach(function (item) {
    let post = new Post(item.id, item.userId, item.title, item.body);

    // если заполнено поле поиска, то добавляем только тот пост, имя которого соответствует значению в поле поиска
    const autocompleteValue = $(".autocomplete")[0].value.trim();
    if (
      !autocompleteValue ||
      (autocompleteValue && post.title === autocompleteValue)
    ) {
      let element = post.render();
      $(".posts").append(element);
    }
  });

  $("#accordion").accordion("refresh");
  $("#accordion").accordion("option", "active", false);
};

window.onload = function () {
  const blog = new Blog();

  blog.fetchPosts(function () {
    const postsTitles = blog.posts.map(function (item) {
      return item.title;
    });

    $(".autocomplete").autocomplete({
      source: postsTitles,
    });

    $("#search").on("click", function () {
      blog.renderPosts();
    });

    $("#accordion").accordion({
      collapsible: true,
      active: false,
      animate: false,
    });

    blog.renderPosts();
  });
};
