import { Component, OnInit  } from '@angular/core';
import { Usuario } from "./modelo/usuario";
import { Mensaje } from "./modelo/mensaje";
import { RestApiService } from "./servicio/rest-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mensajes: Mensaje[] = [
    // new Mensaje(0, "luis", "hola"),
    // new Mensaje(1, "pedro", "como estas?")
  ];
  user:Usuario = new Usuario;
  display='block';
  constructor(
    private _service: RestApiService
  ) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    // return this.mensajes;
    this._service.getMessages()
      .then(mensajes => this.mensajes = mensajes)
      .catch(err => console.log(err));
  }

  createMessage(msg: Mensaje) {
    // this.mensajes.push(msg)
    this._service.createMsg(msg)
      .then(status => {this.getMessages()})
      .catch(err => console.log(err));
  }
//agregar validacion por si ya existe
  validate(user:Usuario){
    if(user.username!=""){
      this.user.username=user.username;
      this._service.createUser(user)
      this.closeModalDialog()
    }else{
      this.openModalDialog()
    }
  }

  openModalDialog() {
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }
}
