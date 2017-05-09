import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PageActions } from '../../page/page.actions';
import { quill, BACKEND_BASE_URL } from '../../services/constants';
import { Page } from '../../page/page.model';

@Component({
  selector: 'my-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.style.css'],
  encapsulation: ViewEncapsulation.None
})

export class LazyComponent {

  pages$: Observable<any>;

  editing: boolean[] = [];

  editorElement: HTMLElement;

  mediaLibraryVisible: boolean = false;

  @ViewChild('titleInput') titleInput: HTMLInputElement;

  private quill: any;

  constructor(
    private pageActions: PageActions,
    private store: Store<AppState>,
    private el: ElementRef
    ) {
      this.store.dispatch(this.pageActions.loadAll());
      this.pages$ = this.store.select(state => {
        let pageCount: Number = state.page.pages.length;
        for (let i = 0; i < pageCount; i++) {
          this.editing[i] = false;
        }
        return state.page.pages;
      });
    }

  edit(page, index) {
    this.editing[index] = !this.editing[index];
    if (this.editing[index] === true) {
      this.quill = new quill(this.getCurrentEditorElement(index), {
        theme: 'bubble'
      })
    } else {
      this.removeQuillEditor(index);
      this.patchPost(page, index);
    }
  }

  getCurrentEditorElement(index) {
    return this.el.nativeElement.querySelector('#content-area-' + index);
  }

  removeQuillEditor(index) {
    let editorContent = this.getCurrentEditorElement(index).querySelector('.ql-editor').innerHTML;
    this.getCurrentEditorElement(index).querySelector('.ql-editor').remove();
    this.getCurrentEditorElement(index).innerHTML = editorContent;
  }

  getPostData(index) {
    let image: HTMLImageElement = this.el.nativeElement.querySelector('#post-image-' + index);
    let body: Page = {
      content: this.getCurrentEditorElement(index).innerHTML,
      title: this.titleInput.value,
      image: image.src
    }
    return body;
  }

  patchPost(page, index) {
    this.mediaLibraryVisible = false;
    let postData = this.getPostData(index);
    this.pages$.first().subscribe(pages => {
      if (
          pages[index].content !== postData.content
        ||pages[index].title !== postData.title
        ||pages[index].image !==postData.image
        ) {
          this.store.dispatch(this.pageActions.patchPost(page.id, postData));
        };
    });
  }

  switchImage(index, url) {
    let image: HTMLImageElement = this.el.nativeElement.querySelector('#post-image-' + index);
    image.src = BACKEND_BASE_URL + url;
  }

  deletePost(page) {
    this.store.dispatch(this.pageActions.deletePost(page.id));
  }

  toggleMediaLibrary() {
    this.mediaLibraryVisible = !this.mediaLibraryVisible;
  }
}
