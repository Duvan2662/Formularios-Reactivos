import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender:['M',Validators.required],
    wantNotifications:[true,Validators.required],
    termsAndConditions:[false,Validators.requiredTrue]
  });

  public person = {
    gender:'F',
    wantNotifications:false,
  }

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  public isValidField = (field:string):boolean | null => {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }



  public onSave = () => {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const {termsAndConditions, ...newPerson} = this.myForm.value;

    this.person = newPerson
    console.log(this.myForm.value);

    console.log(this.person);


  }

}
