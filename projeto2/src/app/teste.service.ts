import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  nomes: String[]

  constructor(){
    this.nomes = ["fulano", "ciclano", "beltrano"];
  }
  getNomes():String[]{
    return this.nomes;
  }


}
