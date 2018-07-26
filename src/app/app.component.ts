import { Component } from '@angular/core';
import { UserModel } from './model/user_model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  
  getUserlist = [];
  
  isEdit:boolean = false;
  isAdd:boolean = true;

  constructor(private _UserService : UserService){
    this.isEdit = false;
    this.isAdd = true;
  }

  usermodel:UserModel = new UserModel();

  ngOnInit(){
    this.getUserListItems();  
  }

  submitForm(){
    try{     
      this.getUserlist= JSON.parse(localStorage.getItem('setgetUserlist'));
        if(this.getUserlist == undefined){
          this.getUserlist = [];     
        }
        // this.getUserlist.push({ Name: this.usermodel.name, Email: this.usermodel.email, Password: this.usermodel.password});
        this.getUserlist.push(this.usermodel);
        localStorage.setItem("setgetUserlist", JSON.stringify(this.getUserlist));
        this.getUserListItems();
    }catch(err){
      
    }
  }

  getUserListItems(){
    this.getUserlist = JSON.parse(localStorage.getItem('setgetUserlist'));
    if(this.getUserlist==undefined){
      this.getUserlist=[];     
    }
  }

  
  /**
   * 
   * @param email  it Should be unique
  */

  delete(email){
    // rowItem is a variable it can be anything
    var indexNumber =   this.getUserlist.findIndex(rowItem => rowItem.email==email); 

    // Remove item using index number from global list.
    this.getUserlist.splice(indexNumber, 1);

    //update the local storage with latest array values.
    localStorage.setItem("setgetUserlist", JSON.stringify(this.getUserlist));
  }

  edit(email){
    var indexNumber =   this.getUserlist.findIndex(rowItem => rowItem.email==email); 
    this.usermodel = this.getUserlist[indexNumber];
    this.isEdit = true;
    this.isAdd = false;
  }

  UpdateForm(){
    //set updated value of array in local storage.
    localStorage.setItem("setgetUserlist", JSON.stringify(this.getUserlist));
    this.isEdit = false;
    this.isAdd = true;
  }

}
