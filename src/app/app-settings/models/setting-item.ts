export interface SettingItem {
  route?:string[] | null;
  icon:string;
  title:string;
  description:string;
  type:string|"url"|"toggle"|"select";
  selectedValue?:string|boolean|null;
  selectOptionsList?:OptionSelectList[]|null;
}

export interface OptionSelectList{
  value:string;
  name:string;
}