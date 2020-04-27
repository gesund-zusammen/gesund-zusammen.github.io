export enum ActionTypes {
  SET_COUNTRY = "SET_COUNTRY",
}

export interface IBaseAction {
  type: ActionTypes;
  payload?: unknown;
}

export interface ISetCountryAction extends IBaseAction {
  type: ActionTypes.SET_COUNTRY;
  payload: string | null;
}

export type Action = ISetCountryAction;

function setCountry(country: string | null): ISetCountryAction {
  return {
    type: ActionTypes.SET_COUNTRY,
    payload: country,
  };
}

export default {
  setCountry,
};
