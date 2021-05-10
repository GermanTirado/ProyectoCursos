import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginData } from '../models/loginData.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  seguridadCambio = new Subject<boolean>();
  private usuario: User;

  constructor(private  router: Router) {

  }

  create(usr: User) {
    this.usuario = {
      fullName: usr.fullName,
      companyName: usr.companyName,
      idCompany: usr.idCompany,
      address: usr.address,
      state: usr.state,
      city: usr.city,
      zip: usr.zip,
      telephone: usr.telephone,
      email: usr.email,
      password: usr.password
    }
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  login(loginData: LoginData){
    this.usuario = {
      email: loginData.email,
      password: loginData.password,
      fullName: '',
      companyName: '',
      idCompany: '',
      address: '',
      state: '',
      city: '',
      zip: '',
      telephone: ''
    }
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  logOut() {
    this.usuario = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['/login']);
  }

  userOnline() {
    return {...this.usuario};
  }

  onSesion() {
    return this.usuario != null;
  }

}
