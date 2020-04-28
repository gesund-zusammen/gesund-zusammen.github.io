import { Action, ActionTypes } from "./actions";

export interface IAppState {
  country: string | null;
}

export default function(state: IAppState = { country: null }, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
}
