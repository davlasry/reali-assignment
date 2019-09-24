import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
// import { featureAdapter } from './state';

export interface State {
  currentStep: number;
  appleCounter: number;
}

export const initialState: State = {
  currentStep: 0,
  appleCounter: 0
};

const featureReducer = createReducer(
  initialState,
  on(featureActions.Load, state => ({
    ...state,
    isLoading: true,
    error: null
  }))
  //   on(featureActions.loadSuccess, (state, { user }) =>
  //     featureAdapter.addAll(user, {
  //       ...state,
  //       isLoading: false,
  //       error: null
  //     })
  //   ),
  //   on(featureActions.loadFailure, (state, { error }) => ({
  //     ...state,
  //     isLoading: false,
  //     error
  //   })),
  //   on(featureActions.select, (state, { id }) => ({
  //     ...state,
  //     selectedUserId: id
  //   })),
  //   on(featureActions.getByUserId, (state, { data }) => ({
  //     ...state,
  //     getByIdUser: data
  //   })),
  //   on(featureActions.deleteAll, state =>
  //     featureAdapter.removeAll({
  //       ...state,
  //       selectedUserId: null,
  //       getByIdUser: null
  //     })
  //   ),
  //   on(featureActions.getById, (state, { Id }) => featureAdapter.map(Id, state)),
  //   on(featureActions.deleteId, (state, { Id }) =>
  //     featureAdapter.removeOne(Id, state)
  //   )
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
