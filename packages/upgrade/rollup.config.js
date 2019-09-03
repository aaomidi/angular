/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export default {
  entry: '../../dist/packages-dist/upgrade/@angular/upgrade.es5.js',
  dest: '../../dist/packages-dist/upgrade/bundles/upgrade.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.upgrade',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  },
  plugins:[
    resolve({
      jsnext: true,
      skip: ['@angular/core', '@angular/common', '@angular/compiler', '@angular/platform-browser', '@angular/platform-browser-dynamic']
    }),
    commonjs(),
  ]
};
