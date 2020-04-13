import { Component } from '@angular/core';
import { UserManagmentService } from '../../services/usermanagment.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: 'bulkemail.component.html'
})
export class BulkEmail {

  listScreenRole: any = [{"screenName": ""}];
  listScreenRoleForBranch: any = [{"screenName": ""}];
  listScreenName: any = [];
  fieldsSwitchButton: boolean = false;
  fieldsSwitchButtonForBranch: boolean = false;

  constructor() {}

  ngOnInit() {
    this.listScreenName.push({ "name": "User" }, { "name": "Role" }, { "name": "Customer" });
  }

  currentDate = new Date();

  addScreenRole() {
    this.listScreenRole.push({ "screenName": ""});
  };
  addScreenRoleForBranch(){
    this.listScreenRoleForBranch.push({ "screenName": ""});
  }

  deleteScreenRole(screenid) {
    const index: number = this.listScreenRole.indexOf(screenid);
    if (index !== -1) {
      this.listScreenRole.splice(index, 1);
    }
  }
  deleteScreenRoleForBranch(screenid) {
    const index: number = this.listScreenRoleForBranch.indexOf(screenid);
    if (index !== -1) {
      this.listScreenRoleForBranch.splice(index, 1);
    }
  }

  selectAll(){ 
    if((<HTMLInputElement> document.getElementById("allswitch")).checked===true){
      this.fieldsSwitchButton=true;
    }
    else{
      this.fieldsSwitchButton=false;
    }
  }
  selectAllForBranch(){
    if((<HTMLInputElement> document.getElementById("allswitchforbranch")).checked===true){
      this.fieldsSwitchButtonForBranch=true;
    }
    else{
      this.fieldsSwitchButtonForBranch=false;
    }
  }
}
