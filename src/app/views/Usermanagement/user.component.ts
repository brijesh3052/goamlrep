import { Component } from '@angular/core';
import { UserManagmentService } from '../../services/usermanagment.service';

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent {
  config: any;
  recordsPerPage: any;
  userArr: any = [];
  queryuserList: any = [];
  userQueryBlock: boolean = true;
  userDetailBlock: boolean = false;

  constructor(private userService: UserManagmentService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.userArr.count
    };
  }

  ngOnInit() {
    this.recordsPerPage = 5;

    this.userService.getUserList()
      .subscribe(resp => {
        this.userArr = resp

        this.userArr.push({
          "userId": "5201",
          "userName": "adminuser55",
          "role": "admin",
          "status": "active"
        });
        console.log("resp :", this.userArr);
      })
  }

  isCollapsed: boolean = false;
  collapsed(event: any): void {
    // console.log(event);
  }
  expanded(event: any): void {
    // console.log(event);
  }

  newUser() {
    this.userDetailBlock = true;
    this.userQueryBlock = false;
  }

  modifyUser() {
    this.userDetailBlock = true;
    this.userQueryBlock = false;
  }

  canceluser() {
    this.userDetailBlock = false;
    this.userQueryBlock = true;
    this.ngOnInit();
  }

  searchQuery(userid, username, userstatus) {
    console.log("username :", username.value, "userid :", userid.value, "userStatus :", userstatus.value);
    var regUserId = new RegExp(userid.value);
    var regUsername = new RegExp(username.value);
    this.queryuserList = []
    this.userArr.forEach(user => {
      // if (user.userName === username.value) {
      if ((userid.value == '' || regUserId.test(user.userId)) &&
        (username.value == '' || regUsername.test(user.userName)) &&
        (userstatus.value == '' || userstatus.value == user.status)) {
        this.queryuserList.push(user);
      }
    });
    console.log("queryuserList :", this.queryuserList);
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

};
