import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { SkeletonDirective } from './directives/skeleton.directive';



@NgModule({
  declarations: [
    CardInfoComponent,
    SkeletonLoaderComponent,
    SkeletonDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ], exports: [
    CardInfoComponent,
    SkeletonDirective,
    SkeletonLoaderComponent
  ]
})
export class SharedModule { }
