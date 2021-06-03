import { Time } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { EncomendaModel } from './model/encomenda';


@Component({
  selector: 'app-novosdados',
  templateUrl: './novosdados.component.html',
  styleUrls: ['./novosdados.component.scss']
})

export class NovosDadosComponent {

  @Output() aoInserir = new EventEmitter<any>();

encomenda:EncomendaModel= new EncomendaModel();



  registrar() {
    console.log("Novos dados inseridos");
    //console.log("quantidade", this.quantidade);

    const dados_a_registrar = {
      quantidade: this.encomenda.quantidade,
      item: this.encomenda.item,
      destino: this.encomenda.destino,
      sala: this.encomenda.sala,
      remete: this.encomenda.remete,
      data: this.encomenda.data,
      hora: this.encomenda.hora,
      recebe: this.encomenda.recebe,
    }
    this.aoInserir.emit(dados_a_registrar)
    this.limparCampos();
  }


  limparCampos() {
    this.encomenda=new EncomendaModel();
  }

}

