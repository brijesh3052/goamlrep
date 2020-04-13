import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {
  constructor(private http: HttpClient) { }

  userList = 'https://my-json-server.typicode.com/brijesh3052/buzzuser/userSummary';
  roleList = 'https://my-json-server.typicode.com/brijesh3052/buzzuser/roleSummary';

  getUserList() {
    return this.http.get(this.userList);
  }

  getRoleList() {
    return this.http.get(this.roleList);
  }

}