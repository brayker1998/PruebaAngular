import { Component } from '@angular/core';

@Component({

    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
    
        <h3>La base es: <strong> {{ base }} </strong></h3>
    
        <button (click)="operar( base ); "> + {{ base }} </button>
    
    
    
        <span> {{ numero}} </span>
    
        <button (click)=" operar( - base ); "> -{{ base }} </button>
`
})

export class ContadorComponent {

    titulo: string = 'Mi Primera Pagina';
    base: number = 5;
    numero: number = 10;
  
    operar( valor: number){
      this.numero +=valor;
    }

}