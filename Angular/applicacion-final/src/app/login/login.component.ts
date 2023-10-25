import { Component } from '@angular/core';
import { Login } from '../modelos/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();

  constructor(private http: HttpClient){}

  autenticar(){
    let usuario = this.login.username + ":" + this.login.password;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic' + btoa(usuario)
      })
    }
    this.http.get("/api/v1/login", httpOptions).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
