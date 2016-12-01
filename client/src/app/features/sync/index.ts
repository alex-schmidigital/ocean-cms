import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './sync.routing';
import { SyncComponent } from './sync.component';
import { MaterialModule } from '@angular/material';
import { MediaLibraryModule } from '../media-library';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MediaLibraryModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SyncComponent
  ]
})

export class SyncModule {}

