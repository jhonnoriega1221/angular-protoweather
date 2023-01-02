import { Component, EventEmitter, Input, Output } from '@angular/core';

interface OptionSelectList{
  value:string;
  name:string;
}

@Component({
  selector: 'app-settings-list-item',
  templateUrl: './settings-list-item.component.html',
  styleUrls: ['./settings-list-item.component.scss']
})
export class SettingsListItemComponent {
  @Input() url:string[]|null = null;
  @Input() icon:string = 'square';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() selectedValue:string|null = '';
  @Input() optionsList:OptionSelectList[] = [];

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public changeOption(value:string){
    this.onChange.emit(value);
  }
}
