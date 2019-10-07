import { Injectable } from '@angular/core';
import { Task } from '../task';
import { BehaviorSubject, Observable } from 'rxjs';

const TASKS_LOCAL_STORAGE_KEY = 'tasks';

@Injectable()
export class TasksService {
  public tasks$: Observable<Task[]>;
  private tasksBehaviorSubject$: BehaviorSubject<Task[]>;

  private winRef: Window = window;

  constructor() {
    this.tasksBehaviorSubject$ = new BehaviorSubject<Task[]>(this.readLocalStorage() || []);
    this.tasks$ = this.tasksBehaviorSubject$.asObservable();
  }

  public addTask(task: Task): void {
    const tasks = [...this.tasksBehaviorSubject$.getValue(), task];
    this.updateLocalStorage(tasks);
    this.emitTasksValue(tasks);
  }

  public updateLocalStorage(tasks: Task[]): void {
    this.winRef.localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }

  private readLocalStorage(): Task[] {
    return JSON.parse(this.winRef.localStorage.getItem(TASKS_LOCAL_STORAGE_KEY));
  }

  private emitTasksValue(tasks: Task[]) {
    this.tasksBehaviorSubject$.next(tasks);
  }

  public clearTasks(): void {
    const tasks = [...this.tasksBehaviorSubject$.getValue()];
    tasks.length = 0;
    this.emitTasksValue(tasks);
    this.winRef.localStorage.removeItem(TASKS_LOCAL_STORAGE_KEY);
  }
}
