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
import { TodoItem, TodoState } from '../types/hu';
import { EntryComponent } from './entry/entry.component';
// import { Toast } from 'primeng/toast';

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
    EntryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
  newItemName?: string;
  list: TodoItem[] = [];
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
}
