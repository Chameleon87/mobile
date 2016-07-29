import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"

import { Home } from "./home/home";
import { CustomerProfile } from "./customers/profile/customer-profile";
import { CustomerRegistration } from "./customers/registration/customer-registration";

export const routes: RouterConfig = [
  { path: "", component: Home },
  { path: "customerprofile", component: CustomerProfile },
  { path: "customerregistration", component: CustomerRegistration }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];
