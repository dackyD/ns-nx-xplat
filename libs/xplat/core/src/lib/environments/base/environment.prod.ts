import { IEnvironment } from '@nuvious/xplat/core';
import { deepMerge } from '@nuvious/xplat/utils';
import { environmentBase } from './environment.base';
1
export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  environmentName: 'prod'
  // customizations here...
});
