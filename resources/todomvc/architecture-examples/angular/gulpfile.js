const gulp = require("gulp");
const fs = require("fs");
// const { Transform } = require("stream");

const replace = require("gulp-replace");

gulp.task("copy-index", function () {
    const htmlContent = getHtmlContent("node_modules/big-dom-generator/dist/index.html", true);
    const htmlToInjectForComplex = getHtmlContent("projects/complex/src/partial.html");
    return gulp
        .src("projects/shared-library/src/lib/index.html")
        .pipe(replace("<html", '<html class="spectrum spectrum--medium spectrum--light"'))
        .pipe(replace("TodoMVC: Angular", "TodoMVC: Angular Complex DOM"))
        .pipe(replace("<body>", `<body>${htmlContent}`))
        .pipe(replace('<div class="todo-area">', `<div class="todo-area"><div class="todoholder">${htmlToInjectForComplex}</div>`))
        .pipe(gulp.dest("projects/complex/src/"));
});

gulp.task("copy-logo", function () {
    const fileName = "logo.png";
    const destPath = "projects/complex/src/";
    if (!fs.existsSync(destPath + fileName))
        return gulp.src("node_modules/big-dom-generator/dist/logo.png").pipe(gulp.dest(destPath));

    return Promise.resolve();
});

gulp.task("build", gulp.series("copy-index", "copy-logo"));

function getHtmlContent(filePath, isComplex = false) {
    let htmlContent = fs.readFileSync(filePath, "utf8");
    if (isComplex) {
        const bodyStartIndex = htmlContent.indexOf("<body>") + 6;
        const bodyEndIndex = htmlContent.indexOf("</body>");
        htmlContent = htmlContent.substring(bodyStartIndex, bodyEndIndex);
    }
    return htmlContent;
}
