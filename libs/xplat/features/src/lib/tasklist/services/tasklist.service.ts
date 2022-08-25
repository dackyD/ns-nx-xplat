import { Injectable } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({ providedIn: 'root' })
export class TaskListService {
  private taskList: TaskItem[] = [
    { title: 'install Node' },
    { title: 'install Nx CLI' },
    { title: 'creating new app' },
    { title: 'serve app' },
    { title: 'develope app' },
    { title: 'deploy app' },
  ];

  constructor() {}

  getTaskList() {
    return this.taskList;
  }
}
