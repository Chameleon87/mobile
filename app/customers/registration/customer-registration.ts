import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../models/users/user";
import { APIService } from "../../services/api-service";

@Component({
  moduleId: module.id,
  selector: 'customer-reg',
  templateUrl: "./customer-registration.html",
  providers: [ APIService ],
  styleUrls: ['../customers.css']
})

export class CustomerRegistration {

  constructor(
    private api: APIService,
    private _router: Router
  ) { }

  private user = new User()

  Register() {
    this.user.user_type = 'customer';
    this.api.register(this.user).subscribe(
      res => {
        if (res = 201) {
          alert("Thank you for registering!");
          this._router.navigate(['customerprofile']);
        }
        else {
          alert("Sorry, it looks like that email already exists.");
        }
      }
    )
  }
}
