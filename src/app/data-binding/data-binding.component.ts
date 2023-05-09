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
  url: String ="https://w0.peakpx.com/wallpaper/221/949/HD-wallpaper-bob-esponja-mafioso-bob-esponja-gangster-mafioso-meme.jpg"
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


