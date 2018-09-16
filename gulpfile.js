const gulp = require('gulp');
const merge = require('merge-stream');
const path = require('path');
const rename = require('gulp-rename');
const template = require('gulp-template');
const yargs = require('yargs');

// Components types
const typeAtom = 'atoms';
const typeMolecule = 'molecules';
const typeOrganism = 'organisms';
const typePage = 'pages';

// Template sources
const blankComponent = {
  mainPage: './dev-scripts/templates/component/ComponentPage.js',
  mainAtom: './dev-scripts/templates/component/ComponentAtom.js',
  main: './dev-scripts/templates/component/Component.js',
  style: './dev-scripts/templates/component/Component.css',
  test: './dev-scripts/templates/component/Component.test.js',
};

// Project folder structure
const componentsPath = './src/app/components';

// Helpers
const generateClassName = componentName => {
  const lowercaseFirst =
    componentName.charAt(0).toLowerCase() + componentName.slice(1);
  return lowercaseFirst.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
};
const getComponentBlankPath = type => {
  switch (type) {
    case typeAtom: {
      return blankComponent.mainAtom;
    }

    case typePage: {
      return blankComponent.mainPage;
    }

    default: {
      return blankComponent.main;
    }
  }
};
const generateComponent = (name, dest, type) => {
  const component = gulp
    .src(getComponentBlankPath(type))
    .pipe(
      template({
        name: name,
        className: generateClassName(name),
      }),
    )
    .pipe(
      rename(path => {
        path.basename = path.basename.replace('temp', name);
      }),
    )
    .pipe(rename(`${name}.js`))
    .pipe(gulp.dest(dest));

  const style = gulp
    .src(blankComponent.style)
    .pipe(
      template({
        name: generateClassName(name),
      }),
    )
    .pipe(
      rename(path => {
        path.basename = path.basename.replace('temp', name);
      }),
    )
    .pipe(rename(`${name}.css`))
    .pipe(gulp.dest(dest));

  const test = gulp
    .src(blankComponent.test)
    .pipe(
      template({
        name: name,
      }),
    )
    .pipe(
      rename(path => {
        path.basename = path.basename.replace('temp', name);
      }),
    )
    .pipe(rename(`${name}.test.js`))
    .pipe(gulp.dest(dest));

  return merge(component, style, test);
};
const generateTask = (destPrefix, destSuffix, type) => {
  const name = yargs.argv.name;
  const dest = path.join(path.join(`${destPrefix}/${destSuffix}`), name);

  return generateComponent(name, dest, type);
};

// Tasks
gulp.task('atom', () => {
  return generateTask(componentsPath, 'atoms', typeAtom);
});
gulp.task('molecule', () => {
  return generateTask(componentsPath, 'molecules', typeMolecule);
});
gulp.task('organism', () => {
  return generateTask(componentsPath, 'organisms', typeOrganism);
});
gulp.task('page', () => {
  return generateTask(componentsPath, 'pages', typePage);
});
