
import {ValidatorFn,AbstractControl} from '@angular/forms';

 /** A hero's name can't match the given regular expression */
 export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);    
    //alert(forbidden);
    return forbidden ? null : {'forbiddenName': {value: control.value}};
    //return {'forbiddenName': {value: control.value}};
  };
}

export class ForbiddenNameValidatorReactiveFormDirective {
  constructor() { }  
}
