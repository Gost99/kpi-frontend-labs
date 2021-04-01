import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import * as fromAuth from '../authentication/state/authentication.reducer';
  
  export interface State {
    auth: fromAuth.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer
  };

  export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
  export const selectIsLoggedIn = createSelector(
    selectAuthState,
    fromAuth.selectIsLoggedIn
  );
  