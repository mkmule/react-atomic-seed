const gulp = require('gulp');
const merge = require('merge-stream');
const path = require('path');
const rename = require('gulp-rename');
const template = require('gulp-template');
const yargs = require('yargs');

// Template sources
const blankComponent = {
  main: './dev-scripts/templates/component/Component.js',
  style: './dev-scripts/templates/component/Component.css',
  test: './dev-scripts/templates/component/Component.test.js',
};

// Project folder structure
const componentsPath = './src/app/components';

// Helpers
const generateClassName = (componentName) => {
  const lowercaseFirst = componentName.charAt(0).toLowerCase() + componentName.slice(1);
  return lowercaseFirst.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
};
const generateComponent = (name, dest) => {
  const component = gulp.src(blankComponent.main)
    .pipe(template({
      name: name,
      className: generateClassName(name),
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(rename(`${name}.js`))
    .pipe(gulp.dest(dest));

  const style = gulp.src(blankComponent.style)
    .pipe(template({
      name: generateClassName(name),
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(rename(`${name}.css`))
    .pipe(gulp.dest(dest));

  const test = gulp.src(blankComponent.test)
    .pipe(template({
      name: name,
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(rename(`${name}.test.js`))
    .pipe(gulp.dest(dest));

  return merge(component, style, test);
};

// Tasks
gulp.task('atom', () => {
  const name = yargs.argv.name;
  const dest = path.join(path.join(`${componentsPath}/atoms`), name);

  return generateComponent(name, dest);
});
gulp.task('molecule', () => {
  const name = yargs.argv.name;
  const dest = path.join(path.join(`${componentsPath}/molecules`), name);

  return generateComponent(name, dest);
});
gulp.task('organism', () => {
  const name = yargs.argv.name;
  const dest = path.join(path.join(`${componentsPath}/organisms`), name);

  return generateComponent(name, dest);
});
gulp.task('page', () => {
  const name = yargs.argv.name;
  const dest = path.join(path.join(`${componentsPath}/pages`), name);

  return generateComponent(name, dest);
});
