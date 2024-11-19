import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PopoverModule } from 'primeng/popover';
import { ListboxModule } from 'primeng/listbox';
import { SelectModule } from 'primeng/select';
// import { Toast } from 'primeng/toast';

enum TodoState {
  Todo = 'todo',
  Doing = 'doing',
  Done = 'done',
}

interface TodoItem {
  no: number;
  state: TodoState;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    PopoverModule,
    ListboxModule,
    SelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
  newItemName?: string;
  list: TodoItem[] = [];
  todoStates = [
    TodoState.Todo,
    TodoState.Doing,
    TodoState.Done,
  ];
  lastId = 0;

  addItemButton() {
    this.list.push({
      no: this.lastId + 1,
      state: TodoState.Todo,
      name: this.newItemName!,
    });

    this.lastId++;
  }

  changeTodoState(no: number, event: any) {

  }
  
  todoToIcon(state: TodoState) {
    switch (state) {
      case TodoState.Todo: return 'circle-off';
      case TodoState.Doing: return 'circle-on';
      case TodoState.Done: return 'check';
    }
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase()
      + str.slice(1);
  }
}
