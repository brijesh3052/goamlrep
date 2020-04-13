import { Component } from '@angular/core';
import { UserManagmentService } from '../../services/usermanagment.service';

@Component({
  templateUrl: 'msg-config-email.component.html'
})
export class MessageConfigurationEmail {

  config: any;
  recordsPerPage: any;
  msgconfigList: any = [{ "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  { "msgType": "CQ03", "msgName": "Cheque Withdrawal", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  { "msgType": "CD01", "msgName": "Cash Withdrawal", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  { "msgType": "LOD1", "msgName": "Loan Overdue", "category": "Scheduled", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  { "msgType": "DOR1", "msgName": "Dormancy", "category": "Scheduled", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" }
  ];
  queryMsgList: any = [];
  userQueryBlock: boolean = true;
  userDetailBlock: boolean = false;

  constructor(private userService: UserManagmentService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.msgconfigList.count
    };
  }

  ngOnInit() {
    this.recordsPerPage = 5;

  //   this.msgconfigList = [{ "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" },
  //   { "msgType": "FT01", "msgName": "Fund Transfer", "category": "Instant", "smsreqd": "Yes", "emailreqd": "Yes", "status": "active" }];
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

  searchQuery(msgtype, category, status) {
    console.log("msgtype :", msgtype.value, "category :", category.value);

    var regmsgtype = new RegExp(msgtype.value);
    this.queryMsgList = []
    this.msgconfigList.forEach(msg => {
      // if (user.userName === username.value) {
      if (
        (msgtype.value == '' || regmsgtype.test(msg.msgType)) &&
        (category.value == '' || category.value == msg.category) &&
        (status.value == '' || status.value == msg.status)) {
        this.queryMsgList.push(msg);
      }
    });
    console.log("queryMsgList :", this.queryMsgList);
  }

  resetQuery() {
    // (<HTMLInputElement>document.getElementById("userid")).value = '';
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
