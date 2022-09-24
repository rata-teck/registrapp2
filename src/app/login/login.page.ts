import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public usuarios! : Array<Usuario>;

  public usuario : Usuario = {
    tipo : '',
    usuario : '',
    clave : ''
  }

}
