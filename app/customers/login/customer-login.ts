import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/users/user";
import { APIService } from "../../services/api-service";
var appSettings = require("application-settings");

@Component({
  moduleId: module.id,
  selector: "login-form",
  providers: [ APIService ],
  templateUrl: "./customer-login.html",
  styleUrls: ["../customers.css"]
})

export class LoginComponent {

  constructor (
    private _api: APIService,
    private _router: Router
  ) { }

  private user = new User()

  Login() {
    this._api.login(this.user).subscribe(
    res => {
      console.log(res);
      appSettings.setString('token', res.token);
      appSettings.setString('user_type', res.user_type);
      alert("You have successfully logged in!");
      if (res.user_type == 'customer') {
        this._router.navigate(['/customerprofile']);
      }
      else {
        this._router.navigate(['/courierprofile']);
      }
  },
    error => {
      //alert(error.text);
      console.log(error);
    }
  )};

}
