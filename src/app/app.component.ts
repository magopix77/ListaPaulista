import { EncomendaModel } from './novosdados/model/encomenda';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SALA 103 - SLT';
  //item:number;
  //quantidade:number;
  //destino:string;
  //sala:number;
  //remete:string;
  //data:string;
  //hora:string;
  //recebe:string;

mostraosdados:any[]=[];


  registrando($event){
    console.log($event);
    //this.item = $event.item;
    //this.quantidade = $event.quantidade;
    //this.destino = $event.destino;
    //this.sala = $event.sala;
    //this.remete = $event.remete;
    //this.data = $event.data;
    //this.hora = $event.hora;
    //this.recebe = $event.recebe;

  this.mostraosdados.push($event);



  }


}
