import { Component } from '@angular/core';

@Component({
  templateUrl: 'messagelogs.component.html'
})
export class MessageLogs {

  config: any;
  recordsPerPage: any;
  messagelogArr: any = [];

  constructor() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.messagelogArr.count
    };
  }

}
