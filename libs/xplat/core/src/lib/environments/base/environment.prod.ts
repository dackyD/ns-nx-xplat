import { IEnvironment } from '@nuvious/xplat/core';
import { deepMerge } from '@nuvious/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
