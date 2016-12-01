import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { BACKEND_BASE_URL } from '../../services/constants';
import { AppState } from '../../reducers';
import { MediaActions } from '../../media/media.actions';
import { Media } from '../../media/media.model';

@Component({
  selector: 'media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.style.css']
})

export class MediaLibraryComponent {

  @ViewChild('titleInput') titleInput: HTMLInputElement;

  @Output() selectionChange = new EventEmitter();

  @Input() embedded: boolean = false;

  media$: Observable<any>;

  editing: boolean[] = [];

  apiUrl: string;
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://0.0.0.0:3000/api/files/upload?access_token=Tit7WBiHNyKsJHBKzIzIKHaekUkojv9A7EDvgNTkx2vDqzCTghcPX54O0R7J3Acw'
  };

  constructor(
    private store: Store<AppState>,
    private mediaActions: MediaActions
  ) {
    this.apiUrl = BACKEND_BASE_URL;
    this.media$ = this.store.select(state => {
      let mediaCount: Number = state.media.media.length;
        for (let i = 0; i < mediaCount; i++) {
          this.editing[i] = false;
        }
      return state.media.media;
    });
  }

  ngOnInit() {
    this.store.dispatch(this.mediaActions.loadMedia());
  }

  getMediaData(mediaItem, index) {
    let body: Media = {
      title: this.titleInput.value,
      url: mediaItem['url']
    }
    return body;
  }

  deleteMedia(mediaItem: Media) {
    this.store.dispatch(this.mediaActions.deleteMedia(mediaItem));
  }

  select(mediaItem: Media) {
    this.selectionChange.emit({
      value: mediaItem
    })
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      this.store.dispatch(this.mediaActions.loadMedia());
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}
