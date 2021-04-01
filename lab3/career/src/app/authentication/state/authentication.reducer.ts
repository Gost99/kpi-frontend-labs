import { AuthActions, AuthActionTypes } from "./authentication.actions";

export interface State {
    isLoggedIn: boolean;
  }
  
  export const initialState: State = {
    isLoggedIn: false
  };

export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
      case AuthActionTypes.Login:
        return { ...state, isLoggedIn: true };
  
      case AuthActionTypes.Logout:
        return initialState; 
  
      default:
        return state;
    }
}

export const selectIsLoggedIn = (state: State) => state.isLoggedIn;
