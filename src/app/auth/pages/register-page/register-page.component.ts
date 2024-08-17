import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myform: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username:['',[Validators.required,this.validatorService.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  });


  constructor(
    private fb:FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator:EmailValidatorService
  ) {}

  public isValidField = (field:string) => {
    return this.validatorService.isValidField(this.myform,field)
  }
  public onSubmit = () => {
    this.myform.markAllAsTouched();
  }

}
