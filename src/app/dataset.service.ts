import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Details } from './details';
import { LOGINS } from './mock-details';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {
//   variable='vars';
//   Detail : [
//     {ayo:{fullname: "Olarinde Delight", description:"", language:"Yoruba", country:"Nigeria", state:"oyo state", city:"lalupon", username:"ddd", category:"hair dresser", email: "delightolarinde@gmail.com", password:"delight"}},
//     {ayo2:{fullname: "AY", description:"", language:"Eng", country:"Ghana", state:"Accra", city:"Langibo", username:"aylala ", category:"Designer", email: "ayolala@gmail.com", password:"ayolala"}}
//  ]; 
//LOGIN;
  constructor() { }
  processLogin(): Observable<Details[]>{
    return of(LOGINS);

  }
}
