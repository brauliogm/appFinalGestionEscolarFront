import { Component } from '@angular/core';
import { Login } from '../modelos/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();

  autenticar(){
    console.log(this.login);
    
  }
}
