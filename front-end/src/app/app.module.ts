import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
// servicio
import { RestApiService } from './servicio/rest-api.service'

import { AppComponent } from './app.component';
import { MensajeriaComponent } from './componentes/mensajeria/mensajeria.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeriaComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule 
  ],
  providers: [
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
