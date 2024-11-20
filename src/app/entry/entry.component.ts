import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Button } from 'primeng/button';
import { TodoItem } from '../../types/hu';
import { capitalize, todoToIcon } from '../../util/istenemdenincskedvem';
import { Popover } from 'primeng/popover';
import { Listbox } from 'primeng/listbox';
import { todoStates } from '../../types/hu';
import { Inplace } from 'primeng/inplace';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: '[app-entry]',
  standalone: true,
  imports: [
    Button,
    Popover,
    Listbox,
    Inplace,
    InputText,
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
  todoToIcon = todoToIcon;
  todoStates = todoStates;
  capitalize = capitalize;

  @Input({ required: true })
  todoItem: TodoItem;

  onDelete = output<number>();
}
