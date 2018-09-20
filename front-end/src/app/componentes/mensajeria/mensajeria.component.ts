import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from "../../modelo/mensaje";
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent{
  msg = new Mensaje()
  @Input() mensajes:Mensaje[]
  @Input() user: Usuario
  @Output() createMessageEvent = new EventEmitter();
  constructor() { }

  newMessage() {
    if (this.msg.mensaje!=""){
      var msg = this.msg.mensaje
      this.createMessageEvent.emit(new Mensaje(this.user.username, msg));
      this.msg.mensaje="";
    }
  }

  valida(msg:Mensaje){
    if (msg.username == this.user.username) return true;
    else return false;
  }
}
