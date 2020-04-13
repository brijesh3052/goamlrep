import { Component } from '@angular/core';
import { UserManagmentService } from '../../services/usermanagment.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: 'user-roles.component.html'
})
export class UserRolesComponent {

  config: any;
  recordsPerPage: any;
  roleArr: any = [];
  queryRoleList: any = [];
  listScreenRole: any = [];
  listScreenName: any = [];
  userRoleQueryBlock: boolean = true;
  userRoleDetailBlock: boolean = false;

  constructor(private roleService: UserManagmentService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.roleArr.count
    };
  }

  ngOnInit() {
    this.recordsPerPage = 5;

    this.roleService.getRoleList()
      .subscribe(resp => {
        this.roleArr = resp;
        console.log("resp :", this.roleArr);
      })

    this.listScreenName.push({ "name": "User" }, { "name": "Role" }, { "name": "Customer" });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  isCollapsed: boolean = false;
  collapsed(event: any): void {
    // console.log(event);
  }
  expanded(event: any): void {
    // console.log(event);
  }

  searchQuery(rolename, rolegroup, rolestatus) {
    console.log("rolename :", rolename.value, "rolegroup :", rolegroup.value);
    var regRoleName = new RegExp(rolename.value);
    var regRoleGroup = new RegExp(rolegroup.value);
    this.queryRoleList = []
    this.roleArr.forEach(role => {
      if ((rolename.value == '' || regRoleName.test(role.roleName)) &&
        (rolegroup.value == '' || regRoleGroup.test(role.roleGroup)) &&
        (rolestatus.value == '' || rolestatus.value == role.status)) {
        this.queryRoleList.push(role);
      }
    });
    console.log("queryRoleList :", this.queryRoleList);
  }

  resetQuery() {
    (<HTMLInputElement>document.getElementById("userrole.rolename")).value = '';
    (<HTMLInputElement>document.getElementById("userrole.rolegroup")).value = '';
    (<HTMLInputElement>document.getElementById("userrole.rolestatus")).value = '';
  }


  rowSelected(role) {
    console.log("role :", role);
    console.log("rolename :", role.roleName);
    console.log("roleStatus :", role.status);
    var deletebutton = <HTMLInputElement>document.getElementById("btnRoleDelete");
    var modifybutton = <HTMLInputElement>document.getElementById("btnRoleModify");
    var approvebutton = <HTMLInputElement>document.getElementById("btnRoleApprove");
    if (role.status == 'new') {
      deletebutton.disabled = false;
      deletebutton.className = "btn btn-md btn-primary";
      modifybutton.disabled = false;
      modifybutton.className = "btn btn-md btn-primary";
      approvebutton.disabled = true;
      approvebutton.className = "btn btn-md btn-outline-secondary";
    } else if (role.status == 'active' || role.status == 'locked') {
      deletebutton.disabled = true;
      deletebutton.className = "btn btn-md btn-outline-secondary";
      modifybutton.disabled = false;
      modifybutton.className = "btn btn-md btn-primary";
      approvebutton.disabled = true;
      approvebutton.className = "btn btn-md btn-outline-secondary";
    }
    else if (role.status == 'pending approval') {
      deletebutton.disabled = true;
      deletebutton.className = "btn btn-md btn-outline-secondary";
      modifybutton.disabled = true;
      modifybutton.className = "btn btn-md btn-outline-secondary";
      approvebutton.disabled = false;
      approvebutton.className = "btn btn-md btn-primary";
    }
  }

  newRole() {
    this.userRoleDetailBlock = true;
    this.userRoleQueryBlock = false;
    (<HTMLInputElement> document.getElementById("userroledet.userstatus")).disabled = true;
  }

  addScreenRole() {
    this.listScreenRole.push({ "screenName": "", "newAction": "", "modifyAction": "", "approveAction": "", });
  };

  deleteScreenRole(screenid) {
    const index: number = this.listScreenRole.indexOf(screenid);
    if (index !== -1) {
      this.listScreenRole.splice(index, 1);
    }
  }

}
