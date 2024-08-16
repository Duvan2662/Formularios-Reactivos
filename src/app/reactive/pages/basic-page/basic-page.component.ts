import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl('',[],[]),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price:[0, [Validators.required, Validators.min(0)]],
    inStorage:[0, [Validators.required, Validators.min(0)]]
  })


  constructor(private fb:FormBuilder){

  }

  public onSave = ():void => {

    if(this.myForm){

    }
    console.log(this.myForm.value);

  }

}
