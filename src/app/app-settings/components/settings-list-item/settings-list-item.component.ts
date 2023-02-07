import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionSelectList } from '../../models/setting-item';

@Component({
  selector: 'app-settings-list-item',
  templateUrl: './settings-list-item.component.html',
  styleUrls: ['./settings-list-item.component.scss']
})
export class SettingsListItemComponent {
  @Input() type:string|'toggle'|'select'|'url' = 'url';
  @Input() url?:string[]|null = null;
  @Input() icon:string = 'square';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() selectedValue?:string|boolean|null = '';
  @Input() optionsList?:OptionSelectList[]|null = [];

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public changeOption(value:string){
    this.onChange.emit(value);
  }
}
