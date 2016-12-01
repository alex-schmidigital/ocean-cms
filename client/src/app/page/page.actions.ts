/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Page } from './page.model';

@Injectable()

export class PageActions {

  static LOAD_PAGES = '[Page] Load';
  loadAll(): Action {
    return {
      type: PageActions.LOAD_PAGES
    };
  }

  static LOAD_PAGES_SUCCESS = '[Page] Load Success';
  loadPagesSuccess(res: Response): Action {
    return {
      type: PageActions.LOAD_PAGES_SUCCESS,
      payload: res
    };
  }

  static LOAD_PAGES_FAIL = '[Page] Load Fail';
  loadPagesFail(err: Error): Action {
    return {
      type: PageActions.LOAD_PAGES_FAIL,
      payload: err
    };
  }

  static CREATE_POST = '[Page] Create Post';
  createPost(body): Action {
    return {
      type: PageActions.CREATE_POST,
      payload: body
    };
  }

  static CREATE_POST_SUCCESS = '[Page] Create Post Success';
  createPostSuccess(res: Response): Action {
    return {
      type: PageActions.CREATE_POST_SUCCESS,
      payload: res
    };
  }

  static CREATE_POST_FAIL = '[Page] Create Post Fail';
  createPostFail(err: Error): Action {
    return {
      type: PageActions.CREATE_POST_FAIL,
      payload: err
    };
  }

  static DELETE_POST = '[Page] Delete Post';
  deletePost(id: Number): Action {
    return {
      type: PageActions.DELETE_POST,
      payload: {
        id
      }
    };
  }

  static DELETE_POST_SUCCESS = '[Page] Delete Post Success';
  deletePostSuccess(res: Response): Action {
    return {
      type: PageActions.DELETE_POST_SUCCESS,
      payload: res
    };
  }

  static DELETE_POST_FAIL = '[Page] Delete Post Fail';
  deletePostFail(err: Error): Action {
    return {
      type: PageActions.DELETE_POST_FAIL,
      payload: err
    };
  }

  static PATCH_POST = '[Page] Patch Post';
  patchPost(id: Number, body: Page): Action {
    return {
      type: PageActions.PATCH_POST,
      payload: {
        id,
        body
      }
    };
  }

  static PATCH_POST_SUCCESS = '[Page] Patch Post Success';
  patchPostSuccess(res: Response): Action {
    return {
      type: PageActions.PATCH_POST_SUCCESS,
      payload: res
    };
  }

  static PATCH_POST_FAIL = '[Page] Patch Post Fail';
  patchPostFail(err: Error): Action {
    return {
      type: PageActions.PATCH_POST_FAIL,
      payload: err
    };
  }
}
