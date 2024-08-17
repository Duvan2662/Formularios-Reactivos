import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailValidatorService implements AsyncValidator{

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email});

    const httpCallObservable = new Observable<ValidationErrors | null> ((subscriber) =>{
      console.log({email});
      if (email === 'duvanriano2015@gmail.com') {
        subscriber.next({emailtaken:true});
        subscriber.complete();
        return
      }

      subscriber.next(null);
      subscriber.complete();

    }).pipe(
      delay(3000)
    )

    return httpCallObservable

  }



  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({email});

  //   return of({
  //     emailTaken:true
  //   }).pipe(
  //     delay(200)
  //   )
  // }


  //Peticion a un backen o un servicio

  // return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
  //     .pipe(
  //       map(res => {
  //         return (res.length ===0)
  //           ? null
  //           :{emailTaken:true}
  //       })
  //     )


}
