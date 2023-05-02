import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {
  private nome:string;
  anoNascimento: number;

  constructor(){
    this.nome = "Fulano ";
    this.anoNascimento = 2005;

  }
  idade ():number{

    return 2023 - this.anoNascimento;
  }
  ngOnInit(): void {
    console.log("nome: "+ this.nome);
    console.log("idade: " + this.idade());
  }

}
