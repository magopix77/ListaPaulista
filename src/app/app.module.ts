import { NovosDadosComponent } from './novosdados/novosdados.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RelatorioComponent } from './relatorio/relatorio.component';


@NgModule({
  declarations: [
    AppComponent,
    NovosDadosComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
