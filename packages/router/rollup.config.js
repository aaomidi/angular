/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export default {
  entry: '../../dist/packages-dist/router/@angular/router.es5.js',
  dest: '../../dist/packages-dist/router/bundles/router.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.router',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser',
  },
  plugins:[
    resolve({
      jsnext: true,
      skip: ['@angular/core', '@angular/common', '@angular/platform-browser']
    }),
    commonjs(),
  ]
};
