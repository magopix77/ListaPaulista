import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostradadoService {

  private lista_de_entregas:any[];

  constructor() {
    this.lista_de_entregas = [];

  }
  get mostradado(){
    return this.lista_de_entregas;
  }

  inserirnovodado(){
    //this.mostraosdados.push($event);
  }

}
