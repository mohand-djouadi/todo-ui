import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirm = control.get('confirm')

    if (password && confirm && password.value !== confirm.value) {
        return { passwordMisMatch: true }
    } 
    return null;
}