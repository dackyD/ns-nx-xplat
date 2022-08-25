import { Component } from '@angular/core';

import { BaseComponent } from '@nuvious/xplat/core';
import {TaskListService, TaskItem} from '@nuvious/xplat/features';

@Component({
  selector: 'nuvious-tasklist',
  templateUrl: 'tasklist.component.html',
})
export class TasklistComponent extends BaseComponent {
  tasks: TaskItem[] = [];

  constructor(private taskListService: TaskListService) {
    super();
  }

  ngOnInit() {
    this.tasks = this.taskListService.getTaskList();
  }

}
