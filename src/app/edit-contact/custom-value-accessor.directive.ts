import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input([type=date])[ngModel]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: DateValueAccessorDirective
  }]
})
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private element: ElementRef) { }
  @HostListener('input', ['$event.target.valueAsDate']) fn1!: Function;
  @HostListener('blur') fn2!: Function;


  writeValue(val: any): void {
    if (val instanceof Date)
      this.element.nativeElement.value = val.toISOString().split("T")[0];
  }
  registerOnChange(fn: any): void {
    this.fn1 = (w: Date) => { fn(w) };
  }
  registerOnTouched(fn: any): void {
    this.fn2 = () => fn
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
