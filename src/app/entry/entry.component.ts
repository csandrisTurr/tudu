import { Component, EventEmitter, Input, Output, ViewChild, output } from '@angular/core';
import { Button } from 'primeng/button';
import { TodoItem, TodoState } from '../../types/hu';
import { capitalize, todoToIcon } from '../../util/istenemdenincskedvem';
import { Popover } from 'primeng/popover';
import { Listbox } from 'primeng/listbox';
import { todoStates } from '../../types/hu';
import { Inplace } from 'primeng/inplace';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: '[app-entry]',
  standalone: true,
  imports: [
    Button,
    Popover,
    Listbox,
    Inplace,
    InputText,
    Select,
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
  todoToIcon = todoToIcon;
  todoStates = todoStates;
  capitalize = capitalize;

  @ViewChild('op') op!: Popover;

  @Input({ required: true })
  todoItem: TodoItem;

  stateEditDone(closeCallback, event) {
    this.todoItem.state = event.value as TodoState;
    this.op.hide();
    this.onModify.emit(this.todoItem);
  }

  textEditDone(closeCallback, event) {
    closeCallback(event);
    this.onModify.emit(this.todoItem);
  }

  onDelete = output<number>();
  onModify = output<TodoItem>();
}
