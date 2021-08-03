import { createAction, props } from '@ngrx/store';

export type FilterValids = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{filter: FilterValids}>()
);
