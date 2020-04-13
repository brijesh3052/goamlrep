import { Component } from '@angular/core';

@Component({
  templateUrl: 'email.component.html'
})
export class Email {

  constructor() { }

  smtpCard: boolean = false;
  emailCard: boolean = true;
  configurationField: boolean = false;
  buttonLabel:string = "Modify";
  sendEmail(){
    this.smtpCard = true;
    this.emailCard = false;
  }

  enableForm(){
    this.configurationField = true;
    this.buttonLabel = "Save";
    (<HTMLInputElement> document.getElementById("button")).value="Save";
  }

  disableForm(){
    this.configurationField = false;
  }

}
