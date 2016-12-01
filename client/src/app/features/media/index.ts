import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './media.routing';

import { MediaComponent } from './media.component';
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
    MediaComponent
  ]
})

export class MediaModule {}

