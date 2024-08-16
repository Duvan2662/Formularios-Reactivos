import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])

  })


  constructor(private fb : FormBuilder){

  }


  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }



  public isValidField = (field:string):boolean | null => {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  public isValidFieldInArray = (formArray:FormArray, index: number):boolean | null => {
    return formArray.controls[index].errors && formArray.controls[index].touched
  }

  public getFieldError = (field:string): string | null  => {

    if ( !this.myForm.contains(field) ) {
      return null
    }

    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo debe tener ${errors['minlength'].requiredLength} caracteres `
      }
    }

    return null;

  }




  public onSubmit = ():void => {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
