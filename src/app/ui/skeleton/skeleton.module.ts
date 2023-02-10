import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwSkeletonDirective } from './directives/pw-skeleton.directive';
import { SkeletonComponent } from './components/skeleton/skeleton.component';



@NgModule({
  declarations: [
  
    PwSkeletonDirective,
       SkeletonComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PwSkeletonDirective
  ]
})
export class PwSkeletonModule { }
