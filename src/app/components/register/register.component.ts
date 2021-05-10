import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    fullName: '',
    companyName: '',
    idCompany: null,
    address: '',
    state: '',
    city: '',
    zip: '',
    telephone: '',
    email: '',
    password: ''
  };

  constructor(private usuarioService: RegisterUserService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.newUser);
    this.usuarioService.create(this.newUser);
  }

}
