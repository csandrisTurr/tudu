import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PopoverModule } from 'primeng/popover';
import { ListboxModule } from 'primeng/listbox';
import { SelectModule } from 'primeng/select';
import { TodoItem, TodoState } from '../types/hu';
import { EntryComponent } from './entry/entry.component';
import { Toolbar } from 'primeng/toolbar';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Card } from 'primeng/card';
import { ToggleButton } from 'primeng/togglebutton';
import { v4 as uuidv4 } from 'uuid';
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
    Toolbar,
    IconField,
    InputIcon,
    Card,
    ToggleButton,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
  newItemName?: string;
  list: TodoItem[] = [];
  darkTheme: boolean;
  favoritesOnly = model<boolean>();

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('todo')) || [];
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')) || false;

    if (this.darkTheme) 
      document.body.classList.toggle("invert");
  }

  addItemButton() {
    this.list.push({
      id: uuidv4(),
      state: TodoState.Todo,
      name: this.newItemName!,
      favorite: false,
    });

    this.onItemListModify();
  }

  onItemDelete(event) {
    this.list = this.list.filter(x => x.id != event);
    this.onItemListModify();
  }

  onItemListModify() {
    localStorage.setItem('todo', JSON.stringify(this.list));
  } 

  toggleInvert() {
    localStorage.setItem('darkTheme', JSON.stringify(!this.darkTheme));
    document.body.classList.toggle("invert");
  }
}
