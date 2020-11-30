let preprocessor = 'less'; //or 'sass'
const {src, dest, watch, series, parallel} = require('gulp');
let rename = require("gulp-rename");
let less = require('gulp-less');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let autoprefixer = require("gulp-autoprefixer");
let cache = require('gulp-cache');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let imagemin = require("gulp-imagemin");
let pngquant = require("imagemin-pngquant");
let spritesmith = require('gulp.spritesmith');
let uglify = require('gulp-uglify');
let path = require('path');
let del = require('del');


let from_preprocessor = () => {
  return src([
        `./app/assets/${preprocessor}/styles.${preprocessor}`,
        `./app/assets/${preprocessor}/media.${preprocessor}`
    ])
        .pipe(concat('main.css'))
        //.pipe(less())
        .pipe(eval(preprocessor)())
          .pipe(autoprefixer({
              grid: true,
              cascade: true
          }))
        .pipe(dest('./app/assets/css'))
        .pipe(browserSync.stream())
        .on('end', () => {
            console.log(`styles.${preprocessor} and media.${preprocessor} files are merged and successfully converted to css. New file is in the folder "app/assets/css..."`)
    })

}



let from_preprocessor_libs = () => {
   return src(`./app/assets/${preprocessor}/**/libs.${preprocessor}`)
        //.pipe(less())
        .pipe(eval(preprocessor)())
        .pipe(autoprefixer({
            grid: true,
            cascade: true
        }))

        .pipe(dest('./app/assets/css'))
        .pipe(browserSync.stream())
        .on('end', () => {
            console.log(`libs.${preprocessor} successfully converted to css. New file is in the folder "app/assets/css..."`);
        })

}

let browser_sync = done => {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        online:true,
        tunnel: true,
        logLevel: "debug",
        notify: false
});
    console.log("Server is running...")
    done();
}

let scripts = () => {
    return src([
        './app/assets/libs/jquery/dist/jquery.js',
       './app/assets/libs/bootstrap/dist/js/bootstrap.js',
        './app/assets/libs/fancybox/dist/jquery.fancybox.js'

    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(dest('./app/assets/js'))
        .pipe(browserSync.stream())
        .on('end', () => {
            console.log("Skips are minified");
        })
};

let css_libs = () => {
   return src('./app/assets/css/libs.css')
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(rename({suffix: ".min"}))
        .pipe(dest('./app/assets/css'))
        .on('end', () => {
                console.log("libs.css are minified");
        });
}

let watching = () => {
    watch(`./app/assets/${preprocessor}/**/*.${preprocessor}`, from_preprocessor);
    watch(`./app/assets/${preprocessor}/**/libs.${preprocessor}`, from_preprocessor_libs);
    watch(`./app/*.html`).on('change', browserSync.reload);
    watch([
        './app/assets/**/*.js',
        '!./app/assets/**/*.min.js'
    ]).on('change', browserSync.reload);
    console.log("File tracking activated");
}

let clean = async done => {

    await del.sync('dist');
    console.log("Folder dist is deleted")
    done();
}

let clear = async () => await cache.clearAll() + console.log("Cache is clear");


let sprite = () => {
    let spriteData = src('./app/assets/img/sprite/*.png').pipe(spritesmith({
        imgName: 'spr.png',
        cssName: 'spr.css'
    }));
    return spriteData
        .pipe(dest('./app/assets/img/sprite'))
        .on('end', () => {
                console.log("Sprite is created");
            });
}


let img = () => {
    return src([
        './app/assets/img/**/*.png',
        './app/assets/img/**/*.jpeg',
        './app/assets/img/**/*.jpg'
    ])
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(dest('dist/assets/img'))
        .on('end', () => {
            console.log("Images has been optimized");
        })
};

let build = () => {
    return src([
        './app/assets/css/main.css',
        './app/assets/css/libs.min.css',
        './app/assets/fonts/**/*',
        './app/assets/js/**/*',
        './app/*.html'
    ], {base: 'app'})

        .pipe(dest('dist'))

        .on('end', () =>{
            console.log("Folder dist is build")
        })
}

exports.browserSync =  browser_sync;
exports.watch =  watching;
exports.preprocessor =  from_preprocessor;
exports.libs = from_preprocessor_libs;

exports.cssLibs = series(from_preprocessor, from_preprocessor_libs, css_libs);

exports.scripts = scripts;
exports.clean = clean;
exports.clear = clear;
exports.sprite = sprite;
exports.img = img;
exports.build = parallel(clean, img, from_preprocessor, from_preprocessor_libs, scripts, build);
exports.default = parallel(css_libs, scripts, sprite, watching, browser_sync);








/*
IMPORTANT TASKS!!!!!!!!!!
gulp.task('build', build);
gulp.task('sprite', sprite);
gulp.task('img', img);
gulp.task('clean', clean);
gulp.task('clear', clear);
gulp.task('watch', watching);

gulp.task('csslibs', css_libs);

gulp.task('scripts', scripts);

gulp.task('browser_sync', browser_sync);

gulp.task('less', from_preprocessor);
gulp.task('libs', to_less_libs);
IMPORTANT TASKS!!!!!!!!!!
*/
/*
task('browser_sync', browser_sync);
task('preprocessor', from_preprocessor);
task('libs', from_preprocessor_libs);

task('css-libs', series(from_preprocessor, from_preprocessor_libs, css_libs))

task('scripts', scripts);
task('clean', clean);
task('clear', clear);
task('sprite', sprite);
task('img', img);
task('build', parallel(clean, img, from_preprocessor, from_preprocessor_libs, scripts, build));
task('default', parallel(browser_sync, css_libs, scripts, sprite, watching));
*/





/*
function to_style(done) {

    gulp.task('less', function () {
    return gulp.src('./assets/less\/\*\*\/*.less')
        .pipe(less({
            paths: [ path.join('app', 'less', 'includes') ]
        }))
        .pipe(rename({suffix: ".min",}))
        .pipe(gulp.dest('./assets/css'));
});
done();
}
gulp.task(to_style);
*/
/*const defaultTask = (done) => {
    console.log("It's working! GULP...");
    done();
}
const sayHi = (done) => {
    console.log("GULP says hi to you, my friend");
    done();
} */
//exports.say = sayHi
//exports.default = defaultTask

//gulp.task(sayHi);
//gulp.task('default', defaultTask);