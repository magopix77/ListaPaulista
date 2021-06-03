import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paulistalst',
  templateUrl: './paulistalst.component.html',
  styleUrls: ['./paulistalst.component.scss']
})
export class PaulistalstComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  registrar(){
    console.log("Registrar os novos dados");    
  }

}
