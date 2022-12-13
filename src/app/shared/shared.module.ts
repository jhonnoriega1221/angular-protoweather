import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { SkeletonDirective } from './directives/skeleton.directive';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CardInfoComponent,
    SkeletonLoaderComponent,
    SkeletonDirective,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDialogModule
  ], exports: [
    CardInfoComponent,
    SkeletonDirective,
    SkeletonLoaderComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
