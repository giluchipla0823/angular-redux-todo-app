import { createReducer, on, props } from '@ngrx/store';
import { setFilter } from './filter.action';

export const initialState = 'all';

const _filterReducer = createReducer(initialState,
  on( setFilter , (state, { filter }) => filter ),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}