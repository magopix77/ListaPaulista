import { EncomendaModel } from './../novosdados/model/encomenda';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  animations: []
})
export class RelatorioComponent implements OnInit {

  @Input() mostraosdados: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
