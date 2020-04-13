import { Component } from '@angular/core';

@Component({
  templateUrl: 'sms.component.html'
})
export class Sms {

  constructor() { }

  smsCard: boolean = true;
  generateCard: boolean = false;
  configurationField: boolean = false;
  smsConfigurationCard: boolean = false;
  buttonLabel:string = "Modify";
  
  sendSms(){
    this.generateCard = true;
    this.smsCard = false;
  }

  smsConfiguraton(){
    this.smsConfigurationCard = true;
    this.smsCard = false;
  }

  enableForm(){
    this.configurationField = true;
    this.buttonLabel = "Save";
    (<HTMLInputElement> document.getElementById("button")).innerHTML="Save";
    // on lcik modify should change to saveMAKE BUTTON LABEL AS SAVE

  }

  disableForm(){
    this.configurationField = false;
  }

}
