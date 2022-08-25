import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'nuvious-tasklist',
  templateUrl: './tasklist.component.html',
})
export class TasklistComponent extends BaseComponent {
  constructor() {
    super();
  }
}