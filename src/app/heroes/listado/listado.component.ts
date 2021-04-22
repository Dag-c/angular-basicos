import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html' 
})
export class ListadoComponent {

  heroes: string[]=['Hulk','Hockeye','black phanter','black widow','she hulk'];
  heroeBorrado:string='';
  borrarHeroe():void{
    this.heroeBorrado=this.heroes.shift() as string;
  }

}
