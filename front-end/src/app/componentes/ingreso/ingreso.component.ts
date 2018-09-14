import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  user = new Usuario;
  constructor() { }

  ngOnInit() {
  }
  
  onSubmitLogin(){
    this.loginEvent.emit(this.user);
  }
}