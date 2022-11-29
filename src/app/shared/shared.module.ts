import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CardInfoComponent } from './components/card-info/card-info.component';



@NgModule({
  declarations: [
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ], exports: [
    CardInfoComponent
  ]
})
export class SharedModule { }
