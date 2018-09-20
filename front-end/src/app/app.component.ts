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
  mensajes: Mensaje[] = [];
  user:Usuario = new Usuario;
  display='block';
  
  constructor(
    private _service: RestApiService
  ) { }

  ngOnInit() {
    this.getMessages();
  }
  getMessages() {
    this._service.getMessages()
      .then(mensajes => this.mensajes = mensajes)
      .catch(err => console.log(err));
  }
  createMessage(msg: Mensaje) {
    this._service.createMsg(msg)
      .then(status => {this.getMessages()})
      .catch(err => console.log(err));
  }
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
