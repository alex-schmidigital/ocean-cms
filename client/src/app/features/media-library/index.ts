import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLibraryComponent } from './media-library.component';
import { MaterialModule } from '@angular/material';
import { Ng2UploaderModule } from 'ng2-uploader';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2UploaderModule
  ],
  declarations: [
    MediaLibraryComponent
  ],
  exports: [
    MediaLibraryComponent
  ]
})

export class MediaLibraryModule {}

