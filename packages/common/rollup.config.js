/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: '../../dist/packages-dist/common/@angular/common.es5.js',
  dest: '../../dist/packages-dist/common/bundles/common.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.common',
  globals: {
    '@angular/core': 'ng.core',
  },
  plugins:[
    resolve({
      jsnext: true,
      skip: ['@angular/core']
    }),
    commonjs(),
  ]
};
