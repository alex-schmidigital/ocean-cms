/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { MediaActions } from './media.actions';
import { Media } from './media.model';

export interface MediaState {
  media: Array<Media>;
  loading: boolean;
  loaded: boolean;
};

const initialState: MediaState = {
  media: [],
  loading: false,
  loaded: true,
};

export function mediaReducer(state = initialState, action: Action): MediaState {
  switch (action.type) {

    case MediaActions.LOAD_MEDIA_SUCCESS: {
      return Object.assign({}, state, {
        media: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

