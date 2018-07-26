import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getEmployeeLIst(){
    return  [
      {'id':'1', 'name':'prashant', 'email':'pt@gmail.com'},
      {'id':'2', 'name':'ankur', 'email':'ank@gmail.com'}
    ]
  }
  
}
