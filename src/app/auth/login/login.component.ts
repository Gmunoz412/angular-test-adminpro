import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
 
  //usar router para acceder ala ruta

  constructor(private router:Router){

  }


  login(){
    //navegacion al dashboard(/)
    this.router.navigateByUrl('/');
  }
}
