import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './lazy.routing';

import { LazyComponent } from './lazy.component';
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
    LazyComponent
  ]
})

export class LazyModule {}

