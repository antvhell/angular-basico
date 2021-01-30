import { NgModule } from '@angular/core';

// Modulos
import { CommonModule } from '@angular/common';

// Componentes
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  // Componentes
  declarations: [
    ContadorComponent
  ],

  exports:[
    ContadorComponent
  ],

  imports:[
    CommonModule
  ]

})


export class ContadorModule {}
