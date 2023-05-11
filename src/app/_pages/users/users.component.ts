import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UsersComponent implements OnInit {
  Isloading = false;
  dataSource: any;
  columnsToDisplay = ['id', 'firstName', 'lastName', 'email', 'age'];
  expandedElement: User | any;

  constructor(private http: HttpClient) {}
  jsonData: any = [];
  ngOnInit() {
    this.http.get('assets/db.json').subscribe((data) => {
      this.jsonData.users = data;
      this.dataSource = this.jsonData.users.users;
      console.log(this.dataSource);
    });
  }
  // ELEMENT_DATA: User[] = [];

  saveData(el:any) {
    this.Isloading = true;
  }
}

export interface User {
  id: Number;
  firstName: string;
  lastName: number;
  email: number;
  age: string;
}
