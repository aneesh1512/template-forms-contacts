import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { profilepics } from './profile-pic';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'con-profile-pic-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-pic-selector.component.html',
  styleUrl: './profile-pic-selector.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: ProfilePicSelectorComponent
  }]
})
export class ProfilePicSelectorComponent implements ControlValueAccessor {


  profilePic = profilepics;
  showAll = true;
  selectdIcon!: null | string;
  onChange!: Function;
  ontouched!: Function;

  selectedIcon(icon: string) {
    this.showAll = false;
    this.selectdIcon = icon
    this.onChange(icon);
  }


  writeValue(pic: any): void {
    if (pic && pic !== '') {
      this.selectdIcon = pic;
      this.showAll = false;
    }
    else
      this.showAll = true;
  }
  registerOnChange(fn: any): void {
    this.onChange = (icon: string) => fn(icon);
  }
  registerOnTouched(fn: any): void {
    this.ontouched = () => fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
