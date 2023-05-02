import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit{
  cursos: string[] = ["Angular","React","Vue"];

  mostrarCursos : boolean = false
  meuFavorito: boolean = false;
constructor() { }
ngOnInit(): void {

}
onMostrarCursos() {
  this.mostrarCursos = !this.mostrarCursos;
  }
  
  onClick() {
    this.meuFavorito = ! this.meuFavorito;
  }


}

