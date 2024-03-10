import { Component, Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector: '[restrictedwords]',
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: CustomNotesValidator
    }]
})

export class CustomNotesValidator implements Validator {

    @Input('restrictedwords') inputWord: string[] = [];

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control.value) return null;

        const arr = this.inputWord.map(w => control.value.includes(w) ? w : null).filter(w => w !== null);



        return control.value.includes('foo') ? { restrictedwords: arr.join(",") } : null;
    }


}