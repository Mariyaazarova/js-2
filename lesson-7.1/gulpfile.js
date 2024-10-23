let gulp = require("gulp");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");

gulp.task("concat", function () {
  return gulp
    .src(["./app/blog.js", "./app/post.js"])
    .pipe(concat({ path: "blog-post.js" }))
    .pipe(gulp.dest("./app"));
});

gulp.task("compress", function () {
  return gulp.src("./app/blog-post.js").pipe(uglify()).pipe(gulp.dest("dist"));
});
