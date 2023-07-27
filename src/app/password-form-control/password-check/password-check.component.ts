import { Component } from '@angular/core';
import { PasswordTestService } from '../password-test.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordCheckComponent,
    }
  ]
})
export class PasswordCheckComponent implements ControlValueAccessor{
  value: string | null
  hide: boolean = true

  onChange = (value: string | null) => {}
  onTouched = () => {}

  par: string[] = new Array(3).fill('gray')
  colors: string[] = ['gray', 'red', 'yellow', 'green']

  constructor(private passService: PasswordTestService){}

  onInput($event: any){
    this.value = $event.currentTarget.value
    this.onChange(this.value)
    if(this.value !== null){
      this.par = this.passService.checkStrenght(this.value)
    }
  }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
