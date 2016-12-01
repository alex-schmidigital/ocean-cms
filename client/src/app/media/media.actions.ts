/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Media } from './media.model';

@Injectable()

export class MediaActions {

  static LOAD_MEDIA = '[Media] Load';
  loadMedia(): Action {
    return {
      type: MediaActions.LOAD_MEDIA
    };
  }

  static LOAD_MEDIA_SUCCESS = '[Media] Load Success';
  loadMediaSuccess(res: Response): Action {
    return {
      type: MediaActions.LOAD_MEDIA_SUCCESS,
      payload: res
    };
  }

  static LOAD_MEDIA_FAIL = '[Media] Load Fail';
  loadMediaFail(err: Error): Action {
    return {
      type: MediaActions.LOAD_MEDIA_FAIL,
      payload: err
    };
  }

  static DELETE_MEDIA = '[Media] Delete';
  deleteMedia(media: Media): Action {
    return {
      type: MediaActions.DELETE_MEDIA,
      payload: media
    };
  }

  static DELETE_MEDIA_SUCCESS = '[Media] Delete Success';
  deleteMediaSuccess(res: Response): Action {
    return {
      type: MediaActions.DELETE_MEDIA_SUCCESS,
      payload: res
    };
  }

  static DELETE_MEDIA_FAIL = '[Media] Delete Fail';
  deleteMediaFail(err: Error): Action {
    return {
      type: MediaActions.DELETE_MEDIA_FAIL,
      payload: err
    };
  }
}
