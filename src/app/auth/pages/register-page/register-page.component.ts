import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myform: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(emailPattern)]],
    username:['',[Validators.required,cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  });


  constructor(private fb:FormBuilder) {}

  public isValidField = (field:string) => {
    //TODO:Obtener validacion desde un servicio
  }

  public onSubmit = () => {
    this.myform.markAllAsTouched();
  }

}
