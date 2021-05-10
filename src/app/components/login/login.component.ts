import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/models/loginData.model';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginData = {
    email: '',
    password: ''
  };

  constructor(private usuarioService: RegisterUserService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginUser);
    this.usuarioService.login(this.loginUser);
  }

}
