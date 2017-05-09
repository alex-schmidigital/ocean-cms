import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Page } from '../../page/page.model';
import { PageActions } from '../../page/page.actions';
import { quill, BACKEND_BASE_URL } from '../../services/constants';

@Component({
  selector: 'my-sync',
  templateUrl: './sync.component.html',
  styleUrls: [
    './sync.style.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class SyncComponent implements AfterViewInit {

  editorElement: HTMLElement;

  postImage: string = '';

  @ViewChild('titleInput') titleInput: any;

  private quill: any;

  constructor(
    protected el: ElementRef,
    private pageActions: PageActions,
    private store: Store<AppState>
    ) {}

  ngAfterViewInit() {
    this.editorElement = this.el.nativeElement.querySelector('#editor')

    this.quill = new quill(this.editorElement, {
      theme: 'snow'
    })
  }

  setPostImage(url) {
    this.postImage = BACKEND_BASE_URL + url;
  }

  createPost() {
    let page: Page = {
      title: this.titleInput.nativeElement.value,
      content: this.editorElement.querySelector('.ql-editor').innerHTML,
      image: this.postImage
    }
    this.store.dispatch(this.pageActions.createPost(page));
  }
}
