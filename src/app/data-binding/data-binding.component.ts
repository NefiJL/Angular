import { Component,  OnInit,   } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nome: String = "Fulano"
  valorDigitado: string = ""
  isMouseOver: boolean = false;
  url: String ="https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj"
  esconderTexto: boolean = true;

  getValor() {
  return 1;
  }
  clique(){
  alert('Você digitou:'+ this.valorDigitado);
  }
  onKeyUp(event: KeyboardEvent){
  this.valorDigitado = (<HTMLInputElement> event.target).value;
  }
  onMouseOver(){
  this.isMouseOver = true;
  }
  onMouseOut(){
  this.isMouseOver = false;
  }



constructor() { }
ngOnInit(): void {
}


}


