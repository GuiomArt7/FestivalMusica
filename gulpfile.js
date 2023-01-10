const { src, dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
function css(done) {
 
    src('src/scss/app.scss') //Identificar el archivo SASS
        .pipe( sass()) //Compilar
        .pipe(dest("build/css")) //Almacenarla en el disco duro

    done();//Calback que avisa a gulp cuando llegamos al final
}
exports.css = css;