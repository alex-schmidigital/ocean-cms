/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { PageActions } from './page.actions';
import { Page } from './page.model';

export interface PageState {
  pages: Array<Page>;
  loading: boolean;
  loaded: boolean;
};

const initialState: PageState = {
  pages: [],
  loading: false,
  loaded: true,
};

export function pageReducer(state = initialState, action: Action): PageState {
  switch (action.type) {
    
    case PageActions.LOAD_PAGES_SUCCESS: {
      return Object.assign({}, state, {
        pages: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

