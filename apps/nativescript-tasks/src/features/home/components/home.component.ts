import {Component, inject} from '@angular/core';

import {BaseComponent, ENVIRONMENT_CONFIGURATION_TOKEN, IEnvironment} from '@nuvious/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'nuvious-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {

  readonly env!: IEnvironment;

  constructor() {
    super();
    this.env = inject(ENVIRONMENT_CONFIGURATION_TOKEN);
  }

}
