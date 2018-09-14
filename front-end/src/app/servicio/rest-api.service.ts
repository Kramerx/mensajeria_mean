import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../modelo/usuario';
import { map } from 'rxjs/operators';
import { Mensaje } from '../modelo/mensaje';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(
    private _http:Http 
  ) { }

  createUser(user: Usuario) {
    return this._http.post('/usuarios', user).pipe(
      map(data => data.json())).toPromise()
  }

  createMsg(msg: Mensaje) {
    return this._http.post('/mensajes', msg).pipe(
      map(data => data.json())).toPromise()
  }

  getMessages() {
    return this._http.get('/mensajes').pipe(
      map(data => data.json())).toPromise()
  }

  getUsers() {
    return this._http.get('/usuarios').pipe(
      map(data => data.json())).toPromise()
  }
}