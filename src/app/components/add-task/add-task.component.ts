import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  constructor(private uiService: UiService) {
    this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));  
  }

  @Output() onAddTask: EventEmitter<any> = new EventEmitter();
  showAddTask!: boolean;
  subcription!: Subscription;
  text!: string;
  day!: string;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
  
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
    
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}