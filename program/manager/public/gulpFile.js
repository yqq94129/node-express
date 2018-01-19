var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("css",function(){
	return gulp.src("sass/*.scss").pipe(sass({style:"expanded"}))
	.pipe(gulp.dest("css"));
})

//发布监听任务
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["css"]);
})