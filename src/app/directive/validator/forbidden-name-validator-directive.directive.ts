import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name-validator-reactive-form.directive';

@Directive({
  selector: "[appForbiddenName]",
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirectiveDirective,multi: true}]
})

export class ForbiddenNameValidatorDirectiveDirective implements Validator {
  constructor() { }
  @Input('appForbiddenName') forbiddenName: string;
  validate (control: AbstractControl):{[key: string]: any} | null {
    //alert('from validate ' + this.forbiddenName);    
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}
