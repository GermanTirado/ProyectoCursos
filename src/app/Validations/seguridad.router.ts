import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { RegisterUserService } from "../services/register-user.service";

@Injectable()

export class SeguridadRouter implements CanActivate {

  constructor(private registerUserService: RegisterUserService, private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.registerUserService.onSesion()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
