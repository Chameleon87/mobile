import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';


@Injectable()
export class APIService {
  // Change all endpoints in production
    private _usersAPI      = 'http://10.0.2.2:8000/api/v1/auth/register/';
    private _userLoginAPI  = 'http://10.0.2.2:8000/api/v1/auth/login/';
    private _customersAPI  = 'http://10.0.2.2:8000/api/v1/customers/';

    constructor(public dataService: DataService) { }

    // Users
    register(user) {
      return this.dataService.post(this._usersAPI, user);
    }
    login(user) {
      return this.dataService.post(this._userLoginAPI, user);
    }
    addCustomerInfo(customer) {
      return this.dataService.post(this._customersAPI, customer);
    }
}
