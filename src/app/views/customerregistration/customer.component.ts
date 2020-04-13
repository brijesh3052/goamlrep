import { Component, SimpleChanges } from '@angular/core';
import { UserManagmentService } from '../../services/usermanagment.service';

@Component({
  templateUrl: 'customer.component.html'
})
export class CustomerComponent {


  config: any;
  recordsPerPage: any;
  customerArr: any = [];
  querycustList: any = [];
  customerQueryBlock: boolean = true;
  customerDetailBlock: boolean = false;
  smsNotifications: boolean = false;
  emailNotifications: boolean = false;
  chargeNotificaton: boolean = false;

  constructor(private userService: UserManagmentService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.customerArr.count
    };
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  // }

  ngOnInit() {
    this.recordsPerPage = 5;

    this.userService.getUserList()
      .subscribe(resp => {
        this.customerArr = resp

        this.customerArr.push({
          "userId": "5201",
          "userName": "adminuser55",
          "role": "admin",
          "status": "active"
        });
        console.log("resp :", this.customerArr);
      })
  }

  smsNotificationSwitch(){
    if((<HTMLInputElement> document.getElementById("checked")).checked===true){
      this.smsNotifications=true;
    }
    else{
      this.smsNotifications=false;
    }
  }
  emailNotificationSwitch(){ 
    if((<HTMLInputElement> document.getElementById("email")).checked===true){
      this.emailNotifications=true;
    }
    else{
      this.emailNotifications=false;
    }

  }
  chargeNotificationSwitch(){
    if((<HTMLInputElement> document.getElementById("charge")).checked===true){
      this.chargeNotificaton = true;
    }
    else{
      this.chargeNotificaton = false;
    }
  }

  isCollapsed: boolean = false;
  collapsed(event: any): void {
    // console.log(event);
  }
  expanded(event: any): void {
    // console.log(event);
  }

  newCustomer() {
    this.customerDetailBlock = true;
    this.customerQueryBlock = false;
  }

  modifyCustomer() {
    this.customerDetailBlock = true;
    this.customerQueryBlock = false;
  }

  cancelCustomer() {
    this.customerDetailBlock = false;
    this.customerQueryBlock = true;
    this.ngOnInit();
  }

  searchQuery(userid, username, userstatus) {
    console.log("username :", username.value, "userid :", userid.value, "userStatus :", userstatus.value);
    var regUserId = new RegExp(userid.value);
    var regUsername = new RegExp(username.value);
    this.querycustList = []
    this.customerArr.forEach(user => {
      // if (user.userName === username.value) {
      if ((userid.value == '' || regUserId.test(user.userId)) &&
        (username.value == '' || regUsername.test(user.userName)) &&
        (userstatus.value == '' || userstatus.value == user.status)) {
        this.querycustList.push(user);
      }
    });
    console.log("querycustList :", this.querycustList);
  }

  resetQuery() {
    (<HTMLInputElement>document.getElementById("userid")).value = '';
    (<HTMLInputElement>document.getElementById("username")).value = '';
    (<HTMLInputElement>document.getElementById("userstatus")).value = '';
  }

  rowSelected(user) {
    console.log("user :", user);
    console.log("userId :", user.userId);
    console.log("userStatus :", user.status);
    var deletebutton = <HTMLInputElement>document.getElementById("btnUserDelete");
    var modifybutton = <HTMLInputElement>document.getElementById("btnUserModify");
    var approvebutton = <HTMLInputElement>document.getElementById("btnUserApprove");
    if (user.status == 'new') {
      deletebutton.disabled = false;
      deletebutton.className = "btn btn-md btn-primary";
      modifybutton.disabled = false;
      modifybutton.className = "btn btn-md btn-primary";
      approvebutton.disabled = true;
      approvebutton.className = "btn btn-md btn-outline-secondary";
    } else if (user.status == 'active' || user.status == 'locked') {
      deletebutton.disabled = true;
      deletebutton.className = "btn btn-md btn-outline-secondary";
      modifybutton.disabled = false;
      modifybutton.className = "btn btn-md btn-primary";
      approvebutton.disabled = true;
      approvebutton.className = "btn btn-md btn-outline-secondary";
    }
    else if (user.status == 'pending approval') {
      deletebutton.disabled = true;
      deletebutton.className = "btn btn-md btn-outline-secondary";
      modifybutton.disabled = true;
      modifybutton.className = "btn btn-md btn-outline-secondary";
      approvebutton.disabled = false;
      approvebutton.className = "btn btn-md btn-primary";
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
